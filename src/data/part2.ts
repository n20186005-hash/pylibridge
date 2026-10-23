import type { Topic } from './types';

export const PART2: Topic[] = [
  {
    slug: 'without-a-car',
    category: 'transport',
    related: ['getting-there', 'parking-access', 'routes/trikala-day-trip', 'nearby/elati'],
    el: {
      metaTitle: 'Στο Γεφύρι της Πύλης χωρίς αυτοκίνητο',
      h1: 'Πώς να πάτε χωρίς αυτοκίνητο',
      intro:
        'Η δημόσια συγκοινωνία είναι περιορισμένη, αλλά υπάρχουν επιλογές. Συγκεντρώσαμε τα δρομολόγια, τις αλλαγές και τα σημεία προσοχής για επίσκεψη χωρίς ΙΧ.',
      sections: [
        { id: 'bus', title: 'Λεωφορείο ως την Πύλη', body: 'Τα περιφερειακά ΚΤΕΛ συνδέουν τα Τρίκαλα με την Πύλη (περίπου 30–40 λεπτά). Ελέγξτε τα δρομολόγια, καθώς αραιώνουν τα Σαββατοκύριακα.' },
        { id: 'last-leg', title: 'Τελευταίο τμήμα', body: 'Από την Πύλη ως το γεφύρι είναι 2 χλμ. Τα πόδια (25–30 λεπτά) ή σύντομο ταξί είναι οι επιλογές. Συμφωνήστε την τιμή του ταξί και ρωτήστε για την επιστροφή.' },
        { id: 'tips', title: 'Συμβουλές', body: 'Τα επιστρέφοντα ταξί είναι σπάνια · κλείστε την επιστροφή εκ των προτέρων. Κατεβάστε χάρτη offline και τα δρομολόγια πριν φύγετε.' },
      ],
      faq: [
        { q: 'Υπάρχει τρένο ως το γεφύρι;', a: 'Όχι απευθείας. Τρένο ως τα Τρίκαλα (αλλαγή στον Παλαιοφάρσαλο) και μετά λεωφορείο ή ταξί.' },
        { q: 'Πόσο κοστίζει το ταξί;', a: 'Ταξί από τα Τρίκαλα κοστίζει ενδεικτικά 30–45 € η διαδρομή · συμφωνήστε την τιμή πριν ξεκινήσετε.' },
        { q: 'Μπορώ να κάνω πεζοπορία από την Πύλη;', a: 'Ναι, 2 χλμ. τοπικών δρόμων, αλλά χωρίς πάντα πεζοδρόμιο · προτιμήστε το πρωί για δροσιά.' },
        { q: 'Τι αν πιάσει βροχή;', a: 'Αναβάλλετε την πεζοπορία · χρησιμοποιήστε τον χρόνο στην Πύλη για φαγητό και μουσεία.' },
      ],
    },
    en: {
      metaTitle: 'To Pyli Bridge Without a Car',
      h1: 'How to Visit Without a Car',
      intro: 'Public transport is limited but workable. Here are the services, changes and cautions for a car-free visit.',
      sections: [
        { id: 'bus', title: 'Bus to Pyli', body: 'Regional KTEL buses link Trikala with Pyli (about 30–40 minutes). Check times, as services thin out at weekends.' },
        { id: 'last-leg', title: 'The last leg', body: 'From Pyli to the bridge is 2 km. On foot (25–30 minutes) or a short taxi are the options. Agree the fare and ask about the return.' },
        { id: 'tips', title: 'Tips', body: 'Returning taxis are rare — pre-book the return. Download an offline map and timetables before you set off.' },
      ],
      faq: [
        { q: 'Is there a train to the bridge?', a: 'Not directly. Train to Trikala (change at Palaiofarsalos), then bus or taxi.' },
        { q: 'How much is a taxi?', a: 'A taxi from Trikala is roughly €30–45 each way — agree the price before starting.' },
        { q: 'Can I walk from Pyli?', a: 'Yes, 2 km of local roads, but not always with a footway — go early for coolth.' },
        { q: 'What if it rains?', a: 'Postpone the walk; spend the time in Pyli for food and sights.' },
      ],
    },
    zh: {
      metaTitle: '无车如何前往皮利桥',
      h1: '不自驾怎么去皮利桥',
      intro: '公共交通班次有限，但仍可行。下面整理班次、换乘与无车出行的注意事项。',
      sections: [
        { id: 'bus', title: '乘巴士到皮利镇', body: '区间 KTEL 巴士连接特里卡拉与皮利镇（约 30–40 分钟）。班次周末会减少，建议提前查时刻表。' },
        { id: 'last-leg', title: '最后一段', body: '从皮利镇到石桥约 2 公里，可步行（25–30 分钟）或搭短途出租。议好车费并问清返程。' },
        { id: 'tips', title: '小贴士', body: '返程出租车很少，建议提前约好回程。出发前下载离线地图与时刻表。' },
      ],
      faq: [
        { q: '有到桥边的火车吗？', a: '没有直达。先乘火车到特里卡拉（在帕莱奥法萨洛斯换乘），再转巴士或出租。' },
        { q: '出租车大概多少钱？', a: '从特里卡拉出发单程约 30–45 欧元，出发前请议好价。' },
        { q: '能从皮利镇步行吗？', a: '可以，沿乡道约 2 公里，但未必全程有人行道，建议清晨清凉时走。' },
        { q: '下雨怎么办？', a: '改步行计划，把时间留给皮利镇用餐和参观。' },
      ],
    },
  },
  {
    slug: 'nearby-attractions',
    category: 'nearby',
    related: ['nearby/porta-panagia', 'nearby/dousiko-monastery', 'nearby/palaiokarya-bridge', 'nearby/elati'],
    el: {
      metaTitle: 'Αξιοθέατα κοντά στο Γεφύρι της Πύλης',
      h1: 'Αξιοθέατα κοντά στο Γεφύρι της Πύλης',
      intro:
        'Η περιοχή της Πύλης και του Κόζιακα προσφέρει βυζαντινές εκκλησίες, μοναστήρια, άλλες πέτρινες γέφυρες και ορεινά χωριά. Εδώ μια σύνοψη για να οργανώσετε τη διαδρομή σας.',
      sections: [
        { id: 'culture', title: 'Πολιτισμός', body: 'Η βυζαντινή Πόρτα Παναγιά (13ος αι.) απέχει περίπου 2 χλμ., ενώ η Μονή Δουσίκου — ίδρυμα του Αγίου Βησσαρίωνα — βρίσκεται λίγο ψηλότερα. Και τα δύο συνδυάζονται εύκολα με το γεφύρι.' },
        { id: 'bridges', title: 'Άλλες πέτρινες γέφυρες', body: 'Η Παλαιοκαρυά με τον καταρράκτη της είναι δεύτερη γνωστή γέφυρα της περιοχής, περίπου 20 λεπτά με αυτοκίνητο. Συγκρίνετε την με το μονότοξο της Πύλης.' },
        { id: 'villages', title: 'Ορεινά χωριά', body: 'Τα Ελάτη, Περτούλι, Νεραϊδοχώρι και το οροπέδιο του Περτουλίου απέχουν 20–40 λεπτά και προσφέρουν φύση, φαγητό και διαμονή.' },
      ],
      faq: [
        { q: 'Ποιο είναι το κοντινότερο αξιοθέατο;', a: 'Η Πόρτα Παναγιά, περίπου 2 χλμ. από το γεφύρι.' },
        { q: 'Μπορώ να δω όλα σε μια μέρα;', a: 'Γεφύρι + Πόρτα Παναγιά + γεύμα στην Πύλη εύκολα. Για χωριά χρειάζεστε ημίμερο ή ολόκληρη μέρα.' },
        { q: 'Τι είναι το Ροπότο;', a: 'Χωριό με κεκλιμένα κτίρια λόγω καθίζησης εδάφους — ενδιαφέρον γεωλογικό τοπίο, με προσοχή στην πρόσβαση.' },
        { q: 'Πού βρίσκεται ο Κόζιακας;', a: 'Ορεινός όγκος πάνω από την Πύλη, με μονοπάτια πεζοπορίας και θέα προς τον Πορταϊκό.' },
      ],
    },
    en: {
      metaTitle: 'Attractions Near Pyli Bridge',
      h1: 'Attractions Near Pyli Bridge',
      intro: 'The Pyli and Koziakas area offers Byzantine churches, monasteries, other stone bridges and mountain villages. Here is an overview to plan your route.',
      sections: [
        { id: 'culture', title: 'Culture', body: 'The 13th-century Byzantine Porta Panagia is about 2 km away, and the Dousiko Monastery — founded by Saint Vissarion — sits a little higher. Both combine easily with the bridge.' },
        { id: 'bridges', title: 'Other stone bridges', body: 'Palaiokarya with its waterfall is the area’s second noted bridge, about 20 minutes by car. Compare it with the single arch at Pyli.' },
        { id: 'villages', title: 'Mountain villages', body: 'Elati, Pertouli, Neraidochori and the Pertouli meadows are 20–40 minutes away, offering nature, food and lodging.' },
      ],
      faq: [
        { q: 'What is the nearest sight?', a: 'Porta Panagia, about 2 km from the bridge.' },
        { q: 'Can I see everything in one day?', a: 'Bridge + Porta Panagia + lunch in Pyli is easy. Villages need a half or full day.' },
        { q: 'What is Ropoto?', a: 'A village with tilted buildings from ground subsidence — an interesting geological site, with caution on access.' },
        { q: 'Where is Koziakas?', a: 'A mountain mass above Pyli with hiking trails and views over the Portaikos.' },
      ],
    },
    zh: {
      metaTitle: '皮利桥周边景点',
      h1: '皮利桥周边景点',
      intro: '皮利镇与科齐亚卡斯一带拥有拜占庭教堂、修道院、其它石桥与山区村庄。下面概览以便安排路线。',
      sections: [
        { id: 'culture', title: '人文', body: '13 世纪的拜占庭教堂波尔塔帕纳吉亚距桥约 2 公里；杜西科修道院（圣维萨里翁创办）在其上方，两者都可与石桥轻松串联。' },
        { id: 'bridges', title: '其它石桥', body: '帕莱奥卡里亚桥与瀑布是本区第二座知名石桥，自驾约 20 分钟，可与皮利的单拱比较。' },
        { id: 'villages', title: '山区村庄', body: '埃拉蒂、佩尔图利、内莱多霍里与佩尔图利草原距此 20–40 分钟，提供自然、餐饮与住宿。' },
      ],
      faq: [
        { q: '最近的景点是哪个？', a: '波尔塔帕纳吉亚，距桥约 2 公里。' },
        { q: '一天能看完吗？', a: '桥＋波尔塔帕纳吉亚＋皮利镇午餐很轻松；看村庄需半日或一整天。' },
        { q: '罗波托是什么？', a: '因地面沉降而倾斜的房屋村落，是有趣的地质景观，前往请注意通行。' },
        { q: '科齐亚卡斯在哪？', a: '皮利镇上方的山体，有步道与俯瞰波尔泰科斯河的视野。' },
      ],
    },
  },
  {
    slug: 'nearby/porta-panagia',
    zh: {
      metaTitle: '波尔塔帕纳吉亚教堂：皮利附近的拜占庭教堂',
      h1: '波尔塔帕纳吉亚——皮利附近的拜占庭教堂',
      intro: '波尔塔帕纳吉亚（圣母大门）是 13 世纪的拜占庭遗迹，位于皮利镇以西约 2 公里，可与石桥轻松同游。',
      sections: [
        { id: 'history', title: '历史', body: '建于 1283 年左右，其名字意为“圣母大门”，保存有拜占庭与早期基督教元素，是当地重要纪念物。' },
        { id: 'visit', title: '参观', body: '从皮利沿路向西约 2 公里，免费开放，建议早到并尊重这是礼拜场所。' },
        { id: 'practical', title: '实用', body: '停车在路边；与石桥、皮利镇午餐可组成半日游。' },
      ],
      faq: [
        { q: '有多老？', a: '约建于 1283 年，属 13 世纪拜占庭建筑。' },
        { q: '免费吗？', a: '免费开放，请尊重场所。' },
        { q: '离桥近吗？', a: '约 2 公里，同一趟行程即可顺道参观。' },
        { q: '怎么去？', a: '从皮利镇沿路向西约 2 公里，路边可停车。' },
      ],
    },
    category: 'nearby',
    related: ['nearby-attractions', 'history/saint-vissarion', 'history/pyli-bridge', 'routes/pyli-half-day'],
    el: {
      metaTitle: 'Πόρτα Παναγιά: Οδηγός επίσκεψης κοντά στην Πύλη',
      h1: 'Πόρτα Παναγιά — Βυζαντινή εκκλησία κοντά στην Πύλη',
      intro:
        'Η Πόρτα Παναγιά είναι βυζαντινή εκκλησία του 13ου αιώνα, περίπου 2 χλμ. από το γεφύρι. Συνδυάζεται ιδανικά με την επίσκεψη στο πέτρινο γεφύρι.',
      sections: [
        { id: 'history', title: 'Ιστορία', body: 'Χτίστηκε τον 13ο αιώνα πάνω σε παλαιότερα ερείπια και αποτελεί ένα από τα σημαντικά βυζαντινά μνημεία της Θεσσαλίας. Ο ναός είναι αφιερωμένος στην Παναγία και διατηρεί μεσοβυζαντινά στοιχεία.' },
        { id: 'visit', title: 'Τι θα δείτε', body: 'Ο επισκέπτης βλέπει τον κυρίως ναό, το τέμπλο και τα ίχνη τοιχογραφιών. Ο περιβάλλων χώρος προσφέρει ησυχία και θέα προς τον Πορταϊκό.' },
        { id: 'practical', title: 'Πρακτικές πληροφορίες', body: 'Ο χώρος είναι εύκολα προσβάσιμος με αυτοκίνητο από το γεφύρι. Οι ώρες λειτουργίας και επίσκεψης ενδέχεται να αλλάζουν — επιβεβαιώστε τοπικά πριν την επίσκεψη.' },
      ],
      faq: [
        { q: 'Πόσο απέχει από το γεφύρι;', a: 'Περίπου 2 χλμ., σύντομη διαδρομή με αυτοκίνητο.' },
        { q: 'Είναι ανοιχτή στο κοινό;', a: 'Ο ναός είναι θρησκευτικός χώρος · τηρείτε τον κώδικα ενδυμασίας και σεβαστείτε τις ώρες λειτουργίας.' },
        { q: 'Υπάρχει εισιτήριο;', a: 'Συνήθως δεν υπάρχει ξεναγός χρέωση, αλλά επιβεβαιώστε τυχόν ωράριο επισκέψιμου τοπικά.' },
        { q: 'Αξίζει μαζί με το γεφύρι;', a: 'Ναι, ο συνδυασμός γέφυρας και βυζαντινής εκκλησίας είναι συμπληρωματικός.' },
      ],
    },
    en: {
      metaTitle: 'Porta Panagia: Visitor Guide near Pyli',
      h1: 'Porta Panagia — Byzantine Church near Pyli',
      intro: 'Porta Panagia is a 13th-century Byzantine church about 2 km from the bridge. It pairs perfectly with a visit to the stone bridge.',
      sections: [
        { id: 'history', title: 'History', body: 'Built in the 13th century on earlier ruins, it is one of Thessaly’s significant Byzantine monuments, dedicated to the Virgin and retaining Middle Byzantine features.' },
        { id: 'visit', title: 'What you will see', body: 'Visitors see the main nave, the templon and traces of frescoes. The grounds are quiet with views toward the Portaikos.' },
        { id: 'practical', title: 'Practical information', body: 'The site is easily reached by car from the bridge. Opening and visiting hours may vary — confirm locally before you go.' },
      ],
      faq: [
        { q: 'How far from the bridge?', a: 'About 2 km, a short drive.' },
        { q: 'Is it open to the public?', a: 'It is a place of worship — dress modestly and respect service hours.' },
        { q: 'Is there an entrance fee?', a: 'Usually no charged guiding, but confirm any visiting hours locally.' },
        { q: 'Worth combining with the bridge?', a: 'Yes, the bridge and Byzantine church complement each other.' },
      ],
    },
  },
  {
    slug: 'nearby/dousiko-monastery',
    zh: {
      metaTitle: '杜西科修道院：参观指南',
      h1: '杜西科修道院——皮利上方的修道院',
      intro: '杜西科修道院（圣维萨里翁创办）位于皮利镇上方，是这一带重要的宗教与文化纪念物。',
      sections: [
        { id: 'history', title: '历史', body: '由圣维萨里翁相关传统联系，其创立文书于 1536 年获确认，是当地精神生活的中心。' },
        { id: 'access', title: '如何到达', body: '从皮利镇沿山路向上约数公里，自驾或出租可达，具体路况请确认。' },
        { id: 'respect', title: '礼仪', body: '作为运作中的修道院，请着装得体、保持安静，并留意开放时间。' },
      ],
      faq: [
        { q: '离皮利远吗？', a: '在皮利镇上方，沿山路数公里，建议自驾或出租。' },
        { q: '免费吗？', a: '通常免费开放，欢迎随喜；以现场为准。' },
        { q: '开放时间？', a: '随季节与修道院安排变动，请提前确认。' },
        { q: '和圣维萨里翁有关？', a: '有关，修道院与他的传统紧密相连。' },
      ],
    },
    category: 'nearby',
    related: ['nearby/porta-panagia', 'history/saint-vissarion', 'nearby-attractions'],
    el: {
      metaTitle: 'Μονή Δουσίκου: Οδηγός επίσκεψης',
      h1: 'Μονή Δουσίκου — το μοναστήρι του Αγίου Βησσαρίωνα',
      intro:
        'Η Ιερά Μονή του Αγίου Σωτήρος (Δουσίκου) ιδρύθηκε από τον Άγιο Βησσαρίωνα κοντά στην Πύλη. Εδώ πληροφορίες για την ιστορία, την πρόσβαση και τον σεβασμό στον χώρο.',
      sections: [
        { id: 'history', title: 'Ιστορία', body: 'Το μοναστήρι συνδέεται άμεσα με τον Άγιο Βησσαρίωνα, ιδρυτή και του γεφυριού της Πύλης. Τα ιδρυτικά έγγραφα επικυρώθηκαν από το Οικουμενικό Πατριαρχείο το 1536.' },
        { id: 'access', title: 'Πρόσβαση', body: 'Βρίσκεται λίγο έξω από την Πύλη, με πρόσβαση οδικώς. Η διαδρομή είναι σκορπισμένη στη φύση και ήρεμη.' },
        { id: 'respect', title: 'Κανόνες επίσκεψης', body: 'Ως ενεργό μοναστήρι, τηρείτε τον κώδικα ενδυμασίας, τις ώρες λειτουργίας και την ησυχία. Επιβεβαιώστε το ωράριο επισκέψιμου τοπικά.' },
      ],
      faq: [
        { q: 'Πού βρίσκεται;', a: 'Κοντά στην Πύλη, με οδική πρόσβαση μέσα στη φύση.' },
        { q: 'Συνδέεται με το γεφύρι;', a: 'Ναι, και τα δύο ίδρυσε ο Άγιος Βησσαρίωνας.' },
        { q: 'Υπάρχει είσοδος;', a: 'Η είσοδος συνήθως είναι ελεύθερη, αλλά σεβαστείτε τους κανόνες της μονής.' },
        { q: 'Πότε ανοίγει;', a: 'Το ωράριο μεταβάλλεται · ρωτήστε την Ιερά Μητρόπολη ή την τοπική κοινότητα.' },
      ],
    },
    en: {
      metaTitle: 'Dousiko Monastery: Visitor Guide',
      h1: 'Dousiko Monastery — Saint Vissarion’s Monastery',
      intro: 'The Holy Monastery of the Saviour (Dousiko) was founded by Saint Vissarion near Pyli. Here is its history, access and how to visit respectfully.',
      sections: [
        { id: 'history', title: 'History', body: 'The monastery is directly linked to Saint Vissarion, who also founded Pyli bridge. Its foundation charters were confirmed by the Ecumenical Patriarchate in 1536.' },
        { id: 'access', title: 'Access', body: 'It lies just outside Pyli, reached by road through quiet natural surroundings.' },
        { id: 'respect', title: 'Visiting rules', body: 'As an active monastery, observe the dress code, service hours and quiet. Confirm the visiting hours locally.' },
      ],
      faq: [
        { q: 'Where is it?', a: 'Near Pyli, reached by road amid nature.' },
        { q: 'Is it connected to the bridge?', a: 'Yes — both were founded by Saint Vissarion.' },
        { q: 'Is there an entrance fee?', a: 'Entry is usually free, but respect the monastery’s rules.' },
        { q: 'When is it open?', a: 'Hours vary — ask the Metropolis or local community.' },
      ],
    },
  },
  {
    slug: 'nearby/palaiokarya-bridge',
    zh: {
      metaTitle: '帕莱奥卡里亚桥与瀑布',
      h1: '帕莱奥卡里亚桥与瀑布',
      intro: '帕莱奥卡里亚是另一座知名石桥，瀑布从桥侧倾泻，是区域里最具画面感的桥瀑同框。',
      sections: [
        { id: 'bridge', title: '石桥', body: '单拱石桥跨越溪流，与瀑布并置，形成独特景观，距皮利约 20 分钟车程。' },
        { id: 'waterfall', title: '瀑布', body: '水流从桥旁崖壁落下，水量随季节变化，春季最盛。' },
        { id: 'visit', title: '参观', body: '路边有观景点与短步道，停车后步行即达；请留意湿滑。' },
      ],
      faq: [
        { q: '离皮利远吗？', a: '自驾约 20 分钟。' },
        { q: '和皮利桥比？', a: '皮利桥更雄伟，帕莱奥卡里亚以桥瀑同框取胜。' },
        { q: '免费吗？', a: '户外景点通常免费，以当地为准。' },
        { q: '最佳季节？', a: '春季水量大，画面最佳。' },
      ],
    },
    category: 'nearby',
    related: ['nearby-attractions', 'photo-spots', 'routes/two-stone-bridges', 'history/stone-bridges-trikala'],
    el: {
      metaTitle: 'Γεφύρι Παλαιοκαρυάς & καταρράκτης',
      h1: 'Γεφύρι της Παλαιοκαρυάς και καταρράκτης',
      intro:
        'Η Παλαιοκαρυά είναι μια άλλη ιστορική πέτρινη γέφυρα της περιοχής, πλάι σε καταρράκτη. Απέχει περίπου 20 λεπτά με αυτοκίνητο από την Πύλη και συγκρίνεται εύκολα με το μονότοξο της Πύλης.',
      sections: [
        { id: 'bridge', title: 'Η γέφυρα', body: 'Το γεφύρι της Παλαιοκαρυάς είναι πέτρινο, ιστορικό και αποτελεί χαρακτηριστικό δείγμα της τοπικής παράδοσης λιθοδομής, όπως και εκείνο της Πύλης.' },
        { id: 'waterfall', title: 'Ο καταρράκτης', body: 'Δίπλα στη γέφυρα πέφτει καταρράκτης, δημιουργώντας ένα από τα πιο φωτογενή σημεία της περιοχής, ιδίως την άνοιξη που τα νερά είναι ορμητικά.' },
        { id: 'visit', title: 'Επίσκεψη', body: 'Υπάρχει χώρος στάθμευσης κοντά στο σημείο. Οι συνθήκες πρόσβασης και η ροή του νερού αλλάζουν με την εποχή — ελέγξτε πριν ξεκινήσετε.' },
      ],
      faq: [
        { q: 'Πόσο απέχει από την Πύλη;', a: 'Περίπου 20 λεπτά με αυτοκίνητο.' },
        { q: 'Είναι ελεύθερη η είσοδος;', a: 'Συνήθως ναι, ως υπαίθριος χώρος, αλλά επιβεβαιώστε τοπικά.' },
        { q: 'Πότε είναι καλύτερα ο καταρράκτης;', a: 'Την άνοιξη και μετά από βροχές το νερό είναι περισσότερο και πιο εντυπωσιακό.' },
        { q: 'Αξίζει μαζί με το γεφύρι της Πύλης;', a: 'Ναι — οι δύο γέφυρες δίνουν μια ωραία σύγκριση της ίδιας παράδοσης.' },
      ],
    },
    en: {
      metaTitle: 'Palaiokarya Bridge & Waterfall',
      h1: 'Palaiokarya Bridge and Waterfall',
      intro: 'Palaiokarya is another historic stone bridge in the area, beside a waterfall. It is about 20 minutes by car from Pyli and compares nicely with the single arch at Pyli.',
      sections: [
        { id: 'bridge', title: 'The bridge', body: 'The Palaiokarya bridge is a historic stone structure and a characteristic example of the local masonry tradition, like the one at Pyli.' },
        { id: 'waterfall', title: 'The waterfall', body: 'A waterfall drops beside the bridge, creating one of the most photogenic spots in the area, especially in spring when the water is vigorous.' },
        { id: 'visit', title: 'Visiting', body: 'There is parking near the spot. Access conditions and water flow change with the season — check before you set off.' },
      ],
      faq: [
        { q: 'How far from Pyli?', a: 'About 20 minutes by car.' },
        { q: 'Is entry free?', a: 'Usually yes as an open-air site, but confirm locally.' },
        { q: 'When is the waterfall best?', a: 'In spring and after rain the water is fuller and more impressive.' },
        { q: 'Worth combining with Pyli bridge?', a: 'Yes — the two bridges give a nice comparison of the same tradition.' },
      ],
    },
  },
];
