const cities = [
  {
    id: "beijing",
    name: "北京",
    label: "古都文化 / 胡同漫步 / 长城",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing_China_Forbidden-City-08.jpg?width=1200",
    alt: "北京故宫红墙与宫门",
    intro:
      "适合第一次来北京的人：用三天把中轴线、胡同、皇家园林和长城串起来，节奏紧凑但不赶场。",
    facts: [
      ["建议天数", "3-4 天"],
      ["适合人群", "初访、亲子、摄影"],
      ["旅行节奏", "上午重点景点，下午慢走街区"],
    ],
    route: [
      ["Day 1", "天安门广场 - 故宫 - 景山 - 前门", "把体力最好的时间留给故宫，傍晚登景山看老城屋脊。"],
      ["Day 2", "天坛 - 鼓楼 - 什刹海 - 南锣鼓巷", "清晨看天坛的城市日常，下午放慢脚步走胡同和湖边。"],
      ["Day 3", "八达岭或慕田峪长城 - 颐和园", "长城建议早出发，回城后视体力安排颐和园或直接休息。"],
    ],
    places: [
      ["故宫博物院", "提前预约，按中轴线游览最顺路，神武门出门后可接景山。"],
      ["天坛公园", "清晨光线好，也能看到本地人的晨练生活。"],
      ["长城", "八达岭交通成熟，慕田峪视野开阔，按同行人的体力选择。"],
    ],
    food: [
      ["北京烤鸭", "安排一顿正式晚餐，热门店尽量提前订位。"],
      ["铜锅涮肉", "适合胡同或什刹海行程后吃，暖和又有仪式感。"],
      ["豆汁与炸酱面", "小吃可以少量尝鲜，把惊喜和挑战都留给街巷。"],
    ],
    tips: [
      "热门场馆预约规则可能变化，出发前以官方渠道为准。",
      "故宫、长城当天步行量大，鞋子比造型更重要。",
      "住二环附近或地铁 2/4/5/8 号线沿线会更省心。",
      "冬季风大，长城日请额外准备保暖层。",
    ],
    mapPoints: [
      { name: "故宫博物院", desc: "中轴线核心景点", lng: 116.397, lat: 39.916 },
      { name: "天坛公园", desc: "适合清晨游览", lng: 116.412, lat: 39.882 },
      { name: "颐和园", desc: "皇家园林与昆明湖", lng: 116.275, lat: 39.999 },
      { name: "八达岭长城", desc: "经典长城路线", lng: 116.016, lat: 40.356 },
    ],
  },
  {
    id: "shanghai",
    name: "上海",
    label: "海派街区 / 城市天际线 / 博物馆",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai_skyline_from_the_bund.jpg?width=1200",
    alt: "上海外滩望向陆家嘴天际线",
    intro:
      "上海的重点不是单纯打卡，而是在外滩、梧桐区、博物馆和新旧商业街之间感受城市层次。",
    facts: [
      ["建议天数", "2-3 天"],
      ["适合人群", "城市漫游、展览、美食"],
      ["旅行节奏", "白天街区，夜晚看江景"],
    ],
    route: [
      ["Day 1", "人民广场 - 南京东路 - 外滩 - 陆家嘴", "从城市中心走向黄浦江，把外滩夜景留到天色变蓝之后。"],
      ["Day 2", "武康路 - 安福路 - 徐家汇 - 衡复风貌区", "适合慢慢走、喝咖啡、看老建筑，别把点位塞太满。"],
      ["Day 3", "上海博物馆东馆或西岸 - 豫园 - 老城厢", "把展览和传统街区组合起来，雨天也不影响体验。"],
    ],
    places: [
      ["外滩", "黄昏到夜晚最有层次，建议从南京东路一路走过去。"],
      ["武康路", "梧桐树和历史建筑密集，适合半天慢逛。"],
      ["上海博物馆", "展陈质量高，热门展览记得提前确认预约。"],
    ],
    food: [
      ["本帮菜", "红烧肉、油爆虾、响油鳝糊都适合作为正餐重点。"],
      ["生煎与小笼", "早餐或午后加餐都合适，注意错峰排队。"],
      ["咖啡与面包店", "安福路、愚园路一带选择多，适合穿插休息。"],
    ],
    tips: [
      "外滩夜景人流大，带老人小孩时尽量避开最拥挤的观景平台。",
      "上海地铁覆盖很广，住 1/2/10 号线附近会很方便。",
      "热门餐厅周末排队明显，正餐最好提前安排。",
      "雨天可把博物馆、美术馆和商场动线作为备选。",
    ],
    mapPoints: [
      { name: "外滩", desc: "黄浦江经典观景带", lng: 121.49, lat: 31.239 },
      { name: "武康路", desc: "梧桐街区和历史建筑", lng: 121.438, lat: 31.212 },
      { name: "上海博物馆", desc: "人民广场文化核心", lng: 121.475, lat: 31.229 },
      { name: "豫园", desc: "老城厢与传统园林", lng: 121.492, lat: 31.227 },
    ],
  },
  {
    id: "guangzhou",
    name: "广州",
    label: "早茶 / 岭南老城 / 珠江夜景",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Guangzhou%2C_Canton_Tower_-_panoramio.jpg?width=1200",
    alt: "广州塔与城市夜景",
    intro:
      "广州适合用轻松的节奏旅行：早茶打开一天，白天逛骑楼与老城，晚上把时间留给珠江和夜市。",
    facts: [
      ["建议天数", "2-3 天"],
      ["适合人群", "美食、老城、家庭出游"],
      ["旅行节奏", "早茶开局，午后避热"],
    ],
    route: [
      ["Day 1", "陈家祠 - 荔湾湖 - 永庆坊 - 上下九", "从岭南建筑和西关街巷开始，晚餐留给老城小吃。"],
      ["Day 2", "越秀公园 - 北京路 - 沙面 - 珠江夜游", "白天看城市历史，傍晚去沙面散步，夜晚看珠江灯光。"],
      ["Day 3", "广东省博物馆 - 花城广场 - 广州塔", "现代城市线适合拍照，夜景和广州塔可以放在同一晚。"],
    ],
    places: [
      ["陈家祠", "木雕、砖雕、彩塑集中，适合了解岭南工艺。"],
      ["永庆坊", "西关风情和新式小店结合，适合下午慢逛。"],
      ["广州塔", "夜晚辨识度最高，和花城广场、珠江新城动线顺。"],
    ],
    food: [
      ["广式早茶", "虾饺、烧卖、叉烧包、凤爪可以慢慢点，别一次点太多。"],
      ["云吞面与肠粉", "适合早餐或午餐，老城区选择很多。"],
      ["糖水", "双皮奶、姜撞奶、绿豆沙适合晚饭后收尾。"],
    ],
    tips: [
      "夏季湿热，午后适合安排室内场馆或回酒店休息。",
      "早茶热门店周末排队早，建议早点到或错峰。",
      "住公园前、北京路、体育西路附近都便于换乘。",
      "珠江夜游船票和登塔票建议提前确认时间段。",
    ],
    mapPoints: [
      { name: "陈家祠", desc: "岭南建筑与工艺", lng: 113.248, lat: 23.131 },
      { name: "永庆坊", desc: "西关街巷和小店", lng: 113.247, lat: 23.116 },
      { name: "沙面", desc: "适合傍晚散步", lng: 113.238, lat: 23.109 },
      { name: "广州塔", desc: "城市夜景地标", lng: 113.33, lat: 23.109 },
    ],
  },
  {
    id: "hefei",
    name: "合肥",
    label: "科教城市 / 包公园 / 巢湖风光",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hefei_City_Artificial_Swan_Lake.jpeg?width=1200",
    alt: "合肥天鹅湖畔城市景观",
    intro:
      "合肥适合安排两到三天轻旅行：老城看包公文化，政务区看天鹅湖与博物馆，再把一天留给三河古镇或巢湖方向。",
    facts: [
      ["建议天数", "2-3 天"],
      ["适合人群", "周末游、亲子、城市漫步"],
      ["旅行节奏", "老城半日，湖区半日，古镇一日"],
    ],
    route: [
      ["Day 1", "包公园 - 逍遥津 - 淮河路步行街", "从老城核心开始，白天看园林和历史，晚上在步行街解决晚餐。"],
      ["Day 2", "安徽博物院 - 天鹅湖 - 合柴1972 - 罍街", "白天看展和湖景，傍晚去工业更新街区，晚上吃徽菜或小吃。"],
      ["Day 3", "三河古镇或巢湖岸线", "时间充裕时安排近郊一日，古镇适合慢逛，巢湖方向适合看开阔水面。"],
    ],
    places: [
      ["包公园", "包公祠、清风阁和水面连成老城经典动线，适合半天慢走。"],
      ["安徽博物院", "了解徽州文化、青铜器和安徽历史，雨天也很好安排。"],
      ["三河古镇", "从合肥市区出发的一日游选择，水乡街巷和小吃都集中。"],
    ],
    food: [
      ["庐州烤鸭", "合肥本地代表味道，适合作为第一顿正餐。"],
      ["三河米饺", "去三河古镇时顺路尝，外酥内软，适合做小吃。"],
      ["徽菜", "臭鳜鱼、毛豆腐、李鸿章大杂烩都可以按口味选择。"],
    ],
    tips: [
      "合肥景点分布较散，老城、政务区、近郊最好分开安排。",
      "去三河古镇建议预留大半天，别和市区重体力景点挤在一起。",
      "夏季午后较热，天鹅湖和巢湖岸线更适合傍晚去。",
      "住三孝口、四牌楼、天鹅湖或地铁沿线，换乘会更方便。",
    ],
    mapPoints: [
      { name: "包公园", desc: "老城历史文化核心", lng: 117.304, lat: 31.858 },
      { name: "安徽博物院", desc: "适合看展和亲子游", lng: 117.227, lat: 31.82 },
      { name: "天鹅湖", desc: "政务区湖景与夜景", lng: 117.224, lat: 31.819 },
      { name: "三河古镇", desc: "近郊一日游", lng: 117.245, lat: 31.515 },
    ],
  },
];

