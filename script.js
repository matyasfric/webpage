document.getElementById('memeButton').addEventListener('click', function() {
    const memeText = document.getElementById('memeText');
    const skibidiImage = document.getElementById('skibidiImage');
    
    memeText.textContent = 'skibidi toilet';
    skibidiImage.classList.toggle('spin');
});
