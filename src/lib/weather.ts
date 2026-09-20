import { SITE } from './site';

/**
 * Weather snapshot for the bridge area.
 *
 * Data is retrieved on the server and cached, so the page stays fast and the
 * upstream service is only contacted at most once per revalidation window.
 */

export type WeatherCategory =
  | 'clear'
  | 'mainlyClear'
  | 'partlyCloudy'
  | 'overcast'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'snow'
  | 'thunderstorm'
  | 'unknown';

export type CurrentWeather = {
  temperature: number | null;
  apparentTemperature: number | null;
  humidity: number | null;
  windSpeed: number | null;
  windGusts: number | null;
  precipitation: number | null;
  precipitationProbability: number | null;
  visibility: number | null;
  isDay: boolean;
  code: number | null;
};

export type DailyForecast = {
  date: string;
  code: number | null;
  tempMax: number | null;
  tempMin: number | null;
  precipitation: number | null;
  precipitationProbability: number | null;
  uvIndexMax: number | null;
  windSpeedMax: number | null;
  windGustsMax: number | null;
};

export type WeatherSnapshot = {
  current: CurrentWeather;
  daily: DailyForecast[];
  updatedAt: string | null;
};

/**
 * Advice is grouped so the page can show a short, actionable block per group
 * and hide anything that does not apply to the current conditions.
 */
export type WeatherAdviceGroups = {
  risk: string[];
  dress: string[];
  plan: string[];
  gear: string[];
};

/** Cache window for the server-side weather request (seconds). */
export const WEATHER_REVALIDATE_SECONDS = 1800;

const ENDPOINT = 'https://api.open-meteo.com/v1/forecast';

/** Upper bound (exclusive, km/h) of each Beaufort level, index = level - 1. */
const BEAUFORT_BOUNDS = [1, 5, 11, 19, 28, 38, 49, 61, 74, 88, 102, 117];

