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
