const dayPlans = [
  {
    title: "Day 1 · 中轴线与故宫",
    summary:
      "把北京的历史纵深放在第一天。上午走天安门与故宫，下午从景山看紫禁城屋脊，晚上去前门或王府井吃一顿轻松的晚餐。",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing_China_Forbidden-City-08.jpg?width=1400",
    alt: "北京故宫红墙与宫门",
    meta: ["故宫预约", "步行 12-16 公里", "适合晴天"],
    stops: [
      ["08:00", "天安门广场", "尽量早到，安检与人流都会影响节奏。"],
      ["09:30", "故宫博物院", "从午门进入，按中轴线再分东西线慢慢看。"],
      ["15:30", "景山公园", "从神武门出来后上山，天气好时能俯瞰故宫。"],
      ["18:00", "前门 / 王府井", "晚饭不要离酒店太远，第一天给体力收个尾。"],
    ],
  },
  {
    title: "Day 2 · 天坛、胡同与什刹海",
    summary:
      "第二天把节奏放慢。清晨去天坛看晨练和祈年殿，午后转去鼓楼、烟袋斜街、什刹海，用步行感受北京的生活纹理。",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/20200110_Temple_of_Heaven-8.jpg?width=1400",
    alt: "北京天坛祈年殿",
    meta: ["适合拍照", "胡同步行", "晚餐涮肉"],
    stops: [
      ["07:30", "天坛公园", "清晨光线和城市生活感最好，祈年殿区域优先。"],
      ["11:30", "牛街 / 崇文门", "午餐可安排小吃或简餐，别吃太撑。"],
      ["14:30", "钟鼓楼与胡同", "从鼓楼一带慢慢走到什刹海，不必执着打卡点。"],
      ["18:30", "什刹海周边", "晚餐可选铜锅涮肉，饭后沿湖散步。"],
    ],
  },
  {
    title: "Day 3 · 长城与颐和园",
    summary:
      "最后一天留给远郊和皇家园林。长城建议早出发，下午回城后视体力去颐和园；如果带老人小孩，可以把颐和园放到第四天。",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/2014.08.19.105211_Great_Wall_Badaling.jpg?width=1400",
    alt: "八达岭长城沿山势延伸",
    meta: ["早班出城", "防晒保暖", "备选第四天"],
    stops: [
      ["07:00", "出发去长城", "八达岭交通更成熟，慕田峪更适合想要开阔画面的人。"],
      ["09:30", "长城游览", "量力选择徒步段，不要为了爬完整段消耗过度。"],
      ["14:30", "回城休整", "远郊返回容易疲惫，给交通留缓冲。"],
      ["16:30", "颐和园", "只走昆明湖与长廊也很值得，日落前后最柔和。"],
    ],
  },
];

const tabs = document.querySelectorAll(".day-tab");
const panel = document.querySelector("#route-panel");
const routeImage = document.querySelector("#route-image");

function renderPlan(index) {
  const plan = dayPlans[index];
  routeImage.src = plan.image;
  routeImage.alt = plan.alt;

  panel.innerHTML = `
    <div>
      <p class="section-label">Selected Day</p>
      <h3>${plan.title}</h3>
    </div>
    <p>${plan.summary}</p>
    <div class="route-meta">
      ${plan.meta.map((item) => `<span>${item}</span>`).join("")}
    </div>
    <ol class="timeline">
      ${plan.stops
        .map(
          ([time, title, text]) => `
          <li>
            <time>${time}</time>
            <div>
              <strong>${title}</strong>
              <p>${text}</p>
            </div>
          </li>
        `,
        )
        .join("")}
    </ol>
  `;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const index = Number(tab.dataset.day);

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    renderPlan(index);
  });
});

renderPlan(0);
