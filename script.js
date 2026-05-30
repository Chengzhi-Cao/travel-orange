const defaultCityImages = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing_China_Forbidden-City-08.jpg?width=1200",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai_skyline_from_the_bund.jpg?width=1200",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Guangzhou%2C_Canton_Tower_-_panoramio.jpg?width=1200",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Hefei_City_Artificial_Swan_Lake.jpeg?width=1200",
];

const capitalCityData = [
  {
    id: "beijing",
    name: "北京",
    province: "北京市",
    type: "直辖市",
    label: "古都文化 / 胡同漫步 / 长城",
    image: defaultCityImages[0],
    alt: "北京故宫红墙与宫门",
    foods: ["北京烤鸭", "铜锅涮肉", "炸酱面"],
    mapPoints: [
      { name: "故宫博物院", desc: "中轴线核心景点", lng: 116.397, lat: 39.916 },
      { name: "天坛公园", desc: "适合清晨游览", lng: 116.412, lat: 39.882 },
      { name: "颐和园", desc: "皇家园林与昆明湖", lng: 116.275, lat: 39.999 },
      { name: "八达岭长城", desc: "经典长城路线", lng: 116.016, lat: 40.356 },
    ],
  },
  {
    id: "tianjin",
    name: "天津",
    province: "天津市",
    type: "直辖市",
    label: "海河风光 / 洋楼街区 / 津味小吃",
    foods: ["狗不理包子", "煎饼果子", "锅巴菜"],
    mapPoints: [
      { name: "五大道", desc: "洋楼街区和城市漫步", lng: 117.203, lat: 39.116 },
      { name: "古文化街", desc: "津味民俗和小吃集中", lng: 117.196, lat: 39.143 },
      { name: "天津之眼", desc: "海河夜景地标", lng: 117.188, lat: 39.153 },
      { name: "意式风情区", desc: "适合傍晚散步拍照", lng: 117.207, lat: 39.139 },
    ],
  },
  {
    id: "shijiazhuang",
    name: "石家庄",
    province: "河北省",
    type: "省会",
    label: "正定古城 / 燕赵历史 / 红色记忆",
    foods: ["缸炉烧饼", "正定八大碗", "驴肉火烧"],
    mapPoints: [
      { name: "正定古城", desc: "古寺古塔和老城街巷", lng: 114.57, lat: 38.147 },
      { name: "河北博物院", desc: "了解燕赵历史的好入口", lng: 114.53, lat: 38.043 },
      { name: "西柏坡纪念馆", desc: "近郊红色文化路线", lng: 113.95, lat: 38.343 },
    ],
  },
  {
    id: "taiyuan",
    name: "太原",
    province: "山西省",
    type: "省会",
    label: "晋祠古建 / 汾河夜景 / 面食",
    foods: ["刀削面", "过油肉", "头脑"],
    mapPoints: [
      { name: "晋祠", desc: "山西古建和园林代表", lng: 112.444, lat: 37.705 },
      { name: "山西博物院", desc: "看晋文化和青铜器", lng: 112.535, lat: 37.873 },
      { name: "钟楼街", desc: "老城商业和夜间散步", lng: 112.561, lat: 37.87 },
    ],
  },
  {
    id: "hohhot",
    name: "呼和浩特",
    province: "内蒙古自治区",
    type: "首府",
    label: "草原门户 / 寺庙街区 / 牛羊肉",
    foods: ["手把肉", "烧麦", "奶茶"],
    mapPoints: [
      { name: "大召寺", desc: "老城寺庙和塞上风情", lng: 111.661, lat: 40.806 },
      { name: "内蒙古博物院", desc: "了解草原文化", lng: 111.755, lat: 40.842 },
      { name: "敕勒川草原", desc: "近郊草原体验", lng: 111.85, lat: 40.72 },
    ],
  },
  {
    id: "shenyang",
    name: "沈阳",
    province: "辽宁省",
    type: "省会",
    label: "盛京故城 / 近代建筑 / 东北菜",
    foods: ["老边饺子", "锅包肉", "鸡架"],
    mapPoints: [
      { name: "沈阳故宫", desc: "清初宫殿建筑群", lng: 123.455, lat: 41.797 },
      { name: "张氏帅府", desc: "近代东北历史现场", lng: 123.459, lat: 41.794 },
      { name: "北陵公园", desc: "清昭陵和城市公园", lng: 123.428, lat: 41.858 },
    ],
  },
  {
    id: "changchun",
    name: "长春",
    province: "吉林省",
    type: "省会",
    label: "电影记忆 / 净月潭 / 冰雪气质",
    foods: ["锅包肉", "酱骨头", "朝鲜族冷面"],
    mapPoints: [
      { name: "伪满皇宫博物院", desc: "近代历史建筑群", lng: 125.354, lat: 43.902 },
      { name: "净月潭", desc: "森林湖泊和城市度假", lng: 125.463, lat: 43.79 },
      { name: "长影旧址博物馆", desc: "电影工业记忆", lng: 125.291, lat: 43.865 },
    ],
  },
  {
    id: "harbin",
    name: "哈尔滨",
    province: "黑龙江省",
    type: "省会",
    label: "冰雪城市 / 欧式街区 / 松花江",
    foods: ["红肠", "锅包肉", "马迭尔冰棍"],
    mapPoints: [
      { name: "中央大街", desc: "欧式建筑和步行街", lng: 126.617, lat: 45.772 },
      { name: "圣索菲亚教堂", desc: "哈尔滨城市名片", lng: 126.633, lat: 45.768 },
      { name: "太阳岛", desc: "松花江北岸休闲区", lng: 126.596, lat: 45.79 },
    ],
  },
  {
    id: "shanghai",
    name: "上海",
    province: "上海市",
    type: "直辖市",
    label: "海派街区 / 城市天际线 / 博物馆",
    image: defaultCityImages[1],
    alt: "上海外滩望向陆家嘴天际线",
    foods: ["本帮菜", "生煎", "小笼包"],
    mapPoints: [
      { name: "外滩", desc: "黄浦江经典观景带", lng: 121.49, lat: 31.239 },
      { name: "武康路", desc: "梧桐街区和历史建筑", lng: 121.438, lat: 31.212 },
      { name: "上海博物馆", desc: "人民广场文化核心", lng: 121.475, lat: 31.229 },
      { name: "豫园", desc: "老城厢与传统园林", lng: 121.492, lat: 31.227 },
    ],
  },
  {
    id: "nanjing",
    name: "南京",
    province: "江苏省",
    type: "省会",
    label: "六朝古都 / 秦淮夜色 / 梧桐大道",
    foods: ["盐水鸭", "鸭血粉丝汤", "小笼包"],
    mapPoints: [
      { name: "中山陵", desc: "钟山风景区核心", lng: 118.849, lat: 32.061 },
      { name: "夫子庙秦淮河", desc: "夜游和老城街巷", lng: 118.789, lat: 32.021 },
      { name: "南京博物院", desc: "适合半天看展", lng: 118.823, lat: 32.041 },
    ],
  },
  {
    id: "hangzhou",
    name: "杭州",
    province: "浙江省",
    type: "省会",
    label: "西湖山水 / 江南寺院 / 运河",
    foods: ["西湖醋鱼", "片儿川", "龙井虾仁"],
    mapPoints: [
      { name: "西湖断桥", desc: "西湖经典入口", lng: 120.146, lat: 30.261 },
      { name: "灵隐寺", desc: "山林寺院路线", lng: 120.101, lat: 30.24 },
      { name: "拱宸桥", desc: "运河老街区", lng: 120.142, lat: 30.319 },
    ],
  },
  {
    id: "hefei",
    name: "合肥",
    province: "安徽省",
    type: "省会",
    label: "科教城市 / 包公园 / 巢湖风光",
    image: defaultCityImages[3],
    alt: "合肥天鹅湖畔城市景观",
    foods: ["庐州烤鸭", "三河米饺", "徽菜"],
    mapPoints: [
      { name: "包公园", desc: "老城历史文化核心", lng: 117.304, lat: 31.858 },
      { name: "安徽博物院", desc: "适合看展和亲子游", lng: 117.227, lat: 31.82 },
      { name: "三河古镇", desc: "近郊一日游", lng: 117.245, lat: 31.515 },
      { name: "天鹅湖", desc: "政务区湖景与夜景", lng: 117.224, lat: 31.819 },
    ],
  },
  {
    id: "fuzhou",
    name: "福州",
    province: "福建省",
    type: "省会",
    label: "三坊七巷 / 榕城山水 / 闽味小吃",
    foods: ["鱼丸", "肉燕", "佛跳墙"],
    mapPoints: [
      { name: "三坊七巷", desc: "福州老城文脉", lng: 119.296, lat: 26.082 },
      { name: "鼓山", desc: "登山看城和寺院", lng: 119.392, lat: 26.055 },
      { name: "烟台山", desc: "近代建筑和咖啡街区", lng: 119.315, lat: 26.047 },
    ],
  },
  {
    id: "nanchang",
    name: "南昌",
    province: "江西省",
    type: "省会",
    label: "滕王阁 / 红色记忆 / 赣味夜宵",
    foods: ["南昌拌粉", "瓦罐汤", "藜蒿炒腊肉"],
    mapPoints: [
      { name: "滕王阁", desc: "赣江边的城市名片", lng: 115.881, lat: 28.684 },
      { name: "八一起义纪念馆", desc: "红色历史核心", lng: 115.892, lat: 28.677 },
      { name: "秋水广场", desc: "赣江夜景和喷泉", lng: 115.859, lat: 28.682 },
    ],
  },
  {
    id: "jinan",
    name: "济南",
    province: "山东省",
    type: "省会",
    label: "泉城 / 老城水巷 / 鲁菜",
    foods: ["把子肉", "九转大肠", "甜沫"],
    mapPoints: [
      { name: "趵突泉", desc: "泉城经典景点", lng: 117.015, lat: 36.661 },
      { name: "大明湖", desc: "老城湖景和散步", lng: 117.025, lat: 36.675 },
      { name: "千佛山", desc: "登高看城市", lng: 117.026, lat: 36.637 },
    ],
  },
  {
    id: "zhengzhou",
    name: "郑州",
    province: "河南省",
    type: "省会",
    label: "中原博物馆 / 商都遗址 / 少林线",
    foods: ["烩面", "胡辣汤", "水煎包"],
    mapPoints: [
      { name: "河南博物院", desc: "中原文明入门", lng: 113.671, lat: 34.789 },
      { name: "二七广场", desc: "城市中心地标", lng: 113.666, lat: 34.754 },
      { name: "嵩山少林寺", desc: "经典近郊一日游", lng: 112.942, lat: 34.507 },
    ],
  },
  {
    id: "wuhan",
    name: "武汉",
    province: "湖北省",
    type: "省会",
    label: "长江大桥 / 黄鹤楼 / 江湖烟火",
    foods: ["热干面", "豆皮", "武昌鱼"],
    mapPoints: [
      { name: "黄鹤楼", desc: "武汉经典登高点", lng: 114.306, lat: 30.545 },
      { name: "湖北省博物馆", desc: "看曾侯乙编钟", lng: 114.356, lat: 30.563 },
      { name: "东湖", desc: "湖岸骑行和散步", lng: 114.397, lat: 30.556 },
    ],
  },
  {
    id: "changsha",
    name: "长沙",
    province: "湖南省",
    type: "省会",
    label: "岳麓书院 / 橘子洲 / 夜宵",
    foods: ["臭豆腐", "小龙虾", "剁椒鱼头"],
    mapPoints: [
      { name: "橘子洲", desc: "湘江江心洲风景", lng: 112.961, lat: 28.195 },
      { name: "岳麓山", desc: "书院、山林和城市景观", lng: 112.936, lat: 28.185 },
      { name: "湖南博物院", desc: "马王堆汉墓展陈", lng: 113.008, lat: 28.213 },
    ],
  },
  {
    id: "guangzhou",
    name: "广州",
    province: "广东省",
    type: "省会",
    label: "早茶 / 岭南老城 / 珠江夜景",
    image: defaultCityImages[2],
    alt: "广州塔与城市夜景",
    foods: ["广式早茶", "云吞面", "糖水"],
    mapPoints: [
      { name: "陈家祠", desc: "岭南建筑与工艺", lng: 113.248, lat: 23.131 },
      { name: "永庆坊", desc: "西关街巷和小店", lng: 113.247, lat: 23.116 },
      { name: "沙面", desc: "适合傍晚散步", lng: 113.238, lat: 23.109 },
      { name: "广州塔", desc: "城市夜景地标", lng: 113.33, lat: 23.109 },
    ],
  },
  {
    id: "nanning",
    name: "南宁",
    province: "广西壮族自治区",
    type: "首府",
    label: "绿城 / 青秀山 / 老友粉",
    foods: ["老友粉", "酸嘢", "柠檬鸭"],
    mapPoints: [
      { name: "青秀山", desc: "城市绿肺和登高点", lng: 108.398, lat: 22.789 },
      { name: "三街两巷", desc: "老城街区和夜游", lng: 108.321, lat: 22.816 },
      { name: "广西民族博物馆", desc: "了解民族文化", lng: 108.389, lat: 22.763 },
    ],
  },
  {
    id: "haikou",
    name: "海口",
    province: "海南省",
    type: "省会",
    label: "骑楼老街 / 海岸日落 / 椰岛慢游",
    foods: ["海南粉", "清补凉", "椰子鸡"],
    mapPoints: [
      { name: "骑楼老街", desc: "南洋风格街区", lng: 110.342, lat: 20.045 },
      { name: "假日海滩", desc: "看海和日落", lng: 110.199, lat: 20.045 },
      { name: "火山口地质公园", desc: "近郊自然路线", lng: 110.208, lat: 19.928 },
    ],
  },
  {
    id: "chongqing",
    name: "重庆",
    province: "重庆市",
    type: "直辖市",
    label: "山城夜景 / 江岸步道 / 火锅",
    foods: ["重庆火锅", "小面", "酸辣粉"],
    mapPoints: [
      { name: "洪崖洞", desc: "山城夜景代表", lng: 106.579, lat: 29.563 },
      { name: "解放碑", desc: "城市中心步行区", lng: 106.576, lat: 29.558 },
      { name: "磁器口古镇", desc: "老街和码头记忆", lng: 106.458, lat: 29.581 },
    ],
  },
  {
    id: "chengdu",
    name: "成都",
    province: "四川省",
    type: "省会",
    label: "熊猫 / 茶馆 / 川味生活",
    foods: ["火锅", "担担面", "钟水饺"],
    mapPoints: [
      { name: "宽窄巷子", desc: "老街区和茶馆", lng: 104.058, lat: 30.676 },
      { name: "武侯祠", desc: "三国文化和锦里", lng: 104.049, lat: 30.642 },
      { name: "成都大熊猫繁育研究基地", desc: "亲子和熊猫主题", lng: 104.145, lat: 30.739 },
    ],
  },
  {
    id: "guiyang",
    name: "贵阳",
    province: "贵州省",
    type: "省会",
    label: "山地城市 / 甲秀楼 / 酸辣风味",
    foods: ["丝娃娃", "肠旺面", "酸汤鱼"],
    mapPoints: [
      { name: "黔灵山公园", desc: "城市山林和寺院", lng: 106.699, lat: 26.598 },
      { name: "甲秀楼", desc: "南明河畔地标", lng: 106.724, lat: 26.571 },
      { name: "青岩古镇", desc: "近郊古镇一日游", lng: 106.68, lat: 26.336 },
    ],
  },
  {
    id: "kunming",
    name: "昆明",
    province: "云南省",
    type: "省会",
    label: "春城 / 翠湖 / 民族风情",
    foods: ["过桥米线", "汽锅鸡", "鲜花饼"],
    mapPoints: [
      { name: "翠湖公园", desc: "市中心慢游入口", lng: 102.705, lat: 25.049 },
      { name: "云南民族村", desc: "民族文化和滇池线", lng: 102.655, lat: 24.965 },
      { name: "石林风景区", desc: "经典喀斯特近郊线", lng: 103.324, lat: 24.812 },
    ],
  },
  {
    id: "lhasa",
    name: "拉萨",
    province: "西藏自治区",
    type: "首府",
    label: "高原圣城 / 寺院转经 / 日光城",
    foods: ["藏面", "酥油茶", "牦牛肉"],
    mapPoints: [
      { name: "布达拉宫", desc: "拉萨核心地标", lng: 91.117, lat: 29.657 },
      { name: "大昭寺", desc: "八廓街转经路线", lng: 91.133, lat: 29.651 },
      { name: "罗布林卡", desc: "园林和历史建筑", lng: 91.095, lat: 29.651 },
    ],
  },
  {
    id: "xian",
    name: "西安",
    province: "陕西省",
    type: "省会",
    label: "十三朝古都 / 城墙 / 秦俑",
    foods: ["肉夹馍", "羊肉泡馍", "凉皮"],
    mapPoints: [
      { name: "秦始皇帝陵博物院", desc: "兵马俑经典路线", lng: 109.278, lat: 34.385 },
      { name: "大雁塔", desc: "唐风城市地标", lng: 108.964, lat: 34.218 },
      { name: "西安城墙南门", desc: "骑行和夜景", lng: 108.942, lat: 34.251 },
    ],
  },
  {
    id: "lanzhou",
    name: "兰州",
    province: "甘肃省",
    type: "省会",
    label: "黄河穿城 / 牛肉面 / 丝路入口",
    foods: ["兰州牛肉面", "手抓羊肉", "灰豆子"],
    mapPoints: [
      { name: "中山桥", desc: "黄河第一桥", lng: 103.826, lat: 36.064 },
      { name: "甘肃省博物馆", desc: "丝路文物和铜奔马", lng: 103.77, lat: 36.066 },
      { name: "白塔山公园", desc: "俯瞰黄河两岸", lng: 103.825, lat: 36.073 },
    ],
  },
  {
    id: "xining",
    name: "西宁",
    province: "青海省",
    type: "省会",
    label: "高原门户 / 塔尔寺 / 青海风味",
    foods: ["手抓羊肉", "酿皮", "牦牛酸奶"],
    mapPoints: [
      { name: "塔尔寺", desc: "藏传佛教艺术重镇", lng: 101.565, lat: 36.489 },
      { name: "青海省博物馆", desc: "了解青海历史文化", lng: 101.765, lat: 36.637 },
      { name: "东关清真大寺", desc: "城市宗教建筑", lng: 101.797, lat: 36.621 },
    ],
  },
  {
    id: "yinchuan",
    name: "银川",
    province: "宁夏回族自治区",
    type: "首府",
    label: "西夏遗存 / 贺兰山 / 塞上江南",
    foods: ["手抓羊肉", "羊杂碎", "八宝茶"],
    mapPoints: [
      { name: "镇北堡西部影城", desc: "电影场景和西北风貌", lng: 106.075, lat: 38.611 },
      { name: "西夏陵", desc: "西夏历史遗址", lng: 105.985, lat: 38.401 },
      { name: "银川鼓楼", desc: "老城中心地标", lng: 106.278, lat: 38.467 },
    ],
  },
  {
    id: "urumqi",
    name: "乌鲁木齐",
    province: "新疆维吾尔自治区",
    type: "首府",
    label: "天山脚下 / 巴扎 / 新疆风味",
    foods: ["大盘鸡", "烤包子", "抓饭"],
    mapPoints: [
      { name: "新疆维吾尔自治区博物馆", desc: "了解丝路和西域历史", lng: 87.591, lat: 43.826 },
      { name: "国际大巴扎", desc: "市集和新疆风味", lng: 87.62, lat: 43.783 },
      { name: "红山公园", desc: "城市登高点", lng: 87.608, lat: 43.809 },
    ],
  },
  {
    id: "taipei",
    name: "台北",
    province: "台湾",
    type: "城市",
    label: "博物馆 / 夜市 / 城市山景",
    foods: ["牛肉面", "卤肉饭", "夜市小吃"],
    mapPoints: [
      { name: "台北故宫博物院", desc: "经典博物馆路线", lng: 121.548, lat: 25.102 },
      { name: "台北101", desc: "城市天际线地标", lng: 121.565, lat: 25.033 },
      { name: "淡水老街", desc: "河岸日落和老街", lng: 121.438, lat: 25.171 },
    ],
  },
];

