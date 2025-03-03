const wishes = [
  "学业进步 📚",
  "考试顺利 ✍️",
  "梦想成真 🌟",
  "前程似锦 ✨",
  "快乐每一天 😊",
  "成绩优异 💯",
  "志存高远 🎯",
  "天天向上 ⬆️",
  "永不绝精🦖",
  "爱拼才会淫 🦌",
];

function typeWriter(text, element, speed = 100) {
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

let currentWishIndex = 0;
const wishElement = document.getElementById("wish-text");

function showNextWish() {
  typeWriter(wishes[currentWishIndex], wishElement);
  currentWishIndex = (currentWishIndex + 1) % wishes.length;
}

// 添加页面加载特效
window.addEventListener("load", () => {
  document.querySelector(".birthday-card").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".birthday-card").style.opacity = "1";
    document.querySelector(".birthday-card").style.transition =
      "opacity 1s ease-in";
  }, 100);
  showNextWish();
});

setInterval(showNextWish, 3000);
// 添加烟花效果
// 修改烟花配置部分
window.addEventListener('load', () => {
    const container = document.querySelector('.fireworks');
    const fireworks = new Fireworks.default(container, {
        autoresize: true,
        opacity: 0.3,  // 降低不透明度
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 30,  // 减少粒子数量
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 20,  // 降低强度
        flickering: 50,
        lineStyle: 'round',
        hue: {
            min: 0,
            max: 360
        },
        delay: {
            min: 30,
            max: 60
        },
        rocketsPoint: {
            min: 50,
            max: 50
        },
        lineWidth: {
            explosion: {
                min: 1,
                max: 3
            },
            trace: {
                min: 1,
                max: 2
            }
        },
        brightness: {
            min: 50,
            max: 80
        },
        decay: {
            min: 0.015,
            max: 0.03
        }
    });
    
    fireworks.start();
});