function num(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

/** Returns the first usable value, falling back to 0 so callers can compare directly. */
function pick(...values: (number | null | undefined)[]): number {
  for (const value of values) {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
  }
  return 0;
}

/**
 * Maps a WMO weather code to a small set of display categories so the text can
 * be translated once per category instead of once per code.
 */
export function categoryFromCode(code: number | null): WeatherCategory {
  if (code === null) return 'unknown';
  if (code === 0) return 'clear';
  if (code === 1) return 'mainlyClear';
  if (code === 2) return 'partlyCloudy';
  if (code === 3) return 'overcast';
  if (code === 45 || code === 48) return 'fog';
  if (code === 51 || code === 53 || code === 55 || code === 56 || code === 57) return 'drizzle';
  if (code === 95 || code === 96 || code === 99) return 'thunderstorm';
  if (
    code === 71 ||
    code === 73 ||
    code === 75 ||
    code === 77 ||
    code === 85 ||
    code === 86
  ) {
    return 'snow';
  }
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
  return 'overcast';
}

/** Beaufort level (0–12) for a wind speed given in km/h. */
export function beaufortLevel(speed: number | null): number | null {
  if (speed === null) return null;
  for (let level = 0; level < BEAUFORT_BOUNDS.length; level += 1) {
    if (speed < BEAUFORT_BOUNDS[level]) return level;
  }
  return 12;
}

/** Plain-language band for the UV index: 0 low … 4 extreme. */
export function uvBand(uv: number | null): number | null {
  if (uv === null) return null;
  if (uv < 3) return 0;
  if (uv <= 5) return 1;
  if (uv <= 7) return 2;
  if (uv <= 10) return 3;
  return 4;
}

/** Plain-language band for relative humidity: 0 dry … 3 muggy. */
export function humidityBand(humidity: number | null): number | null {
  if (humidity === null) return null;
  if (humidity < 35) return 0;
  if (humidity <= 65) return 1;
  if (humidity <= 80) return 2;
  return 3;
}

function buildUrl(): string {
  const params = new URLSearchParams({
    latitude: String(SITE.latitude),
    longitude: String(SITE.longitude),
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_gusts_10m,is_day',
    hourly: 'precipitation_probability,visibility',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,uv_index_max,wind_speed_10m_max,wind_gusts_10m_max',
    timezone: SITE.timezone,
    forecast_days: '7',
    wind_speed_unit: 'kmh',
  });
  return `${ENDPOINT}?${params.toString()}`;
}

function findHourlyValue(
  times: string[],
  values: number[],
  currentTime: string | null,
): number | null {
  if (!times.length || !values.length || !currentTime) return null;
  const index = times.indexOf(`${currentTime.slice(0, 13)}:00`);
  if (index >= 0) return num(values[index]);
  return null;
}

/**
 * Fetches the current conditions and the multi-day forecast.
 * Returns `null` when the data cannot be retrieved so the page can degrade
 * gracefully instead of failing to render.
 */
export async function getWeather(): Promise<WeatherSnapshot | null> {
  try {
    const response = await fetch(buildUrl(), {
      next: { revalidate: WEATHER_REVALIDATE_SECONDS },
      headers: { accept: 'application/json' },
    });

    if (!response.ok) return null;

    const raw = (await response.json()) as any;
    const currentRaw = raw?.current ?? {};
    const dailyRaw = raw?.daily ?? {};
    const hourlyRaw = raw?.hourly ?? {};

    const hourlyProbability: number[] = Array.isArray(hourlyRaw?.precipitation_probability)
      ? hourlyRaw.precipitation_probability
      : [];
    const currentProbability =
      num(dailyRaw?.precipitation_probability_max?.[0]) ??
      (hourlyProbability.length ? num(hourlyProbability[0]) : null);

    const current: CurrentWeather = {
      temperature: num(currentRaw.temperature_2m),
      apparentTemperature: num(currentRaw.apparent_temperature),
      humidity: num(currentRaw.relative_humidity_2m),
      windSpeed: num(currentRaw.wind_speed_10m),
      windGusts: num(currentRaw.wind_gusts_10m),
      precipitation: num(currentRaw.precipitation),
      precipitationProbability: currentProbability,
      visibility: findHourlyValue(
        Array.isArray(hourlyRaw?.time) ? hourlyRaw.time : [],
        Array.isArray(hourlyRaw?.visibility) ? hourlyRaw.visibility : [],
        typeof currentRaw?.time === 'string' ? currentRaw.time : null,
      ),
      isDay: currentRaw.is_day !== 0,
      code: num(currentRaw.weather_code),
    };

    const dates: string[] = Array.isArray(dailyRaw?.time) ? dailyRaw.time : [];
    const daily: DailyForecast[] = dates.map((date, index) => ({
      date,
      code: num(dailyRaw?.weather_code?.[index]),
      tempMax: num(dailyRaw?.temperature_2m_max?.[index]),
      tempMin: num(dailyRaw?.temperature_2m_min?.[index]),
      precipitation: num(dailyRaw?.precipitation_sum?.[index]),
      precipitationProbability: num(dailyRaw?.precipitation_probability_max?.[index]),
      uvIndexMax: num(dailyRaw?.uv_index_max?.[index]),
      windSpeedMax: num(dailyRaw?.wind_speed_10m_max?.[index]),
      windGustsMax: num(dailyRaw?.wind_gusts_10m_max?.[index]),
    }));

    if (current.temperature === null && daily.length === 0) return null;

    return {
      current,
      daily,
      updatedAt: typeof currentRaw?.time === 'string' ? currentRaw.time : null,
    };
  } catch {
    return null;
  }
}

/** True when rain gear is worth packing for today. */
export function needsRainGear(snapshot: WeatherSnapshot): boolean {
  const { current, daily } = snapshot;
  const probability = pick(current.precipitationProbability, daily[0]?.precipitationProbability, 0);
  const precipitation = pick(daily[0]?.precipitation, current.precipitation, 0);
  return probability >= 60 || precipitation >= 1;
}

/**
 * Turns the forecast into short, practical advice grouped by what a visitor
 * actually decides on: risk, what to wear, how to plan, what to pack.
 * Only the entries that match the current conditions are returned.
 */
export function buildWeatherAdvice(snapshot: WeatherSnapshot): WeatherAdviceGroups {
  const { current, daily } = snapshot;
  const today = daily[0];

  const category = categoryFromCode(current.code ?? today?.code ?? null);

  const probability = pick(current.precipitationProbability, today?.precipitationProbability, 0);
  const rainfall = pick(today?.precipitation, current.precipitation, 0);
  const uv = pick(today?.uvIndexMax, 0);
  const tempMax = pick(today?.tempMax, current.temperature, 0);
  const tempMin = pick(today?.tempMin, current.temperature, 0);
  const tempSwing = tempMax - tempMin;
  const visibility = current.visibility;

  const sustainedWind = pick(current.windSpeed, today?.windSpeedMax, 0);
  const gusts = pick(current.windGusts, today?.windGustsMax, 0);
  const windLevel = beaufortLevel(sustainedWind) ?? 0;
  const windPeak = Math.max(sustainedWind, gusts);

  const isWet = category === 'rain' || category === 'drizzle' || category === 'thunderstorm';
  const isSnow = category === 'snow';
  const isFog = category === 'fog';
  const isThunder = category === 'thunderstorm';
  // Snowfall is reported as water equivalent, so it must not trigger the flood wording.
  const heavyRain = !isSnow && (rainfall >= 15 || (probability >= 80 && rainfall >= 5));
  const strongWind = windLevel >= 7 || windPeak >= 50;

  const risk: string[] = [];
  const dress: string[] = [];
  const plan: string[] = [];
  const gear: string[] = [];

  /* --- Risk alerts: highest priority, only shown when something is up --- */
  if (isThunder) risk.push('thunder');
  if (heavyRain) risk.push('heavyRain');
  if (strongWind) risk.push('windStrong');
  if (tempMax >= 38) risk.push('heat');
  if (tempMin <= 0) risk.push('frost');
  if (isFog || (visibility !== null && visibility < 1000)) risk.push('fog');

  /* --- What to wear: weather first, then temperature, wind and layering --- */
  if (isThunder || heavyRain || (isWet && strongWind)) dress.push('waterproof');
  else if (!isSnow && (isWet || probability >= 60)) dress.push('rainLight');

  if (isSnow) dress.push('snow');
  if (tempMax >= 32) dress.push('hot');
  else if (tempMax <= 10) dress.push('cold');
  else dress.push('comfortable');
  if (windLevel >= 5) dress.push('windproof');
  if (tempSwing > 8) dress.push('layers');
  const dressItems = dress.slice(0, 3);

  /* --- How to plan the visit: weather type first, then modifiers --- */
  if (isThunder) plan.push('thunder');
  else if (isSnow) plan.push('snow');
  else if (isWet || probability >= 60) plan.push('rain');
  else if (isFog) plan.push('fog');
  else if (category === 'clear' || category === 'mainlyClear') plan.push('clear');
  else if (category === 'overcast' || category === 'partlyCloudy') plan.push('overcast');
  else plan.push('normal');

  if (heavyRain) plan.push('gorgeWater');
  if (tempMax >= 32) plan.push('heat');
  if (windLevel >= 5) plan.push('wind');
  const planItems = plan.slice(0, 3);

  /* --- What to pack --- */
  if (!isSnow && (probability >= 60 || isWet || rainfall >= 1)) {
    gear.push(heavyRain || windLevel >= 5 ? 'raincoat' : 'umbrella');
  }
  if (uv >= 5) gear.push('sunscreen');
  if (uv >= 5) gear.push('sunglasses');
  if (uv >= 5 || tempMax >= 30) gear.push('hat');
  if (tempMax >= 28) gear.push('water');
  if (tempSwing > 8 || tempMin <= 10) gear.push('layer');
  if (isWet || isSnow || tempMin <= 2 || rainfall >= 1) gear.push('shoes');
  if (risk.length > 0) gear.push('offlineMap');
  if (gear.length === 0) gear.push('basics');

  return { risk, dress: dressItems, plan: planItems, gear };
}
