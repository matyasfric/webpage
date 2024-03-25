// Funkce pro náhodnou změnu pozice textu
function moveText() {
    const text = document.getElementById('bendingText');
    const maxX = window.innerWidth - text.clientWidth;
    const maxY = window.innerHeight - text.clientHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    text.style.left = `${newX}px`;
    text.style.top = `${newY}px`;
}

// Přidání události pro pohyb myši nad textem
document.getElementById('bendingText').addEventListener('mouseenter', moveText);
