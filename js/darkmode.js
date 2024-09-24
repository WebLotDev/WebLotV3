// Dark mode toggle functionality for the second toggle
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
    saveThemePreference();
});

// Load dark mode preference from localStorage
loadThemePreference();

// Dark mode toggle functionality for the first toggle
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
    saveThemePreference();
});

// Function to save theme to localStorage
function saveThemePreference() {
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
}

// Function to load theme from localStorage
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);

        // Apply the dark mode class to the other elements if 'dark' is saved
        if (savedTheme === 'dark') {
            document.querySelector('header').classList.add('dark-mode');
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.add('dark-mode');
            });
            const heroElement = document.querySelector('.hero');
            if (heroElement) {
                heroElement.classList.add('dark-mode');
            }
            document.querySelectorAll('.btn').forEach(btn => {
                btn.classList.add('dark-mode');
            });
            document.getElementById('projects').classList.add('dark-mode');
            document.getElementById('services').classList.add('dark-mode');
            document.getElementById('pricing').classList.add('dark-mode');
            document.querySelectorAll('.container').forEach(container => {
                container.classList.add('dark-mode');
            });
        }
    }
}
