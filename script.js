// Funkce pro náhodnou změnu pozice textu
function moveText() {
    const text = document.getElementById('bendingText');

    // Funkce pro získání aktuálních rozměrů okna
    function getWindowSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    // Funkce pro získání rozměrů textu
    function getTextSize() {
        const style = window.getComputedStyle(text);
        return {
            width: parseFloat(style.width),
            height: parseFloat(style.height)
        };
    }

    // Funkce pro získání náhodné pozice uvnitř okna
    function getRandomPosition() {
        const windowSize = getWindowSize();
        const textSize = getTextSize();
        const margin = 50; // Margin od okrajů
        const maxX = windowSize.width - textSize.width - margin;
        const maxY = windowSize.height - textSize.height - margin;
        const newX = Math.max(margin, Math.random() * maxX);
        const newY = Math.max(margin, Math.random() * maxY);
        return { x: newX, y: newY };
    }

    // Nastavení pozice textu uvnitř okna
    function setPosition() {
        const { x, y } = getRandomPosition();
        text.style.left = `${x}px`;
        text.style.top = `${y}px`;
    }

    // Nastavit počáteční pozici při prvním načtení stránky
    setPosition();

    // Při změně velikosti okna zajistit, aby text zůstal uvnitř okna
    window.addEventListener('resize', setPosition);
}

// Spustit funkci při načtení stránky
moveText();









// Přidání události pro pohyb myši nad textem
document.getElementById('bendingText').addEventListener('mouseenter', moveText);
