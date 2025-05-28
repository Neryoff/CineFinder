const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function initTheme() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    body.classList.toggle('dark-mode', darkMode);
}

function toggleTheme() {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', initTheme);