const cityGrid = document.querySelector("#city-grid");
const guideImage = document.querySelector("#guide-image");
const guideLabel = document.querySelector("#guide-label");
const guideTitle = document.querySelector("#guide-title");
const guideDescription = document.querySelector("#guide-description");
const guideFacts = document.querySelector("#guide-facts");
const mapCanvas = document.querySelector("#map-canvas");
const mapList = document.querySelector("#map-list");
const routeList = document.querySelector("#route-list");
const placeList = document.querySelector("#place-list");
const foodList = document.querySelector("#food-list");
const tipList = document.querySelector("#tip-list");

let leafletMap;
let leafletTileLayer;
let leafletMarkers = [];

function getAmapUrl(point) {
  const position = `${point.lng},${point.lat}`;
  const params = new URLSearchParams({
    position,
    name: point.name,
    src: "travel-orange",
    coordinate: "gaode",
    callnative: "0",
  });
  return `https://uri.amap.com/marker?${params.toString()}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function createInfoCards(items) {
  return items
    .map(
      ([title, text]) => `
        <article class="info-card">
          <h4>${title}</h4>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
}

function renderCityCards() {
  cityGrid.innerHTML = cities
    .map(
      (city, index) => `
        <button class="city-card${index === 0 ? " is-active" : ""}" type="button" data-city="${city.id}">
          <img src="${city.image}" alt="${city.alt}" />
          <div class="card-body">
            <span>${city.label}</span>
            <h3>${city.name}</h3>
            <p>${city.intro}</p>
          </div>
        </button>
      `,
    )
    .join("");

  cityGrid.querySelectorAll(".city-card").forEach((card) => {
    card.addEventListener("click", () => {
      renderGuide(card.dataset.city);
      document.querySelector("#guide").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderMapList(city) {
  mapList.innerHTML = city.mapPoints
    .map((point, index) => {
      const number = index + 1;
      return `
        <a class="map-item" href="${getAmapUrl(point)}" target="_blank" rel="noreferrer">
          <span>${number}</span>
          <div>
            <strong>${point.name}</strong>
            <p>${point.desc}</p>
          </div>
        </a>
      `;
    })
    .join("");
}

function renderMap(city) {
  renderMapList(city);

  if (!window.L) {
    mapCanvas.classList.add("map-fallback");
    mapCanvas.innerHTML = `
      <div class="map-fallback-message">
        <strong>地图底图暂时没有加载出来</strong>
        <p>请检查网络连接，或直接点击右侧景点列表在高德地图中查看位置。</p>
      </div>
    `;
    return;
  }

  mapCanvas.classList.remove("map-fallback");

  if (!leafletMap) {
    leafletMap = L.map(mapCanvas, {
      scrollWheelZoom: false,
      zoomControl: true,
    });

    leafletTileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(leafletMap);
  } else if (!leafletMap.hasLayer(leafletTileLayer)) {
    leafletTileLayer.addTo(leafletMap);
  }

  leafletMarkers.forEach((marker) => marker.remove());
  leafletMarkers = city.mapPoints.map((point) => {
    const popup = `
      <strong>${escapeHtml(point.name)}</strong>
      <p>${escapeHtml(point.desc)}</p>
      <a href="${getAmapUrl(point)}" target="_blank" rel="noreferrer">在高德地图打开</a>
    `;

    return L.marker([point.lat, point.lng], {
      title: point.name,
    })
      .addTo(leafletMap)
      .bindPopup(popup);
  });

  const bounds = L.latLngBounds(city.mapPoints.map((point) => [point.lat, point.lng]));
  leafletMap.fitBounds(bounds.pad(0.28), { maxZoom: 13 });
  setTimeout(() => leafletMap.invalidateSize(), 80);
}

function renderGuide(cityId) {
  const city = cities.find((item) => item.id === cityId) || cities[0];

  document.querySelectorAll(".city-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.city === city.id);
  });

  guideImage.src = city.image;
  guideImage.alt = city.alt;
  guideLabel.textContent = `${city.name}攻略`;
  guideTitle.textContent = `${city.name}旅游攻略`;
  guideDescription.textContent = city.intro;

  guideFacts.innerHTML = city.facts
    .map(
      ([label, value]) => `
        <div class="fact">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");

  renderMap(city);

  routeList.innerHTML = city.route
    .map(
      ([day, title, text]) => `
        <li>
          <time>${day}</time>
          <div>
            <strong>${title}</strong>
            <p>${text}</p>
          </div>
        </li>
      `,
    )
    .join("");

  placeList.innerHTML = createInfoCards(city.places);
  foodList.innerHTML = createInfoCards(city.food);
  tipList.innerHTML = city.tips.map((tip) => `<li>${tip}</li>`).join("");
}

renderCityCards();
renderGuide(cities[0].id);
