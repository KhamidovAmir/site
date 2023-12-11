const kvizData =[
    {
        question:"Первый музей учрежденный царем Петром I в Санкт Петербурге",
        a:"Кунсткамера", 
        b:"Эрарта",
        c:"Эрмитаж",
        correct:"a"
    },
    {
        question:"В каком году родился Александр Данилович Меншиков",
        a:"1703", 
        b:"1673",
        c:"1685",
        correct:"b"
    },
    {
        question:"Как называется усадьба Александра Меншикова",
        a:"Рождествено", 
        b:"Кирьяново",
        c:"Меншиковский дворец",
        correct:"c"
    },
    {
        question:"Кем был Петр I",
        a:"Колдун", 
        b:"Царь",
        c:"Сапожником",
        correct:"b"
    },
    {
        question:"Какой дворец был построен в 1714 году",
        a:"Летний дворец Петра I", 
        b:"Зимний дворец",
        c:"Екатеринский дворец",
        correct:"a"
    },
    {
        question:"Кто был первым командующим Балтийского флота",
        a:"Фёдор Матвееевич Апраксин", 
        b:"Зотов Никита Моисеевич",
        c:"Крюйс Корнелий",
        correct:"с"
    }
]
const kviz = document.getElementById('kviz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');
let currentKviz = 0;
let score = 0;
loadKviz();
function loadKviz(){
    const currentKvizData = kvizData[currentKviz];
    questionElement.innerText = currentKvizData.question;
    a_text.innerText = currentKvizData.a
    b_text.innerText = currentKvizData.b
    c_text.innerText = currentKvizData.c

} 
function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false);
}
function getSelected(){
    let Answer;
    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    } );
    return answer;
}
submit.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer === kvizData[currentKviz].correct){
            score++;
        }
        currentKviz++;
        if(currentKviz < kvizData.length){
            loadKviz();
        }
        else{
            kviz.innerHTML = `<h2>Вы ответили правильно на ${score}/${kvizData.length} вопросов</h2>
            <button class="reload" onclick="location.reload()">Перепройти </button>`;
        }
    }
})
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeLink = document.getElementById('theme-link');

    themeToggle.addEventListener('click', function() {
        // Получаем текущий активный линк с темой
        const currentTheme = themeLink.getAttribute('href');

        // Переключаем между темами
        if (currentTheme === 'light-theme4.css') {
            themeLink.setAttribute('href', 'dark-theme4.css');
        } else {
            themeLink.setAttribute('href', 'light-theme4.css');
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