function buildCity(raw, index) {
  const mapPoints = raw.mapPoints;
  const first = mapPoints[0];
  const second = mapPoints[1] || mapPoints[0];
  const third = mapPoints[2] || mapPoints[0];
  const foods = raw.foods || ["本地小吃", "城市家常菜", "夜市风味"];

  return {
    ...raw,
    image: raw.image || defaultCityImages[index % defaultCityImages.length],
    alt: raw.alt || `${raw.name}城市旅游印象`,
    intro:
      raw.intro ||
      `${raw.name}是${raw.province}的${raw.type}，适合用 2-3 天把城市地标、博物馆街区和本地美食串成一条轻松路线。`,
    facts: raw.facts || [
      ["所在地区", `${raw.province} / ${raw.type}`],
      ["建议天数", "2-3 天"],
      ["旅行关键词", raw.label],
    ],
    route: raw.route || [
      ["Day 1", `${first.name} - ${second.name}`, `先看${first.desc}，再顺路走到${second.name}，把第一天留给城市最有代表性的区域。`],
      ["Day 2", `${third.name} - 城市街区慢游`, `${third.name}适合安排半天，下午留给咖啡馆、老街或当地生活街区。`],
      ["Day 3", "博物馆 / 近郊 / 美食补完", "时间充裕时补一个展馆或近郊点位，晚上把本地菜和夜市小吃安排上。"],
    ],
    places: raw.places || mapPoints.slice(0, 3).map((point) => [point.name, point.desc]),
    food: raw.food || foods.map((food, foodIndex) => [
      food,
      foodIndex === 0
        ? `${raw.name}旅行建议把${food}作为第一顿正式风味。`
        : `适合穿插在街区散步或晚餐后，给行程留一点本地烟火气。`,
    ]),
    tips: raw.tips || [
      `${raw.name}景点建议按片区安排，避免一天内跨城来回折返。`,
      "热门博物馆、景区或演出票务规则可能变化，出发前以官方渠道为准。",
      "地图点位可直接打开高德地图，适合临时规划交通和步行路线。",
      "留半天机动时间给天气、排队和临时发现的小店，旅程会舒服很多。",
    ],
  };
}

