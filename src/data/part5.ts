import type { Topic } from './types';

export const PART5: Topic[] = [
  {
    slug: 'food/limit-lounge-cafe',
    category: 'food',
    related: ['food/cafes-pyli', 'food/restaurants-pyli', 'getting-there'],
    el: {
      metaTitle: 'Limit Lounge Cafe Πύλη: Καφές στο χωριό',
      h1: 'Limit Lounge Cafe — καφέ στην Πύλη',
      intro:
        'Το Limit Lounge Cafe είναι καφετέρια στην Πύλη, για στάση μετά ή πριν το γεφύρι. Προσφέρει καφέ, ροφήματα και χώρο ξεκούρασης στο χωριό.',
      sections: [
        { id: 'location', title: 'Τοποθεσία', body: 'Βρίσκεται εντός του οικισμού της Πύλης, λίγα λεπτά από τη διαδρομή προς το γεφύρι. Εύκολη στάση για όσους περνούν από το χωριό.' },
        { id: 'offer', title: 'Τι προσφέρει', body: 'Καφέ, κρύα ροφήματα και σνακ σε lounge ατμόσφαιρα. Κατάλληλο για χαλαρή στάση.' },
        { id: 'note', title: 'Σημείωση', body: 'Ώρες και μενού ενδέχεται να αλλάζουν · επιβεβαιώστε με το κατάστημα.' },
      ],
      faq: [
        { q: 'Πού είναι;', a: 'Στην Πύλη, κοντά στον κεντρικό δρόμο του χωριού.' },
        { q: 'Τι σερβίρει;', a: 'Καφέ, ροφήματα και σνακ · επιβεβαιώστε το μενού.' },
        { q: 'Είναι ανοιχτά όλο τον χρόνο;', a: 'Οι ώρες μεταβάλλονται · ρωτήστε το κατάστημα.' },
        { q: 'Αξίζει μετά το γεφύρι;', a: 'Ναι, ως ήρεμη στάση στο χωριό πριν φύγετε.' },
      ],
    },
    en: {
      metaTitle: 'Limit Lounge Cafe Pyli: Coffee in the Village',
      h1: 'Limit Lounge Cafe — Coffee in Pyli',
      intro: 'Limit Lounge Cafe is a café in Pyli, for a stop after or before the bridge. It offers coffee, drinks and a relaxing space in the village.',
      sections: [
        { id: 'location', title: 'Location', body: 'It is within Pyli settlement, a few minutes from the route to the bridge. An easy stop for those passing through.' },
        { id: 'offer', title: 'What it offers', body: 'Coffee, cold drinks and snacks in a lounge setting, suited to a relaxed pause.' },
        { id: 'note', title: 'Note', body: 'Hours and menu may change — confirm with the venue.' },
      ],
      faq: [
        { q: 'Where is it?', a: 'In Pyli, near the village’s main road.' },
        { q: 'What does it serve?', a: 'Coffee, drinks and snacks — confirm the menu.' },
        { q: 'Open all year?', a: 'Hours vary — ask the venue.' },
        { q: 'Worth it after the bridge?', a: 'Yes, as a calm village stop before you leave.' },
      ],
    },
    zh: {
      metaTitle: 'Limit Lounge 咖啡：皮利镇里的咖啡',
      h1: 'Limit Lounge 咖啡——皮利镇的咖啡',
      intro: 'Limit Lounge Cafe 是皮利镇的一家咖啡馆，适合在桥前或桥后歇脚，提供咖啡、饮品与放松空间。',
      sections: [
        { id: 'location', title: '位置', body: '位于皮利镇聚落内，距通往石桥的路口几分钟，途经村庄时方便停靠。' },
        { id: 'offer', title: '提供什么', body: '咖啡、冷饮与小吃，lounge 氛围，适合轻松停留。' },
        { id: 'note', title: '提示', body: '营业时间与菜单可能变动，请以店家为准。' },
      ],
      faq: [
        { q: '在哪里？', a: '在皮利镇，靠近村庄主路。' },
        { q: '提供什么？', a: '咖啡、饮品与小吃，菜单请确认。' },
        { q: '全年营业吗？', a: '营业时间会有变动，请咨询店家。' },
        { q: '桥后值得来吗？', a: '值得，离开前在村里安静歇脚的好去处。' },
      ],
    },
  },
  {
    slug: 'food/restaurants-elati',
    category: 'food',
    related: ['nearby/elati', 'food/cafes-elati', 'food/kechri-cafe', 'routes/pyli-elati-pertouli'],
    el: {
      metaTitle: 'Εστιατόρια στην Ελάτη: Πού να φάτε στο βουνό',
      h1: 'Εστιατόρια και ταβέρνες στην Ελάτη',
      intro:
        'Η Ελάτη έχει πολλές ταβέρνες και εστιατόρια με παραδοσιακή κουζίνα, ιδανικά για μεσημεριανό ή βραδινό κατά τη διαμονή στο βουνό.',
      sections: [
        { id: 'choices', title: 'Επιλογές', body: 'Θα βρείτε ταβέρνες με ψητά και μαγειρευτά, καθώς και πιο προσεγμένα εστιατόρια. Τα περισσότερα εστιάζουν σε τοπικά προϊόντα.' },
        { id: 'when', title: 'Πότε', body: 'Το βράδυ μετά τη βόλτα και το μεσημέρι είναι αιχμή. Κλείστε τραπέζι τα Σαββατοκύριακα.' },
        { id: 'note', title: 'Σημείωση', body: 'Μενού και τιμές ενδέχεται να αλλάζουν με την εποχή · επιβεβαιώστε με το κατάστημα.' },
      ],
      faq: [
        { q: 'Υπάρχουν πολλές επιλογές;', a: 'Ναι, η Ελάτη έχει αρκετές ταβέρνες και εστιατόρια.' },
        { q: 'Τι κουζίνα;', a: 'Παραδοσιακή ελληνική/θεσσαλική, με τοπικά προϊόντα.' },
        { q: 'Χρειάζομαι κράτηση;', a: 'Συνιστάται τα Σαββατοκύριακα και γιορτές.' },
        { q: 'Τιμές;', a: 'Λογικές για ορεινό θέρετρο · επιβεβαιώστε το μενού.' },
      ],
    },
    en: {
      metaTitle: 'Restaurants in Elati: Where to Eat in the Mountains',
      h1: 'Restaurants and Tavernas in Elati',
      intro: 'Elati has many tavernas and restaurants with traditional cuisine, ideal for lunch or dinner during a mountain stay.',
      sections: [
        { id: 'choices', title: 'Choices', body: 'You will find tavernas with grills and cooked dishes, plus more refined restaurants. Most focus on local produce.' },
        { id: 'when', title: 'When', body: 'Evening after the walk and lunchtime are peak. Book at weekends.' },
        { id: 'note', title: 'Note', body: 'Menus and prices may change with the season — confirm with the venue.' },
      ],
      faq: [
        { q: 'Are there many options?', a: 'Yes, Elati has several tavernas and restaurants.' },
        { q: 'What cuisine?', a: 'Traditional Greek/Thessalian with local produce.' },
        { q: 'Do I need a reservation?', a: 'Recommended at weekends and holidays.' },
        { q: 'Prices?', a: 'Reasonable for a mountain resort — confirm the menu.' },
      ],
    },
    zh: {
      metaTitle: '埃拉蒂的餐厅：山里吃什么',
      h1: '埃拉蒂的餐厅与酒馆',
      intro: '埃拉蒂有许多供应传统菜的酒馆与餐厅，适合在山里住下时的午餐或晚餐。',
      sections: [
        { id: 'choices', title: '选择', body: '有烤肉与炖菜的酒馆，也有更精致的餐厅，多数主打本地食材。' },
        { id: 'when', title: '何时', body: '散步后的傍晚与午餐是高峰，周末请订位。' },
        { id: 'note', title: '提示', body: '菜单与价格随季节变化，请以店家为准。' },
      ],
      faq: [
        { q: '选择多吗？', a: '多，埃拉蒂有数家酒馆与餐厅。' },
        { q: '什么菜系？', a: '希腊/色萨利传统菜，主打本地食材。' },
        { q: '要预订吗？', a: '周末与节假日建议订位。' },
        { q: '价格？', a: '山区度假地价格合理，请确认菜单。' },
      ],
    },
  },
  {
    slug: 'food/cafes-elati',
    zh: {
      metaTitle: '埃拉蒂的咖啡馆：山里歇脚',
      h1: '埃拉蒂的咖啡馆',
      intro: '埃拉蒂有几家咖啡馆与甜点店，适合散步或滑雪后歇脚。',
      sections: [
        { id: 'spots', title: '去哪', body: '广场与巷弄里有传统咖啡馆与甜点店，是村中社交的中心。' },
        { id: 'when', title: '何时', body: '午后或傍晚最热闹，冬季滑雪后尤其旺。' },
        { id: 'note', title: '提示', body: '营业时间随季节变化，请以店家为准。' },
      ],
      faq: [
        { q: '有哪些？', a: '广场与街边的传统咖啡馆与甜点店。' },
        { q: '适合办公吗？', a: '适合，安静且有网络，建议带充电宝。' },
        { q: '有甜点吗？', a: '有，山村里常见甜点与咖啡搭配。' },
        { q: '几点开？', a: '随季节变动，请确认。' },
      ],
    },
    category: 'food',
    related: ['nearby/elati', 'food/restaurants-elati', 'food/kechri-cafe'],
    el: {
      metaTitle: 'Καφέ στην Ελάτη: Καφετέριες & στάσεις',
      h1: 'Καφετέριες στην Ελάτη',
      intro: 'Η Ελάτη έχει καφετέριες για πρωινό καφέ, ζεστή σοκολάτα τον χειμώνα και απογευματινή στάση με θέα.',
      sections: [
        { id: 'spots', title: 'Σημεία', body: 'Γύρω από την πλατεία και τον κεντρικό δρόμο υπάρχουν καφετέριες με εσωτερικό και εξωτερικό χώρο.' },
        { id: 'when', title: 'Πότε', body: 'Το πρωί και το απόγευμα είναι οι δημοφιλείς ώρες για καφέ και γλυκό.' },
        { id: 'note', title: 'Σημείωση', body: 'Ώρες λειτουργίας αλλάζουν εκτός αιχμής · επιβεβαιώστε τοπικά.' },
      ],
      faq: [
        { q: 'Πού να καθίσω για καφέ;', a: 'Στην πλατεία και τον κεντρικό δρόμο της Ελάτης.' },
        { q: 'Έχει εξωτερικό χώρο;', a: 'Ναι, πολλές καφετέριες έχουν εξωτερικό με θέα.' },
        { q: 'Ανοιχτά όλο τον χρόνο;', a: 'Οι ώρες μεταβάλλονται · ρωτήστε.' },
        { q: 'Σερβίρουν πρωινό;', a: 'Ναι, καφέ και ελαφρύ πρωινό · επιβεβαιώστε.' },
      ],
    },
    en: {
      metaTitle: 'Cafés in Elati: Coffee & Stops',
      h1: 'Cafés in Elati',
      intro: 'Elati has cafés for morning coffee, hot chocolate in winter and an afternoon stop with a view.',
      sections: [
        { id: 'spots', title: 'Spots', body: 'Around the square and main road there are cafés with indoor and outdoor seating.' },
        { id: 'when', title: 'When', body: 'Morning and afternoon are the popular hours for coffee and sweets.' },
        { id: 'note', title: 'Note', body: 'Opening hours change off-peak — confirm locally.' },
      ],
      faq: [
        { q: 'Where to sit for coffee?', a: 'On Elati’s square and main road.' },
        { q: 'Outdoor seating?', a: 'Yes, many cafés have outdoor seating with a view.' },
        { q: 'Open all year?', a: 'Hours vary — ask.' },
        { q: 'Do they serve breakfast?', a: 'Yes, coffee and light breakfast — confirm.' },
      ],
    },
  },
  {
    slug: 'food/kechri-cafe',
    zh: {
      metaTitle: 'Kechri 咖啡吧：埃拉蒂',
      h1: 'Kechri 咖啡吧——埃拉蒂',
      intro: 'Kechri 是埃拉蒂的一家咖啡吧，适合在村里散步或滑雪后歇脚。',
      sections: [
        { id: 'concept', title: '定位', body: '咖啡吧氛围，提供咖啡、饮品与轻松小食，是村中社交的一站。' },
        { id: 'when', title: '何时', body: '午后与傍晚热闹，冬季滑雪后尤其有人气。' },
        { id: 'note', title: '提示', body: '营业时间随季节变化，请以店家为准。' },
      ],
      faq: [
        { q: '在哪里？', a: '在埃拉蒂村内。' },
        { q: '提供什么？', a: '咖啡、饮品与小食。' },
        { q: '适合聚会吗？', a: '适合，氛围轻松。' },
        { q: '几点开？', a: '随季节变动，请确认。' },
      ],
    },
    category: 'food',
    related: ['nearby/elati', 'food/cafes-elati', 'food/restaurants-elati'],
    el: {
      metaTitle: 'Cafe-Bar Κεχρί Ελάτη: Καφέ & ποτό στο βουνό',
      h1: 'Cafe-Bar Κεχρί — Ελάτη',
      intro:
        'Το Cafe-Bar Κεχρί είναι γνωστό στέκι στην Ελάτη για καφέ την ημέρα και ποτό το βράδυ, με ατμόσφαιρα βουνού.',
      sections: [
        { id: 'concept', title: 'Το στέκι', body: 'Συνδυάζει καφέ και μπαρ, ιδανικό τόσο για απογευματινή στάση όσο και για βραδινή έξοδο στο χωριό.' },
        { id: 'when', title: 'Πότε', body: 'Ημέρα για καφέ, βράδυ για ποτό και μουσική. Τα Σαββατοκύριακα γεμίζει.' },
        { id: 'note', title: 'Σημείωση', body: 'Ώρες και εκδηλώσεις αλλάζουν · επιβεβαιώστε με το κατάστημα.' },
      ],
      faq: [
        { q: 'Πού είναι;', a: 'Στην Ελάτη, στον οικισμό του χωριού.' },
        { q: 'Τι σερβίρει;', a: 'Καφέ την ημέρα και ποτά το βράδυ · επιβεβαιώστε.' },
        { q: 'Κατάλληλο για οικογένειες;', a: 'Την ημέρα ναι · το βράδυ είναι πιο έντονο.' },
        { q: 'Χρειάζομαι κράτηση;', a: 'Για βράδυ Σαββάτου πιθανώς ναι.' },
      ],
    },
    en: {
      metaTitle: 'Cafe-Bar Kechri Elati: Coffee & Drinks',
      h1: 'Cafe-Bar Kechri — Elati',
      intro: 'Cafe-Bar Kechri is a known spot in Elati for daytime coffee and evening drinks, with a mountain atmosphere.',
      sections: [
        { id: 'concept', title: 'The spot', body: 'It blends café and bar, ideal both for an afternoon pause and an evening out in the village.' },
        { id: 'when', title: 'When', body: 'Coffee by day, drinks and music by night. Weekends fill up.' },
        { id: 'note', title: 'Note', body: 'Hours and events change — confirm with the venue.' },
      ],
      faq: [
        { q: 'Where is it?', a: 'In Elati, within the village.' },
        { q: 'What does it serve?', a: 'Coffee by day and drinks at night — confirm.' },
        { q: 'Family-friendly?', a: 'By day yes; at night it is livelier.' },
        { q: 'Need a reservation?', a: 'For Saturday night probably yes.' },
      ],
    },
  },
  {
    slug: 'food/local-food-guide',
    zh: {
      metaTitle: '皮利与埃拉蒂地方美食指南',
      h1: '皮利与埃拉蒂地方美食指南',
      intro: '这一带饮食以山野食材与传统做法为主。下面概览值得尝试的菜式与特产。',
      sections: [
        { id: 'dishes', title: '菜式', body: '烤肉、炖菜、本地奶酪与豆类小食是常见主角，搭配乡村面包。' },
        { id: 'products', title: '特产', body: '蜂蜜、乳制品、果酱与手工艺品可作伴手礼，见当地产品专页。' },
        { id: 'note', title: '提示', body: '具体供应随季节与店家变动，请以现场菜单为准。' },
      ],
      faq: [
        { q: '必尝什么？', a: '烤肉、炖菜与本地奶酪、蜂蜜。' },
        { q: '有素食吗？', a: '有豆类和蔬菜小食，点单时说明需求。' },
        { q: '在哪吃最地道？', a: '皮利与埃拉蒂的村中酒馆。' },
        { q: '能带走什么？', a: '蜂蜜、乳制品与手工艺品。' },
      ],
    },
    category: 'food',
    related: ['food/restaurants-pyli', 'food/restaurants-elati', 'food/hani-tou-souflia', 'food/local-products'],
    el: {
      metaTitle: 'Τοπική κουζίνα Πύλης & Ελάτης: Τι να δοκιμάσετε',
      h1: 'Οδηγός τοπικής κουζίνας Πύλης & Ελάτης',
      intro:
        'Η περιοχή συνδυάζει θεσσαλική παράδοση με ορεινά προϊόντα. Εδώ μια σύνοψη βασισμένη σε δημοφιλή πιάτα — όχι σε συγκεκριμένο εστιατόριο.',
      sections: [
        { id: 'dishes', title: 'Χαρακτηριστικά πιάτα', body: 'Ψητά στη σούβλα ή σχάρα, μαγειρευτά με τοπικά λαχανικά, τυριά και πίτες αποτελούν τον κορμό της τοπικής κουζίνας.' },
        { id: 'products', title: 'Προϊόντα', body: 'Τυροκομικά, μέλι, όσπρια και αγνά προϊόντα της περιοχής εμφανίζονται στα μενού και στα τοπικά καταστήματα.' },
        { id: 'note', title: 'Σημείωση', body: 'Τα πιάτα και η διαθεσιμότητά τους αλλάζουν με την εποχή και το μαγαζί · επιβεβαιώστε το μενού επί τόπου.' },
      ],
      faq: [
        { q: 'Ποια είναι τα τοπικά πιάτα;', a: 'Ψητά, μαγειρευτά, τυριά και πίτες της Θεσσαλίας.' },
        { q: 'Υπάρχουν χορτοφαγικές επιλογές;', a: 'Συνήθως ναι (λαχανικά, όσπρια, πίτες) · ρωτήστε το μαγαζί.' },
        { q: 'Πού να αγοράσω τοπικά;', a: 'Σε παντοπωλεία και μανάβικα της περιοχής · δείτε τον οδηγό τοπικών προϊόντων.' },
        { q: 'Αξίζει να δοκιμάσω τυρί;', a: 'Ναι, τα τοπικά τυροκομικά είναι χαρακτηριστικά της περιοχής.' },
      ],
    },
    en: {
      metaTitle: 'Local Food of Pyli & Elati: What to Try',
      h1: 'Local Cuisine Guide: Pyli & Elati',
      intro: 'The area blends Thessalian tradition with mountain produce. Here is an overview based on popular dishes — not a specific restaurant.',
      sections: [
        { id: 'dishes', title: 'Characteristic dishes', body: 'Spit or grill roasts, cooked dishes with local vegetables, cheeses and pies form the core of the local cuisine.' },
        { id: 'products', title: 'Products', body: 'Dairy, honey, legumes and pure local products appear on menus and in local shops.' },
        { id: 'note', title: 'Note', body: 'Dishes and availability change by season and venue — confirm the menu on site.' },
      ],
      faq: [
        { q: 'What are the local dishes?', a: 'Roasts, cooked dishes, cheeses and Thessalian pies.' },
        { q: 'Are there vegetarian options?', a: 'Usually yes (vegetables, legumes, pies) — ask the venue.' },
        { q: 'Where to buy local?', a: 'At grocers and greengrocers in the area — see the local products guide.' },
        { q: 'Worth trying the cheese?', a: 'Yes, local dairy is characteristic of the region.' },
      ],
    },
  },
];
