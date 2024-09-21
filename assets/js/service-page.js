document.querySelector('.tables__openTableBtn').addEventListener('click', function() {
    document.querySelector('.tables__mainWrapper').classList.toggle('hidden');
});

const rangeThumb = document.getElementById('range-thumb'),
      rangeNumber = document.getElementById('range-number'),
      rangeLine = document.getElementById('range-line'),
      rangeInput = document.getElementById('range-input');

    // Задаем параметры минимального, максимального и начального значений для input
    rangeInput.min = 30;
    rangeInput.max = 300;
    rangeInput.value = 150;

    const rangeInputSlider = () => {

    // Вставляем значение input range
    rangeNumber.textContent = rangeInput.value + " м²";

    // Рассчитываем позицию ползунка
    // rangeInput.value = 150, rangeInput.max = 300
    rangeInput.offsetWidth = 300;
    rangeThumb.offsetWidth = 40;
    const thumbPosition = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min),
            space = rangeInput.offsetWidth - rangeThumb.offsetWidth;

    // Устанавливаем позицию ползунка
    rangeThumb.style.left = (thumbPosition * space) + 'px';

    // Устанавливаем ширину полосы слайдера в зависимости от значения
    const percentage = ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
    rangeLine.style.width = percentage + '%';
    }

    // Вызываем функцию при изменении значения слайдера
    rangeInput.addEventListener('input', rangeInputSlider);

    // Вызываем функцию для инициализации начальных значений
    rangeInputSlider();







const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const inputNumber = document.querySelector('.input-number');

minusButton.addEventListener('click', () => {
    let value = parseInt(inputNumber.value);
    if (value > 1) {
        inputNumber.value = value - 1;
    }
});

plusButton.addEventListener('click', () => {
    let value = parseInt(inputNumber.value);
    if (value < 9) {
        inputNumber.value = value + 1;
    }
});




document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
    const selectElement = wrapper.querySelector('.custom-select');
    const triggerElement = wrapper.querySelector('.custom-select-trigger');
    const customOptions = wrapper.querySelectorAll('.custom-option'); // Теперь выбираем напрямую .custom-option

    // Открываем или закрываем кастомный селект
    triggerElement.addEventListener('click', function () {
        wrapper.classList.toggle('open');
    });

    // Обрабатываем клики по кастомным элементам
    customOptions.forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value'); // Получаем значение напрямую из data-value
            selectElement.value = value; // Изменяем значение в оригинальном селекте
            triggerElement.textContent = this.textContent; // Обновляем текст триггера
            wrapper.classList.remove('open');
        });
    });

    // Закрываем кастомный селект при клике вне его области
    window.addEventListener('click', function(e) {
        if (!wrapper.contains(e.target)) {
            wrapper.classList.remove('open');
        }
    });
});