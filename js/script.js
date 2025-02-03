const quotes = {
  "О пути и цели": [
    "Не каждый, кто заблудился в лесу, потерялся — некоторые просто нашли новый путь",
    "Горы зовут не тех, кто ищет вершины, а тех, кто готов искать себя",
    "Поход — это когда цель становится тенью, а главное — шаги, которые к ней ведут",
    "Лучший вид — не с высоты, а из глубины своих возможностей",
    "Тропа — это диалог между тобой и землёй. Слушай, что она шепчет",
  ],
  "О преодолении": [
    "Рюкзак тяжелеет от страхов, а не от вещей",
    "Подъём в гору — это когда ноги спорят с разумом, а сердце берёт слово",
    "Дождь в походе — не помеха, а соавтор твоей истории",
    "Усталость — это плата за пейзажи, которые не купишь",
    "Если кажется, что сил нет, — посмотри на закат. Природа не спешит, но всегда успевает",
  ],
  "О природе": [
    "Лес не спрашивает, зачем ты пришёл. Он просто дарит тебе тишину",
    "Костер — это солнце, которое ты носишь в рюкзаке",
    "Снег на вершинах — это воспоминания зимы, которые лето не смогло растопить",
    "Река учит: даже камень можно обойти, если плыть, а не спорить",
    "Звёзды в горах ярче — им не мешает свет твоих сомнений",
  ],
  "О дружбе": [
    "В походе друг — это тот, кто делит последний сухарь и первый восход",
    "Самый тёплый спальник — это смех у костра",
    "Группа идёт со скоростью самого медленного. Потому что поход — не гонка, а диалог",
    "Если ты упал, грязь на штанах станет знаком, что кто-то подал тебе руку",
    "Совместный поход — это когда чужие истории становятся общим костром",
  ],
  "Философия дороги": [
    "Чем легче рюкзак, тем дальше унесёт ветер твои мысли",
    "Карта — это подсказка, а не истина. Настоящий путь рисуют твои следы",
    "В палатке нет Wi-Fi, зато есть связь с собой",
    "Поход — это когда ты меняешь батарейки в часах на время, которое течёт как река",
    "Самый важный предмет снаряжения — желание вернуться",
  ],
  "Юмор и правда": [
    "Вес рюкзака обратно пропорционален количеству 'нужных' вещей дома",
    "Если комары тебя не кусают — проверь, не забыл ли души",
    "Сухой носки в рюкзаке — это как любовь: все о ней мечтают, но мало кто готов носить запасные",
    "Грибы в лесу растут быстрее, чем ты находишь их в корзинке",
    "Хороший походник знает: дождь закончится ровно через минуту после того, как поставишь палатку",
  ],
  "О внутреннем пути": [
    "Идя в горы, ты не покоряешь их — ты сдаёшься их величию",
    "Следы на тропе стираются, но не те, что остаются в сердце",
    "Поход — это когда ты понимаешь: дом там, где ставишь палатку",
    "Ты не теряешься — ты находишь маршруты, которых нет на картах",
    "Ветер в лицо — это не помеха, а способ природы обнять тебя",
  ],
  "О рисках и мудрости": [
    "Самый опасный зверь в лесу — самоуверенность",
    "Если боишься волков — вспомни, что ты тоже часть этой истории",
    "Туман — не враг, а учитель. Он напоминает: даже в неизвестности есть путь",
    "Снежная лавина начинается с одного неверного шага. Как и жизнь",
    "Лучший компас — это уважение к горам",
  ],
  "Просто о главном": [
    "Поход — это когда чай из котелка вкуснее, чем в пятизвёздочном отеле",
    "Песок в ботинках — это автограф земли на твоём пути",
    "Соль на губах после перехода — это не пот, а приправа к свободе",
    "В палатке под дождём рождаются стихи, которые не напишешь в тепле",
    "Шаги — это буквы, из которых пишется путь",
  ],
  "Напоследок": [
    "Возвращаться из похода грустно только тому, кто не взял с собой мечты о следующем",
    "Самый тяжёлый подъём — от дивана до рюкзака",
    "Если ты не видел, как роса просыпается на палатке, ты не знаешь, что такое утро",
    "Поход — это когда ты находишь сто причин вернуться и одну — уйти снова",
    "Земля круглая не для того, чтобы с неё упасть, а чтобы идти дальше",
  ],
};

