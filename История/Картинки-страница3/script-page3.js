document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeLink = document.getElementById('theme-link');

    themeToggle.addEventListener('click', function() {
        // Получаем текущий активный линк с темой
        const currentTheme = themeLink.getAttribute('href');

        // Переключаем между темами
        if (currentTheme === 'light-theme3.css') {
            themeLink.setAttribute('href', 'dark-theme3.css');
        } else {
            themeLink.setAttribute('href', 'light-theme3.css');
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
  