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

function showTrophie(){
    // Sélectionne le dialog box et le message de niveau
    const dialogBox = document.getElementById("trophie");
    const msg = document.getElementById("trophieMsg");
    let message = "";

    if (!dialogBox || !msg) {
        console.error("Les éléments dDialogBox ou msg sont introuvables !");
        return;
    }

    if (killMonster === 50) {
        playerTrophies.push(titres[3]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[3].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[3].titre);
    }

    if (killMonster === 100) {
        playerTrophies.push(titres[4]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[4].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[4].titre)
    }

    if (killMonster === 250) {
        playerTrophies.push(titres[5]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[5].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[5].titre)
    }

    if (killMonster === 500) {
        playerTrophies.push(titres[6]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[6].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[6].titre)
    }

    if (bestiaire.filter(monstre => monstre.zone === "plaines émeraudes").length >= 9) {
        // Action à exécuter si la condition est remplie
        console.log("Vous avez rencontré tous les monstres des Plaines Émeraudes !");
        playerTrophies.push(titres[0]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[0].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[0].titre)
    }

    if (bestiaire.filter(monstre => monstre.zone === "forêt lugubre").length >= 9) {
        // Action à exécuter si la condition est remplie
        console.log("Vous avez rencontré tous les monstres des Plaines Émeraudes !");
        playerTrophies.push(titres[1]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[1].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[1].titre)
    }

    if (bestiaire.filter(monstre => monstre.zone === "grottes obscures").length >= 9) {
        // Action à exécuter si la condition est remplie
        console.log("Vous avez rencontré tous les monstres des Plaines Émeraudes !");
        playerTrophies.push(titres[2]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[2].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[2].titre)
    }

    if (typePlant === 5) {
        playerTrophies.push(titres[7]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[7].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[7].titre)
    }

    if (typeSlime === 20) {
        playerTrophies.push(titres[8]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[8].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[8].titre)
    }

    if (typeBeast === 30) {
        playerTrophies.push(titres[9]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[9].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[9].titre)
    }

    if (typeWinged === 5) {
        playerTrophies.push(titres[10]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[10].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[10].titre)
    }

    if (typeHumanoid === 5) {
        playerTrophies.push(titres[11]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[11].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[11].titre)
    }

    if (typeSpirit === 9) {
        playerTrophies.push(titres[12]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[12].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[12].titre)
    }

    if (typeDemon === 10) {
        playerTrophies.push(titres[13]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[13].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[13].titre)
    }

    if (typeReptil === 10) {
        playerTrophies.push(titres[14]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[14].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[14].titre)
    }

    if (typeInsect === 5) {
        playerTrophies.push(titres[15]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[15].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[15].titre)
    }

    if (typeDragon === 5) {
        playerTrophies.push(titres[16]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[16].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[16].titre)
    }

    if (seeker === 100) {
        playerTrophies.push(titres[17]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[17].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[17].titre)
    }

    if (seekFail === 50) {
        playerTrophies.push(titres[18]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[18].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[18].titre)
    }

    if (inn === 25) {
        playerTrophies.push(titres[19]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[19].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[19].titre)
    }

    if (explorateur === 100) {
        playerTrophies.push(titres[20]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[20].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[20].titre)
    }

    if (rodeur === 100) {
        playerTrophies.push(titres[21]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[21].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[21].titre)
    }

    if (goShop === 25) {
        playerTrophies.push(titres[22]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[22].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[22].titre)
    }

    if (trophieRagam === 1) {
        playerTrophies.push(titres[23]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[23].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[23].titre)
    }

    if (trophieKlaara === 1) {
        playerTrophies.push(titres[24]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[24].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[24].titre)
    }

    if (trophieYann === 1) {
        playerTrophies.push(titres[25]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[25].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[25].titre)
    }

    if (raidLeona === 1) {
        playerTrophies.push(titres[26]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[26].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[26].titre)
    }

    if (finishGame2 === 1) {
        playerTrophies.push(titres[27]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[27].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[27].titre)
    }

    if (finishGame1 === 1) {
        playerTrophies.push(titres[28]);
        message = "Vous avez déverrouillé l'Achèvement : " + titres[28].titre + " !!";
        // Mettre à jour le contenu du message
        msg.innerText = message;
        // Afficher la boîte de dialogue
        dialogBox.classList.remove("hidden");
        updateTrophiesSection();
        onAchievementUnlocked(titres[28].titre)
    }
}



function closeTrophie() {
    const dialogBox = document.getElementById("trophie");
    dialogBox.classList.add("hidden"); // Ajouter la classe "hidden" pour masquer la boîte de dialogue
}