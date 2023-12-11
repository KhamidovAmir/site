var slideIndex = [1,1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

//Навигация
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const menu = document.getElementById('menu');
  
    toggleButton.addEventListener('click', function() {
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
      toggleButton.textContent = (menu.style.display === 'block') ? 'Закрыть ' : 'Навигация';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeLink = document.getElementById('theme-link');

    themeToggle.addEventListener('click', function() {
        // Получаем текущий активный линк с темой
        const currentTheme = themeLink.getAttribute('href');

        // Переключаем между темами
        if (currentTheme === 'light-theme2.css') {
            themeLink.setAttribute('href', 'dark-theme2.css');
        } else {
            themeLink.setAttribute('href', 'light-theme2.css');
        }
    });
});
