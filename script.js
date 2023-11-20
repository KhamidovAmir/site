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
updateSlider();
//конец слайдера личностей
//фактер
function loadFact() {
  // Получаем элемент, в который будем выводить факты
  var factDisplay = document.getElementById('fact-display');

  // Получаем массив фактов (можно загружать с сервера)
  var facts = [
      "Факт 1",
      "Факт 2",
      "Факт 3",
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
function toggleTheme() {
  // Получаем ссылку на элемент link, который подключает стили
  var themeStyle = document.getElementById("theme-style");

  // Проверяем текущий путь к файлу стилей и меняем на противоположный
  if (themeStyle.getAttribute("href") === "light-theme.css") {
      themeStyle.setAttribute("href", "dark-theme.css");
  } else {
      themeStyle.setAttribute("href", "light-theme.css");
  }
}

// Вы можете добавить логику для сохранения текущей темы в localStorage, если нужно
