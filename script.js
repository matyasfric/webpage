// Vybrání elementu textu
const bendingText = document.querySelector('.bending-text');

// Funkce pro přemístění textu na novou pozici
function moveText() {
    bendingText.style.transform = 'translate(100px, 100px)'; // Posunutí textu na souřadnice (100px, 100px)
}

// Funkce pro vrácení textu na původní pozici
function resetText() {
    bendingText.style.transform = 'none'; // Vrácení textu na původní pozici
}

// Přidání události pro vstup myši nad text
bendingText.addEventListener('mouseenter', moveText);

// Přidání události pro odchod myši z textu
bendingText.addEventListener('mouseleave', resetText);
