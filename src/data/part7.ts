import type { Topic } from './types';

export const PART7: Topic[] = [
  {
    slug: 'routes/meteora-pyli',
    category: 'routes',
    related: ['getting-there', 'routes/trikala-day-trip', 'nearby-attractions'],
    el: {
      metaTitle: 'Μετέωρα και Γεφύρι Πύλης: Πώς να τα συνδυάσετε',
      h1: 'Μετέωρα και Γεφύρι της Πύλης',
      intro:
        'Τα Μετέωρα απέχουν περίπου 1,5 ώρα από την Πύλη. Εδώ αν αξίζει να προσθέσετε το γεφύρι σε μια μέρα στα Μετέωρα ή να τα συνδυάσετε σε ξεχωριστές μέρες.',
      sections: [
        { id: 'distance', title: 'Απόσταση', body: 'Από τα Μετέωρα (Καλαμπάκα) ως την Πύλη είναι περίπου 90–100 χλμ., με οδήγηση 1,5 ώρας μέσω Τρικάλων.' },
        { id: 'combine', title: 'Πώς να τα βάλετε', body: 'Αν διανυκτερεύετε στα Τρίκαλα, κάντε Μετέωρα το πρωί και γεφύρι το απόγευμα. Αν περνάτε μόνο, προτιμήστε ξεχωριστή μέρα για το καθένα.' },
        { id: 'note', title: 'Σημείωση', body: 'Μην προσπαθήσετε να δείτε και τα δύο βιαστικά · το καθένα αξίζει τον χρόνο του. Ελέγξτε τις ώρες των μονών των Μετεώρων.' },
      ],
      faq: [
        { q: 'Αξίζει την ίδια μέρα;', a: 'Μόνο αν μείνετε κοντά · αλλιώς προτιμήστε δύο μέρες.' },
        { q: 'Πόσο μακριά είναι;', a: 'Περίπου 90–100 χλμ., 1,5 ώρα οδήγησης.' },
        { q: 'Ποιο πρώτο;', a: 'Μετέωρα το πρωί (ώρες μονών), γεφύρι το απόγευμα.' },
        { q: 'Υπάρχει δημόσια συγκοινωνία;', a: 'Οι δύο προορισμοί εξυπηρετούνται από ΚΤΕΛ ξεχωριστά · η σύνδεση μεταξύ τους είναι με αυτοκίνητο/ταξί.' },
      ],
    },
    en: {
      metaTitle: 'Meteora and Pyli Bridge: How to Combine',
      h1: 'Meteora and Pyli Bridge',
      intro: 'Meteora is about 1.5 hours from Pyli. Here is whether to add the bridge to a Meteora day or keep them separate.',
      sections: [
        { id: 'distance', title: 'Distance', body: 'From Meteora (Kalambaka) to Pyli is about 90–100 km, a 1.5-hour drive via Trikala.' },
        { id: 'combine', title: 'How to fit them', body: 'If overnighting near Trikala, do Meteora in the morning and the bridge in the afternoon. If passing through, prefer separate days.' },
        { id: 'note', title: 'Note', body: 'Do not rush both — each deserves time. Check Meteora monastery hours.' },
      ],
      faq: [
        { q: 'Worth the same day?', a: 'Only if you stay nearby; otherwise prefer two days.' },
        { q: 'How far?', a: 'About 90–100 km, 1.5 hours driving.' },
        { q: 'Which first?', a: 'Meteora in the morning (monastery hours), bridge in the afternoon.' },
        { q: 'Public transport?', a: 'Both served by KTEL separately; connection between them is by car/taxi.' },
      ],
    },
    zh: {
      metaTitle: '梅黛奥拉与皮利桥：如何组合',
      h1: '梅黛奥拉与皮利桥',
      intro: '梅黛奥拉距皮利约 1.5 小时车程。下面是把它加进梅黛奥拉一日游，还是分开两天的建议。',
      sections: [
        { id: 'distance', title: '距离', body: '从梅黛奥拉（卡兰巴卡）到皮利约 90–100 公里，经特里卡拉自驾约 1.5 小时。' },
        { id: 'combine', title: '如何安排', body: '若住特里卡拉附近，可上午梅黛奥拉、下午石桥；若只是路过，建议分别安排两天。' },
        { id: 'note', title: '提示', body: '不要勉强一天赶完两处，每处都值得花时间；并查梅黛奥拉修道院开放时间。' },
      ],
      faq: [
        { q: '同一天值得吗？', a: '只有住得近才值得，否则建议两天。' },
        { q: '有多远？', a: '约 90–100 公里，车程 1.5 小时。' },
        { q: '先去哪？', a: '上午梅黛奥拉（修道院有时段），下午石桥。' },
        { q: '有公共交通吗？', a: '两处分别有 KTEL 服务，彼此间靠自驾或出租连接。' },
      ],
    },
  },
  {
    slug: 'routes/mountain-weekend',
    category: 'routes',
    related: ['nearby/elati', 'nearby/pertouli', 'routes/pyli-elati-pertouli', 'food/restaurants-elati'],
    el: {
      metaTitle: 'Σαββατοκύριακο στο βουνό: Ελάτη, Περτούλι & Πύλη',
      h1: 'Διήμερο βουνού: Ελάτη, Περτούλι & Πύλη',
      intro:
        'Οργανώστε ένα σαββατοκύριακο που συνδυάζει γεφύρι, ορεινά χωριά και φύση. Εδώ μια πρόταση με διαμονή στην Ελάτη ή το Περτούλι.',
      sections: [
        { id: 'day1', title: 'Ημέρα 1', body: 'Άφιξη το μεσημέρι, γεφύρι και Πόρτα Παναγιά, γεύμα στην Πύλη, τακτοποίηση στην Ελάτη/Περτούλι, βραδινό στο χωριό.' },
        { id: 'day2', title: 'Ημέρα 2', body: 'Πεζοπορία στον Κόζιακα ή οροπέδιο Περτουλίου, καφές και χαλάρωση, επιστροφή το απόγευμα με στάση για φωτογραφία.' },
        { id: 'book', title: 'Κρατήσεις', body: 'Τα Σαββατοκύριακα η διαμονή γεμίζει · κλείστε νωρίς. Επιβεβαιώστε ώρες εστιατορίων εκτός αιχμής.' },
      ],
      faq: [
        { q: 'Πού να μείνω;', a: 'Ελάτη ή Περτούλι έχουν ξενώνες και ξενοδοχεία.' },
        { q: 'Χωράει το γεφύρι;', a: 'Ναι, την πρώτη μέρα ως στάση πριν το χωριό.' },
        { q: 'Τι ρούχα να πάρω;', a: 'Στρώσεις · το βουνό αλλάζει θερμοκρασία γρήγορα.' },
        { q: 'Αξίζει χειμώνα;', a: 'Ναι για χιόνι και ησυχία, αλλά ελέγξτε τον δρόμο.' },
      ],
    },
    en: {
      metaTitle: 'Mountain Weekend: Elati, Pertouli & Pyli',
      h1: 'Mountain Weekend: Elati, Pertouli & Pyli',
      intro: 'Plan a weekend combining the bridge, mountain villages and nature. Here is a proposal with a stay in Elati or Pertouli.',
      sections: [
        { id: 'day1', title: 'Day 1', body: 'Afternoon arrival, bridge and Porta Panagia, lunch in Pyli, settle in Elati/Pertouli, village dinner.' },
        { id: 'day2', title: 'Day 2', body: 'Hike Koziakas or the Pertouli plateau, coffee and relax, return in the afternoon with a photo stop.' },
        { id: 'book', title: 'Bookings', body: 'Weekends fill up — book early. Confirm restaurant hours off-peak.' },
      ],
      faq: [
        { q: 'Where to stay?', a: 'Elati or Pertouli have guesthouses and hotels.' },
        { q: 'Does the bridge fit?', a: 'Yes, on day one as a stop before the village.' },
        { q: 'What clothes?', a: 'Layers — the mountain changes temperature quickly.' },
        { q: 'Worth in winter?', a: 'Yes for snow and quiet, but check the road.' },
      ],
    },
    zh: {
      metaTitle: '山区周末：埃拉蒂、佩尔图利与皮利',
      h1: '山区周末：埃拉蒂、佩尔图利与皮利',
      intro: '规划一个结合石桥、山村与自然的周末，下面是以埃拉蒂或佩尔图利为落脚点的方案。',
      sections: [
        { id: 'day1', title: '第一天', body: '午后抵达，游桥与波尔塔帕纳吉亚，皮利镇午餐，入住埃拉蒂/佩尔图利，村庄晚餐。' },
        { id: 'day2', title: '第二天', body: '徒步科齐亚卡斯山或佩尔图利高原，喝咖啡放松，下午返程并顺路拍照。' },
        { id: 'book', title: '预订', body: '周末住宿紧张，尽早预订；淡季也请确认餐厅营业时间。' },
      ],
      faq: [
        { q: '住哪里？', a: '埃拉蒂或佩尔图利有旅馆与酒店。' },
        { q: '排得进石桥吗？', a: '排得进，第一天作为进村前的停留。' },
        { q: '带什么衣服？', a: '分层穿衣，山区气温变化快。' },
        { q: '冬天值得吗？', a: '值得看雪与清静，但请留意路况。' },
      ],
    },
  },
  {
    slug: 'routes/pyli-heritage-walk',
    zh: {
      metaTitle: '皮利文化遗产漫步',
      h1: '皮利文化遗产漫步',
      intro: '一条串联石桥、波尔塔帕纳吉亚与皮利镇的步行/自驾路线，聚焦当地历史与宗教纪念物。',
      sections: [
        { id: 'sites', title: '站点', body: '石桥、波尔塔帕纳吉亚（约 2 公里）与皮利镇可依次串联，多沿同一方向。' },
        { id: 'theme', title: '主题', body: '围绕圣维萨里翁、拜占庭教堂与单拱石桥，理解这一带的文化脉络。' },
        { id: 'note', title: '提示', body: '教堂为礼拜场所，请着装得体并尊重。' },
      ],
      faq: [
        { q: '步行可行吗？', a: '部分可行，但站点间约 2 公里，建议自驾或拼步行与短驳。' },
        { q: '要多久？', a: '轻松半日：桥＋教堂＋镇上午餐。' },
        { q: '最佳光线？', a: '清晨，避开旅行团。' },
        { q: '从哪开始？', a: '从皮利镇或石桥均可，顺路串联。' },
      ],
    },
    category: 'routes',
    related: ['nearby/porta-panagia', 'history/saint-vissarion', 'routes/pyli-half-day', 'parking-access'],
    el: {
      metaTitle: 'Πολιτιστική βόλτα στην Πύλη: Γεφύρι & Πόρτα Παναγιά',
      h1: 'Πολιτιστική βόλτα στην Πύλη',
      intro:
        'Μια ήπια περιήγηση που συνδέει το γεφύρι με τη βυζαντινή Πόρτα Παναγιά και τον Άγιο Βησσαρίωνα. Βασίζεται σε επιβεβαιωμένες τοποθεσίες.',
      sections: [
        { id: 'sites', title: 'Στάσεις', body: 'Κεφαλή γεφυριού → διάβαση τόξου → Πόρτα Παναγιά (2 χλμ.) → καφέ στην Πύλη. Όλα προσβάσιμα με αυτοκίνητο ή σύντομο περπάτημα.' },
        { id: 'theme', title: 'Θέμα', body: 'Ο Άγιος Βησσαρίωνας συνδέει γεφύρι και μοναστήρια της περιοχής · η βόλτα αναδεικνύει αυτή τη σχέση.' },
        { id: 'note', title: 'Σημείωση', body: 'Οι ώρες των θρησκευτικών χώρων τηρούνται · σεβαστείτε τον κώδικα ενδυμασίας και επιβεβαιώστε το ωράριο.' },
      ],
      faq: [
        { q: 'Πόση ώρα διαρκεί;', a: 'Περίπου 2–3 ώρες με τις στάσεις.' },
        { q: 'Είναι με τα πόδια;', a: 'Μπορείτε να οδηγήσετε μεταξύ των σημείων και να περπατήσετε μόνο το γεφύρι.' },
        { q: 'Κατάλληλο για παιδιά;', a: 'Ναι, με ήπιο ρυθμό.' },
        { q: 'Χρειάζεται ξεναγός;', a: 'Όχι · τα σημεία είναι αυτονόητα, αλλά διαβάστε την ιστορία τους εδώ.' },
      ],
    },
    en: {
      metaTitle: 'Pyli Heritage Walk: Bridge & Porta Panagia',
      h1: 'Pyli Heritage Walk',
      intro: 'A gentle tour linking the bridge with the Byzantine Porta Panagia and Saint Vissarion. Based on confirmed sites.',
      sections: [
        { id: 'sites', title: 'Stops', body: 'Bridge head → cross the arch → Porta Panagia (2 km) → coffee in Pyli. All reachable by car or a short walk.' },
        { id: 'theme', title: 'Theme', body: 'Saint Vissarion links the bridge and the area’s monasteries; the walk highlights this connection.' },
        { id: 'note', title: 'Note', body: 'Religious sites keep their hours — respect the dress code and confirm the schedule.' },
      ],
      faq: [
        { q: 'How long?', a: 'About 2–3 hours with stops.' },
        { q: 'Is it on foot?', a: 'You can drive between points and only walk the bridge.' },
        { q: 'Good for children?', a: 'Yes, at a gentle pace.' },
        { q: 'Need a guide?', a: 'No — the spots are self-evident, but read their history here.' },
      ],
    },
  },
  {
    slug: 'routes/geopark-pyli',
    zh: {
      metaTitle: '皮利地质公园路线',
      h1: '皮利地质公园路线',
      intro: '皮利一带被纳入梅黛奥拉–皮利地质公园叙事，下面把桥、河谷与相关站点串成主题路线。',
      sections: [
        { id: 'sites', title: '站点', body: '以石桥与波尔泰科斯河谷为核心，结合周边地质解说点。' },
        { id: 'theme', title: '主题', body: '聚焦单拱成因、岩层与河流切割，理解古桥为何矗立于此。' },
        { id: 'note', title: '提示', body: '具体解说牌与步道以当地为准，请勿翻越护栏。' },
      ],
      faq: [
        { q: '和梅黛奥拉一起吗？', a: '同属一个地质公园叙事，但梅黛奥拉距此约 1.5 小时。' },
        { q: '能看到什么地质？', a: '沉积与变质岩层、峡谷与拱桥结构。' },
        { q: '有解说吗？', a: '部分点位有标识，详见当地资料。' },
        { q: '步行可行吗？', a: '桥上与路边观景点即可，安全且不费力。' },
      ],
    },
    category: 'routes',
    related: ['nearby-attractions', 'nature/portaikos-valley', 'history/pyli-bridge', 'nearby/palaiokarya-bridge'],
    el: {
      metaTitle: 'Γεώπαρκο Πύλης: Διαδρομή γεωλογίας & πολιτισμού',
      h1: 'Διαδρομή στο Γεώπαρκο Πύλης',
      intro:
        'Το Γεώπαρκο Μετεώρων–Πύλης περιλαμβάνει το γεφύρι και άλλα σημεία γεωλογικού και πολιτιστικού ενδιαφέροντος. Εδώ πώς να σχεδιάσετε μια θεματική μέρα.',
      sections: [
        { id: 'sites', title: 'Σημεία', body: 'Το γεφύρι της Πύλης, η Πόρτα Παναγιά και η ευρύτερη κοιλάδα του Πορταϊκού ανήκουν στην ενότητα της περιοχής · συνδέστε τα με σύντομες μετακινήσεις.' },
        { id: 'theme', title: 'Θέμα', body: 'Η διαδρομή αναδεικνύει την πέτρα, το ποτάμι και τη λιθοδομία — από το φυσικό περιβάλλον ως την ανθρώπινη κατασκευή.' },
        { id: 'note', title: 'Σημείωση', body: 'Τα όρια και οι χαρακτηρισμοί του γεωπάρκου ενδέχεται να ανανεώνονται · βασιστείτε σε επίσημες πηγές για την τρέχουσα περιγραφή.' },
      ],
      faq: [
        { q: 'Τι είναι το Γεώπαρκο;', a: 'Δίκτυο σημείων γεωλογικού και πολιτιστικού ενδιαφέροντος στην περιοχή Μετεώρων–Πύλης.' },
        { q: 'Περιλαμβάνει το γεφύρι;', a: 'Ναι, το γεφύρι της Πύλης αναφέρεται ως σημείο της ενότητας.' },
        { q: 'Χρειάζομαι εισιτήριο;', a: 'Τα υπαίθρια σημεία είναι ελεύθερα · επιβεβαιώστε για τυχόν επισκέψιμα κτίρια.' },
        { q: 'Πόση ώρα;', a: 'Μισή έως ολόκληρη μέρα, ανάλογα με τις στάσεις.' },
      ],
    },
    en: {
      metaTitle: 'Pyli Geopark: Geology & Culture Route',
      h1: 'Pyli Geopark Route',
      intro: 'The Meteora–Pyli Geopark includes the bridge and other geo and cultural points. Here is how to plan a thematic day.',
      sections: [
        { id: 'sites', title: 'Points', body: 'Pyli bridge, Porta Panagia and the wider Portaikos valley belong to the area’s ensemble — link them with short transfers.' },
        { id: 'theme', title: 'Theme', body: 'The route highlights stone, river and masonry — from the natural setting to human construction.' },
        { id: 'note', title: 'Note', body: 'Geopark boundaries and designations may be updated — rely on official sources for the current description.' },
      ],
      faq: [
        { q: 'What is the Geopark?', a: 'A network of geo and cultural interest points in the Meteora–Pyli area.' },
        { q: 'Does it include the bridge?', a: 'Yes, Pyli bridge is cited as a point of the ensemble.' },
        { q: 'Need a ticket?', a: 'Open-air points are free; confirm for any visitable buildings.' },
        { q: 'How long?', a: 'Half to a full day, depending on stops.' },
      ],
    },
  },
  {
    slug: 'history/pyli-bridge',
    zh: {
      metaTitle: '皮利桥的历史',
      h1: '皮利桥的历史',
      intro: '皮利桥是波尔泰科斯河上的一座单拱石桥，与圣维萨里翁及当地传统紧密相连。',
      sections: [
        { id: 'origin', title: '起源', body: '据当地资料，桥建于 1514 年，由圣维萨里翁发起并资助，服务于奥斯曼时期的跨河交通。' },
        { id: 'use', title: '用途', body: '数百年来承载人畜与货物过河，是特里卡拉–阿尔塔古道的一环。' },
        { id: 'sources', title: '资料', body: '具体纪年以当地碑文与文献为准，下文附常见说法。' },
      ],
      faq: [
        { q: '建于何时？', a: '据传 1514 年，由圣维萨里翁发起。' },
        { q: '为什么重要？', a: '它是区域交通与信仰交织的实物见证。' },
        { q: '一直在使用吗？', a: '如今仅供步行观光，车辆走现代道路。' },
        { q: '和圣维萨里翁？', a: '他发起并资助了此桥。' },
      ],
    },
    category: 'history',
    related: ['history/saint-vissarion', 'history/stone-arch-engineering', 'history/stone-bridges-trikala', 'nearby/porta-panagia'],
    el: {
      metaTitle: 'Ιστορία του Γεφυριού της Πύλης',
      h1: 'Η ιστορία του Γεφυριού της Πύλης',
      intro:
        'Το Τοξωτό Γεφύρι του Πορταϊκού χτίστηκε το 1514, επί οθωμανικής κυριαρχίας, με πρωτοβουλία του Αγίου Βησσαρίωνα. Εδώ η ιστορία, η χρήση και οι πηγές.',
      sections: [
        { id: 'origin', title: 'Χτίσιμο (1514)', body: 'Σύμφωνα με τις τοπικές και γεωπάρκου πηγές, το γεφύρι κτίστηκε το 1514, επί σουλτάνου Σελίμ Α΄, με έμπνευση και χρηματοδότηση του Αγίου Βησσαρίωνα, μητροπολίτη Λαρίσης.' },
        { id: 'use', title: 'Χρήση', body: 'Γέφυρα πάνω από τον Πορταϊκό, στην οδό Τρικάλων–Άρτας, εξυπηρετούσε τη μετακίνηση ανθρώπων και εμπορευμάτων. Σήμερα είναι πεζόδρομος και ανοιχτό μνημείο.' },
        { id: 'sources', title: 'Πηγές', body: 'Οι ημερομηνίες και οι ιδρυτές αναφέρονται από το Γεώπαρκο Μετεώρων–Πύλης και την τοπική ιστοριογραφία. Για λεπτομέρειες συμβουλευτείτε τις επίσημες πηγές.' },
      ],
      faq: [
        { q: 'Πότε χτίστηκε;', a: 'Το 1514, επί οθωμανικής κυριαρχίας.' },
        { q: 'Ποιος το έχτισε;', a: 'Με πρωτοβουλία του Αγίου Βησσαρίωνα, σύμφωνα με τις τοπικές πηγές.' },
        { q: 'Γιατί ένα τόξο;', a: 'Το μονό τόξο εξυπηρετούσε το πλάτος και το ύψος του ποταμού · δείτε το άρθρο για τη μηχανική.' },
        { q: 'Είναι ακόμα σε χρήση;', a: 'Είναι πεζόδρομος και ανοιχτό μνημείο, χωρίς εισιτήριο.' },
      ],
    },
    en: {
      metaTitle: 'History of Pyli Bridge',
      h1: 'The History of Pyli Bridge',
      intro: 'The Arched Bridge of Portaikos was built in 1514, under Ottoman rule, on the initiative of Saint Vissarion. Here is its history, use and sources.',
      sections: [
        { id: 'origin', title: 'Construction (1514)', body: 'According to local and geopark sources, the bridge was built in 1514, under Sultan Selim I, inspired and funded by Saint Vissarion, Metropolitan of Larissa.' },
        { id: 'use', title: 'Use', body: 'A bridge over the Portaikos on the Trikala–Arta road, it served the movement of people and goods. Today it is a pedestrian passage and open monument.' },
        { id: 'sources', title: 'Sources', body: 'Dates and founders are cited by the Meteora–Pyli Geopark and local historiography. For details consult the official sources.' },
      ],
      faq: [
        { q: 'When was it built?', a: 'In 1514, under Ottoman rule.' },
        { q: 'Who built it?', a: 'On the initiative of Saint Vissarion, per local sources.' },
        { q: 'Why one arch?', a: 'The single arch suited the river’s width and height — see the engineering article.' },
        { q: 'Still in use?', a: 'It is a pedestrian passage and open monument, free of charge.' },
      ],
    },
  },
];
