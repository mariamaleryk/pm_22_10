document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".section-header");

    headers.forEach((header) => {
        header.classList.add("roll");

        const content = header.nextElementSibling;
        if (content && content.classList.contains("roll-block")) {
            // Початково встановлюємо max-height на повну висоту для розгорнутого вигляду
            content.style.maxHeight = content.scrollHeight + "px";

            header.addEventListener("click", function () {
                if (content.style.maxHeight && content.style.maxHeight !== "0px") {
                    content.style.maxHeight = "0"; // Згорнути
                } else {
                    content.style.maxHeight = content.scrollHeight + "px"; // Розгорнути
                }
            });
        }
    });
});

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

function displayData(data) {
    const container = document.querySelector('.experience-section .roll-block .row');

    container.innerHTML = '';

    data.experience.forEach(item => {
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('col-md-12', 'experience-item');

        experienceItem.innerHTML = `
            <h3>${item.jobPosition}</h3>
            <span class="tag">${item.period}</span>
            <span>${item.company} / ${item.location}</span>
            <p>${item.description}</p>
        `;

        container.appendChild(experienceItem);
    });
}

function loadDataWithXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/data.json', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayData(data);
        } else {
            console.error('Error loading data');
        }
    };

    xhr.send();
}

async function loadDataWithFetch() {
    try {
        const response = await fetch('/data/data.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log(data); // Додайте цей рядок для перевірки
        displayData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

loadDataWithXHR(); // Для XMLHttpRequest
//loadDataWithFetch(); // Для Fetch API