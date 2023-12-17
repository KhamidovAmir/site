// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();
//фактер
function loadFact() {
  // Получаем элемент, в который будем выводить факты
  var factDisplay = document.getElementById('fact-display');

  // Получаем массив фактов (можно загружать с сервера)
  var facts = [
      "Кто и когда основал Петербург? Петербург был основан 27 мая 1703 года российским императором Петром I на отвоеванных у шведов ингерманландских землях. Согласно одной из популярных легенд, в этом ему помог орел. Во время обхода Заячьего острова император срезал два пласта дерна, сложил их крест на крест и объявил, что с этого места начинается город. В тот момент над Петром I пролетел орел. Он воспринял это как хороший знак.",
      "В честь кого назван Петербург? Многие ошибочно думают, что город назван в честь самого Петра I. Северная столица названа в честь святого Петра – небесного покровителя царя-основателя.",
      "Город на болоте? Принято считать, что император основал город прямо на болоте, но это не так. Раньше на месте исторического центра Петербурга, проживали около 40 поселений. Они существовали здесь еще до прихода шведов и раньше принадлежали Новгороду. Жители этих поселений стали первыми петербуржцами и принимали активное участие в строительстве города. К концу правления Петра I население Петербурга выросло до 40 тысяч человек.",
      "Первое название? Мало кто знает, но изначально Петропавловскую крепость император назвал Санкт-Питер-Бурх – «город святого Петра» в переводе с голландского языка. Именно так впоследствии и назвали город. Отсюда и родилось всеми любимое название – «Питер». Дело в том, что первым жителям города было сложно произносить название целиком, и они сократили его до «Питер». И только в 1720 году Санкт-Питер-Бурх официально стал Санкт-Петербургом.",
      "Первая улица? Первой улицей Петербурга стала Петровская набережная. Ее застраивали сразу же после основания города. Именно на ней был построен деревянный домик Петра I и первый петербургский дом князя Меншикова. Также в то время в домах на Петровской набережной жили первый государственный канцлер России Гавриил Головкин и не только",
      "В 1712 году Петербург провозгласили столицей Российского государства. Сюда из Москвы были переведены все официальные учреждения и царский двор. Город официально оставался столицей до 1918 года. Лишь на время царствования Петра II столица была временно возвращена в Москву.",
  ];

  // Проверяем, есть ли сохраненные факты в локальном хранилище
  var savedFacts = JSON.parse(localStorage.getItem('savedFacts')) || [];

  // Проверяем, все ли факты использованы
  if (savedFacts.length === facts.length) {
      savedFacts = []; // Если использованы все факты, начинаем заново
  }

  // Получаем уникальный факт
  var uniqueFact = getUniqueFact(facts, savedFacts);

  // Выводим факт
  factDisplay.textContent = uniqueFact;

  // Сохраняем использованный факт
  savedFacts.push(uniqueFact);
  localStorage.setItem('savedFacts', JSON.stringify(savedFacts));
}

// Функция для получения уникального факта
function getUniqueFact(allFacts, usedFacts) {
  var availableFacts = allFacts.filter(function(fact) {
      return usedFacts.indexOf(fact) === -1;
  });

  var randomIndex = Math.floor(Math.random() * availableFacts.length);
  return availableFacts[randomIndex];
}

// Функция для переключения темы
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeLink = document.getElementById('theme-link');

  themeToggle.addEventListener('click', function() {
      // Получаем текущий активный линк с темой
      const currentTheme = themeLink.getAttribute('href');

      // Переключаем между темами
      if (currentTheme === 'light-theme1.css') {
          themeLink.setAttribute('href', 'dark-theme1.css');
      } else {
          themeLink.setAttribute('href', 'light-theme1.css');
      }
  });
});

//
const yearSlider = document.getElementById("year-slider");
const images = document.querySelectorAll("#image-container img");

yearSlider.addEventListener("input", function() {
  const year = this.value - 1; // вычислите разницу от начала года до конца
  images.forEach(function(image, index) {
    if (index === year) {
      image.style.display = "block"; // отображаем нужное изображение
    } else {
      image.style.display = "none"; // скрываем остальные изображения
    }
  });
});
//Навигация
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const menu = document.getElementById('menu');

  toggleButton.addEventListener('click', function() {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    toggleButton.textContent = (menu.style.display === 'block') ? 'Закрыть ' : 'Навигация';
  });
});
//Личности
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextButton.addEventListener("click", showNextSlide);
  prevButton.addEventListener("click", showPrevSlide);
});