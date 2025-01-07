function saveGame() {
    const gameData = {
        level: document.getElementById("lvlText").innerText,
        xp: document.getElementById("xpText").innerText,
        health: document.getElementById("healthText").innerText,
        maxHealth: document.getElementById("maxHealthText").innerText,
        strength: document.getElementById("strenght").innerText,
        speed: document.getElementById("speed").innerText,
        gold: document.getElementById("goldText").innerText,
    };
    
    // Sauvegarde les données dans le localStorage
    localStorage.setItem("slayTheDragonSave", JSON.stringify(gameData));
    alert("Jeu sauvegardé !");
}



function loadGame() {
    const savedGame = JSON.parse(localStorage.getItem("slayTheDragonSave"));
    
    if (savedGame) {
        document.getElementById("lvlText").innerText = savedGame.level;
        document.getElementById("xpText").innerText = savedGame.xp;
        document.getElementById("healthText").innerText = savedGame.health;
        document.getElementById("maxHealthText").innerText = savedGame.maxHealth;
        document.getElementById("strenght").innerText = savedGame.strength;
        document.getElementById("speed").innerText = savedGame.speed;
        document.getElementById("goldText").innerText = savedGame.gold;
        
        setTitles(savedGame.titles);  // Restaurer les titres sauvegardés
        alert("Jeu chargé !");
    } else {
        alert("Aucune sauvegarde trouvée !");
    }
}

buttonSave.onclick = saveGame;
buttonLoad.onclick = loadGame;
