document.addEventListener('DOMContentLoaded', function() {

    // Toggle Education Section
    document.getElementById('education-toggle').addEventListener('click', function() {
        const educationContent = document.getElementById('education-content');
        educationContent.classList.toggle('hidden');
    });

    // Toggle Experience Section
    document.getElementById('experience-toggle').addEventListener('click', function() {
        const experienceContent = document.getElementById('experience-content');
        experienceContent.classList.toggle('hidden');
    });

    // Toggle Expertise Section
    document.getElementById('expertise-toggle').addEventListener('click', function() {
        const expertiseContent = document.getElementById('expertise-content');
        expertiseContent.classList.toggle('hidden');
    });

    // Toggle About Me Section
    document.getElementById('about-me-toggle').addEventListener('click', function() {
        const aboutMeContent = document.getElementById('about-me-content');
        aboutMeContent.classList.toggle('hidden');
    });

    // Toggle Contact Info Section
    document.getElementById('contact-info-toggle').addEventListener('click', function() {
        const contactInfoContent = document.getElementById('contact-info-content');
        contactInfoContent.classList.toggle('hidden');
    });

    // Toggle Hobbies Section
    document.getElementById('hobbies-toggle').addEventListener('click', function() {
        const hobbiesContent = document.getElementById('hobbies-content');
        hobbiesContent.classList.toggle('hidden');
    });
});
