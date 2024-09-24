// Dark mode toggle functionality
const toggleSwitch2 = document.getElementById('darkModeToggle2');
toggleSwitch2.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle dark mode for other elements as needed
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('dark-mode');
    });
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
      heroElement.classList.toggle('dark-mode');
    }
        document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.toggle('dark-mode');
    });


    
    // Save theme to localStorage
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

// Load dark mode preference from localStorage
const currentTheme2 = localStorage.getItem('theme');
if (currentTheme2) {
    document.body.classList.add(currentTheme2);
}

// Dark mode toggle functionality
const toggleSwitch = document.getElementById('darkModeToggle');
toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Toggle dark mode for other elements as needed
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('dark-mode');
    });
    const heroElement = document.querySelector('.hero');
    document.getElementById('projects').classList.toggle('dark-mode');
    document.getElementById('services').classList.toggle('dark-mode');
    document.getElementById('pricing').classList.toggle('dark-mode');



    document.querySelectorAll('.container').forEach(container => {
        container.classList.toggle('dark-mode');
    });


    if (heroElement) {
      heroElement.classList.toggle('dark-mode');
    }
    
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.toggle('dark-mode');
    });


    // Save theme to localStorage
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

// Load dark mode preference from localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
}