const cities = capitalCityData.map(buildCity);

const cityGrid = document.querySelector("#city-grid");
const citySearch = document.querySelector("#city-search");
const cityCount = document.querySelector("#city-count");
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

let activeCityId = cities[0].id;
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

function getFilteredCities() {
  const query = citySearch.value.trim().toLowerCase();

  if (!query) {
    return cities;
  }

  return cities.filter((city) =>
    [city.name, city.province, city.type, city.label].some((value) =>
      value.toLowerCase().includes(query),
    ),
  );
}

function renderCityCards() {
  const visibleCities = getFilteredCities();
  cityCount.textContent = `显示 ${visibleCities.length} / ${cities.length} 个城市`;

  if (visibleCities.length === 0) {
    cityGrid.innerHTML = `<p class="empty-state">没有找到匹配的城市，换个关键词试试。</p>`;
    return;
  }

  cityGrid.innerHTML = visibleCities
    .map(
      (city) => `
        <button class="city-card${city.id === activeCityId ? " is-active" : ""}" type="button" data-city="${city.id}">
          <img src="${city.image}" alt="${city.alt}" />
          <div class="card-body">
            <span>${city.province} · ${city.type}</span>
            <h3>${city.name}</h3>
            <p>${city.label}</p>
          </div>
        </button>
      `,
    )
    .join("");

  cityGrid.querySelectorAll(".city-card").forEach((card) => {
    card.addEventListener("click", () => {
      activeCityId = card.dataset.city;
      renderGuide(activeCityId);
      renderCityCards();
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

function getMarkerIcon(index) {
  return L.divIcon({
    className: "numbered-marker",
    html: `<span><b>${index + 1}</b></span>`,
    iconSize: [32, 40],
    iconAnchor: [16, 38],
    popupAnchor: [0, -34],
  });
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
  leafletMarkers = city.mapPoints.map((point, index) => {
    const popup = `
      <strong>${escapeHtml(point.name)}</strong>
      <p>${escapeHtml(point.desc)}</p>
      <a href="${getAmapUrl(point)}" target="_blank" rel="noreferrer">在高德地图打开</a>
    `;

    return L.marker([point.lat, point.lng], {
      icon: getMarkerIcon(index),
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
  activeCityId = city.id;

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

citySearch.addEventListener("input", renderCityCards);
renderCityCards();
renderGuide(activeCityId);
