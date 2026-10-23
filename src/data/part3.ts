import type { Topic } from './types';

export const PART3: Topic[] = [
  {
    slug: 'nearby/elati',
    category: 'nearby',
    related: ['nearby/pertouli', 'food/restaurants-elati', 'food/cafes-elati', 'food/kechri-cafe', 'routes/pyli-elati-pertouli'],
    el: {
      metaTitle: 'Ελάτη Τρικάλων: Οδηγός επίσκεψης στο ορεινό χωριό',
      h1: 'Ελάτη Τρικάλων — το ορεινό χωριό της Πίνδου',
      intro:
        'Η Ελάτη είναι ένα από τα πιο γνωστά ορεινά χωριά της Θεσσαλίας, περίπου 30 λεπτά από την Πύλη. Προσφέρει διαμονή, εστιατόρια και σημείο εκκίνησης για τη φύση του Κόζιακα.',
      sections: [
        { id: 'village', title: 'Το χωριό', body: 'Χτισμένη σε υψόμετρο περίπου 950 μ., η Ελάτη έχει πέτρινα σπίτια, πλατεία με πλατάνια και θέα προς την κοιλάδα. Είναι βάση για χειμερινές και καλοκαιρινές εξορμήσεις.' },
        { id: 'eat', title: 'Φαγητό και καφές', body: 'Στο χωριό και γύρω υπάρχουν ταβέρνες και καφετέριες. Δείτε τον οδηγό εστιατορίων και καφέ της Ελάτης για συγκεκριμένες επιλογές.' },
        { id: 'stay', title: 'Διαμονή', body: 'Υπάρχουν ξενώνες και δωμάτια ενοικιαζόμενα όλο τον χρόνο. Κλείστε νωρίς τα Σαββατοκύριακα και τις γιορτές, καθώς η ζήτηση είναι υψηλή.' },
      ],
      faq: [
        { q: 'Πόσο απέχει από την Πύλη;', a: 'Περίπου 30 λεπτά με αυτοκίνητο μέσω του ορεινού δρόμου.' },
        { q: 'Υπάρχει χιόνι τον χειμώνα;', a: 'Η περιοχή είναι χειμερινός προορισμός · το χιόνι είναι συχνό, αλλά επιβεβαιώστε τις συνθήκες του δρόμου.' },
        { q: 'Τι να κάνω στην Ελάτη;', a: 'Πεζοπορία στον Κόζιακα, φαγητό σε ταβέρνες, καφές και σύντομες εκδρομές προς Περτούλι και γεφύρι Πύλης.' },
        { q: 'Είναι κατάλληλη για οικογένειες;', a: 'Ναι, το χωριό είναι ήσυχο και έχει εύκολες βόλτες, αλλά οι δρόμοι είναι ανηφορικοί.' },
      ],
    },
    en: {
      metaTitle: 'Elati Trikala: Visitor Guide to the Mountain Village',
      h1: 'Elati Trikala — the Pindos Mountain Village',
      intro: 'Elati is one of Thessaly’s best-known mountain villages, about 30 minutes from Pyli. It offers lodging, restaurants and a base for Koziakas nature.',
      sections: [
        { id: 'village', title: 'The village', body: 'At about 950 m elevation, Elati has stone houses, a plane-tree square and valley views. It is a base for winter and summer outings.' },
        { id: 'eat', title: 'Food and coffee', body: 'The village and surroundings have tavernas and cafés. See the Elati restaurants and cafés guides for specific options.' },
        { id: 'stay', title: 'Where to stay', body: 'Guesthouses and rooms are open year-round. Book early at weekends and holidays, as demand is high.' },
      ],
      faq: [
        { q: 'How far from Pyli?', a: 'About 30 minutes by car via the mountain road.' },
        { q: 'Is there snow in winter?', a: 'The area is a winter destination — snow is common, but confirm road conditions.' },
        { q: 'What to do in Elati?', a: 'Hike Koziakas, eat at tavernas, have coffee and take short trips to Pertouli and Pyli bridge.' },
        { q: 'Good for families?', a: 'Yes, the village is quiet with easy walks, though the streets are steep.' },
      ],
    },
    zh: {
      metaTitle: '埃拉蒂（特里卡拉）：山村游览指南',
      h1: '埃拉蒂——品都斯山村',
      intro: '埃拉蒂是色萨利最知名的山区村庄之一，距皮利约 30 分钟，提供住宿、餐厅，也是探访科齐亚卡斯山自然的基地。',
      sections: [
        { id: 'village', title: '村庄', body: '埃拉蒂海拔约 950 米，有石屋、悬铃木广场与山谷景致，是冬夏出游的落脚地。' },
        { id: 'eat', title: '美食与咖啡', body: '村里及附近有酒馆与咖啡馆，具体选择见埃拉蒂餐厅与咖啡指南。' },
        { id: 'stay', title: '住宿', body: '全年有旅馆与民宿。周末和节假日需求高，建议尽早预订。' },
      ],
      faq: [
        { q: '离皮利多远？', a: '走山区公路自驾约 30 分钟。' },
        { q: '冬天有雪吗？', a: '这一带是冬季目的地，常见降雪，但请确认路况。' },
        { q: '在埃拉蒂玩什么？', a: '徒步科齐亚卡斯山、酒馆用餐、喝咖啡，并顺访佩尔图利与皮利桥。' },
        { q: '适合家庭吗？', a: '适合，村庄安静、步道平缓，但街道有坡度。' },
      ],
    },
  },
  {
    slug: 'nearby/pertouli',
    category: 'nearby',
    related: ['nearby/elati', 'nearby/pertouli-meadows', 'routes/pyli-elati-pertouli', 'food/restaurants-elati'],
    el: {
      metaTitle: 'Περτούλι Τρικάλων: Αξιοθέατα & δραστηριότητες',
      h1: 'Περτούλι — χωριό και οροπέδιο στην Πίνδο',
      intro:
        'Το Περτούλι είναι γνωστό ορεινό θέρετρο με πλατεία, ξενώνες και πρόσβαση στο ομώνυμο οροπέδιο. Απέχει περίπου 40 λεπτά από την Πύλη.',
      sections: [
        { id: 'village', title: 'Το χωριό', body: 'Το Περτούλι έχει παραδοσιακή αρχιτεκτονική και είναι δημοφιλές για τα ξενοδοχεία και τα εστιατόρια του. Η πλατεία είναι το κέντρο της ζωής του χωριού.' },
        { id: 'meadow', title: 'Το οροπέδιο', body: 'Το οροπέδιο του Περτουλίου εκτείνεται γύρω και προσφέρει δάσος, λιβάδια και χειμερινές δραστηριότητες. Δείτε τον ξεχωριστό οδηγό για τα Περτουλιώτικα λιβάδια.' },
        { id: 'activities', title: 'Δραστηριότητες', body: 'Πεζοπορία, ποδήλατο, ιππασία και χειμερινά σπορ είναι διαθέσιμα ανάλογα με την εποχή. Επιβεβαιώστε τι λειτουργεί την περίοδο της επίσκεψης.' },
      ],
      faq: [
        { q: 'Πόσο απέχει από το γεφύρι της Πύλης;', a: 'Περίπου 40 λεπτά με αυτοκίνητο.' },
        { q: 'Υπάρχει χιονοδρομικό;', a: 'Η περιοχή έχει χειμερινές δραστηριότητες · επιβεβαιώστε εγκαταστάσεις και ωράρια τοπικά.' },
        { q: 'Πού να μείνω;', a: 'Ξενώνες και ξενοδοχεία υπάρχουν στο χωριό, με υψηλή ζήτηση τα Σαββατοκύριακα.' },
        { q: 'Αξίζει με το γεφύρι;', a: 'Ναι, συνδυάζεται σε ολόκληρη μέρα βουνού — δείτε τη διαδρομή Πύλη–Ελάτη–Περτούλι.' },
      ],
    },
    en: {
      metaTitle: 'Pertouli Trikala: Sights & Activities',
      h1: 'Pertouli — Village and Plateau in Pindos',
      intro: 'Pertouli is a known mountain resort with a square, guesthouses and access to its namesake plateau. It is about 40 minutes from Pyli.',
      sections: [
        { id: 'village', title: 'The village', body: 'Pertouli has traditional architecture and is popular for its hotels and restaurants. The square is the heart of village life.' },
        { id: 'meadow', title: 'The plateau', body: 'The Pertouli plateau spreads around it, offering forest, meadows and winter activities. See the separate guide to the Pertouli meadows.' },
        { id: 'activities', title: 'Activities', body: 'Hiking, cycling, horse-riding and winter sports are available by season. Confirm what is running during your visit.' },
      ],
      faq: [
        { q: 'How far from Pyli bridge?', a: 'About 40 minutes by car.' },
        { q: 'Is there a ski centre?', a: 'The area has winter activities — confirm facilities and hours locally.' },
        { q: 'Where to stay?', a: 'Guesthouses and hotels in the village, with high demand at weekends.' },
        { q: 'Worth combining with the bridge?', a: 'Yes, as a full mountain day — see the Pyli–Elati–Pertouli route.' },
      ],
    },
    zh: {
      metaTitle: '佩尔图利（特里卡拉）：景点与活动',
      h1: '佩尔图利——品都斯山村与高原',
      intro: '佩尔图利是知名山区度假地，有广场、旅馆，并可前往同名高原，距皮利约 40 分钟。',
      sections: [
        { id: 'village', title: '村庄', body: '佩尔图利保留传统建筑，以旅馆与餐厅闻名，广场是村庄生活的中心。' },
        { id: 'meadow', title: '高原', body: '佩尔图利高原环绕村庄，有森林、草甸与冬季活动，详见佩尔图利草甸专页。' },
        { id: 'activities', title: '活动', body: '徒步、骑行、骑马与冬季运动随季节开放，请确认到访期间的项目。' },
      ],
      faq: [
        { q: '离皮利桥多远？', a: '自驾约 40 分钟。' },
        { q: '有滑雪场吗？', a: '这一带有冬季活动，设施与时段请以当地为准。' },
        { q: '住哪里？', a: '村里有旅馆与酒店，周末需求高。' },
        { q: '值得和桥一起玩吗？', a: '值得，可组成完整山区一日，见皮利–埃拉蒂–佩尔图利路线。' },
      ],
    },
  },
  {
    slug: 'nearby/pertouli-meadows',
    zh: {
      metaTitle: '佩尔图利草原：自然与活动',
      h1: '佩尔图利草甸',
      intro: '佩尔图利草甸是环绕佩尔图利村的高原，有森林、草甸与开阔视野，随季节提供徒步与自然体验。',
      sections: [
        { id: 'nature', title: '自然', body: '草甸被针叶林环绕，夏季绿意盎然，冬季可覆雪，是观景与呼吸山间空气的地方。' },
        { id: 'activities', title: '活动', body: '徒步、骑行、骑马与摄影随季节开放，请确认到访期间的项目。' },
        { id: 'tips', title: '建议', body: '带水与分层衣物，注意天气；从佩尔图利村出发几分钟即达。' },
      ],
      faq: [
        { q: '离佩尔图利村远吗？', a: '就在村外，可一并游览。' },
        { q: '有步道吗？', a: '有，沿草甸与林缘的平缓路线，具体以当地为准。' },
        { q: '能看到什么？', a: '森林、草甸与开阔的山谷视野。' },
        { q: '适合儿童吗？', a: '适合，地面平缓，但天气变化快，请准备。' },
      ],
    },
    category: 'nearby',
    related: ['nearby/pertouli', 'routes/pyli-elati-pertouli', 'best-time-to-visit'],
    el: {
      metaTitle: 'Περτουλιώτικα Λιβάδια: Φύση & δραστηριότητες',
      h1: 'Τα Περτουλιώτικα Λιβάδια',
      intro:
        'Το οροπέδιο του Περτουλίου είναι μια έκταση με δάση, λιβάδια και ρέματα, ιδανική για ήσυχη επαφή με τη φύση. Απέχει περίπου 40 λεπτά από την Πύλη.',
      sections: [
        { id: 'nature', title: 'Το τοπίο', body: 'Το οροπέδιο συνδυάζει πεύκα, έλατα και ανοιχτά λιβάδια. Η ηρεμία και η θέα το καθιστούν αγαπημένο προορισμό για περιπάτους.' },
        { id: 'activities', title: 'Τι να κάνετε', body: 'Πεζοπορία, ποδήλατο βουνού και ιππασία είναι διαθέσιμα ανάλογα με την εποχή. Οι χειμερινές συνθήκες αλλάζουν τις δραστηριότητες.' },
        { id: 'tips', title: 'Συμβουλές', body: 'Φορέστε κατάλληλα παπούτσια, πάρτε νερό και ενημερωθείτε για τον καιρό. Δεν υπάρχουν πάντα καταστήματα μέσα στο οροπέδιο.' },
      ],
      faq: [
        { q: 'Πώς πάω;', a: 'Οδικώς από το Περτούλι, περίπου 40 λεπτά από την Πύλη.' },
        { q: 'Υπάρχει είσοδος;', a: 'Όχι, είναι ελεύθερος υπαίθριος χώρος.' },
        { q: 'Ποια εποχή είναι καλύτερη;', a: 'Άνοιξη και φθινόπωρο για πεζοπορία · χειμώνας για χιόνι και ησυχία.' },
        { q: 'Είναι για παιδιά;', a: 'Ναι, τα λιβάδια είναι επίπεδα και ασφαλή για ήπιες βόλτες με επίβλεψη.' },
      ],
    },
    en: {
      metaTitle: 'Pertouli Meadows: Nature & Activities',
      h1: 'The Pertouli Meadows',
      intro: 'The Pertouli plateau is an expanse of forests, meadows and streams, ideal for quiet nature contact. It is about 40 minutes from Pyli.',
      sections: [
        { id: 'nature', title: 'The landscape', body: 'The plateau mixes pines, firs and open meadows. Its calm and views make it a favourite for walks.' },
        { id: 'activities', title: 'What to do', body: 'Hiking, mountain biking and horse-riding are available by season. Winter conditions change the activities.' },
        { id: 'tips', title: 'Tips', body: 'Wear proper shoes, carry water and check the weather. There are not always shops within the plateau.' },
      ],
      faq: [
        { q: 'How do I get there?', a: 'By road from Pertouli, about 40 minutes from Pyli.' },
        { q: 'Is there an entrance fee?', a: 'No, it is a free open-air area.' },
        { q: 'Which season is best?', a: 'Spring and autumn for hiking; winter for snow and quiet.' },
        { q: 'Good for children?', a: 'Yes, the meadows are flat and safe for gentle supervised walks.' },
      ],
    },
  },
  {
    slug: 'nearby/neraidochori',
    zh: {
      metaTitle: '内莱多霍里：品都斯的“阳台”',
      h1: '内莱多霍里——品都斯的阳台',
      intro: '内莱多霍里是皮利以北的山区村庄，海拔较高、视野开阔，被称为品都斯的“阳台”。',
      sections: [
        { id: 'village', title: '村庄', body: '村庄安静、绿意环绕，是避暑与徒步的落脚地，保留山村氛围。' },
        { id: 'eat', title: '餐饮', body: '村里有小酒馆与咖啡，提供传统菜，具体以店家为准。' },
        { id: 'visit', title: '游览', body: '可与科齐亚卡斯步道或附近村庄串成一日，注意山路弯多。' },
      ],
      faq: [
        { q: '离皮利多远？', a: '皮利以北沿山路，具体里程以导航为准，车程约半小时级。' },
        { q: '为什么叫“阳台”？', a: '因海拔高、视野开阔而得名。' },
        { q: '有住宿吗？', a: '有少量民宿与旅馆，建议提前预订。' },
        { q: '适合徒步吗？', a: '适合，周边有步道与山景。' },
      ],
    },
    category: 'nearby',
    related: ['nearby/elati', 'nearby/pertouli', 'routes/pyli-elati-pertouli'],
    el: {
      metaTitle: 'Νεραϊδοχώρι Τρικάλων: Οδηγός επίσκεψης',
      h1: 'Νεραϊδοχώρι — το «μπαλκόνι» της Πίνδου',
      intro:
        'Το Νεραϊδοχώρι είναι ένα ήσυχο ορεινό χωριό με θέα προς την κοιλάδα, συχνά αποκαλούμενο «μπαλκόνι» της Πίνδου. Απέχει περίπου 35–40 λεπτά από την Πύλη.',
      sections: [
        { id: 'village', title: 'Το χωριό', body: 'Χτισμένο σε υψόμετρο πάνω από την κοιλάδα, προσφέρει πέτρινα σπίτια, ησυχία και πανοραμική θέα. Είναι ιδανικό για όσους γνωρίζουν ήδη την Ελάτη και το Περτούλι.' },
        { id: 'eat', title: 'Φαγητό', body: 'Υπάρχουν λίγες ταβέρνες και καφετέριες στο χωριό. Για περισσότερες επιλογές, η Ελάτη απέχει λίγα λεπτά.' },
        { id: 'visit', title: 'Πρόσβαση', body: 'Ο δρόμος είναι ορεινός · οδηγείτε προσεκτικά και ελέγξτε τις συνθήκες τον χειμώνα.' },
      ],
      faq: [
        { q: 'Πού βρίσκεται;', a: 'Στα ορεινά Τρικάλων, κοντά σε Ελάτη και Περτούλι.' },
        { q: 'Γιατί λέγεται «μπαλκόνι»;', a: 'Λόγω της υψηλής θέσης και της πανοραμικής θέας προς την κοιλάδα.' },
        { q: 'Αξίζει μια στάση;', a: 'Ναι, για ήσυχη θέα και φωτογραφία, ιδίως σε συνδυασμό με Ελάτη/Περτούλι.' },
        { q: 'Υπάρχει διαμονή;', a: 'Περιορισμένη · κλείστε εκ των προτέρων αν σχεδιάζετε διανυκτέρευση.' },
      ],
    },
    en: {
      metaTitle: 'Neraidochori Trikala: Visitor Guide',
      h1: 'Neraidochori — the “Balcony” of Pindos',
      intro: 'Neraidochori is a quiet mountain village with valley views, often called the “balcony” of Pindos. It is about 35–40 minutes from Pyli.',
      sections: [
        { id: 'village', title: 'The village', body: 'Built high above the valley, it offers stone houses, quiet and panoramic views. Ideal for those who already know Elati and Pertouli.' },
        { id: 'eat', title: 'Food', body: 'A few tavernas and cafés are in the village. For more choice, Elati is a few minutes away.' },
        { id: 'visit', title: 'Access', body: 'The road is mountainous — drive carefully and check conditions in winter.' },
      ],
      faq: [
        { q: 'Where is it?', a: 'In the mountains of Trikala, near Elati and Pertouli.' },
        { q: 'Why “balcony”?', a: 'Because of its high position and panoramic valley views.' },
        { q: 'Worth a stop?', a: 'Yes, for quiet views and photography, especially with Elati/Pertouli.' },
        { q: 'Is there lodging?', a: 'Limited; book ahead if you plan to stay overnight.' },
      ],
    },
  },
  {
    slug: 'nearby/ropoto',
    zh: {
      metaTitle: '罗波托：倾斜房屋的地质奇景',
      h1: '罗波托——倾斜房屋的村庄',
      intro: '罗波托因地面沉降，房屋明显倾斜，成为一处引人好奇的地质现象村落。',
      sections: [
        { id: 'geology', title: '地质', body: '地下岩层与地下水变化导致地表缓慢下沉，使建筑倾斜，是鲜活的地貌课。' },
        { id: 'visit', title: '参观', body: '村庄可步行探访，沿途可见倾斜的房屋与街面，注意安全勿入危房。' },
        { id: 'context', title: '背景', body: '把它与皮利桥、佩尔图利安排在一天，感受自然与人文的不同面貌。' },
      ],
      faq: [
        { q: '为什么倾斜？', a: '因地面沉降，房屋随地表缓慢下沉而倾斜。' },
        { q: '能进去看吗？', a: '危房勿入，建议在村中外观与步道参观。' },
        { q: '离皮利远吗？', a: '在附近山区，具体里程以导航为准。' },
        { q: '安全吗？', a: '外观参观安全，避免靠近明显受损建筑。' },
      ],
    },
    category: 'nearby',
    related: ['nearby-attractions', 'nature/portaikos-valley', 'history/pyli-town'],
    el: {
      metaTitle: 'Ροπότο: Το χωριό με τα κεκλιμένα σπίτια',
      h1: 'Ροπότο — γεωλογικό τοπίο με κεκλιμένα κτίρια',
      intro:
        'Το Ροπότο είναι γνωστό για τα κτίρια που έγειρε η καθίζηση του εδάφους. Ενδιαφέρον γεωλογικό και ιστορικό τοπίο, με προσοχή στην πρόσβαση.',
      sections: [
        { id: 'geology', title: 'Το γεωλογικό φαινόμενο', body: 'Η καθίζηση του εδάφους έγειρε πολλά σπίτια, δημιουργώντας ένα ασυνήθιστο τοπίο. Η περιοχή έχει ενδιαφέρον για τη γεωλογία της Θεσσαλίας.' },
        { id: 'visit', title: 'Επίσκεψη', body: 'Η πρόσβαση είναι οδική από την Πύλη/Τρίκαλα. Σεβαστείτε τις ιδιοκτησίες και μην μπείτε σε επικίνδυνα ή εγκαταλελειμμένα κτίρια.' },
        { id: 'context', title: 'Ιστορικό πλαίσιο', body: 'Το Ροπότο ήταν κάποτε ζωντανό χωριό · η μετακίνηση των κατοίκων άλλαξε τον οικισμό. Η ιστορία του συνδέεται με τη γεωμορφολογία της περιοχής.' },
      ],
      faq: [
        { q: 'Γιατί έγειραν τα σπίτια;', a: 'Λόγω καθίζησης του εδάφους, ενός γεωλογικού φαινομένου της περιοχής.' },
        { q: 'Μπορώ να μπω μέσα;', a: 'Όχι σε εγκαταλελειμμένα ή επικίνδυνα κτίρια · παρατηρήστε από απόσταση.' },
        { q: 'Πώς πάω;', a: 'Οδικώς από Τρίκαλα/Πύλη · ελέγξτε τη διαδρομή εκ των προτέρων.' },
        { q: 'Αξίζει μαζί με το γεφύρι;', a: 'Ναι, ως γεωλογικό αντίθετο σημείο μιας ημέρας στην περιοχή.' },
      ],
    },
    en: {
      metaTitle: 'Ropoto: The Village with Tilted Houses',
      h1: 'Ropoto — Geological Site with Tilted Buildings',
      intro: 'Ropoto is known for buildings tilted by ground subsidence. An interesting geological and historical site, with caution on access.',
      sections: [
        { id: 'geology', title: 'The geological phenomenon', body: 'Ground subsidence tilted many houses, creating an unusual landscape. The area is of interest for Thessaly’s geology.' },
        { id: 'visit', title: 'Visiting', body: 'Access is by road from Pyli/Trikala. Respect private property and do not enter dangerous or abandoned buildings.' },
        { id: 'context', title: 'Historical context', body: 'Ropoto was once a lively village; the residents’ relocation changed the settlement. Its story links to the region’s geomorphology.' },
      ],
      faq: [
        { q: 'Why did the houses tilt?', a: 'Because of ground subsidence, a geological phenomenon in the area.' },
        { q: 'Can I go inside?', a: 'Not into abandoned or unsafe buildings; observe from a distance.' },
        { q: 'How do I get there?', a: 'By road from Trikala/Pyli; check the route in advance.' },
        { q: 'Worth combining with the bridge?', a: 'Yes, as a geological counterpoint to a day in the area.' },
      ],
    },
  },
];
