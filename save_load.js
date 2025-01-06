// Exemple d'objet représentant l'état du jeu
const gameState = {
    player: {
        health: health,
        baseHealth: baseHealth,
        maxHealth: maxHealth,
        xp: xp,
        level: lvl,
        gold: gold,
        strenght: strenght,
        baseStrenght: baseStrenght,
        speed: speed,
        baseSpeed: baseSpeed,
        
    },
};

// Sauvegarde de l'état complet du jeu
buttonSave.addEventListener("click", () => {
    localStorage.setItem("gameState", JSON.stringify(gameState)); // Sauvegarder l'objet dans le localStorage
    alert("Le jeu a été sauvegardé !");
});

// Chargement de l'état du jeu
buttonLoad.addEventListener("click", () => {
    const savedGameState = localStorage.getItem("gameState");

    if (savedGameState) {
        const loadedState = JSON.parse(savedGameState); // Récupérer l'objet du localStorage

        // Appliquez cet état aux éléments du jeu
        console.log("Nom du joueur : " + loadedState.player.name);
        console.log("Niveau : " + loadedState.player.level);
        console.log("Position : ", loadedState.player.position);
        // Mettre à jour l'interface du jeu avec les données chargées

        // Exemple d'application de l'état
        // Par exemple, replaçons le joueur à sa position sauvegardée
        player.position = loadedState.player.position;

        // Vous pouvez également restaurer des ennemis, objets, etc.
        enemies = loadedState.enemies;
        inventory = loadedState.player.inventory;
        difficulty = loadedState.settings.difficulty;

        alert("Jeu chargé avec succès !");
    } else {
        alert("Aucune sauvegarde trouvée.");
    }
});
