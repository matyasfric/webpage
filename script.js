document.getElementById('memeButton').addEventListener('click', function() {
    const memeText = document.getElementById('memeText');
    const skibidiImage = document.getElementById('skibidiImage');
    
    memeText.textContent = 'Skibidi Bop Mm Dada!';
    skibidiImage.classList.toggle('spin');
});
