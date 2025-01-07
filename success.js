const titres = [
    { index: 1, titre: "Maître des Plaines", condition: "Vous avez rencontré au moins une fois tous monstres vivant dans les Plaines Émeraudes." },
    { index: 2, titre: "Rôdeur des Bois", condition: "Vous avez rencontré au moins une fois tous monstres vivant dans la Forêt Lugubre." },
    { index: 3, titre: "Souverain des Ombres", condition: "Vous avez rencontré au moins une fois tous monstres vivant dans les Grottes Obscures." },
    { index: 4, titre: "Guerrier impitoyable", condition: "Vous avez vaincu au moins 50 adversaires." },
    { index: 5, titre: "Annihilateur de monstres", condition: "Vous avez vaincu au moins 100 adversaires." },
    { index: 6, titre: "Gladiateur d'arène", condition: "Vous avez vaincu au moins 250 adversaires." },
    { index: 7, titre: "Champion spartiate", condition: "Vous avez vaincu au moins 500 adversaires." },
    { index: 8, titre: "Végétarien", condition: "Vous avez vaincu au moins 5 monstres de type Plante." },
    { index: 9, titre: "Écraseur de Limaces", condition: "Vous avez vaincu au moins 20 monstres de type Slime." },
    { index: 10, titre: "Chasseur des Terres Sauvages", condition: "Vous avez vaincu au moins 30 monstres de type Bête." },
    { index: 11, titre: "Assaillant aérien", condition: "Vous avez vaincu au moins 5 monstres de type Bête ailée." },
    { index: 12, titre: "Berserker", condition: "Vous avez vaincu au moins 5 monstres de type Humanoïde." },
    { index: 13, titre: "Exorciste", condition: "Vous avez vaincu au moins 9 monstres de type Spirit." },
    { index: 14, titre: "Pourfendeur de Démons", condition: "Vous avez vaincu au moins 10 monstres de type Démon." },
    { index: 15, titre: "Charmeur de Serpents", condition: "Vous avez vaincu au moins 10 monstres de type Reptile." },
    { index: 16, titre: "Insecterminator", condition: "Vous avez vaincu au moins 5 monstres de type Insecte." },
    { index: 17, titre: "Tueur de Dragons", condition: "Vous avez vaincu au moins 5 monstres de type Dragon." },
    { index: 18, titre: "Chercheur de Trésors", condition: "Vous avez cherché des butins au moins 100 fois." },
    { index: 19, titre: "Malchanceux", condition: "Vous avez cherché des butins sans rien trouver au moins 50 fois." },
    { index: 20, titre: "Voyageur Fatigué", condition: "Vous vous êtes reposé à l'auberge au moins 25 fois." },
    { index: 21, titre: "Pionnier", condition: "Vous avez exploré les régions extérieures de Realm au moins 100 fois." },
    { index: 22, titre: "Rôdeur des Villes", condition: "Vous avez vagabondé dans les rues de Realm au moins 100 fois." },
    { index: 23, titre: "Client Fidèle", condition: "Vous vous êtes rendu dans le magasin d'Hakken au moins 25 fois." },
    { index: 24, titre: "Lame Rouge", condition: "Vous avez réussi l'épreuve de Ragam la Lame rouge et obtenu l'épée magique Kalibraa." },
    { index: 25, titre: "Aventurier Érudit", condition: "Vous avez réussi l'épreuve de Klaara et obtenu le parchemin magique Black Divider." },
    { index: 26, titre: "Héritier de l'Orikalk", condition: "Vous avez vaincu Arlen le Chevalier Fantôme et obtenu la splendide armure Orikalk." },
    { index: 27, titre: "Justicier", condition: "Vous avez accordé votre confiance à Leona et découvert les manigances du Roi." },
    { index: 28, titre: "Slayer", condition: "Vous avez vaincu Raganna la Dragonne." },
    { index: 29, titre: "Slayer", condition: "Vous avez vaincu Albion le Chevalier Dragon." }
  ];
  

  // Fonction pour ajouter un nouveau titre à la liste déroulante
function addTitle(newTitle) {
    const titleSelect = document.getElementById('titleSelect');
    
    // Vérifiez si le titre existe déjà dans la liste
    const options = Array.from(titleSelect.options);
    const titleExists = options.some(option => option.value === newTitle);

    // Si le titre n'existe pas, ajoutez-le
    if (!titleExists) {
        const newOption = document.createElement('option');
        newOption.value = newTitle;
        newOption.textContent = capitalizeFirstLetter(newTitle);
        titleSelect.appendChild(newOption);
    }
}

