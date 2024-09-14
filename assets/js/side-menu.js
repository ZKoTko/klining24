document.getElementById('mob-menu-burger').addEventListener('click', function() {
    document.getElementById('side-menu').classList.add('open');
    document.body.classList.add('no-scroll'); // Отключаем прокрутку страницы
    const filter = document.querySelector('.side-menu-filter');
    filter.classList.add('visible'); // Показываем затемнение
});

document.getElementById('closeButton').addEventListener('click', closeMenu);
document.querySelector('.side-menu-filter').addEventListener('click', closeMenu);

function closeMenu() {
    document.getElementById('side-menu').classList.remove('open');
    document.body.classList.remove('no-scroll'); // Включаем прокрутку страницы
    const filter = document.querySelector('.side-menu-filter');
    filter.classList.remove('visible'); // Скрываем затемнение
}