function animateCounter(element, start, end, duration) {
    let startTime = null;
    
    function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue.toLocaleString('ru-RU').replace(/,/g, ' ');
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById('counter');
    animateCounter(counterElement, 100000, 1295004, 3000); // Конечное значение: 1 295 004
});