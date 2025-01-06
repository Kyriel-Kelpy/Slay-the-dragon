document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');

    // Simuler un délai (en millisecondes)
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Cache l'écran de chargement
    }, 5000); // Délai de 2 secondes
});
