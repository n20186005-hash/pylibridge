import type { Topic } from './types';

export const PART6: Topic[] = [
  {
    slug: 'food/local-products',
    category: 'food',
    related: ['food/local-food-guide', 'food/restaurants-pyli', 'food/restaurants-elati'],
    el: {
      metaTitle: 'Τοπικά προϊόντα Ελάτης & Πύλης: Τι να αγοράσετε',
      h1: 'Τοπικά προϊόντα Ελάτης & Πύλης',
      intro:
        'Η περιοχή προσφέρει τοπικά τρόφιμα και παραδοσιακά προϊόντα για αγορές και σουβενίρ. Εδώ τι να αναζητήσετε και πού, γενικά.',
      sections: [
        { id: 'what', title: 'Τι να αγοράσετε', body: 'Τυροκομικά, μέλι, γλυκά κουταλιού, όσπρια και χειροτεχνήματα είναι τυπικά τοπικά προϊόντα της περιοχής.' },
        { id: 'where', title: 'Πού', body: 'Σε παντοπωλεία, μανάβικα και μικρά εργαστήρια σε Πύλη, Ελάτη και τους οικισμούς. Ρωτήστε τους ντόπιους για φρέσκα εποχικά.' },
        { id: 'note', title: 'Σημείωση', body: 'Οι επιχειρήσεις και το ωράριό τους αλλάζουν · επιβεβαιώστε διαθεσιμότητα επί τόπου πριν βασιστείτε σε συγκεκριμένο μαγαζί.' },
      ],
      faq: [
        { q: 'Ποια είναι τα κλασικά σουβενίρ;', a: 'Τοπικά τυριά, μέλι, γλυκά και χειροτεχνήματα.' },
        { q: 'Υπάρχουν αγροτικά προϊόντα;', a: 'Ναι, όσπρια και εποχικά λαχανικά συχνά διατίθενται τοπικά.' },
        { q: 'Μπορώ να τα βρω κοντά στο γεφύρι;', a: 'Στην Πύλη (2 χλμ.) θα βρείτε τα περισσότερα · στο γεφύρι μόνο το καφέ.' },
        { q: 'Είναι ασφαλή τα τρόφιμα;', a: 'Αγοράστε από καταστήματα με σήμανση και ημερομηνίες · μην παίρνετε ασυσκεύαστα χωρίς πληροφορία.' },
      ],
    },
    en: {
      metaTitle: 'Local Products of Elati & Pyli: What to Buy',
      h1: 'Local Products of Elati & Pyli',
      intro: 'The area offers local foods and traditional products for shopping and souvenirs. Here is what to look for and where, in general.',
      sections: [
        { id: 'what', title: 'What to buy', body: 'Dairy, honey, spoon sweets, legumes and handicrafts are typical local products of the region.' },
        { id: 'where', title: 'Where', body: 'At grocers, greengrocers and small workshops in Pyli, Elati and the settlements. Ask locals for fresh seasonal items.' },
        { id: 'note', title: 'Note', body: 'Businesses and hours change — confirm availability on site before relying on a specific shop.' },
      ],
      faq: [
        { q: 'What are classic souvenirs?', a: 'Local cheeses, honey, sweets and handicrafts.' },
        { q: 'Are there farm products?', a: 'Yes, legumes and seasonal vegetables are often available locally.' },
        { q: 'Can I find them near the bridge?', a: 'In Pyli (2 km) you will find most; at the bridge only the café.' },
        { q: 'Are the foods safe?', a: 'Buy from labelled shops with dates; avoid unpackaged without info.' },
      ],
    },
    zh: {
      metaTitle: '埃拉蒂与皮利的当地特产：买什么',
      h1: '埃拉蒂与皮利的当地产品',
      intro: '这一带可买到本地食材与传统特产作为伴手礼。下面大致说说买什么、在哪里买。',
      sections: [
        { id: 'what', title: '买什么', body: '乳制品、蜂蜜、果酱、豆类与手工艺品是本区典型的当地产品。' },
        { id: 'where', title: '在哪里', body: '皮利、埃拉蒂及聚落中的杂货店、蔬果店与小作坊有售，可向当地人打听时令鲜货。' },
        { id: 'note', title: '提示', body: '商家与营业时间会变，依赖具体店铺前请现场确认供货。' },
      ],
      faq: [
        { q: '经典伴手礼有哪些？', a: '当地奶酪、蜂蜜、甜点与手工艺品。' },
        { q: '有农产吗？', a: '有，豆类与当季蔬菜常可本地购得。' },
        { q: '桥边能买到吗？', a: '大多数在皮利镇（2 公里）可买到，桥边只有咖啡馆。' },
        { q: '食品安全吗？', a: '请在有标签与日期的店家购买，避免无信息的散装品。' },
      ],
    },
  },
  {
    slug: 'routes/pyli-half-day',
    category: 'routes',
    related: ['nearby/porta-panagia', 'food/ennodia-cafe', 'parking-access', 'routes/pyli-heritage-walk'],
    el: {
      metaTitle: 'Ημίμερη εκδρομή στην Πύλη: Γεφύρι, Εκκλησία & Καφέ',
      h1: 'Ημίμερη εκδρομή στην Πύλη',
      intro:
        'Αν έχετε μόνο λίγες ώρες, συνδυάστε το γεφύρι, την Πόρτα Παναγιά και έναν καφέ. Εδώ ένα πυκνό πρόγραμμα για 3–4 ώρες.',
      sections: [
        { id: 'plan', title: 'Το πρόγραμμα', body: 'Άφιξη και στάθμευση στο γεφύρι (30 λεπτά περπάτημα + φωτογραφίες), μετά Πόρτα Παναγιά (20 λεπτά), γεύμα ή καφές στην Πύλη, και επιστροφή.' },
        { id: 'timing', title: 'Χρόνος', body: 'Μετρήστε περίπου 1,5 ώρα για το γεφύρι και την εκκλησία, 1 ώρα για φαγητό/καφέ, συν τις μετακινήσεις.' },
        { id: 'tips', title: 'Συμβουλές', body: 'Ξεκινήστε νωρίς το καλοκαίρι για δροσιά και φως. Έχετε νερό και παπούτσια με καλό πάτημα.' },
      ],
      faq: [
        { q: 'Χωράει σε μισή μέρα;', a: 'Ναι, γεφύρι + Πόρτα Παναγιά + καφές χωράνε άνετα σε 3–4 ώρες.' },
        { q: 'Χρειάζομαι ξεναγό;', a: 'Όχι · τα σημεία είναι αυτονόητα και καλά ορατά · αρκεί ένας χάρτης.' },
        { q: 'Πού να φάω;', a: 'Στην Πύλη ή στο καφέ Εννοδία δίπλα στο γεφύρι.' },
        { q: 'Κατάλληλο για ηλικιωμένους;', a: 'Ναι, με ήπιο ρυθμό και το σημείο θέας από τον δρόμο.' },
      ],
    },
    en: {
      metaTitle: 'Pyli Half-Day Trip: Bridge, Church & Coffee',
      h1: 'Pyli Half-Day Trip',
      intro: 'If you only have a few hours, combine the bridge, Porta Panagia and a coffee. Here is a tight 3–4 hour plan.',
      sections: [
        { id: 'plan', title: 'The plan', body: 'Arrive and park at the bridge (30 min walk + photos), then Porta Panagia (20 min), lunch or coffee in Pyli, and return.' },
        { id: 'timing', title: 'Timing', body: 'About 1.5 hours for bridge and church, 1 hour for food/coffee, plus transfers.' },
        { id: 'tips', title: 'Tips', body: 'Start early in summer for coolth and light. Carry water and grippy shoes.' },
      ],
      faq: [
        { q: 'Does it fit a half day?', a: 'Yes, bridge + Porta Panagia + coffee fit comfortably in 3–4 hours.' },
        { q: 'Do I need a guide?', a: 'No — the spots are self-evident and visible; a map suffices.' },
        { q: 'Where to eat?', a: 'In Pyli or at Ennodia café by the bridge.' },
        { q: 'Suitable for seniors?', a: 'Yes, at a gentle pace using the roadside viewpoint.' },
      ],
    },
    zh: {
      metaTitle: '皮利半日游：石桥、教堂与咖啡',
      h1: '皮利半日游',
      intro: '若只有几小时，可把石桥、波尔塔帕纳吉亚与一杯咖啡串起来。下面是一份紧凑的 3–4 小时安排。',
      sections: [
        { id: 'plan', title: '行程', body: '到桥停车（步行 30 分钟＋拍照），再到波尔塔帕纳吉亚（20 分钟），皮利镇用餐或喝咖啡，返程。' },
        { id: 'timing', title: '用时', body: '石桥与教堂约 1.5 小时，吃饭/咖啡约 1 小时，外加车程。' },
        { id: 'tips', title: '建议', body: '夏季早点出发，凉爽且光线好；带水与防滑鞋。' },
      ],
      faq: [
        { q: '半天够吗？', a: '够，桥＋波尔塔帕纳吉亚＋咖啡 3–4 小时很从容。' },
        { q: '需要导游吗？', a: '不需要，景点一目了然，有地图即可。' },
        { q: '在哪吃？', a: '皮利镇或桥边恩诺迪亚咖啡。' },
        { q: '适合老人吗？', a: '适合，放慢节奏并善用路边观景点即可。' },
      ],
    },
  },
  {
    slug: 'routes/trikala-day-trip',
    zh: {
      metaTitle: '从特里卡拉出发的一日游',
      h1: '从特里卡拉出发的一日游',
      intro: '以特里卡拉为基地，可将石桥与周边村庄串成一日。下面给出交通与行程建议。',
      sections: [
        { id: 'transport', title: '交通', body: '从特里卡拉自驾约 25–35 分钟，或乘 KTEL 到皮利镇再步行/打车 2 公里到桥。' },
        { id: 'plan', title: '行程', body: '上午游桥与波尔塔帕纳吉亚，皮利镇午餐，下午埃拉蒂或佩尔图利高原，傍晚返程。' },
        { id: 'tips', title: '建议', body: '周末巴士班次少，自驾更灵活；带水与防滑鞋。' },
      ],
      faq: [
        { q: '当天往返可行吗？', a: '可行，从容且不赶。' },
        { q: '不自驾能去吗？', a: '能，乘 KTEL 到皮利镇再接驳。' },
        { q: '哪个村庄值得加？', a: '埃拉蒂或佩尔图利高原，二选一即可。' },
        { q: '上午还是下午去桥？', a: '上午去桥避开人潮，下午留给村庄。' },
      ],
    },
    category: 'routes',
    related: ['getting-there', 'without-a-car', 'routes/pyli-half-day', 'food/restaurants-pyli'],
    el: {
      metaTitle: 'Μονοήμερη από τα Τρίκαλα: Γεφύρι Πύλης',
      h1: 'Μονοήμερη εκδρομή από τα Τρίκαλα',
      intro:
        'Τα Τρίκαλα απέχουν μόλις 22 χλμ. από το γεφύρι, ιδανικά για μονοήμερη. Εδώ πώς να οργανώσετε μετάβαση και επιστροφή.',
      sections: [
        { id: 'transport', title: 'Μετάβαση', body: 'Με αυτοκίνητο 25–35 λεπτά, με ΚΤΕΛ ως την Πύλη και ταξί/τα πόδια για το τελευταίο τμήμα. Ελέγξτε τα δρομολόγια επιστροφής.' },
        { id: 'plan', title: 'Πρόγραμμα', body: 'Πρωινή αναχώρηση, γεφύρι και Πόρτα Παναγιά, μεσημεριανό στην Πύλη, και επιστροφή το απόγευμα.' },
        { id: 'tips', title: 'Συμβουλές', body: 'Αν δεν έχετε αυτοκίνητο, κλείστε την επιστροφή με ταξί από την Πύλη εκ των προτέρων.' },
      ],
      faq: [
        { q: 'Πόση ώρα χρειάζεται;', a: 'Μισή μέρα για το γεφύρι, ολόκληρη αν προσθέσετε εκκλησία και γεύμα.' },
        { q: 'Μπορώ χωρίς αυτοκίνητο;', a: 'Ναι, ΚΤΕΛ + ταξί · κλείστε την επιστροφή.' },
        { q: 'Αξίζει το χειμώνα;', a: 'Ναι για ησυχία, αλλά προσέξτε τον καιρό και τον δρόμο.' },
        { q: 'Τι να πάρω μαζί;', a: 'Νερό, παπούτσια πεζοπορίας και φορτιστή για το κινητό (σήμα ενδέχεται να είναι ασθενές).' },
      ],
    },
    en: {
      metaTitle: 'Day Trip from Trikala: Pyli Bridge',
      h1: 'Day Trip from Trikala',
      intro: 'Trikala is only 22 km from the bridge — perfect for a day trip. Here is how to organise the round trip.',
      sections: [
        { id: 'transport', title: 'Getting there', body: 'By car 25–35 minutes; by KTEL to Pyli then taxi/on foot for the last stretch. Check return times.' },
        { id: 'plan', title: 'Plan', body: 'Morning departure, bridge and Porta Panagia, lunch in Pyli, return in the afternoon.' },
        { id: 'tips', title: 'Tips', body: 'Without a car, pre-book the taxi return from Pyli.' },
      ],
      faq: [
        { q: 'How long does it take?', a: 'Half a day for the bridge; a full day if you add the church and a meal.' },
        { q: 'Without a car?', a: 'Yes, KTEL + taxi; pre-book the return.' },
        { q: 'Worth it in winter?', a: 'Yes for quiet, but mind weather and road.' },
        { q: 'What to bring?', a: 'Water, hiking shoes and a phone charger (signal may be weak).' },
      ],
    },
  },
  {
    slug: 'routes/pyli-elati-pertouli',
    zh: {
      metaTitle: '皮利–埃拉蒂–佩尔图利自驾',
      h1: '皮利–埃拉蒂–佩尔图利公路之旅',
      intro: '一条把石桥与两座知名山村串起来的山区自驾线，适合半日或一日。',
      sections: [
        { id: 'route', title: '路线', body: '从皮利桥出发，经山区公路到埃拉蒂，再往佩尔图利与高原，全程弯多景好。' },
        { id: 'stops', title: '停靠', body: '沿途可在埃拉蒂用餐、佩尔图利草甸散步，并回程顺拍石桥。' },
        { id: 'note', title: '提示', body: '山路弯急，建议白天行驶并留意天气与来车。' },
      ],
      faq: [
        { q: '要多久？', a: '半日到一日，视停留而定。' },
        { q: '路好开吗？', a: '铺装良好但弯多，慢行更安全。' },
        { q: '从哪开始？', a: '从皮利桥最顺，进城前先游桥。' },
        { q: '冬天能走吗？', a: '通常可以，但请查路况与积雪。' },
      ],
    },
    category: 'routes',
    related: ['nearby/elati', 'nearby/pertouli', 'routes/pyli-half-day', 'routes/mountain-weekend'],
    el: {
      metaTitle: 'Διαδρομή Πύλη–Ελάτη–Περτούλι: Στάσεις & συμβουλές',
      h1: 'Οδική διαδρομή Πύλη – Ελάτη – Περτούλι',
      intro:
        'Μια κλασική ορεινή διαδρομή που ενώνει το γεφύρι με τα χωριά του Κόζιακα. Εδώ πού να σταματήσετε και τι να προσέξετε στον δρόμο.',
      sections: [
        { id: 'route', title: 'Η διαδρομή', body: 'Ξεκινήστε από το γεφύρι, συνεχίστε στην Πύλη και ανηφορίστε προς Ελάτη και Περτούλι. Ο δρόμος είναι ορεινός με στροφές — οδηγείτε προσεκτικά.' },
        { id: 'stops', title: 'Στάσεις', body: 'Στην Πύλη για καφέ, στην Ελάτη για φαγητό/βόλτα, στο Περτούλι για το οροπέδιο. Αφήστε χρόνο για φωτογραφίες.' },
        { id: 'note', title: 'Σημείωση', body: 'Οι χρόνοι στο βουνό είναι ενδεικτικοί — οι στροφές και ο καιρός αλλάζουν την πραγματική διάρκεια. Μην υπολογίζετε μόνο την ευθεία απόσταση.' },
      ],
      faq: [
        { q: 'Πόση ώρα είναι η διαδρομή;', a: 'Ενδεικτικά 1–1,5 ώρα μεταξύ Πύλης και Περτουλίου, χωρίς στάσεις.' },
        { q: 'Είναι δύσκολος ο δρόμος;', a: 'Ορεινός με στροφές, αλλά σε καλή κατάσταση · προσοχή τον χειμώνα.' },
        { q: 'Πού να κάνω στάση;', a: 'Πύλη (καφέ), Ελάτη (φαγητό), Περτούλι (οροπέδιο).' },
        { q: 'Αξίζει ολόκληρη μέρα;', a: 'Ναι, με τα χωριά και τη φύση γίνεται εξαιρετική ημίμερη/ολοήμερη.' },
      ],
    },
    en: {
      metaTitle: 'Pyli–Elati–Pertouli Drive: Stops & Tips',
      h1: 'Pyli – Elati – Pertouli Scenic Drive',
      intro: 'A classic mountain route linking the bridge with the Koziakas villages. Here is where to stop and what to watch on the road.',
      sections: [
        { id: 'route', title: 'The route', body: 'Start at the bridge, continue to Pyli and climb to Elati and Pertouli. The road is mountainous with bends — drive carefully.' },
        { id: 'stops', title: 'Stops', body: 'Pyli for coffee, Elati for food/walk, Pertouli for the plateau. Leave time for photos.' },
        { id: 'note', title: 'Note', body: 'Mountain times are indicative — bends and weather change real duration. Do not rely on straight-line distance.' },
      ],
      faq: [
        { q: 'How long is the drive?', a: 'About 1–1.5 hours between Pyli and Pertouli, without stops.' },
        { q: 'Is the road difficult?', a: 'Mountainous with bends but in good condition; caution in winter.' },
        { q: 'Where to stop?', a: 'Pyli (coffee), Elati (food), Pertouli (plateau).' },
        { q: 'Worth a full day?', a: 'Yes, with the villages and nature it makes a great half/full day.' },
      ],
    },
  },
  {
    slug: 'routes/two-stone-bridges',
    zh: {
      metaTitle: '两座石桥之旅：皮利与帕莱奥卡里亚',
      h1: '两座石桥路线',
      intro: '把皮利桥与帕莱奥卡里亚桥安排在同一天，比较两种单拱之美。',
      sections: [
        { id: 'compare', title: '比较', body: '皮利桥雄伟、跨大河；帕莱奥卡里亚桥以桥瀑同框取胜。' },
        { id: 'route', title: '路线', body: '上午皮利桥，午后帕莱奥卡里亚（约 20 分钟车程），沿途可停村庄。' },
        { id: 'photo', title: '拍照', body: '两座桥各有经典机位，清晨与午后光线不同，请分别安排。' },
      ],
      faq: [
        { q: '一天够吗？', a: '够，两座桥加村庄半日到一日。' },
        { q: '距离远吗？', a: '皮利到帕莱奥卡里亚约 20 分钟车程。' },
        { q: '先去哪？', a: '建议先皮利（上午光好），后帕莱奥卡里亚。' },
        { q: '自驾必要吗？', a: '自驾最灵活；也可拼出租或巴士接驳。' },
      ],
    },
    category: 'routes',
    related: ['nearby/palaiokarya-bridge', 'history/stone-bridges-trikala', 'photo-spots', 'nearby-attractions'],
    el: {
      metaTitle: 'Οι δύο πέτρινες γέφυρες: Πύλη & Παλαιοκαρυά',
      h1: 'Διαδρομή δύο πέτρινων γεφυρών',
      intro:
        'Συγκρίνετε το μονότοξο της Πύλης με την Παλαιοκαρυά και τον καταρράκτη της. Μια διαδρομή που αναδεικνύει την ίδια παράδοση λιθοδομής.',
      sections: [
        { id: 'compare', title: 'Διαφορές', body: 'Η Πύλη έχει ένα μεγάλο τόξο πάνω από τον Πορταϊκό · η Παλαιοκαρυά συνδυάζεται με καταρράκτη. Και οι δύο είναι πέτρινες και ιστορικές.' },
        { id: 'route', title: 'Διαδρομή', body: 'Ξεκινήστε από την Πύλη, συνεχίστε προς Παλαιοκαρυά (περίπου 20 λεπτά). Και τα δύο έχουν χώρο στάθμευσης.' },
        { id: 'photo', title: 'Φωτογραφία', body: 'Το πρωί για την Πύλη, το απόγευμα για τον καταρράκτη της Παλαιοκαρυάς δίνουν το καλύτερο φως.' },
      ],
      faq: [
        { q: 'Πόση ώρα χρειάζεται;', a: 'Περίπου 2–3 ώρες μαζί με τις στάσεις και τη φωτογράφηση.' },
        { q: 'Αξίζουν και οι δύο;', a: 'Ναι, η σύγκριση αναδεικνύει την τοπική παράδοση γεφυριών.' },
        { q: 'Υπάρχει είσοδος;', a: 'Και οι δύο είναι υπαίθριοι χώροι χωρίς εισιτήριο (επιβεβαιώστε τοπικά).' },
        { q: 'Ποιο είναι πιο φωτογενές;', a: 'Η Παλαιοκαρυά με τον καταρράκτη είναι ιδιαίτερα φωτογενής.' },
      ],
    },
    en: {
      metaTitle: 'Two Stone Bridges: Pyli & Palaiokarya',
      h1: 'Two Stone Bridges Route',
      intro: 'Compare the single arch at Pyli with Palaiokarya and its waterfall. A route that shows the same masonry tradition.',
      sections: [
        { id: 'compare', title: 'Differences', body: 'Pyli has one large arch over the Portaikos; Palaiokarya pairs with a waterfall. Both are stone and historic.' },
        { id: 'route', title: 'Route', body: 'Start at Pyli, continue to Palaiokarya (about 20 minutes). Both have parking.' },
        { id: 'photo', title: 'Photography', body: 'Morning for Pyli, afternoon for the Palaiokarya waterfall give the best light.' },
      ],
      faq: [
        { q: 'How long?', a: 'About 2–3 hours including stops and photos.' },
        { q: 'Are both worth it?', a: 'Yes, the comparison highlights the local bridge tradition.' },
        { q: 'Is there an entrance?', a: 'Both are open-air sites without a ticket (confirm locally).' },
        { q: 'Which is more photogenic?', a: 'Palaiokarya with the waterfall is especially photogenic.' },
      ],
    },
  },
];
