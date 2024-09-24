// Κοινή λειτουργία για να εναλλάσσει το dark mode
function toggleDarkMode() {
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

    document.getElementById('projects')?.classList.toggle('dark-mode');
    document.getElementById('services')?.classList.toggle('dark-mode');
    document.getElementById('pricing')?.classList.toggle('dark-mode');
    document.querySelectorAll('.container').forEach(container => {
        container.classList.toggle('dark-mode');
    });

    // Save theme to localStorage
    saveThemePreference();
}

// Λειτουργία για την αποθήκευση του θέματος στο localStorage
function saveThemePreference() {
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
}

// Λειτουργία για την φόρτωση του θέματος από το localStorage
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);

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

            document.getElementById('projects')?.classList.add('dark-mode');
            document.getElementById('services')?.classList.add('dark-mode');
            document.getElementById('pricing')?.classList.add('dark-mode');
            document.querySelectorAll('.container').forEach(container => {
                container.classList.add('dark-mode');
            });
        }
    }
}

// Συνδέουμε τη λειτουργία και με τα δύο κουμπιά toggle
const toggleSwitch = document.getElementById('darkModeToggle');
const toggleSwitch2 = document.getElementById('darkModeToggle2');

if (toggleSwitch) {
    toggleSwitch.addEventListener('click', toggleDarkMode);
}
if (toggleSwitch2) {
    toggleSwitch2.addEventListener('click', toggleDarkMode);
}

// Φορτώνουμε την αποθηκευμένη προτίμηση κατά την αρχική φόρτωση της σελίδας
loadThemePreference();
