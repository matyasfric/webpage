// Funkce pro náhodnou změnu pozice textu
function moveText() {
    const text = document.getElementById('bendingText');
    const maxX = window.innerWidth - text.clientWidth;
    const maxY = window.innerHeight - text.clientHeight;

    // Nová pozice textu
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    // Kontrola, zda nová pozice nepřesahuje okno prohlížeče
    if (newX < 0) {
        newX = 0; // Pokud nová pozice přesahuje zleva, nastavíme na 0
    }
    if (newY < 0) {
        newY = 0; // Pokud nová pozice přesahuje shora, nastavíme na 0
    }
    if (newX > maxX) {
        newX = maxX; // Pokud nová pozice přesahuje zprava, nastavíme na maxX
    }
    if (newY > maxY) {
        newY = maxY; // Pokud nová pozice přesahuje zdola, nastavíme na maxY
    }

    text.style.left = `${newX}px`;
    text.style.top = `${newY}px`;
}


// Přidání události pro pohyb myši nad textem
document.getElementById('bendingText').addEventListener('mouseenter', moveText);
