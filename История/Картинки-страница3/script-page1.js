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
      "я очень красивый",
      "я очень умный",
      "я очень обоятельный",
      "я очень привлекательный",
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
