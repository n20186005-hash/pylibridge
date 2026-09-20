import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TableOfContents from '@/components/TableOfContents';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import WeatherSection from '@/components/WeatherSection';
import SeasonStrategy from '@/components/SeasonStrategy';
import TransportSection from '@/components/TransportSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import InfoSection from '@/components/InfoSection';
import StorySection from '@/components/StorySection';
import ResponsibilitySection from '@/components/ResponsibilitySection';
import AudienceRoutes from '@/components/AudienceRoutes';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import MapEmbed from '@/components/MapEmbed';
import SourcesSection from '@/components/SourcesSection';
import Footer from '@/components/Footer';

/** Refresh the server-rendered content (including the weather block) twice an hour. */
export const revalidate = 1800;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TableOfContents />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <WeatherSection locale={locale} />
        <SeasonStrategy />
        <TransportSection />
        <FacilitiesSection />
        <InfoSection />
        <StorySection />
        <ResponsibilitySection />
        <AudienceRoutes />
        <RouteSection />
        <PhotoSpotsSection />
        <Gallery />
        <Reviews />
        <FAQSection />
        <MapEmbed />
        <SourcesSection />
      </main>
      <Footer />
    </>
  );
}
