// Projekt-Strona - Główny plik JavaScript

// Funkcja inicjalizacji po załadowaniu DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona została załadowana!');
    
    // Inicjalizacja nawigacji
    initNavigation();
    
    // Powitalna wiadomość
    displayWelcomeMessage();
    
    // Obsługa interakcji użytkownika
    setupEventListeners();
});

// Funkcja inicjalizacji nawigacji
function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Kliknięto link:', this.textContent);
        });
    });
}

// Funkcja wyświetlania wiadomości powitalnej
function displayWelcomeMessage() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greeting;
    
    if (hours < 12) {
        greeting = 'Dzień dobry!';
    } else if (hours < 18) {
        greeting = 'Dzień dobry!';
    } else {
        greeting = 'Dobry wieczór!';
    }
    
    console.log(greeting + ' Witamy na stronie Projekt-Strona.');
}

// Funkcja ustawiania nasłuchiwaczy zdarzeń
function setupEventListeners() {
    // Obsługa scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });
    
    // Obsługa rozmiaru okna
    window.addEventListener('resize', function() {
        console.log('Rozmiar okna zmieniony:', window.innerWidth + 'x' + window.innerHeight);
    });
}

// Funkcja pomocnicza do animacji elementów
function animateElement(element, animationClass) {
    if (element) {
        element.classList.add(animationClass);
        
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, 1000);
    }
}