savedQuotes = [];
const typingSpeed = 10;
const circlesCount = 5;
const circleAngle = 360;
let clickedCircles = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getTitle(savedQuotes) {
  let randomTitleIndex = getRandomInt(0, Object.keys(quotes).length - 1);
  let randowmTitle = Object.keys(quotes)[randomTitleIndex];
  let randomSubtitleIndex = getRandomInt(0, quotes[randowmTitle].length - 1);
  let randowmSubtitle = quotes[randowmTitle][randomSubtitleIndex];
  let uniqueIndex = randomTitleIndex + "" + randomSubtitleIndex;
  if (savedQuotes.includes(uniqueIndex)) return getTitle(savedQuotes);
  savedQuotes.push(uniqueIndex);
  return {
    randowmTitle,
    randowmSubtitle,
  };
}
function typePromise(i, t, ie, oe) {
  return new Promise((resolve) => {
    function wrapper(i) {
      oe.innerHTML += ie.charAt(i);
      if (i < ie.length - 1) {
        setTimeout(() => wrapper(i + 1), t);
      } else {
        resolve();
      }
    }
    wrapper(i);
  });
}
function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
          unfade(reload);
          reload.onclick = () => window.location.reload();
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
}

function unfade(element) {
  let op = 0.1; // initial opacity
  element.style.display = "flex";
  let timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 10);
}

const container = document.querySelector(".container");
const connCircle = document.querySelector(".connecting-circle");
const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const bg = document.querySelector(".bg");
const textContainer = document.querySelector(".text-container");
const reload = document.querySelector(".reload");
bg.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url('images/f${getRandomInt(1,5)}.jpg')`;

const baseAngel = getRandomInt(0, circleAngle);
const baseRadius = container.clientHeight / 2;


// Создание кругов
for (let i = 0; i < circlesCount; i++) {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.onclick = async (evt) => {
    if (evt.target.getAttribute("clicked")) return;
    clickedCircles++;
    if (clickedCircles === circlesCount) unfade(connCircle);
    evt.target.style.opacity = 1;
    evt.target.style.boxShadow = "0 0 23px var(--borderColor)";
    evt.target.setAttribute("clicked", true);
    title.innerHTML = "";
    subtitle.innerHTML = "";
    const { randowmTitle, randowmSubtitle } = getTitle(savedQuotes);

    await typePromise(0, typingSpeed, randowmTitle, title);
    await typePromise(0, typingSpeed, randowmSubtitle, subtitle);
    if (clickedCircles === circlesCount) {
      setTimeout(() => {
        fade(textContainer)
      }, 1000)      
    };
  };
  circle.style.backgroundImage = `url('images/${i + 1}.jpg')`;
  container.appendChild(circle);

  const angle =
    (i * (circleAngle / circlesCount) * Math.PI) / (circleAngle / 2);
  const finalX = Math.cos(angle) * (baseRadius - circle.clientHeight / 2);
  const finalY = Math.sin(angle) * (baseRadius - circle.clientHeight / 2);

  setTimeout(() => {
    circle.style.transform = `translate(
					  calc(-50% + ${finalX}px), 
					  calc(-50% + ${finalY}px)
				  ) rotate(-${baseAngel}deg)`;
  }, 50);
}

// Запуск вращения контейнера
setTimeout(() => {
  container.style.transform = `rotate(${baseAngel}deg)`; /* Добавили вращение */
}, 50);
