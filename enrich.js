const fs = require('fs');
const path = require('path');

const enrichedData = {
  zh: {
    intro: {
      title: "探索历史的印记",
      description: "波尔泰科斯河拱桥（Arched Bridge of Portaikos）建于1514年，由当时的拉里萨都主教圣维萨里翁（Saint Vissarion）主持修建。这座宏伟的单拱石桥不仅是色萨利大区第二大的石拱桥，更是几个世纪以来连接特里卡拉平原与平都斯山脉（伊庇鲁斯地区）的唯一生命线。桥梁静静地横跨在清澈的波尔泰科斯河上，两侧是高耸的悬崖和繁茂的梧桐树，是自然风光与人类建筑奇迹的完美结合。无论您是历史爱好者、徒步旅行者，还是摄影爱好者，这里都将为您提供一段难忘的体验。",
      visitGuide: {
        title: "游览建议",
        items: [
          "最佳拍摄时间：清晨或傍晚，光线柔和且游客较少",
          "穿着建议：请穿着防滑的舒适步鞋，河岸石头可能湿滑",
          "周边探索：过桥后可沿着河畔小径漫步，享受宁静的自然风光",
          "无障碍设施：从主路到桥边有一小段石板路，轮椅通行有一定难度"
        ]
      }
    },
    knowledge: {
      title: "深入了解波尔泰科斯河拱桥",
      sections: [
        {
          id: "history",
          title: "悠久的历史",
          content: "这座桥建于1514年（奥斯曼帝国统治时期），由圣维萨里翁（Agios Vissarion）出资并主持修建。在1936年现代公路桥建成之前，它一直是连接色萨利平原与平都斯山脉村落的唯一通道，在当地的商业贸易和交通运输中发挥了不可替代的作用。"
        },
        {
          id: "architecture",
          title: "建筑奇迹",
          content: "该桥是色萨利大区第二大的单拱石桥。其主拱跨度高达29米，最高处距离水面约13米，桥面宽度为2.1米。桥梁主要使用当地的石灰岩（rubble masonry）建造，半圆形的优美拱门展现了16世纪工匠们精湛的建筑技艺。"
        },
        {
          id: "nature",
          title: "壮丽的自然景观",
          content: "桥梁坐落于波尔泰科斯河（Portaikos）的狭窄峡谷中，被苍翠的平都斯山脉环绕。河岸两侧生长着巨大的百年梧桐树，清澈的河水在桥下奔流不息，形成了一幅如诗如画的自然画卷。"
        },
        {
          id: "nearby",
          title: "周边景点",
          content: "在拱桥附近，您可以参观建于13世纪的拜占庭式教堂 Porta Panagia。此外，风景如画的高山村落 Elati 和 Pertouli 也距离不远，是体验当地传统文化和品尝特色美食的绝佳去处。"
        }
      ]
    }
  },
  en: {
    intro: {
      title: "Explore the Footprints of History",
      description: "The Arched Bridge of Portaikos, built in 1514 by Saint Vissarion (Metropolitan of Larissa), is a magnificent single-arch stone bridge. It is the second largest of its kind in Thessaly and served as the sole vital connection between the Thessalian plain and the Pindos mountain villages (Epirus) for centuries. Spanning gracefully over the crystal-clear Portaikos River, flanked by towering cliffs and ancient plane trees, it represents a perfect harmony between nature and human architectural genius. Whether you are a history enthusiast, a hiker, or a photographer, this site offers an unforgettable experience.",
      visitGuide: {
        title: "Visit Guide",
        items: [
          "Best time for photography: Early morning or late afternoon for soft light and fewer crowds.",
          "Footwear: Wear comfortable, slip-resistant shoes as the riverbank stones can be slippery.",
          "Exploration: Cross the bridge and follow the riverside trails to enjoy the tranquil nature.",
          "Accessibility: There is a short cobbled path from the main road; wheelchair access may be challenging."
        ]
      }
    },
    knowledge: {
      title: "Discover the Portaikos River Bridge",
      sections: [
        {
          id: "history",
          title: "Rich History",
          content: "Constructed in 1514 during the Ottoman era, the bridge was funded and overseen by Saint Vissarion (Agios Vissarion). Until a modern road bridge was built in 1936, it was the only passage connecting the Thessalian plain with the Pindos mountains, playing an irreplaceable role in local trade and transport."
        },
        {
          id: "architecture",
          title: "Architectural Marvel",
          content: "As the second largest single-arch stone bridge in Thessaly, it boasts a span of 29 meters, a maximum height of 13 meters from the water, and a deck width of 2.1 meters. Built primarily with local limestone (rubble masonry), its elegant semi-circular arch showcases the masterful skills of 16th-century craftsmen."
        },
        {
          id: "nature",
          title: "Stunning Natural Landscape",
          content: "The bridge is nestled in a narrow gorge of the Portaikos River, surrounded by the lush Pindos mountains. Massive centuries-old plane trees line the riverbanks, while crystal-clear waters rush beneath the arch, creating a picturesque natural scenery."
        },
        {
          id: "nearby",
          title: "Nearby Attractions",
          content: "Close to the bridge, you can visit the 13th-century Byzantine church of Porta Panagia. The scenic mountain villages of Elati and Pertouli are also just a short drive away, offering perfect spots to experience local culture and traditional cuisine."
        }
      ]
    }
  }
};

const dir = 'src/messages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

files.forEach(f => {
  const lang = f.replace('.json', '');
  const p = path.join(dir, f);
  let data = JSON.parse(fs.readFileSync(p, 'utf8'));
  
  const langData = enrichedData[lang] || enrichedData.en; // fallback to English

  if (data.intro) {
    data.intro.title = langData.intro.title;
    data.intro.description = langData.intro.description;
    if (data.intro.visitGuide) {
      data.intro.visitGuide.title = langData.intro.visitGuide.title;
      data.intro.visitGuide.items = langData.intro.visitGuide.items;
    }
  }

  if (data.knowledge) {
    data.knowledge.title = langData.knowledge.title;
    data.knowledge.sections = langData.knowledge.sections;
  }

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
});
console.log('Enrichment complete!');
