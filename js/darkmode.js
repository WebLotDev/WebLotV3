// Λειτουργία για την εφαρμογή του τρέχοντος θέματος με βάση το localStorage
function applyTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }
        if (currentTheme) {
            if (currentTheme === 'dark') {
                toggleDarkMode(); // Καλούμε την toggleDarkMode αν το θέμα είναι dark
            }
        // Ρύθμιση της θέσης του διακόπτη
        const toggleSwitch = document.getElementById('darkModeToggle');
        if (toggleSwitch) {
            toggleSwitch.checked = currentTheme === 'dark';
        }
        const toggleSwitch2 = document.getElementById('darkModeToggle2');
        if (toggleSwitch2) {
            toggleSwitch2.checked = currentTheme === 'dark';
        }
    }
}

// Λειτουργία για την εναλλαγή σε dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('dark-mode');
    });

    document.querySelectorAll('.container').forEach(container => {
        container.classList.toggle('dark-mode');
    });

    const heroElement = document.querySelector('.hero');
    if (heroElement) {
        heroElement.classList.toggle('dark-mode');
    }

    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.toggle('dark-mode');
    });

    // Αποθήκευση του θέματος στο localStorage
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
}

// Πρόσθετοι ακροατές γεγονότων για τους διακόπτες
const toggleSwitch2 = document.getElementById('darkModeToggle2');
if (toggleSwitch2) {
    toggleSwitch2.addEventListener('click', () => {
        toggleDarkMode();
    });
}

const toggleSwitch = document.getElementById('darkModeToggle');
if (toggleSwitch) {
    toggleSwitch.addEventListener('click', () => {
        toggleDarkMode();
    });
}

// Εφαρμογή του τρέχοντος θέματος κατά την φόρτωση της σελίδας
applyTheme();
