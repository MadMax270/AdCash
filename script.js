let score = 0;

// Найдем элементы scoreboard и кнопку
const scoreElement = document.getElementById('score');
const buttonElement = document.getElementById('clickButton');

// Добавим обработчик события нажатия на изображение
buttonElement.addEventListener('click', function() {
    score++;
    scoreElement.textContent = score;
});
