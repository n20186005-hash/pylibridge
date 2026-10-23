import type { Topic } from './types';

export const PART4: Topic[] = [
  {
    slug: 'nearby/koziakas-hiking',
    category: 'nearby',
    related: ['nearby/elati', 'nearby/pertouli', 'best-time-to-visit', 'nearby-attractions'],
    el: {
      metaTitle: 'Πεζοπορία στον Κόζιακα: Διαδρομές & συμβουλές',
      h1: 'Πεζοπορία στον Κόζιακα',
      intro:
        'Ο Κόζιακας είναι ο ορεινός όγκος πάνω από την Πύλη, με δίκτυο μονοπατιών και θέα προς τον Πορταϊκό. Εδώ πώς να επιλέξετε διαδρομή ανάλογα με το επίπεδο και την εποχή.',
      sections: [
        { id: 'trails', title: 'Επίπεδα διαδρομών', body: 'Υπάρχουν ήπια μονοπάτια κοντά στο χωριό και πιο απαιτητικές αναβάσεις προς την κορυφή. Επιλέξτε με βάση την εμπειρία και την ώρα που διαθέτετε.' },
        { id: 'season', title: 'Εποχή', body: 'Άνοιξη και φθινόπωρο είναι ιδανικά για πεζοπορία. Το καλοκαίρι προτιμήστε πρωί, ενώ τον χειμώνα τα υψηλά τμήματα μπορεί να έχουν χιόνι και πάγο.' },
        { id: 'prepare', title: 'Προετοιμασία', body: 'Χρησιμοποιήστε χάρτη ή εφαρμογή, πάρτε νερό και κατάλληλα παπούτσια, και ενημερωθείτε για τον καιρό. Μην απομακρύνεστε από σηματοδοτημένα μονοπάτια.' },
      ],
      faq: [
        { q: 'Πού ξεκινάει η πεζοπορία;', a: 'Από την Πύλη ή τα γύρω χωριά υπάρχουν εκκινήσεις μονοπατιών προς τον Κόζιακα.' },
        { q: 'Χρειάζομαι εξοπλισμό;', a: 'Για ήπιες διαδρομές αρκούν παπούτσια πεζοπορίας και νερό · για ψηλά, προσθέστε ρούχα στρώσης και σχέδιο.' },
        { q: 'Υπάρχουν σηματοδοτημένα μονοπάτια;', a: 'Ορισμένα τοπικά μονοπάτια είναι σηματοδοτημένα · επιβεβαιώστε την κατάστασή τους τοπικά.' },
        { q: 'Είναι για αρχάριους;', a: 'Ναι, οι χαμηλές διαδρομές είναι ήπιες, αλλά οι κορυφές απαιτούν εμπειρία.' },
      ],
    },
    en: {
      metaTitle: 'Hiking Koziakas: Trails & Tips',
      h1: 'Hiking Koziakas Mountain',
      intro: 'Koziakas is the mountain mass above Pyli, with a trail network and views over the Portaikos. Here is how to choose a route by level and season.',
      sections: [
        { id: 'trails', title: 'Trail levels', body: 'There are gentle paths near the village and more demanding ascents to the summit. Choose based on experience and time.' },
        { id: 'season', title: 'Season', body: 'Spring and autumn are ideal for hiking. In summer go early; in winter the high sections may have snow and ice.' },
        { id: 'prepare', title: 'Preparation', body: 'Use a map or app, carry water and proper shoes, and check the weather. Do not leave marked trails.' },
      ],
      faq: [
        { q: 'Where does the hike start?', a: 'From Pyli or nearby villages there are trailheads toward Koziakas.' },
        { q: 'Do I need gear?', a: 'For easy trails, hiking shoes and water suffice; for the heights add layers and a plan.' },
        { q: 'Are there marked trails?', a: 'Some local trails are marked — confirm their condition locally.' },
        { q: 'Good for beginners?', a: 'Yes, lower routes are gentle, but summits need experience.' },
      ],
    },
    zh: {
      metaTitle: '科齐亚卡斯山徒步：路线与建议',
      h1: '科齐亚卡斯山徒步',
      intro: '科齐亚卡斯山是皮利镇上方的山体，有步道网络，可俯瞰波尔泰科斯河谷。下面按难度与季节选择路线。',
      sections: [
        { id: 'trails', title: '路线难度', body: '村边有平缓小径，往山顶则需更费力。请依经验与时间选择。' },
        { id: 'season', title: '季节', body: '春秋最适合徒步；夏季选清晨，冬季高处可能有积雪与结冰。' },
        { id: 'prepare', title: '准备', body: '带地图或 App、饮水与合脚鞋，并关注天气，勿偏离标识步道。' },
      ],
      faq: [
        { q: '徒步从哪开始？', a: '从皮利镇或附近村庄有通往科齐亚卡斯山的步道口。' },
        { q: '需要装备吗？', a: '平缓路线有徒步鞋与饮水即可；高处请加衣物与计划。' },
        { q: '有标识步道吗？', a: '部分当地步道有标识，状态请以当地为准。' },
        { q: '适合初学者吗？', a: '低海拔路线平缓，山顶则需经验。' },
      ],
    },
  },
  {
    slug: 'food/restaurants-pyli',
    category: 'food',
    related: ['food/cafes-pyli', 'food/local-food-guide', 'food/hani-tou-souflia', 'routes/pyli-half-day'],
    el: {
      metaTitle: 'Φαγητό στην Πύλη Τρικάλων: Εστιατόρια & ταβέρνες',
      h1: 'Πού να φάτε στην Πύλη',
      intro:
        'Η Πύλη έχει ταβέρνες και εστιατόρια με παραδοσιακή θεσσαλική κουζίνα, ιδανικά μετά την επίσκεψη στο γεφύρι. Εδώ μια σύνοψη για να επιλέξετε με βάση τη θέση και το σκηνικό.',
      sections: [
        { id: 'types', title: 'Τι θα βρείτε', body: 'Ταβέρνες με ψητά, μαγειρευτά και τοπικά ορεκτικά, καθώς και καφενεία. Τα μενού αλλάζουν με την εποχή και τα προϊόντα της περιοχής.' },
        { id: 'when', title: 'Πότε να πάτε', body: 'Το μεσημέρι μετά το γεφύρι είναι δημοφιλής ώρα. Τα Σαββατοκύριακα κλείστε τραπέζι ή πηγαίνετε νωρίς.' },
        { id: 'note', title: 'Σημείωση', body: 'Ώρες, μενού και τιμές αλλάζουν · επιβεβαιώστε με το κατάστημα πριν μεταβείτε, ειδικά εκτός αιχμής.' },
      ],
      faq: [
        { q: 'Υπάρχουν ταβέρνες κοντά στο γεφύρι;', a: 'Οι περισσότερες είναι στην Πύλη (2 χλμ.) · στο ίδιο το γεφύρι υπάρχει το καφέ Εννοδία για καφέ και σνακ.' },
        { q: 'Τι να δοκιμάσω;', a: 'Τοπικά μαγειρευτά, ψητά και ορεκτικά της Θεσσαλίας · δείτε τον οδηγό τοπικής κουζίνας.' },
        { q: 'Είναι οικονομικό;', a: 'Οι τιμές είναι λογικές για παραδοσιακή ταβέρνα · επιβεβαιώστε το μενού.' },
        { q: 'Χρειάζομαι κράτηση;', a: 'Τα Σαββατοκύριακα και γιορτές ναι, ιδίως για μεγάλες παρέες.' },
      ],
    },
    en: {
      metaTitle: 'Where to Eat in Pyli: Restaurants & Tavernas',
      h1: 'Where to Eat in Pyli',
      intro: 'Pyli has tavernas and restaurants with traditional Thessalian cuisine, ideal after the bridge visit. Here is an overview to choose by location and setting.',
      sections: [
        { id: 'types', title: 'What you will find', body: 'Tavernas with grills, cooked dishes and local meze, plus cafés. Menus shift with the season and local produce.' },
        { id: 'when', title: 'When to go', body: 'Lunch after the bridge is popular. At weekends book a table or go early.' },
        { id: 'note', title: 'Note', body: 'Hours, menus and prices change — confirm with the venue before going, especially off-peak.' },
      ],
      faq: [
        { q: 'Are there tavernas near the bridge?', a: 'Most are in Pyli (2 km); at the bridge itself there is the Ennodia café for coffee and snacks.' },
        { q: 'What to try?', a: 'Local cooked dishes, grills and Thessalian meze — see the local food guide.' },
        { q: 'Is it affordable?', a: 'Prices are reasonable for a traditional taverna — confirm the menu.' },
        { q: 'Do I need a reservation?', a: 'At weekends and holidays yes, especially for larger groups.' },
      ],
    },
    zh: {
      metaTitle: '皮利镇用餐：餐厅与酒馆',
      h1: '在皮利镇吃什么',
      intro: '皮利镇有供应色萨利传统菜的酒馆与餐厅，最适合游桥之后用餐。下面按位置与场景做概览。',
      sections: [
        { id: 'types', title: '吃什么', body: '酒馆有烤肉、炖菜与当地小食，还有咖啡馆；菜单随季节与本地食材变化。' },
        { id: 'when', title: '何时去', body: '游桥后的午餐很热门，周末请订位或早到。' },
        { id: 'note', title: '提示', body: '营业时间、菜单与价格会变，尤其淡季请先与店家确认。' },
      ],
      faq: [
        { q: '桥边有酒馆吗？', a: '多数在皮利镇（2 公里）；桥边只有恩诺迪亚咖啡供应咖啡与小食。' },
        { q: '推荐尝什么？', a: '当地炖菜、烤肉与色萨利小食，见地方美食指南。' },
        { q: '贵吗？', a: '传统酒馆价格合理，请确认菜单。' },
        { q: '要预订吗？', a: '周末与节假日建议订位，大桌尤甚。' },
      ],
    },
  },
  {
    slug: 'food/cafes-pyli',
    zh: {
      metaTitle: '皮利镇咖啡：桥边与村里的歇脚',
      h1: '皮利镇的咖啡与歇脚',
      intro: '皮利镇及桥口有几处咖啡馆，适合游桥前后停下来喝一杯。下面按位置区分。',
      sections: [
        { id: 'bridge', title: '桥边', body: '恩诺迪亚咖啡就在桥口，游完桥即可喝咖啡、吃轻食。' },
        { id: 'village', title: '村庄', body: '皮利镇里还有咖啡馆（如 Limit Lounge），逛村时方便停靠。' },
        { id: 'note', title: '提示', body: '营业时间会变，尤其淡季请先确认。' },
      ],
      faq: [
        { q: '桥边有咖啡吗？', a: '有，恩诺迪亚咖啡就在桥口。' },
        { q: '镇上还有吗？', a: '有，皮利镇里另有咖啡馆。' },
        { q: '有吃的吗？', a: '咖啡与轻食；正餐请去皮利或埃拉蒂。' },
        { q: '全年开吗？', a: '时间会变，请与店家确认。' },
      ],
    },
    category: 'food',
    related: ['food/ennodia-cafe', 'food/limit-lounge-cafe', 'food/restaurants-pyli'],
    el: {
      metaTitle: 'Καφέ στην Πύλη Τρικάλων',
      h1: 'Καφέ και στάσεις στην Πύλη',
      intro:
        'Για καφέ και σύντομη στάση, η Πύλη και το γεφύρι προσφέρουν επιλογές: το καφέ δίπλα στο ποτάμι και καφετέριες στο χωριό. Εδώ πώς να τα μοιράσετε.',
      sections: [
        { id: 'bridge', title: 'Στο γεφύρι', body: 'Το καφέ Εννοδία βρίσκεται στην κεφαλή του γεφυριού, ιδανικό για καφέ με θέα το τόξο και τον Πορταϊκό.' },
        { id: 'village', title: 'Στην Πύλη', body: 'Στο χωριό υπάρχουν καφετέριες για πιο μακρά στάση, γλυκό και ξεκούραση πριν ή μετά τη βόλτα.' },
        { id: 'note', title: 'Σημείωση', body: 'Ώρες λειτουργίας ενδέχεται να αλλάζουν εκτός καλοκαιριού · επιβεβαιώστε τοπικά.' },
      ],
      faq: [
        { q: 'Πού να πιω καφέ με θέα το γεφύρι;', a: 'Στο καφέ Εννοδία, ακριβώς στην κεφαλή του γεφυριού.' },
        { q: 'Υπάρχει καφές στην Πύλη;', a: 'Ναι, καφετέριες στο χωριό για μεγαλύτερη στάση.' },
        { q: 'Είναι ανοιχτά όλο τον χρόνο;', a: 'Οι ώρες μεταβάλλονται · ρωτήστε το κατάστημα.' },
        { q: 'Μπορώ να πάρω σνακ;', a: 'Ναι, τα περισσότερα σερβίρουν καφέ, γλυκό και ελαφρύ σνακ.' },
      ],
    },
    en: {
      metaTitle: 'Cafés in Pyli',
      h1: 'Cafés and Stops in Pyli',
      intro: 'For coffee and a short break, Pyli and the bridge offer options: the riverside café and village cafés. Here is how to split them.',
      sections: [
        { id: 'bridge', title: 'At the bridge', body: 'Ennodia café sits at the bridge head, ideal for coffee with a view of the arch and the Portaikos.' },
        { id: 'village', title: 'In Pyli', body: 'Village cafés offer a longer break, a sweet and rest before or after the walk.' },
        { id: 'note', title: 'Note', body: 'Opening hours may change outside summer — confirm locally.' },
      ],
      faq: [
        { q: 'Where to drink coffee with a bridge view?', a: 'At Ennodia café, right at the bridge head.' },
        { q: 'Is there coffee in Pyli?', a: 'Yes, village cafés for a longer stop.' },
        { q: 'Open all year?', a: 'Hours vary — ask the venue.' },
        { q: 'Can I get a snack?', a: 'Yes, most serve coffee, sweets and light snacks.' },
      ],
    },
  },
  {
    slug: 'food/ennodia-cafe',
    zh: {
      metaTitle: '恩诺迪亚咖啡：桥边的咖啡',
      h1: '恩诺迪亚咖啡——桥边的咖啡',
      intro: '恩诺迪亚咖啡位于皮利石桥入口旁，适合游桥前后停下来喝一杯、吃点轻食。',
      sections: [
        { id: 'location', title: '位置', body: '就在桥口，停车后步行几步即达，是游完桥最方便的歇脚点。' },
        { id: 'experience', title: '体验', body: '咖啡、冷饮与轻食，坐在近桥处感受峡谷与流水。' },
        { id: 'note', title: '提示', body: '营业时间与菜单可能变动，请以店家为准。' },
      ],
      faq: [
        { q: '在哪里？', a: '在皮利石桥入口旁。' },
        { q: '提供什么？', a: '咖啡、饮品与轻食。' },
        { q: '全年营业吗？', a: '时间会有变动，请咨询店家。' },
        { q: '带孩子方便吗？', a: '方便，紧邻停车与桥口，适合家庭短歇。' },
      ],
    },
    category: 'food',
    related: ['food/cafes-pyli', 'parking-access', 'photo-spots'],
    el: {
      metaTitle: 'Καφέ Εννοδία: Καφές δίπλα στο Γεφύρι της Πύλης',
      h1: 'Καφέ Εννοδία — καφές στο γεφύρι',
      intro:
        'Το καφέ Εννοδία βρίσκεται στην κεφαλή του Τοξωτού Γεφυριού της Πύλης, πάνω στον Πορταϊκό. Είναι το σημείο για καφέ με θέα το μονό τόξο και τη φύση.',
      sections: [
        { id: 'location', title: 'Τοποθεσία', body: 'Το καφέ είναι ακριβώς δίπλα στο γεφύρι, λίγα μέτρα από τον χώρο στάθμευσης. Δεν χρειάζεται να οδηγήσετε παραπέρα — σταθμεύετε και καθίσετε.' },
        { id: 'experience', title: 'Η εμπειρία', body: 'Προσφέρει καφέ, δροσερά και ζεστά ροφήματα και ελαφρύ σνακ, με θέα το ποτάμι και τα πλατάνια. Ιδανικό για στάση πριν ή μετά τη διάβαση του γεφυριού.' },
        { id: 'note', title: 'Σημείωση', body: 'Ώρες και διαθέσιμο μενού ενδέχεται να αλλάζουν με την εποχή · επιβεβαιώστε τοπικά πριν επισκεφθείτε.' },
      ],
      faq: [
        { q: 'Πού ακριβώς είναι;', a: 'Στην κεφαλή του γεφυριού της Πύλης, πάνω στον Πορταϊκό ποταμό.' },
        { q: 'Τι σερβίρει;', a: 'Καφέ, ροφήματα και ελαφρύ σνακ · επιβεβαιώστε το μενού επί τόπου.' },
        { q: 'Έχει θέα;', a: 'Ναι, προς το τόξο του γεφυριού και τον ποταμό.' },
        { q: 'Χρειάζομαι κράτηση;', a: 'Συνήθως όχι για λίγα άτομα · τα Σαββατοκύριακα πηγαίνετε νωρίς.' },
      ],
    },
    en: {
      metaTitle: 'Café Ennodia: Coffee by Pyli Bridge',
      h1: 'Café Ennodia — Coffee at the Bridge',
      intro: 'Café Ennodia sits at the head of the Arched Bridge of Portaikos, on the river. It is the spot for coffee with a view of the single arch and nature.',
      sections: [
        { id: 'location', title: 'Location', body: 'The café is right next to the bridge, a few metres from the parking area. You do not drive further — park and sit.' },
        { id: 'experience', title: 'The experience', body: 'It serves coffee, cold and hot drinks and light snacks, with a view of the river and plane trees. Ideal before or after crossing the bridge.' },
        { id: 'note', title: 'Note', body: 'Hours and available menu may change with the season — confirm locally before visiting.' },
      ],
      faq: [
        { q: 'Exactly where is it?', a: 'At the head of Pyli bridge, on the Portaikos river.' },
        { q: 'What does it serve?', a: 'Coffee, drinks and light snacks — confirm the menu on site.' },
        { q: 'Does it have a view?', a: 'Yes, toward the bridge arch and the river.' },
        { q: 'Do I need a reservation?', a: 'Usually not for small groups; at weekends go early.' },
      ],
    },
  },
  {
    slug: 'food/hani-tou-souflia',
    zh: {
      metaTitle: '苏弗利亚客栈：传统美食',
      h1: '苏弗利亚客栈——传统美食',
      intro: '苏弗利亚客栈（To Hani tou Souflia）是皮利一带知名的传统餐饮点，适合体验本地菜。',
      sections: [
        { id: 'concept', title: '定位', body: '以传统希腊/色萨利菜为主，氛围质朴，适合家庭与团体。' },
        { id: 'combine', title: '搭配', body: '游桥或村庄后在此用餐，可作为山区一日的中转。' },
        { id: 'note', title: '提示', body: '菜单、价格与营业时间会变，建议订位或当天确认。' },
      ],
      faq: [
        { q: '在哪？', a: '在皮利一带，具体以导航为准。' },
        { q: '什么菜系？', a: '传统希腊/色萨利菜。' },
        { q: '要预订吗？', a: '周末与团体建议订位。' },
        { q: '贵吗？', a: '传统餐馆价格合理，请确认菜单。' },
      ],
    },
    category: 'food',
    related: ['food/restaurants-pyli', 'food/local-food-guide', 'nearby/porta-panagia', 'routes/pyli-half-day'],
    el: {
      metaTitle: 'Το Χάνι του Σουφλιά: Φαγητό κοντά στην Πόρτα Παναγιά',
      h1: 'Το Χάνι του Σουφλιά — παραδοσιακό φαγητό',
      intro:
        'Το Χάνι του Σουφλιά είναι γνωστό στέκι για παραδοσιακό φαγητό στην περιοχή της Πύλης, κοντά στην Πόρτα Παναγιά. Συνδυάζεται με τον πολιτιστικό κύκλο γεφύρι–εκκλησία–γεύμα.',
      sections: [
        { id: 'concept', title: 'Το στέκι', body: 'Πρόκειται για παραδοσιακό χάνι με εστίαση, ιδανικό για οικογένειες και παρέες που θέλουν χορταστικό γεύμα μετά τα αξιοθέατα.' },
        { id: 'combine', title: 'Συνδυασμός', body: 'Βρίσκεται κοντά στη διαδρομή Πύλη–Πόρτα Παναγιά, οπότε ταιριάζει ως στάση φαγητού στην ημίμερη εκδρομή.' },
        { id: 'note', title: 'Σημείωση', body: 'Επιβεβαιώστε ώρες, μενού και διαθεσιμότητα με το κατάστημα, καθώς αλλάζουν ανάλογα με την εποχή και τις κρατήσεις.' },
      ],
      faq: [
        { q: 'Πού βρίσκεται;', a: 'Στην περιοχή της Πύλης, κοντά στην Πόρτα Παναγιά.' },
        { q: 'Τι είδους φαγητό σερβίρει;', a: 'Παραδοσιακή ελληνική και θεσσαλική κουζίνα · επιβεβαιώστε το μενού.' },
        { q: 'Αξίζει μετά το γεφύρι;', a: 'Ναι, ως στάση γεύματος στον κύκλο γεφύρι–εκκλησία–φαγητό.' },
        { q: 'Χρειάζομαι κράτηση;', a: 'Συνιστάται, ιδίως Σαββατοκύριακα και για ομάδες.' },
      ],
    },
    en: {
      metaTitle: 'Hani tou Souflia: Dining near Porta Panagia',
      h1: 'Hani tou Souflia — Traditional Dining',
      intro: 'Hani tou Souflia is a known spot for traditional food in the Pyli area, near Porta Panagia. It pairs with the cultural loop of bridge–church–meal.',
      sections: [
        { id: 'concept', title: 'The spot', body: 'A traditional han with dining, ideal for families and groups wanting a hearty meal after the sights.' },
        { id: 'combine', title: 'Combining', body: 'It lies near the Pyli–Porta Panagia route, fitting as a lunch stop on a half-day trip.' },
        { id: 'note', title: 'Note', body: 'Confirm hours, menu and availability with the venue, as they change by season and bookings.' },
      ],
      faq: [
        { q: 'Where is it?', a: 'In the Pyli area, near Porta Panagia.' },
        { q: 'What food does it serve?', a: 'Traditional Greek and Thessalian cuisine — confirm the menu.' },
        { q: 'Worth it after the bridge?', a: 'Yes, as a meal stop in the bridge–church–food loop.' },
        { q: 'Do I need a reservation?', a: 'Recommended, especially weekends and groups.' },
      ],
    },
  },
];
