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

    // Funkce pro aktualizaci rozměrů textu a maximálních hodnot
    function updateTextSizeAndMax() {
        const windowSize = getWindowSize();
        const maxX = windowSize.width - text.clientWidth;
        const maxY = windowSize.height - text.clientHeight;
        return { maxX, maxY };
    }

    // Při prvním spuštění a při změně velikosti okna aktualizujeme rozměry textu a maximální hodnoty
    let { maxX, maxY } = updateTextSizeAndMax();
    window.addEventListener('resize', () => {
        ({ maxX, maxY } = updateTextSizeAndMax());
    });

    // Nová pozice textu
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    // Zajištění, aby nová pozice textu zůstala uvnitř okna prohlížeče
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    text.style.left = `${newX}px`;
    text.style.top = `${newY}px`;
}






// Přidání události pro pohyb myši nad textem
document.getElementById('bendingText').addEventListener('mouseenter', moveText);
