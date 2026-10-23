import type { Topic } from './types';

export const PART8: Topic[] = [
  {
    slug: 'history/stone-arch-engineering',
    category: 'history',
    related: ['history/pyli-bridge', 'history/stone-bridges-trikala', 'photo-spots'],
    el: {
      metaTitle: 'Μηχανική του μονού τόξου: Πώς στέκεται το γεφύρι',
      h1: 'Η μηχανική του μονού τόξου',
      intro:
        'Το γεφύρι της Πύλης στηρίζεται σε ένα μόνο πέτρινο τόξο. Εδώ εξηγούμε απλά πώς μια τέτοια κατασκευή μεταφέρει το βάρος και άντεξε αιώνες.',
      sections: [
        { id: 'arch', title: 'Το τόξο', body: 'Το ημικυκλικό τόξο μετατρέπει το βάρος του καταστρώματος και τη ροή του νερού σε θλιπτικές δυνάμεις που κατανέμονται στα βάθρα. Όσο πιο κλειστό το τόξο, τόσο πιο σταθερό.' },
        { id: 'stones', title: 'Λιθοδομή', body: 'Οι πέτρες (ελαφρόπετρα και ντόπια πέτρα) τοποθετούνται έτσι ώστε να «κλειδώνουν» μεταξύ τους · το κλειδί του τόξου στην κορυφή συγκρατεί το σύνολο.' },
        { id: 'why', title: 'Γιατί άντεξε', body: 'Η σωστή θεμελίωση στα βράχια, το σχήμα του τόξου και η απουσία βαριάς κυκλοφορίας βοήθησαν το γεφύρι να διασωθεί ως σήμερα.' },
      ],
      faq: [
        { q: 'Πόσο μεγάλο είναι το άνοιγμα;', a: 'Το μονό τόξο έχει εντυπωσιακό άνοιγμα πάνω από τον Πορταϊκό · οι ακριβείς μετρήσεις αναφέρονται από τοπικές πηγές.' },
        { q: 'Είναι ασφαλές να περπατήσω;', a: 'Ναι, αλλά το κατάστρωμα είναι στενό και χωρίς κιγκλιδώματα · προσοχή.' },
        { q: 'Γιατί ένα και όχι πολλά τόξα;', a: 'Για τον συγκεκριμένο ποταμό ένα μεγάλο τόξο ήταν η πιο σταθερή και οικονομική λύση.' },
        { q: 'Ποιο υλικό χρησιμοποιήθηκε;', a: 'Ντόπια πέτρα και ελαφρόπετρα, δεμένη με κονίαμα της εποχής.' },
      ],
    },
    en: {
      metaTitle: 'Engineering of the Single Arch: How the Bridge Stands',
      h1: 'The Engineering of the Single Arch',
      intro: 'Pyli bridge rests on a single stone arch. Here we simply explain how such a structure carries weight and survived centuries.',
      sections: [
        { id: 'arch', title: 'The arch', body: 'The semicircular arch turns the deck’s weight and the water flow into compressive forces spread to the abutments. The more closed the arch, the more stable.' },
        { id: 'stones', title: 'Masonry', body: 'The stones (poros and local stone) are placed to “lock” together; the keystone at the crown holds the whole together.' },
        { id: 'why', title: 'Why it survived', body: 'Good foundations on rock, the arch shape and the absence of heavy traffic helped the bridge survive to today.' },
      ],
      faq: [
        { q: 'How big is the span?', a: 'The single arch has a striking span over the Portaikos; exact figures are given by local sources.' },
        { q: 'Is it safe to walk?', a: 'Yes, but the deck is narrow and unrailed — caution.' },
        { q: 'Why one arch, not many?', a: 'For this river a single large arch was the most stable and economical solution.' },
        { q: 'What material was used?', a: 'Local stone and poros, bound with the period’s mortar.' },
      ],
    },
    zh: {
      metaTitle: '单拱的力学：石桥为何屹立',
      h1: '单拱的工程技术',
      intro: '皮利桥仅靠一个石拱支撑。下面通俗解释这种结构如何承重并历经数百年。',
      sections: [
        { id: 'arch', title: '拱', body: '半圆形拱把桥面重量与水流转为压向桥墩的力；拱越“闭合”越稳定。' },
        { id: 'stones', title: '砌石', body: '石块（轻质凝灰岩与本地石）相互“咬锁”，拱顶的拱心石把整体锁住。' },
        { id: 'why', title: '为何屹立', body: '岩基上的良好基础、拱形，以及无重型交通，使古桥保存至今。' },
      ],
      faq: [
        { q: '跨度多大？', a: '单拱横跨波尔泰科斯河，气势不凡，具体数值以当地资料为准。' },
        { q: '走上去安全吗？', a: '安全，但桥面窄且无栏杆，务必小心。' },
        { q: '为何只一个拱？', a: '对此河，一个大拱是最稳也最省工的方案。' },
        { q: '用什么材料？', a: '本地石与凝灰岩，以当时的灰浆砌合。' },
      ],
    },
  },
  {
    slug: 'history/saint-vissarion',
    category: 'history',
    related: ['history/pyli-bridge', 'nearby/dousiko-monastery', 'nearby/porta-panagia', 'history/pyli-town'],
    el: {
      metaTitle: 'Άγιος Βησσαρίων και τα γεφύρια της Πύλης',
      h1: 'Άγιος Βησσαρίων — γέφυρα, μοναστήρια & παράδοση',
      intro:
        'Ο Άγιος Βησσαρίων (Βησσαρίωνας) ήταν μητροπολίτης Λαρίσης και προστάτης της περιοχής. Συνδέεται με το γεφύρι της Πύλης, το μοναστήρι του Δουσίκου και την Πόρτα Παναγιά.',
      sections: [
        { id: 'life', title: 'Ο βίος', body: 'Ο Βησσαρίωνας έζησε τον 15ο–16ο αιώνα και τιμάται ως άγιος της Ορθόδοξης Εκκλησίας. Η μνήμη του συνδέεται με την τοπική ευσέβεια και την ανάπτυξη της περιοχής.' },
        { id: 'works', title: 'Έργα', body: 'Του αποδίδεται η πρωτοβουλία για το γεφύρι της Πύλης (1514) και η ίδρυση μονών, όπως του Δουσίκου. Οι ιδρυτικές πράξεις επικυρώθηκαν το 1536.' },
        { id: 'legacy', title: 'Κληρονομιά', body: 'Το γεφύρι, τα μοναστήρια και η Πόρτα Παναγιά συνθέτουν έναν πολιτιστικό άξονα γύρω από τον ίδιο · η περιοχή τον τιμά ως τοπικό άγιο.' },
      ],
      faq: [
        { q: 'Ποιος ήταν ο Άγιος Βησσαρίων;', a: 'Μητροπολίτης Λαρίσης (15ος–16ος αι.), τιμώμενος άγιος με δράση στη Θεσσαλία.' },
        { q: 'Έχτισε το γεφύρι;', a: 'Κατά τις τοπικές πηγές, είχε την πρωτοβουλία και τη χρηματοδότηση του γεφυριού της Πύλης.' },
        { q: 'Σχέση με το Δουσίκο;', a: 'Το μοναστήρι του Δουσίκου συνδέεται μαζί του · οι πράξεις επικυρώθηκαν το 1536.' },
        { q: 'Γιατί σημαντικός για την Πύλη;', a: 'Ενώνει πνευματικά και υλικά τα σημαντικότερα μνημεία της περιοχής.' },
      ],
    },
    en: {
      metaTitle: 'Saint Vissarion and the Bridges of Pyli',
      h1: 'Saint Vissarion — Bridges, Monasteries & Tradition',
      intro: 'Saint Vissarion was Metropolitan of Larissa and a local patron. He is linked to Pyli bridge, the Dousiko monastery and Porta Panagia.',
      sections: [
        { id: 'life', title: 'His life', body: 'Vissarion lived in the 15th–16th century and is honoured as a saint of the Orthodox Church. His memory is tied to local piety and the area’s development.' },
        { id: 'works', title: 'Works', body: 'He is credited with the initiative for Pyli bridge (1514) and the founding of monasteries such as Dousiko. The foundation acts were confirmed in 1536.' },
        { id: 'legacy', title: 'Legacy', body: 'The bridge, monasteries and Porta Panagia form a cultural axis around him; the area honours him as a local saint.' },
      ],
      faq: [
        { q: 'Who was Saint Vissarion?', a: 'Metropolitan of Larissa (15th–16th c.), an honoured saint active in Thessaly.' },
        { q: 'Did he build the bridge?', a: 'Per local sources, he took the initiative and funding for Pyli bridge.' },
        { q: 'Link to Dousiko?', a: 'The Dousiko monastery is linked to him; acts confirmed in 1536.' },
        { q: 'Why important for Pyli?', a: 'He spiritually and materially unites the area’s major monuments.' },
      ],
    },
    zh: {
      metaTitle: '圣维萨里翁与皮利的桥',
      h1: '圣维萨里翁——桥、修道院与传统',
      intro: '圣维萨里翁是拉里萨都主教、当地守护者，与皮利桥、杜西科修道院及波尔塔帕纳吉亚都有渊源。',
      sections: [
        { id: 'life', title: '生平', body: '维萨里翁生活于 15–16 世纪，被东正教会尊为圣徒，其记忆与当地信仰及区域发展相连。' },
        { id: 'works', title: '事迹', body: '据传他发起并资助皮利桥（1514），并创办杜西科等修道院，创立文书于 1536 年获确认。' },
        { id: 'legacy', title: '遗产', body: '石桥、修道院与波尔塔帕纳吉亚构成环绕他的文化轴线，当地尊其为地方圣徒。' },
      ],
      faq: [
        { q: '圣维萨里翁是谁？', a: '拉里萨都主教（15–16 世纪），在色萨利活跃的尊圣。' },
        { q: '他建了桥吗？', a: '据当地资料，他发起并资助了皮利桥。' },
        { q: '与杜西科的关系？', a: '杜西科修道院与他相关，文书于 1536 年获确认。' },
        { q: '为何对皮利重要？', a: '他在精神与物质上把当地主要纪念物连成一体。' },
      ],
    },
  },
  {
    slug: 'nature/portaikos-valley',
    zh: {
      metaTitle: '波尔泰科斯河谷：地质与自然',
      h1: '波尔泰科斯河谷——地质与自然',
      intro: '波尔泰科斯河切穿皮利一带的岩层，形成峡谷与单拱桥所在的崖壁。下面看能观察到什么。',
      sections: [
        { id: 'river', title: '河流', body: '波尔泰科斯河水流清澈、常年不断，是区域生态的核心，桥下可见湍流与岩床。' },
        { id: 'geology', title: '地质', body: '河谷展露沉积与变质岩层，是这一带地质公园叙事的一部分，适合观察岩性与褶皱。' },
        { id: 'observe', title: '观察', body: '在桥上、路边观景点与河岸安全处可看峡谷、植被与水流，请勿翻越护栏。' },
      ],
      faq: [
        { q: '能看到什么？', a: '峡谷、清澈水流、岩层与桥下的湍流。' },
        { q: '能下水吗？', a: '仅当地标识允许处，水流可能很强。' },
        { q: '和地质公园有关吗？', a: '有关，河谷是本区地质叙事的一环。' },
        { q: '最佳观景点？', a: '桥面与路边观景点，安全且不费力。' },
      ],
    },
    category: 'history',
    related: ['history/pyli-bridge', 'nearby/koziakas-hiking', 'best-time-to-visit', 'routes/geopark-pyli'],
    el: {
      metaTitle: 'Κοιλάδα Πορταϊκού: Γεωλογία & φύση',
      h1: 'Η κοιλάδα του Πορταϊκού ποταμού',
      intro:
        'Ο Πορταϊκός είναι παραπόταμος του Πηνειού που σχημάτισε μια πυκνή, πράσινη κοιλάδα γύρω από την Πύλη. Εδώ το τοπίο, τα πετρώματα και τα σημεία παρατήρησης.',
      sections: [
        { id: 'river', title: 'Ο ποταμός', body: 'Ο Πορταϊκός διασχίζει τον Κόζιακα και καταλήγει στον Πηνειό. Το νερό είναι καθαρό και η κοίτη πλαισιώνεται από πλατάνια.' },
        { id: 'geology', title: 'Γεωλογία', body: 'Η περιοχή ανήκει στο ευρύτερο γεωλογικό πλαίσιο της Θεσσαλίας και του Γεωπάρκου Μετεώρων–Πύλης, με ασβεστολιθικά και ιζηματογενή πετρώματα.' },
        { id: 'observe', title: 'Πού να παρατηρήσετε', body: 'Από το γεφύρι και τα μονοπάτια του Κόζιακα βλέπετε το φαράγγι, τη ροή και τη βλάστηση. Σεβαστείτε τον χώρο και μην απομακρύνεστε από τα μονοπάτια.' },
      ],
      faq: [
        { q: 'Πού εκβάλλει ο Πορταϊκός;', a: 'Στον Πηνειό ποταμό, μετά την κοιλάδα της Πύλης.' },
        { q: 'Είναι πλωτός;', a: 'Όχι · είναι ορεινό ρέμα με άγρια ροή, ιδίως την άνοιξη.' },
        { q: 'Υπάρχει ψάρεμα;', a: 'Ενδέχεται να επιτρέπεται με άδεια · επιβεβαιώστε τους τοπικούς κανόνες.' },
        { q: 'Πότε έχει περισσότερο νερό;', a: 'Άνοιξη και μετά από βροχές · το καλοκαίρι η ροή μειώνεται.' },
      ],
    },
    en: {
      metaTitle: 'Portaikos Valley: Geology & Nature',
      h1: 'The Valley of the Portaikos River',
      intro: 'The Portaikos is a tributary of the Pineios that carved a green, dense valley around Pyli. Here is the landscape, rocks and observation points.',
      sections: [
        { id: 'river', title: 'The river', body: 'The Portaikos runs through Koziakas and joins the Pineios. The water is clear and the channel is lined with plane trees.' },
        { id: 'geology', title: 'Geology', body: 'The area belongs to the wider Thessaly and Meteora–Pyli Geopark geological frame, with limestone and sedimentary rocks.' },
        { id: 'observe', title: 'Where to observe', body: 'From the bridge and Koziakas trails you see the gorge, flow and vegetation. Respect the site and stay on paths.' },
      ],
      faq: [
        { q: 'Where does the Portaikos flow?', a: 'Into the Pineios river, after the Pyli valley.' },
        { q: 'Is it navigable?', a: 'No — a mountain stream with wild flow, especially in spring.' },
        { q: 'Is there fishing?', a: 'Possibly with a permit — confirm local rules.' },
        { q: 'When most water?', a: 'Spring and after rain; summer flow drops.' },
      ],
    },
  },
  {
    slug: 'history/stone-bridges-trikala',
    zh: {
      metaTitle: '特里卡拉的石桥',
      h1: '特里卡拉的石桥',
      intro: '色萨利西部河网密布，历史上建有许多石桥。皮利桥是其中保存完好的一座。',
      sections: [
        { id: 'tradition', title: '传统', body: '奥斯曼时期的地方工匠以单拱石桥跨越河流，形成区域交通与村落纽带。' },
        { id: 'compare', title: '比较', body: '皮利桥以单拱与位置著称；帕莱奥卡里亚桥以桥瀑同框闻名，两者可对照参观。' },
        { id: 'note', title: '提示', body: '各桥开放与可达性不同，出行前请确认。' },
      ],
      faq: [
        { q: '还有别的石桥吗？', a: '有，如帕莱奥卡里亚桥，可与皮利桥同游。' },
        { q: '为何这么多石桥？', a: '因河网发达，历史上需以石桥连接村落。' },
        { q: '皮利桥特别在哪？', a: '单拱横跨波尔泰科斯河，保存完好且位置出众。' },
        { q: '能都走到吗？', a: '部分需自驾，距离与路况请以导航为准。' },
      ],
    },
    category: 'history',
    related: ['history/pyli-bridge', 'nearby/palaiokarya-bridge', 'history/stone-arch-engineering', 'routes/two-stone-bridges'],
    el: {
      metaTitle: 'Πέτρινα γεφύρια Τρικάλων: Σύγκριση',
      h1: 'Τα πέτρινα γεφύρια των Τρικάλων',
      intro:
        'Η Θεσσαλία και ειδικά τα Τρίκαλα έχουν παράδοση πέτρινων γεφυριών. Εδώ συγκρίνουμε το γεφύρι της Πύλης με άλλα γνωστά της περιοχής.',
      sections: [
        { id: 'tradition', title: 'Η παράδοση', body: 'Τα πέτρινα γεφύρια χτίζονταν για να ενώνουν οικισμούς πάνω από ποτάμια. Η λιθοδομή και το τόξο είναι κοινά στοιχεία.' },
        { id: 'compare', title: 'Σύγκριση', body: 'Η Πύλη ξεχωρίζει για το ενιαίο μεγάλο τόξο της · η Παλαιοκαρυά για τον καταρράκτη της. Κάθε γεφύρι έχει τη δική του ιστορία και τοπίο.' },
        { id: 'note', title: 'Σημείωση', body: 'Οι ημερομηνίες και τα ονόματα βασίζονται σε τοπικές πηγές · επιβεβαιώστε λεπτομέρειες για κάθε μνημείο ξεχωριστά.' },
      ],
      faq: [
        { q: 'Πόσα πέτρινα γεφύρια υπάρχουν;', a: 'Αρκετά στη Θεσσαλία · η Πύλη και η Παλαιοκαρυά είναι από τα γνωστότερα.' },
        { q: 'Ποιο είναι το μεγαλύτερο τόξο;', a: 'Η Πύλη φημίζεται για το ενιαίο μεγάλο τόξο της.' },
        { q: 'Αξίζουν επίσκεψης όλα;', a: 'Ανάλογα με το ενδιαφέρον σας · ξεκινήστε από Πύλη και Παλαιοκαρυά.' },
        { q: 'Υπάρχει χάρτης διαδρομής;', a: 'Δείτε τη διαδρομή «δύο πέτρινες γέφυρες».' },
      ],
    },
    en: {
      metaTitle: 'Stone Bridges of Trikala: A Comparison',
      h1: 'The Stone Bridges of Trikala',
      intro: 'Thessaly, and Trikala in particular, has a tradition of stone bridges. Here we compare Pyli bridge with other known ones in the area.',
      sections: [
        { id: 'tradition', title: 'The tradition', body: 'Stone bridges were built to link settlements across rivers. Masonry and the arch are common features.' },
        { id: 'compare', title: 'Comparison', body: 'Pyli stands out for its single large arch; Palaiokarya for its waterfall. Each bridge has its own story and landscape.' },
        { id: 'note', title: 'Note', body: 'Dates and names rely on local sources — confirm details for each monument separately.' },
      ],
      faq: [
        { q: 'How many stone bridges are there?', a: 'Several in Thessaly; Pyli and Palaiokarya are among the best known.' },
        { q: 'Which has the largest arch?', a: 'Pyli is famed for its single large arch.' },
        { q: 'Worth visiting all?', a: 'Depending on interest; start with Pyli and Palaiokarya.' },
        { q: 'Is there a route map?', a: 'See the “two stone bridges” route.' },
      ],
    },
  },
  {
    slug: 'history/pyli-town',
    zh: {
      metaTitle: '皮利镇：色萨利的山村',
      h1: '色萨利的皮利——历史与地理',
      intro: '皮利是特里卡拉州的山村，因石桥与周边自然成为游览支点。',
      sections: [
        { id: 'name', title: '名称', body: '“皮利”指这一带聚落与区域，石桥常被冠以“皮利之桥”之名。' },
        { id: 'geography', title: '地理', body: '位于品都斯东缘、波尔泰科斯河畔，海拔适中，是进出山区的门户。' },
        { id: 'today', title: '今日', body: '村中有咖啡馆、酒馆与基本服务，是游桥与村庄的落脚点。' },
      ],
      faq: [
        { q: '皮利在哪？', a: '特里卡拉州、品都斯东缘，波尔泰科斯河畔。' },
        { q: '有服务吗？', a: '有咖啡馆、酒馆与基本设施。' },
        { q: '作为基地？', a: '适合作为游桥与附近村庄的落脚点。' },
        { q: '名字由来？', a: '为区域与聚落名，桥以此得名。' },
      ],
    },
    category: 'history',
    related: ['history/pyli-bridge', 'history/saint-vissarion', 'getting-there', 'food/restaurants-pyli'],
    el: {
      metaTitle: 'Πύλη Τρικάλων: Ιστορία & γεωγραφία',
      h1: 'Η Πύλη της Θεσσαλίας — ιστορία και γεωγραφία',
      intro:
        'Η Πύλη είναι κωμόπολη των Τρικάλων στους πρόποδες του Κόζιακα, πέρασμα προς τα ορεινά χωριά. Το όνομά της και η θέση της την καθιστούν «πύλη» προς το βουνό.',
      sections: [
        { id: 'name', title: 'Το όνομα', body: 'Το όνομα «Πύλη» αναφέρεται στη θέση της ως πέρασμα (πύλη) προς τα ορεινά και τα χωριά του Κόζιακα και της Πίνδου.' },
        { id: 'geography', title: 'Γεωγραφία', body: 'Χτισμένη σε χαμηλότερο υψόμετρο από τα γύρω χωριά, η Πύλη είναι κόμβος για γεφύρι, εκκλησίες και ορεινές διαδρομές.' },
        { id: 'today', title: 'Σήμερα', body: 'Σύγχρονη κωμόπολη με καφέ, ταβέρνες και υπηρεσίες, βάση για τον επισκέπτη της περιοχής.' },
      ],
      faq: [
        { q: 'Γιατί λέγεται Πύλη;', a: 'Λόγω της θέσης της ως περάσματος προς το βουνό και τα χωριά.' },
        { q: 'Πού βρίσκεται;', a: 'Στα Τρίκαλα, στους πρόποδες του Κόζιακα, 22 χλμ. από την πόλη.' },
        { q: 'Έχει ιστορικό κέντρο;', a: 'Έχει παραδοσιακά σημεία και την Πόρτα Παναγιά κοντά · περπατήστε το χωριό.' },
        { q: 'Βάση για εκδρομές;', a: 'Ναι, από εδώ ξεκινούν οι διαδρομές προς γεφύρι, βουνό και χωριά.' },
      ],
    },
    en: {
      metaTitle: 'Pyli Trikala: History & Geography',
      h1: 'Pyli of Thessaly — History and Geography',
      intro: 'Pyli is a town in Trikala at the foot of Koziakas, a passage to the mountain villages. Its name and position make it a “gate” to the mountains.',
      sections: [
        { id: 'name', title: 'The name', body: 'The name “Pyli” (gate) refers to its position as a passage to the mountains and the villages of Koziakas and Pindos.' },
        { id: 'geography', title: 'Geography', body: 'Built lower than the surrounding villages, Pyli is a hub for the bridge, churches and mountain routes.' },
        { id: 'today', title: 'Today', body: 'A modern small town with cafés, tavernas and services, a base for visitors to the area.' },
      ],
      faq: [
        { q: 'Why is it called Pyli?', a: 'For its position as a passage to the mountain and villages.' },
        { q: 'Where is it?', a: 'In Trikala, at the foot of Koziakas, 22 km from the city.' },
        { q: 'Has a historic centre?', a: 'It has traditional spots and nearby Porta Panagia; walk the village.' },
        { q: 'A base for trips?', a: 'Yes, routes to bridge, mountain and villages start here.' },
      ],
    },
  },
];
