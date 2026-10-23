import type { Topic } from './types';

export const PART1: Topic[] = [
  {
    slug: 'getting-there',
    category: 'transport',
    related: ['parking-access', 'without-a-car', 'routes/trikala-day-trip', 'best-time-to-visit'],
    el: {
      metaTitle: 'Πώς θα φτάσετε στο Γεφύρι της Πύλης: Οδηγίες από Τρίκαλα',
      h1: 'Πώς θα φτάσετε στο Γεφύρι της Πύλης',
      intro:
        'Το Τοξωτό Γεφύρι του Πορταϊκού βρίσκεται στο 22ο χλμ. της εθνικής οδού Τρικάλων–Άρτας, περίπου 22 χλμ. δυτικά της πόλης των Τρικάλων. Εδώ συγκεντρώνουμε τις επιλογές πρόσβασης με αυτοκίνητο, ταξί, λεωφορείο και τρένο, με ενδεικτικούς χρόνους.',
      sections: [
        {
          id: 'driving',
          title: 'Με αυτοκίνητο από τα Τρίκαλα',
          body:
            'Ακολουθήστε την εθνική οδό Τρικάλων–Άρτας και σταθμεύστε στη θέση «22ο χλμ», όπου υπάρχει ελεύθερος χώρος στάθμευσης δίπλα στο δρόμο. Ο δρόμος είναι σε καλή κατάσταση και η διαδρομή διαρκεί περίπου 25–35 λεπτά.',
        },
        {
          id: 'bus',
          title: 'Με τοπικό λεωφορείο (ΚΤΕΛ)',
          body:
            'Τα περιφερειακά δρομολόγια συνδέουν τα Τρίκαλα με την Πύλη (περίπου 30–40 λεπτά). Από την κωμόπολη της Πύλης το γεφύρι απέχει περίπου 2 χλμ., με τα πόδια ή με σύντομο ταξί. Τα δρομολόγια αραιώνουν τα Σαββατοκύριακα, οπότε ελέγξτε τα την ημέρα του ταξιδιού.',
        },
        {
          id: 'long-distance',
          title: 'Από Αθήνα και Θεσσαλονίκη',
          body:
            'Και οι δύο πόλεις συνδέονται με τα Τρίκαλα με υπεραστικά ΚΤΕΛ (περίπου 4,5–5 ώρες από Αθήνα, 2,5–3 ώρες από Θεσσαλονίκη). Με τρένο απαιτείται αλλαγή στον Παλαιοφάρσαλο. Το κοντινότερο αεροδρόμιο είναι των Ιωαννίνων (IOA), περίπου 85 χλμ.',
        },
      ],
      faq: [
        { q: 'Πόσο απέχει το γεφύρι από τα Τρίκαλα;', a: 'Περίπου 22 χλμ. δυτικά, μέσω της εθνικής οδού Τρικάλων–Άρτας, με τυπική διάρκεια 25–35 λεπτά με αυτοκίνητο.' },
        { q: 'Υπάρχει απευθείας λεωφορείο ως το γεφύρι;', a: 'Δεν υπάρχει τακτική γραμμή μέχρι το γεφύρι. Πηγαίνετε με ΚΤΕΛ ως την Πύλη και συνεχίστε με τα πόδια (2 χλμ.) ή με ταξί.' },
        { q: 'Ποιο σημείο αναφοράς να δώσω στον οδηγό ταξί;', a: 'Ζητήστε το «παλιό πέτρινο γεφύρι της Πύλης, στο 22ο χλμ. της εθνικής οδού». Βοηθάει το Plus Code FJ62+65 Pyli.' },
        { q: 'Μπορώ να πάω με ποδήλατο;', a: 'Ναι, από την Πύλη ως το γεφύρι η διαδρομή είναι 2 χλμ. με άσφαλτο και αγροτικούς δρόμους, αλλά η εθνική οδός έχει γρήγορη κυκλοφορία — προσοχή.' },
      ],
    },
    en: {
      metaTitle: 'How to Get to Pyli Bridge: Directions from Trikala',
      h1: 'How to Get to Pyli Bridge',
      intro:
        'The Arched Bridge of Portaikos sits at the 22nd km of the Trikala–Arta national road, about 22 km west of Trikala city. Here are the transport options by car, taxi, bus and train, with typical timings.',
      sections: [
        { id: 'driving', title: 'By car from Trikala', body: 'Follow the Trikala–Arta national road and pull in at the 22nd km marker, where a free roadside parking area sits next to the bridge. The road is in good condition and the drive takes about 25–35 minutes.' },
        { id: 'bus', title: 'By regional bus (KTEL)', body: 'Regional services link Trikala with Pyli (about 30–40 minutes). From Pyli town centre the bridge is roughly 2 km away — on foot or a short taxi ride. Services thin out at weekends, so check the day’s timetable.' },
        { id: 'long-distance', title: 'From Athens and Thessaloniki', body: 'Both cities have KTEL coaches to Trikala (around 4.5–5 hours from Athens, 2.5–3 hours from Thessaloniki). By train you change at Palaiofarsalos. The nearest airport is Ioannina (IOA), about 85 km away.' },
      ],
      faq: [
        { q: 'How far is the bridge from Trikala?', a: 'About 22 km west via the Trikala–Arta national road, typically a 25–35 minute drive.' },
        { q: 'Is there a direct bus to the bridge?', a: 'There is no regular service to the bridge itself. Take a KTEL bus to Pyli, then continue 2 km on foot or by taxi.' },
        { q: 'What should I tell a taxi driver?', a: 'Ask for the “old stone bridge at Pyli, 22nd km of the national road”. The Plus Code FJ62+65 Pyli also works in most map apps.' },
        { q: 'Can I cycle there?', a: 'Yes — it is 2 km of asphalt and country lane from Pyli, but traffic on the national road is fast, so take care.' },
      ],
    },
    zh: {
      metaTitle: '皮利石桥怎么去：从特里卡拉出发的路线',
      h1: '怎么去皮利石桥',
      intro: '波尔泰科斯拱桥位于特里卡拉–阿尔塔国道第 22 公里处，在特里卡拉市区以西约 22 公里。下面整理出自驾、出租车、长途巴士与火车等方式及大致用时。',
      sections: [
        { id: 'driving', title: '从特里卡拉自驾', body: '沿特里卡拉–阿尔塔国道行驶，在第 22 公里标牌处靠边停车，桥头旁即有免费路边停车区。路面状况良好，车程约 25–35 分钟。' },
        { id: 'bus', title: '乘区间巴士（KTEL）', body: '区间 KTEL 巴士连接特里卡拉与皮利镇（约 30–40 分钟）。从皮利镇中心到石桥约 2 公里，可步行或搭短途出租。周末班次较少，建议当天查时刻表。' },
        { id: 'long-distance', title: '从雅典和塞萨洛尼基出发', body: '两城均有 KTEL 长途巴士前往特里卡拉（雅典约 4.5–5 小时，塞萨洛尼基约 2.5–3 小时）。火车需在帕莱奥法萨洛斯换乘。最近的机场是约阿尼纳（IOA），约 85 公里。' },
      ],
      faq: [
        { q: '石桥离特里卡拉多远？', a: '约 22 公里，走特里卡拉–阿尔塔国道，自驾通常 25–35 分钟。' },
        { q: '有直达石桥的巴士吗？', a: '没有固定班次直达桥边。先乘 KTEL 到皮利镇，再步行 2 公里或打车。' },
        { q: '告诉出租车司机什么地点？', a: '说到“皮利镇老石桥，国道第 22 公里处”。Plus Code FJ62+65 Pyli 在多数地图也通用。' },
        { q: '可以骑车去吗？', a: '可以，从皮利镇出发约 2 公里为柏油路与乡道，但国道车流较快，需注意安全。' },
      ],
    },
  },
  {
    slug: 'parking-access',
    category: 'transport',
    related: ['getting-there', 'family-accessibility', 'without-a-car', 'photo-spots'],
    el: {
      metaTitle: 'Στάθμευση & πρόσβαση με τα πόδια στο Γεφύρι της Πύλης',
      h1: 'Πάρκινγκ και πεζή πρόσβαση στο Γεφύρι',
      intro:
        'Η στάθμευση είναι δωρεάν αλλά περιορισμένη. Εδώ περιγράφουμε πού παρκάρετε και πώς φτάνετε στο κατάστρωμα της γέφυρας με τα πόδια, μαζί με σημεία προσοχής.',
      sections: [
        { id: 'where', title: 'Πού παρκάρετε', body: 'Υπάρχει ελεύθερος χώρος στάθμευσης δίπλα στον εθνικό δρόμο, στο 22ο χλμ., λίγα μέτρα από την κεφαλή της γέφυρας. Οι θέσεις είναι λιγοστές, γι’ αυτό προτιμήστε το πρωί τα Σαββατοκύριακα και τις αργίες.' },
        { id: 'walk', title: 'Η τελευταία πεζή διαδρομή', body: 'Από το πάρκινγκ κατεβαίνετε σύντομο λιθόστρωτο μονοπάτι προς την κεφαλή της γέφυρας. Η επιφάνεια είναι ανώμαλη και χωρίς ράμπες ή κιγκλιδώματα · φορέστε αντιολισθητικά παπούτσια και κρατήστε τα παιδιά από το χέρι.' },
        { id: 'viewpoint', title: 'Σημείο θέας από το δρόμο', body: 'Αν δεν θέλετε να κατεβείτε, το οδικό σημείο θέας προσφέρει πλήρη άποψη του μονού τόξου και του φαραγγιού — ιδανικό για άτομα με μειωμένη κινητικότητα.' },
      ],
      faq: [
        { q: 'Είναι δωρεάν το πάρκινγκ;', a: 'Ναι, η στάθμευση δίπλα στον εθνικό δρόμο είναι δωρεάν, αλλά με περιορισμένες θέσεις.' },
        { q: 'Πόσο μακριά είναι το πάρκινγκ από τη γέφυρα;', a: 'Λίγες δεκάδες μέτρα ως την κεφαλή της γέφυρας μέσω σύντομου λιθόστρωτου μονοπατιού.' },
        { q: 'Υπάρχει χώρος για τροχήλατο αμαξίδιο;', a: 'Το μονοπάτι είναι ανώμαλο χωρίς ράμπα, οπότε το αμαξίδιο δυσκολεύεται. Προτιμήστε το σημείο θέας από το δρόμο.' },
        { q: 'Γίνεται να φτάσω άμεσα με αυτοκίνητο πάνω στη γέφυρα;', a: 'Όχι. Το γεφύρι είναι πεζόδρομος · το αυτοκίνητο μένει στο δρόμο και συνεχίζετε με τα πόδια.' },
      ],
    },
    en: {
      metaTitle: 'Parking & Walking Access to Pyli Bridge',
      h1: 'Parking and Walking Access to the Bridge',
      intro: 'Parking is free but limited. Here is where to leave the car and how to reach the bridge deck on foot, with a few cautions.',
      sections: [
        { id: 'where', title: 'Where to park', body: 'A free roadside area sits beside the national road at the 22nd km, a few metres from the bridge head. Spaces are limited, so arrive in the morning at weekends and on public holidays.' },
        { id: 'walk', title: 'The final walk', body: 'From the parking area a short cobbled path leads down to the bridge head. The surface is uneven with no ramps or handrails — wear grippy shoes and keep children close.' },
        { id: 'viewpoint', title: 'Roadside viewpoint', body: 'If you would rather not descend, the roadside viewing spot gives a full view of the single arch and the gorge — ideal for visitors with limited mobility.' },
      ],
      faq: [
        { q: 'Is the parking free?', a: 'Yes, the roadside parking by the national road is free, but spaces are limited.' },
        { q: 'How far is the parking from the bridge?', a: 'A few dozen metres to the bridge head via a short cobbled path.' },
        { q: 'Is there space for a wheelchair?', a: 'The path is uneven with no ramp, so wheelchairs struggle. Use the roadside viewpoint instead.' },
        { q: 'Can I drive right up to the bridge?', a: 'No — the bridge is for pedestrians; the car stays on the road and you walk the rest.' },
      ],
    },
    zh: {
      metaTitle: '皮利桥停车与步行到达',
      h1: '停车与步行到达石桥',
      intro: '停车免费但车位有限。下面说明在哪里停车，以及如何步行到桥面，并提醒注意事项。',
      sections: [
        { id: 'where', title: '在哪里停车', body: '国道第 22 公里处、桥头上方的路边有免费停车区，距桥首仅几米。车位不多，周末与节假日建议上午来。' },
        { id: 'walk', title: '最后的步行', body: '从停车区沿一段短石阶路下行到桥首。路面不平、无坡道与栏杆，请穿防滑鞋并牵好儿童。' },
        { id: 'viewpoint', title: '路边观景点', body: '若不想下行，路边观景点可完整看到单拱与峡谷，适合行动不便者。' },
      ],
      faq: [
        { q: '停车免费吗？', a: '免费，国道旁的路边停车免费，但车位有限。' },
        { q: '车位离桥多远？', a: '经短石阶路到桥首仅数十米。' },
        { q: '轮椅能通行吗？', a: '石阶路不平且无坡道，轮椅较吃力，建议用路边观景点。' },
        { q: '能开车上桥吗？', a: '不能，石桥仅供步行，车停在路边后步行前往。' },
      ],
    },
  },
  {
    slug: 'family-accessibility',
    zh: {
      metaTitle: '带儿童与行动不便者游皮利桥',
      h1: '带儿童及行动不便人士参观',
      intro: '石桥对家庭与行动不便者大致可达，但桥面窄、无栏杆。下面说明注意事项与替代观景点。',
      sections: [
        { id: 'deck', title: '桥面', body: '单拱走道宽约 2.1 米，由石板铺成，不平；推婴儿车与轮椅需协助，请牵好儿童。' },
        { id: 'parking', title: '停车与步行', body: '免费路边停车仅几步到桥首，但下到桥面的短石阶路无坡道。' },
        { id: 'alternative', title: '替代观景', body: '若不便下行，路边观景点可完整看到拱与峡谷，无需走石阶。' },
      ],
      faq: [
        { q: '可以推轮椅吗？', a: '可以但困难：石阶路不平且无坡道，建议用路边观景点。' },
        { q: '有厕所吗？', a: '桥边没有固定设施；皮利镇（2 公里）有基本服务。' },
        { q: '有咖啡吗？', a: '有，桥口的恩诺迪亚咖啡提供咖啡与轻食。' },
        { q: '安全吗？', a: '安全，但桥面窄且无栏杆，务必看管好儿童。' },
      ],
    },
    category: 'transport',
    related: ['parking-access', 'photo-spots', 'routes/pyli-half-day', 'best-time-to-visit'],
    el: {
      metaTitle: 'Γεφύρι Πύλης με παιδιά & άτομα με κινητικά προβλήματα',
      h1: 'Επίσκεψη με παιδιά και με μειωμένη κινητικότητα',
      intro:
        'Η γέφυρα μπορεί να απολαύσει όλη η οικογένεια, αρκεί να γνωρίζετε τις συνθήκες του καταστρώματος και των σκαλοπατιών. Συγκεντρώσαμε πρακτικές συμβουλές.',
      sections: [
        { id: 'deck', title: 'Το κατάστρωμα και τα σκαλοπάτια', body: 'Το κατάστρωμα έχει πλάτος μόλις 2,1 μ. και ανώμαλη πέτρινη επιφάνεια, χωρίς κιγκλιδώματα. Κρατήστε τα παιδιά από το χέρι και αποφύγετε το μεσημέρι το καλοκαίρι.' },
        { id: 'stroller', title: 'Καροτσάκια και αμαξίδια', body: 'Το λιθόστρωτο μονοπάτι δυσκολεύει τα καροτσάκια · ένα μωρουδιακό αγκαλιάς είναι πρακτικότερο. Για αμαξίδια, το σημείο θέας από τον δρόμο είναι η καλύτερη επιλογή.' },
        { id: 'alternatives', title: 'Εναλλακτικά σημεία παρατήρησης', body: 'Η επίπεδη περιοχή στην κεφαλή της γέφυρας και η σκιά των πλατάνων προσφέρουν ασφαλή στάση χωρίς κατάβαση προς τον ποταμό.' },
      ],
      faq: [
        { q: 'Είναι ασφαλές για μικρά παιδιά;', a: 'Ναι, με επίβλεψη: το κατάστρωμα είναι στενό και χωρίς κιγκλιδώματα, οπότε κρατήστε τα παιδιά σφιχτά.' },
        { q: 'Υπάρχει τουαλέτα στο γεφύρι;', a: 'Όχι επί τόπου · οι κοντινότερες δημόσιες τουαλέτες είναι στην Πύλη (περίπου 2 χλμ.).' },
        { q: 'Πού μπορούμε να καθίσουμε στη σκιά;', a: 'Κάτω από τα αιωνόβια πλατάνια στην όχθη υπάρχουν παγκάκια και φυσική σκιά.' },
        { q: 'Πόση ώρα χρειάζεται μια οικογένεια;', a: 'Περίπου 1–1,5 ώρα για τη γέφυρα και λίγο ξεκούραση · προσθέστε χρόνο για φαγητό στην Πύλη.' },
      ],
    },
    en: {
      metaTitle: 'Pyli Bridge with Kids & Reduced Mobility',
      h1: 'Visiting with Children and Limited Mobility',
      intro: 'The whole family can enjoy the bridge, as long as you know the deck and step conditions. Here are practical tips.',
      sections: [
        { id: 'deck', title: 'The deck and steps', body: 'The deck is only 2.1 m wide with an uneven stone surface and no handrails. Hold children’s hands and avoid midday in summer.' },
        { id: 'stroller', title: 'Strollers and wheelchairs', body: 'The cobbled path is hard for strollers — a baby carrier works better. For wheelchairs, the roadside viewpoint is the best option.' },
        { id: 'alternatives', title: 'Alternative viewing spots', body: 'The level ground at the bridge head and the plane-tree shade offer a safe rest stop without descending to the river.' },
      ],
      faq: [
        { q: 'Is it safe for small children?', a: 'Yes, with supervision: the deck is narrow and unrailed, so keep children close.' },
        { q: 'Is there a toilet at the bridge?', a: 'Not on site; the nearest public toilets are in Pyli, about 2 km away.' },
        { q: 'Where can we sit in the shade?', a: 'Under the centuries-old plane trees by the bank there are benches and natural shade.' },
        { q: 'How long does a family need?', a: 'About 1–1.5 hours for the bridge and a rest; add time for a meal in Pyli.' },
      ],
    },
  },
  {
    slug: 'photo-spots',
    zh: {
      metaTitle: '皮利桥最佳拍照机位',
      h1: '皮利桥最佳拍照点',
      intro: '单拱、峡谷与河水构成强烈画面。下面按角度与时段建议机位。',
      sections: [
        { id: 'downstream', title: '下游视角', body: '站在桥下游水面附近，可拍到完整单拱与水中倒影，是经典机位。' },
        { id: 'detail', title: '细节', body: '靠近拍摄拱石、砌缝与桥面石板，呈现古桥质感。' },
        { id: 'high', title: '高处', body: '从国道一侧或路边观景点俯拍，可纳入峡谷全貌与环境。' },
      ],
      faq: [
        { q: '最佳时间？', a: '清晨顺光、午后峡谷有阴影、日落暖调，依想要的效果选择。' },
        { q: '无人机可以吗？', a: '请先查当地飞行规定，部分区域可能受限。' },
        { q: '雨天拍什么？', a: '雨后水流更饱满，岩面更润，但注意脚下湿滑。' },
        { q: '桥上能拍吗？', a: '可以，窄桥面适合人像与纵深构图，注意无栏杆安全。' },
      ],
    },
    category: 'transport',
    related: ['best-time-to-visit', 'parking-access', 'nearby/palaiokarya-bridge'],
    el: {
      metaTitle: 'Σημεία φωτογράφησης στο Γεφύρι της Πύλης',
      h1: 'Τα καλύτερα σημεία για φωτογραφία',
      intro:
        'Το μονότοξο γεφύρι με τον Πορταϊκό και τα πλατάνια προσφέρει πολλές γωνίες. Συγκεντρώσαμε τα πιο αξιόπιστα σημεία και την κατάλληλη ώρα.',
      sections: [
        { id: 'downstream', title: 'Άποψη από την κάτω ροή', body: 'Λίγα μέτρα πιο κάτω από τη γέφυρα, η όχθη δίνει ολόκληρο το τόξο με αντανάκλαση στο νερό — ιδανικό στο ξημέρωμα.' },
        { id: 'detail', title: 'Λεπτομέρεια πέτρας', body: 'Το πλάγιο φως του πρωινού αναδεικνύει την υφή των πέτρων στο κατάστρωμα και τα ελαφρόπετρα του τόξου. Προσοχή στις ολισθηρές πέτρες μετά τη βροχή.' },
        { id: 'high', title: 'Υψηλό σημείο από τον δρόμο', body: 'Το οδικό σημείο θέας απέναντι δίνει το πλήρες άνοιγμα του τόξου στο ζεστό φως του δειλινού.' },
      ],
      faq: [
        { q: 'Ποια ώρα είναι καλύτερη;', a: 'Ξημέρωμα για αντανακλάσεις και αργά το απόγευμα για ζεστό φως στο τόξο.' },
        { q: 'Επιτρέπονται drones;', a: 'Αν χρησιμοποιήσετε drone, ακολουθήστε την τοπική νομοθεσία και αποφύγετε την πτήση πάνω από επισκέπτες και τον δρόμο.' },
        { q: 'Υπάρχει σκιά για φωτογράφιση;', a: 'Ναι, τα πλατάνια δίνουν σκιά το μεσημέρι — κατάλληλη για λεπτομέρειες και μακροφωτογραφία.' },
        { q: 'Μπορώ να φωτογραφίσω από το κατάστρωμα;', a: 'Ναι, αλλά το πλάτος είναι 2,1 μ. — μην κλείνετε το πέρασμα και μην απλώνετε τρίποδα επικίνδυνα.' },
      ],
    },
    en: {
      metaTitle: 'Photo Spots at Pyli Bridge',
      h1: 'The Best Photo Spots',
      intro: 'The single-arch bridge with the Portaikos river and plane trees offers many angles. Here are the most reliable spots and the best time.',
      sections: [
        { id: 'downstream', title: 'Downstream view', body: 'A few metres below the bridge, the bank gives the full arch with a water reflection — ideal at dawn.' },
        { id: 'detail', title: 'Stone detail', body: 'Morning side-light reveals the stone texture of the deck and the arch voussoirs. Watch for slippery stones after rain.' },
        { id: 'high', title: 'High viewpoint from the road', body: 'The opposite roadside viewpoint gives the full span in warm evening light.' },
      ],
      faq: [
        { q: 'What time is best?', a: 'Dawn for reflections, late afternoon for warm light on the arch.' },
        { q: 'Are drones allowed?', a: 'If you fly a drone, follow local rules and avoid flying over visitors or the road.' },
        { q: 'Is there shade for photography?', a: 'Yes, the plane trees shade the midday hours — good for detail and macro shots.' },
        { q: 'Can I shoot from the deck?', a: 'Yes, but the deck is 2.1 m wide — keep the walkway clear and place tripods safely.' },
      ],
    },
  },
  {
    slug: 'best-time-to-visit',
    zh: {
      metaTitle: '皮利桥最佳游览时间',
      h1: '什么季节与时间最好',
      intro: '石桥全年可访，但季节与时间影响光线、人流与通行。下面给建议。',
      sections: [
        { id: 'seasons', title: '季节', body: '春（4–6 月）与秋（9–10 月）最舒适，气温宜人、绿意浓；夏可去但中午热；冬有雪景但山路需留意。' },
        { id: 'time', title: '一天中', body: '清晨与傍晚光线最佳、人少；正午强光且旅行团多。' },
        { id: 'avoid', title: '避开', body: '大雨后桥面湿滑，冬季结冰路段谨慎；大型节假人潮多。' },
      ],
      faq: [
        { q: '几月最好？', a: '4–6 月与 9–10 月最理想。' },
        { q: '夏天能去吗？', a: '能，建议清晨或傍晚，避开正午高温。' },
        { q: '冬天值得吗？', a: '值得看雪与清静，但请查山路与天气。' },
        { q: '哪天人少？', a: '工作日清晨通常最安静。' },
      ],
    },
    category: 'transport',
    related: ['season-strategy', 'photo-spots', 'getting-there', 'routes/pyli-half-day'],
    el: {
      metaTitle: 'Πότε να επισκεφθείτε το Γεφύρι της Πύλης',
      h1: 'Ποια εποχή και ώρα είναι καλύτερη',
      intro:
        'Η γέφυρα είναι επισκέψιμη όλο τον χρόνο, αλλά η εμπειρία αλλάζει ανάλογα με την εποχή και την ώρα. Δείτε τι να περιμένετε.',
      sections: [
        { id: 'seasons', title: 'Εποχές', body: 'Η άνοιξη (Μάρτιος–Μάιος) έχει πλήρες, γρήγορο ποτάμι και άνθη. Το φθινόπωρο (Σεπτέμβριος–Νοέμβριος) προσφέρει ήπιες θερμοκρασίες και απαλό φως. Το καλοκαίρι προτιμήστε πρωί ή δειλινό.' },
        { id: 'time', title: 'Ώρα της ημέρας', body: 'Το πρωί και το αργό απόγευμα έχουν το καλύτερο φως και λιγότερο κόσμο. Το μεσημέρι το καλοκαίρι είναι ζεστό και η σκιά περιορισμένη.' },
        { id: 'avoid', title: 'Τι να αποφύγετε', body: 'Σε καταιγίδα ή μετά από δυνατή βροχή ο Πορταϊκός φουσκώνει γρήγορα · μην κατεβείτε στην όχθη. Τον χειμώνα προσέξτε παγετό στο κατάστρωμα.' },
      ],
      faq: [
        { q: 'Ποια εποχή έχει το καλύτερο φως;', a: 'Άνοιξη και φθινόπωρο συνδυάζουν καλό φως και άνετη θερμοκρασία.' },
        { q: 'Αξίζει τον χειμώνα;', a: 'Ναι για ησυχία και γυμνά κλαδιά που αναδεικνύουν το τόξο, αλλά προσέξτε πάγο και υψηλή στάθμη νερού.' },
        { q: 'Είναι ανοιχτό 24 ώρες;', a: 'Ναι, είναι ανοιχτό μνημείο χωρίς εισιτήριο, αλλά χωρίς φωτισμό τη νύχτα — τελειώστε την επίσκεψη πριν το σούρουπο.' },
        { q: 'Πότε είναι πιο πολύς κόσμος;', a: 'Σαββατοκύριακα και αργίες, ιδίως το καλοκαίρι το μεσημέρι.' },
      ],
    },
    en: {
      metaTitle: 'Best Time to Visit Pyli Bridge',
      h1: 'Which Season and Time Are Best',
      intro: 'The bridge is visitable all year, but the experience changes by season and hour. Here is what to expect.',
      sections: [
        { id: 'seasons', title: 'Seasons', body: 'Spring (Mar–May) brings a full, fast river and blossoms. Autumn (Sep–Nov) offers mild temperatures and soft light. In summer go early or late.' },
        { id: 'time', title: 'Time of day', body: 'Morning and late afternoon have the best light and fewest people. Summer midday is hot with limited shade.' },
        { id: 'avoid', title: 'What to avoid', body: 'In a thunderstorm or after heavy rain the Portaikos rises quickly — do not go down to the bank. In winter watch for frost on the deck.' },
      ],
      faq: [
        { q: 'Which season has the best light?', a: 'Spring and autumn combine good light with comfortable temperatures.' },
        { q: 'Is it worth visiting in winter?', a: 'Yes for quiet and bare branches that reveal the arch, but mind ice and high water.' },
        { q: 'Is it open 24 hours?', a: 'Yes, it is a free open-air monument without lighting at night — finish before dusk.' },
        { q: 'When is it busiest?', a: 'Weekends and holidays, especially summer midday.' },
      ],
    },
  },
];
