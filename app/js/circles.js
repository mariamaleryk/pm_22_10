// Функція для ініціалізації анімації
function startAnimation(element, strokeDashoffset, rotation, duration) {
    element.style.transition = `stroke-dashoffset ${duration}s ease-in-out, transform ${duration}s ease-in-out`;
    element.style.strokeDashoffset = strokeDashoffset;
    element.style.transform = `rotate(${rotation}deg)`;
}

// Вибираємо SVG кола для анімації
const circle1 = document.querySelector('.rotate-variant-01');
const circle2 = document.querySelector('.rotate-variant-02');
const circle11 = document.querySelector('.rotate-variant-11');
const circle12 = document.querySelector('.rotate-variant-12');
const circle21 = document.querySelector('.rotate-variant-21');
const circle22 = document.querySelector('.rotate-variant-22');
const circle31 = document.querySelector('.rotate-variant-31');
const circle32 = document.querySelector('.rotate-variant-32');

// Викликаємо анімації
startAnimation(circle1, '197.58', 94.2, 2);
startAnimation(circle2, '189.44', 90, 2);
// startAnimation(circle1, '68.43', 59.2, 2);
// startAnimation(circle2, '59.86', 55, 2);
startAnimation(circle11, '85.57', 74.2, 2);
startAnimation(circle12, '77', 70, 2);
startAnimation(circle21, '102.71', 89.2, 2);
startAnimation(circle22, '94.14', 85, 2);
startAnimation(circle31, '85.57', 74.2, 2);    //+8.14,  +4.2
startAnimation(circle32, '77', 70, 2);
