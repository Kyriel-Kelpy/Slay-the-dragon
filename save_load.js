function saveGame() {
    const gameData = {
        xp,
        lvl,
        health,
        maxHealth,
        baseHealth,
        baseStrenght,
        strenght,
        baseSpeed,
        speed,
        gold,
        inventory,
        currentWeapon,
        currentWeaponDurability,
        currentProtection,
        currentAccessory,
        bestiaire,
        klaara,
        raidLeona,
        ragam,
        leona,
        yann,
        guild,
        inn,
        seeker,
        rodeur,
        seekSuccess,
        seekFail,
        killMonster,
        finishGame1,
        finishGame2,
        playerProgression,
        playerTrophies,
        playerWeapons,
        playerProtections,
        playerAccessoires,
        goShop,
        explorateur,
        trophieKlaara,
        trophieRagam,
        trophieYann,
        monsterIndex,
        monsterHealth,
        monsterName2,
        monsterType,
        typeBeast,
        typeSlime,
        typeInsect,
        typeDemon,
        typeSpirit,
        typeDragon,
        typeReptil,
        typeHumanoid,
        typeWinged,
        typePlant,
        playerProgression,
    };

    localStorage.setItem("slayTheDragonSave", JSON.stringify(gameData));
    alert("Jeu sauvegardé !");
}

function loadGame() {
    const savedGame = JSON.parse(localStorage.getItem("slayTheDragonSave"));

    if (savedGame) {
        displaySection(playerProgression);

        // Restaurer les variables principales
        xp = savedGame.xp || 0;
        lvl = savedGame.lvl || 1;
        health = savedGame.health || 100;
        maxHealth = savedGame.maxHealth || 100;
        baseHealth = savedGame.baseHealth || 100;
        baseStrenght = savedGame.baseStrenght || 10;
        strenght = savedGame.strenght || baseStrenght;
        baseSpeed = savedGame.baseSpeed || 10;
        speed = savedGame.speed || baseSpeed;
        gold = savedGame.gold || 100;

        // Restaurer les tableaux et objets
        inventory = savedGame.inventory || [];
        currentWeapon = savedGame.currentWeapon;
        currentWeaponDurability = savedGame.currentWeaponDurability;
        currentProtection = savedGame.currentProtection;
        currentAccessory = savedGame.currentAccessory;
        bestiaire = savedGame.bestiaire || [];
        playerTrophies = savedGame.playerTrophies || [];
        playerWeapons = savedGame.playerWeapons || [];
        playerProtections = savedGame.playerProtections || [];
        playerAccessoires = savedGame.playerAccessoires || [];

        // Restaurer les états et compteurs
        klaara = savedGame.klaara || 0;
        raidLeona = savedGame.raidLeona || 0;
        ragam = savedGame.ragam || 0;
        leona = savedGame.leona || 0;
        yann = savedGame.yann || 0;
        guild = savedGame.guild || 1;
        inn = savedGame.inn || 0;
        seeker = savedGame.seeker || 0;
        rodeur = savedGame.rodeur || 0;
        seekSuccess = savedGame.seekSuccess || 0;
        seekFail = savedGame.seekFail || 0;
        killMonster = savedGame.killMonster || 0;
        finishGame1 = savedGame.finishGame1 || 0;
        finishGame2 = savedGame.finishGame2 || 0;
        playerProgression = savedGame.playerProgression || "";
        goShop = savedGame.goShop || 0;
        explorateur = savedGame.explorateur || 0;
        trophieKlaara = savedGame.trophieKlaara || 0;
        trophieRagam = savedGame.trophieRagam || 0;
        trophieYann = savedGame.trophieYann || 0;

        // Restaurer les données des monstres
        monsterIndex = savedGame.monsterIndex;
        monsterHealth = savedGame.monsterHealth;
        monsterName2 = savedGame.monsterName2 || "";
        monsterType = savedGame.monsterType || "";
        typeBeast = savedGame.typeBeast || 0;
        typeSlime = savedGame.typeSlime || 0;
        typeInsect = savedGame.typeInsect || 0;
        typeDemon = savedGame.typeDemon || 0;
        typeSpirit = savedGame.typeSpirit || 0;
        typeDragon = savedGame.typeDragon || 0;
        typeReptil = savedGame.typeReptil || 0;
        typeHumanoid = savedGame.typeHumanoid || 0;
        typeWinged = savedGame.typeWinged || 0;
        typePlant = savedGame.typePlant || 0;

        // Mettre à jour l'interface utilisateur
        lvlText.innerText = lvl;
        xpText.innerText = xp;
        healthText.innerText = health;
        maxHealthText.innerText = maxHealth;
        strenghtText.innerText = strenght;
        speedText.innerText = speed;
        goldText.innerText = gold;

        updateBestiarySection();
        updateEquipOptions();
        updateTrophiesSection();
        displayInventory();

        alert("Jeu chargé !");
    } else {
        alert("Aucune sauvegarde trouvée !");
    }
}

// Liaison des boutons de sauvegarde/chargement
buttonSave.onclick = saveGame;
buttonLoad.onclick = loadGame;