// Fonction pour mettre en majuscule la première lettre du titre
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Exemple d'appel lorsque l'achèvement se produit
function onAchievementUnlocked(achievementTitle) {
    // Ajoutez le nouveau titre à la liste déroulante
    addTitle(achievementTitle);

    // Vous pouvez aussi définir ce titre comme titre sélectionné si nécessaire
    document.getElementById('titleSelect').value = achievementTitle;
}


  function updateTrophiesSection() {
    const trophiesList = document.getElementById("trophies-list"); // Récupère le conteneur des succès
    trophiesList.innerHTML = ""; // Vide le conteneur des succès

    if (playerTrophies.length > 0) {
        // Parcours des succès du joueur
        playerTrophies.forEach(trophy => {
            const trophyItem = document.createElement("div");
            trophyItem.classList.add("trophy-item"); // Ajoute une classe pour le style (optionnel)

            // Ajoute les informations du succès
            trophyItem.innerHTML = `
                <strong>${trophy.titre}</strong><br>
                <em>${trophy.condition}</em>
            `;

            // Ajoute l'élément au conteneur
            trophiesList.appendChild(trophyItem);
        });
    } else {
        // Si aucun succès n'a été débloqué
        trophiesList.innerHTML = "<p>Aucun succès débloqué pour le moment.</p>";
    }
}

function showTrophie() {
    const dialogBox = document.getElementById("trophie");
    const msg = document.getElementById("trophieMsg");
    let message = "";

    if (!dialogBox || !msg) {
        console.error("Les éléments dialogBox ou msg sont introuvables !");
        return;
    }

    const unlockTrophie = (trophie, conditionMet) => {
        if (conditionMet && !playerTrophies.some(t => t.titre === trophie.titre)) {
            playerTrophies.push(trophie);
            message = "Vous avez déverrouillé l'Achèvement : " + trophie.titre + " !!";
            msg.innerText = message;
            dialogBox.classList.remove("hidden");
            updateTrophiesSection();
            onAchievementUnlocked(trophie.titre);
        }
    };

    unlockTrophie(titres[3], killMonster === 50);
    unlockTrophie(titres[4], killMonster === 100);
    unlockTrophie(titres[5], killMonster === 250);
    unlockTrophie(titres[6], killMonster === 500);
    unlockTrophie(titres[0], bestiaire.filter(monstre => monstre.zone === "plaines émeraudes").length >= 9);
    unlockTrophie(titres[1], bestiaire.filter(monstre => monstre.zone === "forêt lugubre").length >= 9);
    unlockTrophie(titres[2], bestiaire.filter(monstre => monstre.zone === "grottes obscures").length >= 9);
    unlockTrophie(titres[7], typePlant === 5);
    unlockTrophie(titres[8], typeSlime === 20);
    unlockTrophie(titres[9], typeBeast === 30);
    unlockTrophie(titres[10], typeWinged === 5);
    unlockTrophie(titres[11], typeHumanoid === 5);
    unlockTrophie(titres[12], typeSpirit === 9);
    unlockTrophie(titres[13], typeDemon === 10);
    unlockTrophie(titres[14], typeReptil === 10);
    unlockTrophie(titres[15], typeInsect === 5);
    unlockTrophie(titres[16], typeDragon === 5);
    unlockTrophie(titres[17], seeker === 100);
    unlockTrophie(titres[18], seekFail === 50);
    unlockTrophie(titres[19], inn === 25);
    unlockTrophie(titres[20], explorateur === 100);
    unlockTrophie(titres[21], rodeur === 100);
    unlockTrophie(titres[22], goShop === 25);
    unlockTrophie(titres[23], trophieRagam === 1);
    unlockTrophie(titres[24], trophieKlaara === 1);
    unlockTrophie(titres[25], trophieYann === 1);
    unlockTrophie(titres[26], raidLeona === 1);
    unlockTrophie(titres[27], finishGame2 === 1);
    unlockTrophie(titres[28], finishGame1 === 1);

}




function closeTrophie() {
    const dialogBox = document.getElementById("trophie");
    dialogBox.classList.add("hidden"); // Ajouter la classe "hidden" pour masquer la boîte de dialogue
}
