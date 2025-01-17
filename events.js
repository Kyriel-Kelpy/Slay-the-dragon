function randomMonster(a, b){
    monsterIndex = Math.floor(Math.random() * (b - a + 1)) + a;
    const monster = monsters.find(m => m.index === monsterIndex);
    if (monster) {
        monsterName.innerText = monsters[monsterIndex].name;
        monsterName2 = monsters[monsterIndex].name;
        monsterType = monsters[monsterIndex].type;
        console.log(monsterName2);
        monsterHealth = monsters[monsterIndex].health;
        monsterHealthText.innerText = monsters[monsterIndex].health;
        monsterStats.style.display = 'flex';
        button3.style.display = 'block';
        actionsDiv.style.display = 'flex';
        menuDiv.style.display = 'none';

        if (!bestiaire.includes(monster)) {
            bestiaire.push(monster);
        }

    } else {
        console.log(`Aucun monstre trouvé avec l'index ${monsterIndex}.`);
    }

    updateBestiarySection();
}

function updateBestiarySection() {
    const monsterList = document.getElementById("monster-list"); // Récupère le conteneur des monstres
    monsterList.innerHTML = ""; // Vide uniquement ce conteneur

    bestiaire.forEach(monster => {
        const monsterItem = document.createElement("div");
        monsterItem.classList.add("monster-item"); // Ajoute une classe pour le style (optionnel)

        // Ajoute les informations détaillées du monstre
        monsterItem.innerHTML = `
            <strong>Nom :</strong> ${monster.name}<br>
            <strong>Niveau :</strong> ${monster.level}<br>
            <strong>Santé :</strong> ${monster.health}<br>
            <strong>Puissance :</strong> ${monster.power}<br>
            <strong>Vitesse :</strong> ${monster.speed}<br>
            <strong>Description :</strong> ${monster.description}<br>
            <strong>Type :</strong> ${monster.type}<br>
            <strong>Zone :</strong> ${monster.zone}
        `;

        // Ajoute l'élément au conteneur
        monsterList.appendChild(monsterItem);
    });

    showTrophie();
}


function fightMonsterPlains(){
    randomMonster(0, 8);
}
function fightMonsterForest(){
    randomMonster(9, 17);
}
function fightMonsterCave(){
    randomMonster(18, 26);
}

function fightArlen(){
    monsterIndex = 29;
    const monster = monsters[monsterIndex];
    monsterName.innerText = monsters[monsterIndex].name;
    monsterName2 = monsters[monsterIndex].name;
    console.log(monsterName2);
    monsterHealth = monsters[monsterIndex].health;
    monsterHealthText.innerText = monsters[monsterIndex].health;
    monsterStats.style.display = 'flex';
    button3.style.display = 'none';
    actionsDiv.style.display = 'flex';
    menuDiv.style.display = 'none';

    if (!bestiaire.includes(monster)) {
        bestiaire.push(monster);
    }

    updateBestiarySection();
}

function fightArlak(){
    monsterIndex = 30;
    const monster = monsters[monsterIndex];
    monsterName.innerText = monsters[monsterIndex].name;
    monsterName2 = monsters[monsterIndex].name;
    console.log(monsterName2);
    monsterHealth = monsters[monsterIndex].health;
    monsterHealthText.innerText = monsters[monsterIndex].health;
    monsterStats.style.display = 'flex';
    button3.style.display = 'none';
    actionsDiv.style.display = 'flex';
    menuDiv.style.display = 'none';

    if (!bestiaire.includes(monster)) {
        bestiaire.push(monster);
    }

    updateBestiarySection();
}

function fightAnssio(){
    monsterIndex = 31;
    const monster = monsters[monsterIndex];
    monsterName.innerText = monsters[monsterIndex].name;
    monsterName2 = monsters[monsterIndex].name;
    console.log(monsterName2);
    monsterHealth = monsters[monsterIndex].health;
    monsterHealthText.innerText = monsters[monsterIndex].health;
    monsterStats.style.display = 'flex';
    button3.style.display = 'none';
    actionsDiv.style.display = 'flex';
    menuDiv.style.display = 'none';

    if (!bestiaire.includes(monster)) {
        bestiaire.push(monster);
    }

    updateBestiarySection();
}

function fightLeona(){
    monsterIndex = 32;
    const monster = monsters[monsterIndex];
    monsterName.innerText = monsters[monsterIndex].name;
    monsterName2 = monsters[monsterIndex].name;
    console.log(monsterName2);
    monsterHealth = monsters[monsterIndex].health;
    monsterHealthText.innerText = monsters[monsterIndex].health;
    monsterStats.style.display = 'flex';
    button3.style.display = 'none';
    actionsDiv.style.display = 'flex';
    menuDiv.style.display = 'none';

    if (!bestiaire.includes(monster)) {
        bestiaire.push(monster);
    }

    updateBestiarySection();
}


function fightDragon(){
    monsterIndex = 27;
    const monster = monsters[monsterIndex];
    monsterName.innerText = monsters[monsterIndex].name;
    monsterName2 = monsters[monsterIndex].name;
    console.log(monsterName2);
    monsterHealth = monsters[monsterIndex].health;
    monsterHealthText.innerText = monsters[monsterIndex].health;
    monsterStats.style.display = 'flex';
    button3.style.display = 'none';
    actionsDiv.style.display = 'flex';
    menuDiv.style.display = 'none';

    if (!bestiaire.includes(monster)) {
        bestiaire.push(monster);
    }

    updateBestiarySection();
}

function fightAlbion(){
    monsterIndex = 33;
    const monster = monsters[monsterIndex];
    monsterName.innerText = monsters[monsterIndex].name;
    monsterName2 = monsters[monsterIndex].name;
    console.log(monsterName2);
    monsterHealth = monsters[monsterIndex].health;
    monsterHealthText.innerText = monsters[monsterIndex].health;
    monsterStats.style.display = 'flex';
    button3.style.display = 'none';
    actionsDiv.style.display = 'flex';
    menuDiv.style.display = 'none';

    if (!bestiaire.includes(monster)) {
        bestiaire.push(monster);
    }

    updateBestiarySection();
}

function fightAlbion2(){
    monsterIndex = 34;
    const monster = monsters[monsterIndex];
    monsterName.innerText = monsters[monsterIndex].name;
    monsterName2 = monsters[monsterIndex].name;
    console.log(monsterName2);
    monsterHealth = monsters[monsterIndex].health;
    monsterHealthText.innerText = monsters[monsterIndex].health;
    monsterStats.style.display = 'flex';
    button3.style.display = 'none';
    actionsDiv.style.display = 'flex';
    menuDiv.style.display = 'none';

    if (!bestiaire.includes(monster)) {
        bestiaire.push(monster);
    }

    updateBestiarySection();
}



function handleChoice(choice) {
    // Exécuter l'action si présente
    if (choice.action) {
        choice.action();
    }
}

function replay(){
    location.reload();
}

function removeFromInventory(property, value) {
    if (!Array.isArray(inventory)) {
        console.error("L'inventaire n'est pas un tableau.");
        return;
    }

    console.log(`Recherche d'un objet avec ${property} = ${value}`);

    const index = inventory.findIndex(item => item[property] === value);

    if (index === -1) {
        console.warn(`Aucun objet trouvé avec ${property} = ${value}.`);
    } else {
        inventory.splice(index, 1);
        console.log(`Objet avec ${property} = ${value} supprimé.`);
        displayInventory();
    }
}

// Fonction pour afficher l'inventaire
function displayInventory() {
    inventoryList.innerHTML = ""; // Nettoyer la liste existante

    inventory.forEach(item => {
        // Créer un élément de liste pour chaque objet
        const listItem = document.createElement('li');
        
        // Ajouter le nom et la description de l'objet
        const itemName = document.createElement('strong');
        itemName.innerText = item.name;
        listItem.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.innerText = item.description;
        listItem.appendChild(itemDescription);

        
        // Ajouter un bouton pour utiliser l'objet
        if (item.name === "Mini potion de soin" || item.index === 1 || item.index === 3 || item.index === 4 || item.index === 5){
            const useButton = document.createElement('button');
            useButton.innerText = "Utiliser";
            useButton.onclick = item.action; // L'action est appelée lorsqu'on clique sur le bouton
            listItem.appendChild(useButton);    
        }
       
        // Ajouter l'élément à la liste
        inventoryList.appendChild(listItem);
    });
}

// Appeler la fonction pour afficher l'inventaire
//displayInventory();


function chercheButin(){
    menuDiv.style.display = 'none';
    showTrophie();
    seeker++;
    health -= 10;
    healthText.innerText = health;
    if (health <= 0){
        displaySection("lose");
    } else {
    if (Math.floor(Math.random() * 3) === 1) {
        let randomNumber = Math.floor(Math.random() * 8);
        let butin = butins[randomNumber];
        let butinName = butins[randomNumber].name;
        seekSuccess++;
        inventory.push(butin);
        displayInventory();
        textDiv.innerText += "\n Vos recherches sont fructueuses. Vous avez obtenu : " + butinName + "\n"
    } else {
        showTrophie();
        seekFail++;
        textDiv.innerText += "\n Vous avez perdu votre temps. Vous n'avez rien obtenu... \n";
    }
    }
}

function rest(){
    menuDiv.style.display = 'none';
    inn++;
    if(health === maxHealth){
        textDiv.innerText += "\n Votre santé est au maximum. Inutile de vous reposer ! \n";
    } else if(gold < 25){
        textDiv.innerText += "\n Vous n'avez pas de quoi payer votre nuit à l'auberge. \n";
    } else{
        gold -= 25;
        goldText.innerText = gold;
        health = maxHealth;
        healthText.innerText = health;
        textDiv.innerText += "Après un diner copieux, vous passez une nuit de repos bien mérité.\n";
        textDiv.innerText += "Au réveil, vous êtes en pleine forme.\n";
        textDiv.innertext = "Maintenant, place à l'action !\n";
    }
    showTrophie();
}

function dealKalibraa(){
    baseHealth -=15;
    maxHealth -= 15;
    maxHealthText.innerText = maxHealth;
}

function raidFinal(){
    raidLeona = 1;
    showTrophie();
}

function goFightDragon(){
    if(leona === 1){
        displaySection("promesseLeona");
    }else if(raidLeona === 1){
        displaySection("raidLeona");
    }
}

function wanderer() {
    menuDiv.style.display = 'none';
    rodeur++;
    health -= 10;
    healthText.innerText = health;
    if (health <= 0){
        displaySection("lose");
    } else {
        // Générer un nombre entier aléatoire entre 0 et 11 (bornes incluses)
    const randomNum = Math.floor(Math.random() * 12);

    // Exécuter un code spécifique en fonction du nombre généré
    switch (randomNum) {
        case 0:
            textDiv.innerHTML += "Vous vous ennuyez ferme. Malgré l'animation il ne se passe rien d'intéressant.";
            console.log("Cas 0 : Action pour 0");
            break;
        case 1:
            textDiv.innerHTML += "Durant votre balade, vous apercevez une petite bourse abandonnée sur le sol. En l'ouvrant, vous découvrez avec surprise qu'elle contient 25 pièces d'or étincelantes.";
            gold += 25;
            goldText.innerText = gold;
            console.log("Cas 1 : Action pour 1");
            break;
        case 2:
            textDiv.innerHTML += "Alors que vous vous détendez un instant, une silhouette furtive vous dérobe 20 pièces d'or avant de disparaître dans la foule.";
            gold -= 20;
            if (gold < 0){gold = 0;}
            goldText.innerText = gold;
            console.log("Cas 2 : Action pour 2");
            break;
        case 3:
            textDiv.innerHTML += "En regardant autour de vous, votre regard tombe sur un objet qui traîne au sol, comme oublié. Par chance, il semble en parfait état et pourrait bien vous être utile.<br><br>";
            let randomNumber = Math.floor(Math.random() * 6);
            let butin = butins[randomNumber];
            let butinName = butins[randomNumber].name;
            inventory.push(butin);
            displayInventory();
            textDiv.innerText += "Vous avez obtenu : " + butinName + "\n"
            console.log("Cas 3 : Action pour 3");
            break;
        case 4:
            textDiv.innerHTML += "Vous vous rendez dans une bibliothèque du centre-ville. Pendant des heures, vous plongez dans des bestiaires détaillés, des traités de combat et des récits épiques, enrichissant vos connaissances. Cette immersion studieuse vous permet de gagner 20 points d'expérience.";
            xp += 20;
            xpText.innerText = xp;
            updateLevel(xp);
            console.log("Cas 4 : Action pour 4");
            break;
        case 5:
            textDiv.innerHTML += "Vous vous ennuyez ferme. Malgré l'animation il ne se passe rien d'intéressant.";
            console.log("Cas 5 : Action pour 5");
            break;
        case 6:
            textDiv.innerHTML += "Dans une taverne animée, vous croisez un vieil ivrogne qui se fait appeler Clodo, le Vétéran. Entre deux gorgées de bière, il clame haut et fort être un aventurier à la retraite et se met à vous bombarder de conseils.<br><br><strong>Écoute bien, gamin ! Toujours garder tes parchemins magiques pour les combats difficiles, tu m’entends ? Et lis régulièrement le bestiaire ! Ça t’aidera à évaluer la force des monstres que tu croiseras.</strong><br><br>Malgré son haleine chargée, ses paroles résonnent d’une certaine sagesse.";
            console.log("Cas 6 : Action pour 6");
            break;
        case 7:
            textDiv.innerHTML += "Durant votre balade, vous apercevez une petite bourse abandonnée sur le sol. En l'ouvrant, vous découvrez avec surprise qu'elle contient 25 pièces d'or étincelantes.";
            gold += 25;
            goldText.innerText = gold;
            console.log("Cas 7 : Action pour 7");
            break;
        case 8:
            textDiv.innerHTML += "Vous vous ennuyez ferme. Malgré l'animation il ne se passe rien d'intéressant.";
            console.log("Cas 8 : Action pour 8");
            break;
        case 9:
            textDiv.innerHTML += "Dans une taverne animée, vous croisez un vieil ivrogne qui se fait appeler Clodo, le Vétéran. Entre deux gorgées de bière, il clame haut et fort être un aventurier à la retraite et se met à vous bombarder de conseils.<br><br><strong>Écoute bien, gamin ! Garde à l'esprit que les armes peuvent se briser après une attaque, tu m’entends ? Et souviens-toi, y a pas que le combat dans la vie, pense aussi à faire un peu d'exploration.</strong><br><br>Malgré son haleine chargée, ses paroles résonnent d’une certaine sagesse.";
            console.log("Cas 9 : Action pour 9");
            break;
        case 10:
            textDiv.innerHTML += "Vous vous rendez dans une bibliothèque du centre-ville. En feuilletant les pages jaunies d’un vieux livre, vous tombez sur une section consacrée aux dragons anciens. À votre surprise, vous lisez que ces créatures majestueuses sont en réalité pacifiques et n'attaquent les humains que si elles sont provoquées ou menacées. Quid du Dragon qui attaque par moment Realm ?";
            console.log("Cas 10 : Action pour 10");
            break;
        case 11:
            console.log("Cas 11 : Action pour 11");
            textDiv.innerHTML += "Vous vous ennuyez ferme. Malgré l'animation il ne se passe rien d'intéressant.";
            break;
        default:
            console.log("Erreur : Nombre hors des bornes !");
            break;
    }
    
    }
    showTrophie();

}

function trialRagam(){
    let nombreAchevements = playerTrophies.length;
    if (nombreAchevements <= 10){
        displaySection("ragam0");
    }
}


const story = {
    start: {
        text: `
            Vous êtes un(e) aventurier(ère) en quête de hauts faits et de gloire.<br><br>
            Votre pérégrination vous a mené jusqu'à <strong>Realm</strong>, une grande Cité entourée de chaines de montagnes qui lui servent de rempart naturel.<br><br>
            À peine arrivé en ville, vous apercevez une ombre gigantesque qui plane au-dessus des habitants terrifiés : un <strong>Dragon Ancien</strong>.<br><br>
            Vous observez la créature s'envoler vers les montagnes et dans votre for intérieur, vous vous demandez ce qui peut bien se tramer et surtout si un aventurier comme vous aurait jamais une chance de vaincre une telle créature.<br><br>
            Par la suite, vous prenez une chambre dans une auberge, <strong>Chez les rouquins</strong>. C'est un chaleureux établissement tenu par une petite famille dont tous les membres ont des cheveux flamboyants. Vous prenez du repos bien mérité.<br><br>
            Le lendemain, vous vous levez de bonne heure et prenez un bon repas. Qu'allez-vous faire ensuite ?<br><br> 
            Vous pouvez vous rendre à la <strong>Guilde des Aventuriers</strong> de la ville pour dénicher une mission.<br><br>
            Ou plutôt si vous n'avez pas envie de vous lancer dans une mission, vous pouvez faire un tour en ville.
        `,
        choices: [
            { text: "Aller à la Guilde", next: "guild" },
            { text: "Faire un tour en ville", next: "nomission", action: noGuild }
        ]
    },

    nomission: {
        text: `
            Vous n'avez pas envie de vous lancer tout de suite dans une mission. Vous préférez  prendre votre temps, explorer la région et vous endurcir.<br><br>
            Peut-être plus tard, après le niveau 25 par exemple, vous vous lancerez dans une quête...
        `,
        next: "city"
    },

    guild: {
        text: `
            Le hall de la Guilde est bondé d'aventuriers qui discutent en riant aux éclats, se proposent pour une mission au Bureau des Quêtes ou vérifient leurs équipements.<br><br>
            Vous vous dirigez vers le <strong>Bureau des Quêtes</strong> pour choisir une mission pas trop dangereuse. Mais à votre grande surprise, <strong>Elsa la grincheuse</strong>, la Responsable du bureau, une brunette à l'air sévère portant de grosses lunettes rondes, vous annonce que toutes les missions ont été prises.
            Realm est en effet une Cité comptant beaucoup d'aventuriers en raison de la grande diversité de monstres et de créatures dangereuses qui peuplent la région.<br><br>

            Frustré, vous vous apprêtez à partir quand la Responsable du bureau des quêtes vous rappelle.<br>
            <strong>Elsa</strong> : Il y a peut être une mission disponible... Mais vu son niveau de danger, tout le monde refuse de l'accepter.<br><br>

            Elle a piqué votre curiosité, vous lui demandez alors de vous en dire plus.<br><br>
            <strong>Elsa</strong> : L'objectif est simple, vous rendre dans les montagnes et occire le dragon ancien qui sème le carnage dans la ville.<br>
            C'est une mission de rang S et de priorité 1. Aussi, la récompense est très élevée : <strong>500000 pièces d'or</strong>, et aussi un <strong>titre de Chevalier Royal</strong> qui sera décerné par le roi de Realm, sa Majesté <strong>Hermès X</strong> en personne.<br>
            Le dragon a déjà attaqué la Cité par 4 fois et il y a eu beaucoup de morts... Il est donc crucial de s'en débarrasser. Mais attention, c'est un Dragon ancien, il est donc très puissant !!<br><br>

            <strong>500000 pièces d'or</strong> et un <strong>titre de noblesse</strong> !!!<br><br> De quoi passer de longues années de sa vie à se la couler douce...<br>
            Alors que vous pesez le pour et le contre, <strong>Elsa</strong> attend votre réponse en arquant un sourcil.<br><br>
           <strong>Elsa</strong> : Alors ? Vous relevez le défi ?
        `,
        choices: [
            { text: "Accepter la mission", next: "acceptMission" },
            { text: "Refuser la mission", next: "refuseMission", action: noGuild }
        ]
    },

    acceptMission: {
        text: `
            Jamais aucune des missions que vous avez accompli jusqu'à présent n'a mis en jeu une telle récompense.
            Ce genre d'opportunité ne se présente qu'une fois dans une vie.
            Vous regardez Elsa droit dans les yeux et lui faites savoir que vous acceptez de combattre le dragon.<br><br>
            <strong>Elsa</strong> : Enfin un aventurier courageux !<br><br>

            Elle sort aussitôt un registre et vous demande d'y inscrire votre nom et signature.<br>

            <strong>Elsa</strong> : Comme je l'ai dit plus tôt, le repaire de la créature se trouve dans les montagnes. Vous pourrez vous y rendre quand vous voudrez...<br><br>

            Vous acquiescez et vous vous préparez à sortir de la Guilde quand elle vous rappelle.<br><br>
            <strong>Elsa</strong> : Une chose est d'avoir le courage de relever le défi, une autre est d'avoir la force nécessaire. Avec votre niveau actuel vous ne ferez même pas le poids contre un Magrouilleur des plaines Émeraudes.<br><br>

            Les paroles d'Elsa sont vraies. Foncer vers le dragon maintenant vous conduira à une mort certaine et stupide.<br><br>

            <strong>Elsa</strong> : Il ne tient qu'à vous même de vous endurcir et gagner des niveaux... cependant je peux vous donner un coup de pouce.<br><br>
            Allez-vous accepter son aide ou préférez-vous vous débrouiller seul ?
        `,
        choices: [
            { text: "Accepter son aide", next: "acceptMission2" },
            { text: "Refuser", next: "refuseMission2", action: noGuild }
        ]
    },

    acceptMission2: {
        text: `
        Elsa vous raconte que certains aventuriers de la Guilde, même s'ils ont refusé de combattre le Dragon Ancien peuvent se révéler de précieux alliés si vous arrivez à les impressionner.
        Elle vous en présente quatre.<br><br>
        <strong>Elsa</strong> : Tout d'abord, il y a <strong>Klaara la Collectionneuse</strong>.<br> 
        (Elsa vous indique une jeune femme rousse vêtu d'une élégante robe de mage de couleur verte et noire.
        Un chapeau pontu noir est posé sur ses cheveux courts.)<br>
        C'est une mage très douée, qui passe son temps à collectionner toutes sortes d'artefacts, bibelots anciens ou parchemis magiques. Elle pourrait vous apprendre un sort très utile, mais attention, elle ne traîne qu'avec les mages, apothicaires ou aventuriers qui sont soit nobles soit cultivés.<br><br>

        Elsa vous montre ensuite un homme aux cheveux grisonnants attablé avec deux autres plus jeunes.<br>
        <strong>Elsa</strong> : Il s'agit du Maître épéiste <strong>Ragam la Lame Rouge</strong> et de ses deux disciples, <strong>Alrak</strong> et <strong>Anssio</strong>. Ragam était un très puissant Chevalier royal, maniant une épée magique qui le rendait littéralement invincible. 
        Depuis qu'il a pris sa retraite, il enseigne l'escrime aux jeunes aventuriers, et surtout recherche le digne successeur qui pourra hériter de son épée. 
        Aucun de ses disciples ne s'est montré digne jusqu'à présent.<br><br>

        Sans vous laisser le temps d'assimiler ce flot d'informations, la Grincheuse continue.<br>
        <strong>Elsa</strong> : Là bas, c'est <strong>Leona Mereo la Gloutonne</strong>, une redoutable Dresseuse.<br>
        (Elle vous montre une femme blonde au regard sévère légèrement vêtu, occupée à engloutir des gigots de viande en compagnie de trois Jackalopes.)<br>
        Elle est peu commode, mais elle en connaît un rayon sur les monstres. On raconte même qu'elle a une fois apprivoisé un Dragon des cavernes.<br><br>

        Enfin, elle vous parle du dernier potentiel allié.<br>
        <strong>Elsa</strong> : Il y a aussi <strong>Yann l'Ambidextre</strong>. C'est un aventurier spécialisé dans l'exploration et la chasse au trésor. 
        En plus il manie les dagues avec maestria.<br>
        (Elle vous montre un jeune homme brun occupé à étudier une carte avec d'autres aventuriers.),<br>
        Il pourrait vous aider à dénicher un trésor ancien ou une arme légendaire...<br><br>

        Elsa vous suggère de réfléchir calmement et de choisir l'un d'eux pour vous assister dans votre quête. Elle replonge ensuite dans son travail.<br><br>
        Vous examinez avec attention chacun des personnages. Lequel vous intéresse ?<br>
        `,
        choices: [
            { text: "Klaara", next: "klaara", action: chooseKlaara },
            { text: "Ragam", next: "ragam", action: chooseRagam },
            { text: "Leona", next: "leona", action: chooseLeona },
            { text: "Yann", next: "yann", action: chooseYann }
        ]
    },

    klaara: {
        text: `
        Vous approchez Klaara la Collectionneuse. Vous lui racontez que vous avez accepté la mission d'éliminer le Dragon Ancien et lui demandez respectueusement son aide.<br><br>
        Elle vous observe longuement, ses yeux scrutant votre âme comme si elle pouvait lire en vous. Puis, d'un ton calme mais empreint de défi, elle prend la parole.<br><br>
        <strong>Klaara</strong> : Intéressant... Vous pensez pouvoir impressionner une mage comme moi ? Voyons si vous en êtes capable.<br>
        (Elle croise les bras, un sourire en coin, et fait un geste vague de la main. Un faible éclat lumineux entoure le parchemin qu'elle tient, révélant des inscriptions magiques qui dansent comme des flammes.)<br>
        <strong>Klaara</strong> : Si vous atteignez le niveau 25, je serai disposée à vous offrir un sortilège d'une grande puissance, capable de changer le cours de votre combat contre le Dragon Ancien. Mais avant cela, il faudra prouver votre intelligence et votre érudition en passant mon test.<br><br>
        (Elle tend une main élégante, et le parchemin flotte devant vous, irradiant une énergie étrange et envoûtante.)<br>
        <strong>Klaara</strong> : Je n'accorde pas ma confiance à n'importe qui. Étudiez bien et revenez me voir quand vous serez prêt.<br><br>
        Vous acceptez le défi, impressionné par l'aura de puissance de Klaara. Elle vous adresse un regard approbateur pendant que vous sortez de la guilde, déterminé à faire vos preuves.
        `,
        next: "city"
    },

    yann: {
        text: `
        Vous approchez Yann l'Ambidextre, qui termine d’examiner une carte avant de lever les yeux vers vous avec un sourire chaleureux mais calculateur.<br><br>

        <strong>Yann</strong> : Tiens, tiens, un aventurier ambitieux ! J’ai entendu parler de cette mission contre le Dragon Ancien. Vous devez avoir du cran pour tenter un tel exploit, ou peut-être êtes-vous simplement désespéré.<br>
        (Il range sa carte et se lève, son regard pétillant d’un intérêt feint.)<br>
        <strong>Yann</strong> : Heureusement pour vous, j’ai un flair légendaire pour dénicher les trésors les plus rares et les armes les plus puissantes. Imaginez... une lame légendaire ou un artefact oublié, quelque chose qui pourrait renverser le cours de votre quête.<br><br>

        (Il fait quelques pas autour de vous, comme pour jauger votre potentiel.)<br>
        <strong>Yann</strong> : Mais voilà, une expédition dans des ruines inexplorées, ce n’est pas pour les amateurs. Revenez me voir une fois que vous aurez atteint le niveau 25. Je vous guiderai alors vers un lieu qui pourrait bien contenir l’arme ou le trésor qui fera de vous un héros de légende.<br><br>

        (À ces mots, il s’incline légèrement, son sourire persistant, mais quelque chose dans son attitude semble trop... parfait.)<br>
        <strong>Yann</strong> : Faites-moi confiance, partenaire. Ensemble, nous pourrons accomplir de grandes choses.

        (Il vous tape amicalement sur l’épaule avant de se retourner vers son groupe d’aventuriers, reprenant son étude de la carte. Vous ne pouvez pas vous empêcher de ressentir une légère méfiance. Son enthousiasme semble sincère, mais un doute persiste...)
        `,
        next: "city"
    },

    ragam: {
        text: `
        Vous vous approchez de Ragam la Lame Rouge, attiré par son aura imposante et la réputation qui le précède. Vous lui exposez votre mission d'éliminer le Dragon Ancien et lui demandez son aide respectueusement. Il relève lentement les yeux vers vous, un sourire énigmatique sur les lèvres, avant de répondre d'une voix grave et assurée.<br><br>

        <strong>Ragam</strong> : Un jeune aventurier qui rêve de grandeur… Combattre le Dragon Ancien demande une force et une volonté inébranlables. Ce n'est pas une tâche à prendre à la légère.<br>
        (Il se lève lentement, sa stature imposante accentuée par l'épée massive qu'il porte dans son dos.)<br>
        <strong>Ragam</strong> : Je pourrais t'aider, mais encore faut-il que tu prouves que tu en es digne.<br><br>

        (Il désigne les deux disciples à ses côtés, qui échangent un regard complice.)<br>
        <strong>Ragam</strong> : Atteins d'abord le niveau 25. Ensuite, montre-moi que tu n'es pas un simple aventurier de passage. Obtiens au moins dix achèvements pour prouver ton dévouement et ta maîtrise. Si tu parviens à remplir ces conditions, je te ferai passer une épreuve finale. Une épreuve où tu devras montrer non seulement ta force, mais aussi ton honneur.<br><br>

        (Il fait un pas en avant, son regard transperçant le vôtre.)<br>
        <strong>Ragam</strong> : Si tu réussis, je te céderai Kalibraa, une épée forgée dans les flammes du ciel, une arme légendaire capable de transpercer même les écailles d'un Dragon Ancien.<br>
        (Il retourne s'asseoir, ses disciples reprenant leur conversation, tandis que Ragam semble vous ignorer à nouveau.)<br><br>

        Vous acceptez le défi, déterminé à prouver votre valeur. Tandis que vous vous éloignez, vous sentez le poids de la tâche à accomplir, mais également l'excitation de brandir un jour Kalibraa dans votre quête.


        `,
        next: "city"
    },

    leona: {
        text: `
        Vous approchez Leona Mereo la Gloutonne, curieux d'entendre son avis sur la mission du Dragon Ancien. Occupée à dévorer un gigot, elle vous lance un regard sévère avant de poser lentement sa viande et de croiser les bras.<br><br>

        <strong>Leona</strong> : Alors, vous faites partie de ceux qui croient encore aux beaux discours du roi ? Vous pensez vraiment qu'éliminer le Dragon Ancien est la solution ?<br>
        (Son ton est chargé de mépris, et elle ne vous laisse pas répondre avant de continuer.)<br>
        <strong>Leona</strong> : Ce dragon n’est pas un monstre. C’est une créature ancienne, pacifique, un gardien de l’équilibre. Les monstres et les démons évitent nos terres précisément grâce à sa présence. Mais maintenant, il s’en prend au royaume, et vous trouvez ça normal ? Moi, pas du tout.<br><br>

        (Elle se redresse, ses Jackalopes autour d’elle grognant légèrement, comme pour renforcer sa présence intimidante.)<br>
        <strong>Leona</strong> : J’enquête sur ce qui se trame réellement. Je sais que le roi n’est pas innocent dans cette histoire. Ses plans sont bien plus sombres qu’il ne veut le laisser croire. Et si vous voulez une chance de protéger ce royaume pour de vrai, vous devrez m’aider à mettre fin à ses manigances.<br><br>

        (Elle s’approche de vous, son regard froid comme la glace.)<br>
        <strong>Leona</strong> : Voici ce que je propose : atteignez le niveau 25 et montrez-moi que vous avez les épaules pour affronter cette vérité. Quand ce sera fait, je viendrai à vous et je vous révélerai tout ce que j’ai découvert. Mais écoutez-moi bien...<br>
        (Son ton devient encore plus menaçant.)<br>
        <strong>Leona</strong> : Si jamais vous osez poser la main sur ce dragon avant que la vérité n’éclate, je vous traquerai moi-même. Et je vous tuerai, aventurier. Est-ce clair ?<br><br>

        (Sans attendre votre réponse, elle retourne à son repas, son aura imposante vous laissant un goût amer. Vous sentez qu’un choix crucial vous attend...)
        `,
        next: "city"
    },

    promesseLeona: {
        text: `
        Vous avez promis à Leona Mereo de ne pas vous en prendre au Dragon tant qu'elle ne vous aura pas donné plus d'informations sur les manigances du Roi.<br><br>
        Vous retournez en ville.
        `,
        next: "city"
    },

    refuseMission: {
        text: `
            La récompense est alléchante.<br><br>
            Mais vous ne vous sentez pas encore de taille à affronter un Dragon ancien, et surtout vous tenez à votre vie !!<br><br>
            Vous signifiez à Elsa que vous n'êtes pas prêt pour une telle mission. Et vous prenez congé d'elle.<br><br>
            <strong>Elsa</strong> : Je vois. Bon vent alors.<br><br>

            Vous vous rendez en ville.
        `,
        next: "city"
    },

    refuseMission2: {
        text: `
            Elsa est gentille de vouloir vous aider dans votre quête, mais vous êtes du genre à faire cavalier seul.<br> 
            Vous la remerciez pour sa proposition et lui faites savoir que vous pouvez vous débrouillez seul.<br>
            Vous lui promettez aussi de devenir plus puissant avant de défier la créature.<br>
            Elle vous regarde un long moment et semble vous jauger avec ses quatre yeux puis prononce quelques mots.<br><br>
            <strong>Elsa</strong> : Je vois. Bonne chance alors ! Et bon vent te mène !<br><br>
            Vous sortez de la Guilde grouillante d'aventuriers et retournez en ville.
        `,
        choices: [
            { text: "Retourner en ville", next: "city" },
        ]
    },

    city: {
        text: `
            Vous vous rendez en centre-ville. Plusieurs choix s'offrent à vous à présent.<br><br>
            Vous pouvez :
            <ul>
            <li>vadrouilleur ça et là </li>
            <li>faire un tour en Boutique pour faire des achats.</li>
            <li>vous reposer à l'auberge et restorer votre santé (25 pièces d'or)</li>
            <li>explorer les régions alentours de Realm</li>
            <li>vous rendre dans les Montagnes pour affronter le Dragon Ancien qui terrorise les habitants</li>
            </ul><br>
            Que décidez vous ?
         `,
        choices: [
             { text: "Vagabonder", next: "wander", action: wanderer },
             { text: "Aller en boutique", next: "boutique", action: goToShop},
             { text: "Se reposer à l'auberge (25 pièces d'or)", next: "auberge", action: rest },
             { text: "Explorer les régions alentours", next: "explore", action: goExplore },
             { text: "Combattre le dragon", next: "repaireDragon", action: goFightDragon }
        ]
     },

     wander: {
        text: `
            Vous vous promenez un peu partout dans les rues de Realm, sans but précis.<br><br> 
            Ce qui vous fatigue un peu et vous perdez 10 points de santé.<br><br>
         `,
        choices: [
             { text: "Suivant", next: "city", action: function() {
                menuDiv.style.display = 'block';
            } },
        ]
     },

     explore: {
        text: `
            Vous vous trouvez en dehors des murs de Realm. D'après votre carte, les régions alentours de Realm peuvent être divisées en trois zones.<br><br>
            De la moins dangeureuse à la plus infestée de puissants monstres, on a : les <strong>Plaines Émeraudes</strong>, la <strong>Forêt Lugubre</strong> et les <strong>Grottes Obscures</strong><br><br>
            Choissez votre destination.
         `,
        choices: [
             { text: "Plaines Émeraudes", next: "plains" },
             { text: "Forêt Lugubre", next: "forest" },
             { text: "Grottes Obscures", next: "cave" },
             { text: "Retourner en ville", next: "city" },
        ]
     },

     plains: {
        text: `
            Les <strong>Plaines Émeraudes</strong> s’étendent à perte de vue, un océan d’herbes hautes ondulant sous la caresse du vent.<br><br>
            Les voyageurs qui s’aventurent ici disent ressentir une étrange plénitude, comme si la nature elle-même veillait sur eux… ou les observait.
            Malgré la sérénité apparente, les Plaines Émeraudes ne sont toutefois pas dépourvues de danger.<br><br>
            Des créatures sauvages rôdent dans les hautes herbes et peuvent surprendre les aventuriers imprudents.<br><br>
            On raconte également que des <strong>Ruines Anciennes</strong>, vestiges d’une civilisation disparue, sont enfouies quelque part, dissimulées par la végétation luxuriante.<br><br>
            Qu'allez-vous faire ?
         `,
        choices: [
             { text: "Combattre des monstres", next: "fightMonsterPlains", action: fightMonsterPlains },
             { text: "Chercher un butin", next: "seek", action: chercheButin},
             { text: "Retourner en ville", next: "city" },
        ]
     },

     fightMonsterPlains: {
        text: `
        Un monstre surgit ! En garde !<br><br>
         `,
     },

     forest: {
        text: `
            La <strong>Forêt Lugubre</strong> est un lieu où la lumière du jour peine à pénétrer.
            Les arbres, gigantesques et tordus, se dressent comme des sentinelles silencieuses.<br><br>

            Une brume épaisse rampe au sol, rendant chaque pas incertain et chaque recoin mystérieux.
            Le silence règne ici, brisé seulement par des craquements inquiétants ou le hululement lointain de quelque créature inconnue.<br><br>

            Des rumeurs circulent parmi les habitants de Realm : la forêt serait hantée par des esprits errants ou habitée par des créatures anciennes et maléfiques.<br><br>
            Malgré son atmosphère oppressante, la Forêt Lugubre regorge quand même de ressources précieuses. On y trouve des herbes rares aux propriétés curatives, mais aussi des trésors oubliés, vestiges de voyageurs qui n’en sont jamais revenus.<br><br>
            Qu'allez-vous faire ?
         `,
        choices: [
             { text: "Combattre des monstres", next: "fightMonsterForest", action: fightMonsterForest },
             { text: "Chercher un butin", next: "seek", action: chercheButin },
             { text: "Retourner en ville", next: "city" },
        ]
     },

     fightMonsterForest: {
        text: `
        Un monstre surgit ! En garde !<br><br>
         `,
     },

     cave: {
        text: `
            Les Grottes Obscures s'ouvrent comme une gueule béante dans le flanc d’une montagne escarpée.
            Dès que vous franchissez leur seuil, une obscurité presque palpable vous enveloppe, rendant chaque pas une aventure en soi.
            Les parois, humides et froides, brillent parfois d’une lumière spectrale, émanant de cristaux luminescents nichés dans la roche.<br><br>

            Vous entendez le goutte-à-goutte incessant de l’eau, accompagné de bruits lointains : un écho de pas ? Le cri étouffé d’une créature ?
            On raconte que ces grottes abritent des secrets enfouis depuis des millénaires, des trésors oubliés protégés par des pièges anciens ou des créatures immondes.<br><br>

            Mais les Grottes Obscures ne sont pas que terreur : elles regorgent de richesses naturelles comme des minerais rares ou des pierres précieuses, attirant les aventuriers les plus téméraires.
            Seuls les plus braves, ou les plus insensés, osent pénétrer dans ces ténèbres insondables.<br><br>
            Qu'allez-vous faire ?
         `,
        choices: [
             { text: "Combattre des monstres", next: "fightMonsterCave", action: fightMonsterCave },
             { text: "Chercher un butin", next: "seek", action: chercheButin },
             { text: "Retourner en ville", next: "city" },
        ]
     },

     fightMonsterCave: {
        text: `
        Un monstre surgit ! En garde !<br><br>
         `,
     },

     seek: {
        text: `
        Vous passez un long momemt à fouiller un peu partout.<br><br> 
        Ce qui vous fatigue un peu et vous perdez 10 points de santé.
         `,
         choices: [
            { text: "Continuer les explorations", next: "explore", action: goExplore },
            { text: "Retourner en ville", next: "city", action: function() {
                menuDiv.style.display = 'block';
            } },
       ]
     },

     victory: {
        text: `
        Vous avez vaincu votre adversaire !<br>
         `,
         choices: [
            { text: "Continuer les explorations", next: "explore", action: goExplore },
            { text: "Retourner en ville", next: "city", action: function() {
                menuDiv.style.display = 'block';
            } },
       ]
     },

     lose: {
        text: `
        Vous êtes mort. Votre aventure se termine...
         `,
         choices: [
            { text: "Rejouer", action: replay },
       ]
     },

     lose2: {
        text: `
        Vous avez ateint le niveau 50, mais le Dragon Ancien a eu le temps d'accumuler une immense quantité de puissance magique. Il se déchaînera sur Realm et personne, même pas vous ne pourra l'arrêter.<br><br>
        Vous avex échoué dans votre quête...
         `,
         choices: [
            { text: "Rejouer", action: replay },
       ]
     },

     auberge: {
        text: `
        Vous vous rendez à l'auberge.<br><br>
         `,
         choices: [
            { text: "Aller en ville", next: "city", action: function() {
                menuDiv.style.display = 'block';
            } },
       ]
     },

     boutique: {
        text: `
        Vous rentrez dans la boutique et saluez le gérant.<br>
        Il s'agit d'un homme blond à la stature imposante, <strong>Hakken le Baraqué</strong>.<br>
        Il vous acceuille avec un sourire professionnel.<br><br>
        <strong>Hakken</strong> : Bienvenue dans notre humble magasin, aventurier.<br>
        Nous vendons armes, protections, accessoires et potions.<br>
        Nous rachetons aussi des pierres précieuses ou des objets dont tu n'as plus besoin.<br><br>
        Alors en quoi puis-je je t'aider aujourd'hui, mon ami ?<br>
         `,
         choices: [
            { text: "Acheter", next: "buy", action: displayShopItems },
            { text: "Vendre", next: "sell", action: sellItems },
            { text: "Retourner en ville", next: "city" },
       ]
     },

     buy: {
        text: `
        Hakken vous montre ses articlles.<br><br>
         `,
         choices: [
            { text: "Quitter la boutique", next: "city", action: function() {
                closeShop();  // Appeler closeShop directement ici
            } },
       ]
     },

     sell: {
        text: `
        Vendez à Hakken ce dont vous n'avez plus besoin ou des pierres précieuses.<br><br>
         `,
         choices: [
            { text: "Quitter la boutique", next: "city", action: function() {
                closeShop();  // Appeler closeShop directement ici
            } },
       ]
     },

     klaara2: {
        text: `
        Après vous être renseigné à la Guilde, vous vous rendez au domicile de la mage Klaara.  
        Située dans un riche quartier de Realm, sa demeure reste toutefois modeste. Vous traversez une petite cour où sont plantées des herbes médicinales ainsi que d’autres plantes et fleurs à l’aspect étrange.  
        Alors que vous vous apprêtez à toquer à la porte, cette dernière s’ouvre toute seule, dévoilant la mage assise à une table, une tasse de café en main, les yeux plongés dans un vieux grimoire.<br><br>
        <strong>Klaara</strong> : Hmmm... encore toi, aventurier !<br><br>
        Elle vous fait signe de rentrer. Une fois à l'intérieur, la porte se referme toute seule derrière vous. Vous la saluez et lui rappelez votre dernier échange à la Guilde. La pièce est plutôt spacieuse, mais elle aurait pu l’être davantage si elle n’était pas bondée d’étagères et d’établis croulant sous des bibelots étranges, des statuettes, des bocaux contenant des organes de monstres, et d’autres objets bizarres.  
        De gros grimoires et anciens bouquins sont rangés dans des bibliothèques disposées contre tout un mur de la pièce. Klaara n’est pas surnommée "la collectionneuse" pour rien !<br><br>
        <strong>Klaara</strong> : L’aura qui émane de toi est bien plus intense que lors de notre dernière rencontre, dit-elle sans lever les yeux de son livre. Tu as affermi ton corps, on dirait, mais en as-tu fait autant avec ton esprit ? On le saura tout de suite.<br><br>
        Elle referme son grimoire en prenant soin de marquer la page où elle se trouve, puis se rend dans un coin du salon. Elle fouille un moment sur un établi où reposent uniquement des parchemins magiques. Après un instant, elle revient vers vous en faisant flotter un parchemin noir gravé de symboles bleus lumineux.<br><br>
        <strong>Klaara</strong> : Ce parchemin renferme le puissant sortilège Black Divider. Pour le mériter, tu devras réussir mon épreuve.<br><br>
        Elle se rassoit et claque des doigts. Une chaise apparaît, et elle vous fait signe d’y poser vos fesses.<br><br>
        <strong>Klaara</strong> : Tu devras répondre à cinq questions. Une seule mauvaise réponse entraîne la fin de l’épreuve.<br><br>
        Vous vous concentrez pendant qu'elle pose la première question.<br><br>
        <strong>Question une</strong> : Le champi boxeur est un monstre de type plante qui peut être trouvé dans la Forêt Lugubre et les Plaines Émeraudes. Vrai ou Faux ?
        `,
        choices: [
            { text: "Vrai", next: "klaara0"},
            { text: "Faux", next: "klaara3"},
        ]
    },

    klaara3: {
        text: `
        Bonne réponse !<br><br>
        <strong>Question deux</strong> : Comment s'appelle l'actuel Roi de Realm ?
        `,
        choices: [
            { text: "Amos III", next: "klaara0"},
            { text: "Hermès X", next: "klaara4"},
            { text: "Hermess XI", next: "klaara0"},
        ]
    },

    klaara4: {
        text: `
        Bonne réponse !<br><br>
        <strong>Question trois</strong> : Le yaga sont est monstre humanoïde qui dévore les humains imprudents qui pénètrent dans la Forêt Lugubre. Quel est le type de ce monstre ?
        `,
        choices: [
            { text: "Démon", next: "klaara5"},
            { text: "Humanoïde", next: "klaara0"},
            { text: "Cannibale", next: "klaara0"},
        ]
    },

    klaara5: {
        text: `
        Bonne réponse !<br><br>
        <strong>Question quatre</strong> : Une arme avec une durabilité de 65 a 45% de chance de se briser après chaque combat. Vrai ou Faux ?
        `,
        choices: [
            { text: "Vrai", next: "klaara0"},
            { text: "Faux", next: "klaara6"},
        ]
    },

    klaara6: {
        text: `
        Bonne réponse !<br><br>
        <strong>Question ultime</strong> : Il y a un monstre des Grottes Obscures que les aventuriers confondent souvent avec un Dragon des cavernes, alors que ce n'est qu'un gros reptile. Quel est le nom de ce monstre ?
        `,
        choices: [
            { text: "Fodragon des cavernes", next: "klaaraS", action: recompenseKlaara},
            { text: "Faux dragon des cavernes", next: "klaara0"},
            { text: "Gros reptile des cavernes", next: "klaara0"},
        ]
    },

    klaara0: {
        text: `
        Mauvaise réponse...<br><br>
        Klaara vous regarde avec mépris, puis fait disparaitre le parchemin noir d'un claquement de doigt.<br><br>
        <strong>Klaara</strong> : Tu as échoué, aventurier... Il n'est pas question que je partage mon savoir magique avec quelqu'un d'aussi peu cultivé.<br><br>
        La mage, déçue, vous fait signe de vous en aller de chez elle. Honteux de votre échec, vous sortez de la pièce, dont la porte s'ouvre automatiquement pour vous laisser passer et se referme brusquement derrière vous.<br><br>
        Vous allez devoir mener votre quête à bien par vos propres moyens.
        `,
        choices: [
            { text: "Suivant", next: "ultimatum"},
        ]
    },

    klaaraS: {
        text: `
        Vous avez réussi !! Vous avez répondu à toutes les questions de Klaara et vous lui prouvez ainsi qu'en plus d'être un chasseur de monstre redoutable vous êtes un aventurier érudit.<br><br>
        <strong>Klaara</strong> : Bravo !! Je ne m'attendais pas à ce que tu réussisses mon épreuve. (elle vous regarde d'un œil admiratif un bref moment) Je vais comme promis te confier le parchemin magique Black Divider.<br><br>
        Elle se sait du parchemin et vous le remet en mains propre. À son simple toucher, vous sentez la merveille force magique qu'elle renferme.<br><br>
        <strong>Klaara</strong> : Le Black Divider est un sort magique très complexe, qui divise la résistance de sa cible par 3, quelque soit son niveau, taille ou puissance. C'est le sort parfait pour équilibrer un combat contre un ennemi surpuissant. Utilise le à bon escient, aventurier. Il est à usage unique.<br><br>
        Vous remerciez la mage pour son merveilleux cadeau, puis vous prenez congé, plus galvanisé et plus confiant que jamais.
        `,
        choices: [
            { text: "Suivant", next: "ultimatum"},
        ]
    },

    nomission2: {
        text: `
        Maintenant que vous avez atteint le niveau 25, vous vous sentez plus confiant et plus puissant. Vous vous rendez à la Guide pour vous proposer pour une mission intéressante, voire même pourquoi pas pour celle qui consiste à occire le Dragon Ancien.<br><br>
        Vous ignorez les nombreux aventuriers présents dans la place, occupés à bavarder ou à élaborer des plans pour une chasse au monstre, et vous vous dirigez vers Elsa la Grinchuese, la Responsable du bureau des Quêtes.<br><br>
        Vous saluez Elsa et lui demandez quels sont les missions disponibles. Sans prendre la peine de répondre à votre salut, d'une voix trainante, le regard sévère, elle vous annonce qu'aucune mission n'est disponible. Hormis une quête royale qui demande d'éliminer le Dragon Ancien qui se déchaîne sur la cité.<br><br>
        Vous acceptez la mission périlleuse.<br><br>
        <strong>Elsa</strong> : Réussissez et vous toucherez une récompense royale : <strong>500000 pièces d'or</strong> et un <strong>titre de Chevalier Royal</strong>.<br><br>
        La récompense promise booste votre motivation au plus haut point. Elsa vous tend un registre dans lequel vous inscrivez votre nom et signature.<br><br>
        Une fois les formalités remplies, vous quittez la Guilde, tandis qu'elle vous souhaite "Bonne chance".
        `,
        choices: [
            { text: "Suivant", next: "ultimatum"},
        ]
    },

    ultimatum: {
        text: `
        Dans les rues animées de Realm, un messager royal vêtu d’une armure en argent et d'une cape rouge frappe trois fois sur un gong imposant, attirant l’attention de tous. Une foule de citoyens et d’aventuriers se rassemble, murmurant entre eux alors que le messager s’avance au centre de la place.<br><br>
        <strong>Messager Royal</strong> : Peuple de Realm, écoutez bien !<br><br>
        Il déroule un parchemin orné du sceau royal et commence à lire d'une voix claire et forte :<br><br>
        <strong>Messager Royal</strong> : Une ombre menaçante plane sur notre royaume. La puissance magique émise par le Dragon Ancien des Montagnes Éternelles augmente dangereusement de jour en jour. Les Mages royaux ont déterminé que cette créature légendaire accumule sa force, se préparant à déchaîner sa fureur sur nos terres.<br><br>
        Un frisson parcourt la foule, mais le messager continue avec gravité :<br><br>
        <strong>Messager Royal</strong> : Le Conseil royal décrète que tous les aventuriers en mesure de se battre doivent se préparer immédiatement à un raid contre ce Dragon. Le sort de Realm repose sur vos épaules. <br><br>
        Le messager marque une pause, laissant l’impact de ses mots peser sur la foule, avant de conclure :<br><br>
        <strong>Messager Royal</strong> : Quiconque triomphera de cette bête légendaire recevra une récompense de 500 000 pièces d’or et le titre de Chevalier Royal, une place d’honneur au sein de la cour. Mais sachez ceci :<br><br>
        Il s'approche, baissant la voix pour que le moment devienne solennel :<br><br>
        <strong>Messager Royal</strong> : Si le Dragon atteint son apogée de puissance avant d’être vaincu – ce qui surviendra lorsque vous atteindrez le niveau 50 – il détruira Realm dans un torrent de flammes. Ce sera la fin de votre aventure.<br><br>
        Un silence lourd envahit la place, mais dans les yeux des aventuriers présents brille la détermination. Le messager lève une dernière fois son parchemin :<br><br>
        <strong>Messager Royal</strong> : Préparez-vous, héros de Realm. Que votre courage et vos armes soient à la hauteur de cette épreuve. Le destin du royaume est entre vos mains !
        `,
        choices: [
            { text: "Suivant", next: "city"},
        ]
    },

    yann2: {
        text: `
        Yann passe la majeure partie de son temps à la Guilde quand il n'est pas en mission. Vous n'avez donc aucun mal à le retrouver. 
        L'Ambidextre est en pleine conversation avec deux autres aventuriers quand vous vous approchez de lui. Vous saluez tout le monde puis Yann vous prend à l'écart, en prenant la pene de s'excuser auprès de ses compagnons de table.<br><br>
        <strong>Yann</strong> : Il m'a suffi d'un simple coup d'œil pour constater que vous êtes bien plus puissant que la dernière fois. (Il sourit en vous jaugeant) 
        Alors, je devine que vous êtes prêt pour notre petite expédition.<br><br>
        Vous acquiescez, ce qui semble ravir Yann. Il retourne échanger quelques mots avec ses partenaires, récupère un sac d'aventurier qu'il a glissé sous la table puis revient vers vous.<br><br>
        <strong>Yann</strong> : En route, partenaire ! (Il sort une vieiile carte de son sac) Destination : les Plaines émeraudes !!<br><br>
        Vous le suivez, excité à l'idée d'explorer d'anciennes runes.
        `,
        choices: [
            { text: "Suivant", next: "yann3"},
        ]
    },

    yann3: {
        text: `
        Yann se montre très bavard et amical. Chemin faisant il vous raconte des tas d'anecdotes sur ses périlleuses missions dans les ruines. Vous avancez tous les deux en conversant joyeusement, tout en restant sur vos gardes et en vous repérant avec la vieille carte. 
        Après des heures de marche, vous vous arrêtez enfin devant un immense arbre aux branches hautes et au feuillage dense. Yann vous indique qu'autrefois un château et un petit village se situaient dans la zone.<br><br>
        <strong>Yann</strong> : Le village s'appelait Émeraude. Il a été détruit lors d'une invasion de monstres et de démons. Les ruines ont été ensevelies avec le temps.<br><br>
        Yann vous invite à faire le tour de l'arbre avec lui. Il vous dévoile un immense trou sans fond camouflé par les racines tortueuses de l'arbre gigantesque et la végétation.<br><br>
        <strong>Yann</strong> : En se laissant tomber dans ce trou, on pourrait atterrir dans les ruines du château... mais le trou a l'air très profond.<br><br>
        Vous vous rapprochez de l'ouverture béante dans le sol pour en jauger la profondeur, quand vous sentez une masse s'abattre violemment sur votre crâne... Vous vous effondrez au sol.<br><br>
        Yann en profite pour vous dérober toutes vos pièces d'or et vous balance dans le trou.<br><br>
        Vous perdez 10 points de santé.
        `,
        choices: [
            { text: "Suivant", next: "yann4", action: traitor},
        ]
    },

    yann4: {
        text: `
        Vous vous réveillez, engourdi et désorienté, dans l'obscurité. Vous vous maudissez d'avoir étési naïf. Le seul objetcif de cet escroc de Yann l'ambidextre étaitde vous vider les poches. Vous vous urez de lui administrer une correction légendaire dès que vous réussirez à le trouver.<br><br>
        En tâtonnant dans le noir, vous découvrez des racines épaisses et tortueuses qui serpentent le long des parois du trou, s'étirant jusqu'à une ouverture lumineuse à la surface. L'ascension semble possible, mais risquée : les racines sont glissantes et fragiles par endroits.<br><br>
        Alors que vous vous préparez à escalader, votre pied heurte quelque chose de dur. Il s'agit d'une pierre gravée de symboles étranges. À proximité, un courant d'air glacial émane d'un passage étroit dissimulé derrière des racines emmêlées. En écartant les racines, vous apercevez un chemin obscur qui descend vers ce qui semble être un ancien édifice.<br><br>
        Deux choix s'offrent à vous :<br>
        Escalader les racines pour retourner à la surface et retourner ensuite en vile.<br><br>
        Vous enfoncer dans le passage obscur, attiré par la curiosité et l'espoir de découvrir quelque chose de précieux.
        `,
        choices: [
            { text: "Escalader les racines", next: "yann0"},
            { text: "Aller dans le passage", next: "yann5"},
        ]
    },

    yann5: {
        text: `
        Vous choisissez de suivre le passage obscur. Le couloir est étroit et glacial, ses murs suintant d’humidité. Des symboles gravés, semblables à ceux de la pierre découverte plus tôt, s’étalent sur les parois, mais leur signification vous échappe. Après quelques minutes de marche, l’espace s’élargit soudainement, débouchant sur une vaste salle en ruines.<br><br>
        Des colonnes partiellement effondrées jalonnent la pièce, et des rayons de lumière filtrent par des fissures dans le plafond, illuminant un trône majestueux au centre. Sur ce trône repose un squelette imposant, toujours drapé d’une armure dorée étincelante. Une couronne ornée de pierres précieuses repose sur son crâne, attirant immédiatement votre regard.
        Vous vous approchez lentement, captivé par la splendeur de l’ensemble.<br><br>
        Alors que vous atteignez presque le trône, une présence glaciale envahit la pièce. Une silhouette translucide se matérialise devant vous : un chevalier spectral, vêtu d’une armure ancienne et armé d'une très longue épée rouillée.<br><br>
        D'un ton grave et autoritaire, il déclare :<br><br>
        Je suis Arlen, chevalier servant du feu roi. Aventurier, quittez ces lieux immédiatement. La salle du trône est sacrée, et je ne tolérerai pas ton impudence.<br><br>
        Ses yeux fantomatiques brillent d’un éclat menaçant. L’atmosphère devient lourde, et vous sentez que le moindre faux pas pourrait vous coûter cher.<br><br>
        Allez vous défier Arlen, le Chevalier fantôme ou retourner sagement à la surface ?
        `,
        choices: [
            { text: "Affronter Arlen", next: "yann6", action: fightArlen},
            { text: "Escalader les racines", next: "yann0"},
        ]
    },

    yann6: {
        text: `
        Le combat contre Arlen, le Chevalier Fantôme s'engage !
         `,
     },

     yannS: {
        text: `
        Le combat fut rude mais vous avez réussi à venir à bout du Chevalier Fantôme, protecteur du trône de son Roi même après la mort.<br><br>
        Triomphant, vous vous rapprochez du trône et vous vous emparez avec délicatesse de l'Armure.<br><br>
        Vous avez obtenu la protection Orikalk !!<br><br>
        Par respect pour le Roi mort en défendant son trône et Arlen, vous laissez la magnifique couronne à sa place. Puis vous vous extirpez des ruines, escaladez les racines et remontez à la surface. Il y aura finalement eu du bon dans votre mésaventure.<br><br>
        Vous retournez à Realm.<br><br>
        `,
        choices: [
            { text: "Suivant", next: "yann0", action: recompenseArlen},
        ]
    },

    yann0: {
        text: `
        Vous faites un tour à la Guilde et dans des tavernes mais aucun signe de Yann l'Ambidextre ou de ses compagnons. L'escroc a dû prendre la poudre d'escampette.
        `,
        choices: [
            { text: "Suivant", next: "ultimatum"},
        ]
    },

    ragam2: {
        text: `
        Après vous être renseigné à la Guilde, vous vous rendez au domicile de Ragam la Lame Rouge. 
        Située dans un quartier populaire et animé, il s'agit d'un édifice imposant aux murs rouges, comportant trois étages. 
        Au dessus des deux portes principales du bâtiment, vous pouvez lire sur un écriteau en argent "École d'Escrime Épée Cramoisie". 
        En plus d'être le domicile de Ragam, le bâtiment fait aussi office d'école pour les aventuriers souhaitant s'initier au maniement de l'épée.<br><br>
        Vous rentrez et debouchez dans une grande salle où de jeunes garçons et jeunes filles s'exercent avec des épées en bois. 
        Tous portent un manteau rouge en dessus de leurs vêtements. 
        Dès qu'ils vous remarquent, certains interrompent leurs exercices. Un garçon blond, le plus grand de tous les gamins présents se rapproche de vous. 
        Il vous salue et vous demande la raison de votre visite. Vous lui expliquez que vous voulez voir Ragam. Le gamin vous demande de patenter puis fonce à l'étage supérieur en grimpant les escaliers.<br><br>
        Il redescend quelques minutes après et vous annonce que Ragam accepte de vous recevoir. Guidé par le blondinet, vous montez les escaliers.
        `,
        choices: [
            { text: "Suivant", next: "ragam3"},
        ]
    },

    ragam3: {
        text: `
        Au premier étage, se trouve une autre salle d'entraînement, très grande et de forme carrée. Vous remarquez quelques portes encadrées dans les murs (peut-être mènent elles aux dortoirs). 
        Les élèves de ce palier sont de jeunes hommes et je jeunes femmes également drapés dans le manteau rouge. Contrairement aux enfants, ils portent des gants noirs et leurs armes sont de vraies épées.<br><br>
        Debout dans un coin de la pièce, Ragam, vêtu d'un élégant manteau noir, supervise les exercices de ses élèves d'un œil rigoureux. À ses cotés se tiennent ses deux disciples Alrak, brun et musclé, et Anssio, blond et fin. 
        Vous vous dites que ces deux là doivent être sûrement ses meilleurs disciples vu qu'ils sont les seuls à porter des gants blancs. 
        Votre guide vous mène devant Ragam, puis file aussitôt vers son palier. Vous saluez Ragam et ses deux disciples.<br><br>

        <strong>Ragam</strong> : Ça alors, si ce n'est pas ce brave aventurier !! Tu dégages beaucoup plus de force et d'assurance que lors de notre dernière rencontre à la Guilde.<br><br>
        Vous le remerciez pour le compliment et vous lui expliquez que vous êtes prêt à relever son défi.<br><br>
        <strong>Ragam</strong> : Si j'ai fondé mon école ce n'est pas uniquement pour léguer mon savoir à la génération future, mais surtout pour trouver un homme digne de brandir Kalibraa. 
        Jusqu'ici aucun de mes disciples, même les plus puissants n'ont pas réussi. L'épée a une volonté propre et choisit elle même son porteur. 
        Il te faudra du courage, de la force et aussi de la chance.<br><br>

        Les mots de Ragam sèment un peu de doute en vous mais vous serrez les poings.
        <strong>Ragam</strong> : Commençons déjà par vérifier si tu as pu obtenir au moins dix achèvements, aventurier...
        `,
        choices: [
            { text: "Suivant", next: "ragam4", action: trialRagam},
        ]
    },

    ragam4: {
        text: `
        Vous avez obtenu au moins dix achèvements, symboles de votre courage. Satisfait, la Lame Rouge vous invite à le suivre au deuxième étage après avoir confié la direction des entraînements à l'un des élèves du second palier. 
        Une autre salle d'entraînement se trouve au deuxième étage. Elle est vide mais soigneusement décoré. Des épées avec de magnifiques larmes, des boucliers luisants et des armures en argent sont posées contre les murs. 
        Mais l'élément le plus important de la salle, c'est une longue épée à la lame rouge posée sur un piédestal : Kalibraa. Vous sentez de la puissane émaner d'elle.<br><br>

        <strong>Ragam</strong> : Tu m'as prouvé ton courage. Il est temps de me montrer ta force. Tu affronteras chacun de mes deux plus puissants disciples en combat singulier. 
        Montre moi que tu les surpasse. En garde aventurier !<br><br>

        Arlak s'avance vers vous, en brandissant aisément d'une main une épée géante. Vous vous mettez en garde.<br><br>
        Arlak vous regarde avec une colère à peine voilée.<br><br>
        <strong>Arlak</strong> : Tu sors de nul part et tu penses pouvoir obtenir Kalibraa alors que même moi le meileur épéiste de l'Épée Cramoisie n'ait pas réussi !? 
        Je serai impitoyable, aventurier. Prépare toi à y laisser la peau. (Un sourire meurtrier illumine son visage)<br><br>

        Le combat commence !!
        `,
        choices: [
            { text: "Combattre Arlak", next: "arlak", action: fightArlak},
        ]
    },

    arlak: {
        text: `
        Le combat contre Arlak s'engage !
         `,
     },

     ragam5: {
        text: `
        Même s'il voulait vous liquider, vous vous êtes contenté de désarmer Alark et de assommer.<br><br>
        Sans vous laisser le temps de souffler, Anssio s'élance vers vous, armé de d'une dague à la lame effilée dans chaque main.<br><br>
        <strong>Anssio</strong> : À mon tour. Que le meilleur survive ! (Même s'il ne le montre pas ouvertement, il est clair qu'il va aussi essayer de vous éliminer à la moindre erreur.)<br><br>
        Le combat commence !!
        `,
        choices: [
            { text: "Combattre Anssio", next: "anssio", action: fightAnssio},
        ]
    },

    anssio: {
        text: `
        Le combat contre Anssio s'engage !
         `,
     },

     ragam6: {
        text: `
        Ragam vous félicite d'avoir vaincu ses deux meilleurs éléments.<br><br>
        <strong>Ragam</strong> : Ils essayent à chaque fois de tuer tous ceux qui relèvent mon défi. Je n'ai pas eu besoin d'intervenir cette fois, tu as assuré !!<br><br>
        Il est temps de passer l'ultime épreuve. Ragam vous intime de vous rapprocher de kalibraa, et de vous agenouiller devant elle. Vous obéissez.<br><br>
        <strong>Ragam</strong> : Kalibraa est une épée vivante. Elle se nourrit de la force vitale de son manieur. 
        L'épreuve finale consistera à la laisser drainer une partie de votre énergie vitale. Êtes vous prêt aventurier ? Attention, votre santé maximum pourrait chuter en dessous de 60...<br><br>
        Pour mériter kalibraa, vous allez devoir perdre une partie de votre santé maximum. Allez vous accepter ?
        `,
        choices: [
            { text: "Accepter", next: "ragamS", action: dealKalibraa},
            { text: "Refuser", next: "ragam0"},
        ]
    },


     ragamS: {
        text: `
        Vous acceptez le deal. Ragam se saisit de Kalibraa et se met devant vous comme s'il voulait vous adouber. 
        Il pose le plat de la lame sur votre tête.<br><br>
        Vous sentez aussitôt que votre énergie vitale est drainée. Vos forces vous quittent et vous manquez de vous évanouir mais vous restez éveillé par la force de votre volonté.<br><br>
        Deux minutes environ plus tard, Ragam relève l'épée. <strong>Vous avez perdu 15 points de santé maximum.</strong><br><br>
        <strong>Ragam</strong> : Kalibraa a choisi son nouveau maître !! Félicitations aventurier, tu es digne de me succéder et de la brandir.<br><br>
        Ragam rengaine Kalibraa dans un magnifique étui rouge et vous tend l'épée.<br><br>

        Vous avez obtenu Kalibraa !!!<br><br>

        <strong>Ragam</strong> : Puisse tu apporter justice et occire le mal ! Maintenant, va aventurier et brandis Kalibraa jusqu'au jour où elle se lassera de toi et réclamera un nouveau maître !<br><br>
        Vous saluez Ragam une dernière fois et quittez l'École d'Escrime Épée Cramoisie sous les regards admiratifs des élèves épéistes.
        `,
        choices: [
            { text: "Suivant", next: "ultimatum", action: recompenseRagam},
        ]
    },

    ragam0: {
        text: `
        Vous manquez encore de courage, de force et de détermination. Vous n'êtes donc pas, malheureusement, digne de brandir Kalibraa.<br><br>
        Sous le regard déçu de Ragam et celui moqueur de ses élèves épéistes, vous quittez l'École  d'Escrime Épée Cramoisie.
        `,
        choices: [
            { text: "Suivant", next: "ultimatum"},
        ]
    },

    leona2: {
        text: `
        Vous rejoignez Leona dans une taverne. Elle est assise à l'écart à une table remplie de plats de viandes rôtis et de fûts de bières. 
        Vous vous rapprochez d'elle et la saluez. Elle répond de la tête et vous fait signe de vous asseoir. Les mets fumants vous font envie mais vous restez concentré.<br><br>
        <strong>Leona</strong> : Te voilà enfin, aventurier !! J'ai envoyé mes Jackalopes t'espionner. D'après leur rapport tu es devenu beaucoup plus puissant. 
        Pile le genre d'allié qu'il me faut ! (Elle ricane bruyamment)<br><br>
        Vous étiez donc espionné pendant tout ce temps !!<br><br>
        <strong>Leona</strong> : Déjà je dois te révéler les infos que j'ai glané.<br><br>

        Il y a deux ou trois mois, des Chevaliers du Roi ont lancé un raid ayant pour but de capturer le Dragon Ancien. 
        Mais ils ont échoué à la maîtriser. Et oui, "la", car c'est une femelle. Malheureusement, même s'ils n'ont pas réussi leur quête, ils ne sont pas rentré les mains vides. 
        Ils ont dérobé l'œuf de la Dragonne.<br><br>
        Ce qui explique pourquoi elle est folle de rage et pourquoi elle ne cesse d'attaquer le royaume. Vous n'en croyez pas vos oreilles. 
        Le Roi est donc responsable de cette calamité qui s'abat sur Realm... Et pour couronner le tout il cherche à se débarrasser de la créature, sans motif...<br><br>
        <strong>Leona</strong> : Il y a bien un but derrière tout ça. Et je l'ai découvert grâce à mon réseau d'espionnage qui s'étend à tout Realm. (Vous la regardez dubitatif et elle éclate de rire) 
        En plus de mes fidèles Jackalopes, d'autres monstres et animaux recueillent des infos pour moi. Même les rats, les chats, les chiens et les oiseaux. (Vous vous dites qu'elle doit être vraiment doué en dressage) 
        D'après ces braves bêtes, de mystérieuses expériences magiques sont menées dans les sous-bassements du château. L'objectif serait d'extraire l'énergie vitale de puissants monstres et de le transmettre à des humains. 
        Tu te rends compte de la situation ?? Au moment même où on parle, les Mages et Alchimistes du Roi doivent être entrain de drainer les réserves d'énergie vitale de la pauvre créature, même pas encore sortie de coquille.<br><br>
        Elle fait une pause et boit une bonne rasade de bière, pour vous laisser le temps de digérer les informations. Puis elle reprend.
        <strong>Leona</strong> : Peu importe ce que trame le Roi, s'il arrive malheur au dragonnet, Realm ne survivra pas à la fureur de Raganna (on dirait qu'elle a donné ce nom au dragon). 
        Il faut agir, aventurier. Joins tes forces aux miennes et sauvons Realm tout en rendant un petit à sa mère.<br><br>
        Leona vous regarde d'un air déterminé, empreint de sincérité et de douceur. Conscient de la gravité de la situation, vous acquiescez et acceptez de l'aider.<br><br>
        <strong>Leona</strong> : (Elle éclate de rire) Je savais que je pouvais compter sur toi ! J'ai rassemblé une armée de Jackalopes, Lupus et autres monstres pour lancer un raid sur le château. 
        Quand tu seras prêt, nous lancerons l'assaut. <strong>Tu n'auras qu'à te rendre en ville et choisir l'option "Combattre le Dragon".</strong><br><br>
        Vous acquiescez et vous vous préparer à prendre congé de la Dresseuse, mais cette dernière vous invite à partager le repas avec elle. Vous acceptez.
        `,
        choices: [
            { text: "Suivant", next: "ultimatum", action: raidFinal},
        ]
    },

    repaireDragon: {
        text: `
        Vous vous rendez dans les Montagnes, prêt à affronter le Dragon Ancien. Le vent y souffle plus fort et le ciel semble moins haut. Vous empruntez un sentier escarpé et risqué, où le moindre faux pas pourrait vous coûter la vie. Vous avancez difficilement vers le sommet mais au moins aucun monstre ou bête sauvage ne vient se dresser sur votre chemin.<br><br>
        Alors que vous vous rapprochez du sommet, vous remarquez des traces de combat. Des armes brisées jonchent le sol rocailleux, avec du sang et de la sueur. Vous apercevez des aventuriers évanouis, certains grièvement blessés et d'autres tombés dans des pièges. 
        ceux qui ont encore assez de force pour parler vous apprennent qu'il y a une Dresseuse folle accompagnée de jackalopes et de Lupus qui s'en prend à tous ceux qui s'approchent du repaire du dragon. 
        Intrigué par cette histoire, vous reprenez votre route en restant sur vos gardes. Vous distinguez bientôt une ouverture béante dans un flanc de la montagne : le repaire du Dragon Ancien.<br><br>
        Mais, embusquée derrière des roches, une femme rousse au regard dur armée d'un long fouet et accompagnée d'une dizaine de Jackalopes surgit devant vous, prête à en découdre.<br><br>
        <strong>Femme mystérieuse</strong> : Je suis Leona Mereo, la Dresseuse Gloutonne, amie des Jackalopes, des Lupus et des dragons. Quiconque osera attaquer Raganna la Dragonne subira mon courroux.<br><br>
        L'apparition de la Dresseuse et de ses monstres vous embrouille un moment. Pourquoi protège-t-elle le monstre qui menace la sécurité de Realm ? Et si c'était elle qui manipulait le Dragon ?<br><br>
        Qu'allez vous faire : attaquer cette cinglée et venger tous les aventuriers blessés par sa faute ? lui demander pourquoi elle protège le dragon ? rebrousser chemin ?
        `,
        choices: [
            { text: "Attaquer la dresseuse", next: "attaquerLeona", action: fightLeona},
            { text: "Discuter avec la dresseuse", next: "questionnerLeona"},
            { text: "Retourner sagement en ville", next: "city"},
        ]
    },

    attaquerLeona: {
        text: `
        Vous n'avez pas fait tout ce chemin pour qu'une folle furieuses vous dicte votre conduite. Vous avez une mission à accomplir, et pour cela vous êtes prêt à occire quiconque se mettra à travers de votre chemin, que ce soit un monstre ou un humain.<br><br>
        Vous vous lancez à l'attaque !<br><br>
        <strong>Leona</strong> : Comme tu voudras, aventurier. Tu serviras de dîner pour mes monstres de compagnie.<br><br>
        Leona se jette sur vous en faisant claquer son fouet.
         `,
     },

     vaincreLeona: {
        text: `
        Après un combat acharné, vous venez à bout de la fameuse protectrice du Dragon. 
        Ses monstres de compagnie détalent, impressionnés par votre puissance, abanonnant ainsi leur maîtresse à son sort. 
        La route est libre maintenant. Plus personne ne se mettra en travers de votre chemin.<br><br>
        Vous pénétrez dans le repaire du Dragon Ancien.
        `,
        choices: [
            { text: "Suivant", next: "combatFinalRaganna"},
        ]
    },

    questionnerLeona: {
        text: `
        Votre curiosité vous pousse à questionner Leona sur ses motivations. Avant de l'attaquer, la moindre des choses est d'essayer de comprendre pourquoi elle est autant déterminée.<br><br>
        <strong>Leona</strong> : Tu m'as l'air bien différent des autres brutes, toi. Aucun d'eux n'a pris la peine de chercher à comprendre mes raisons. 
        D'ailleurs, ils s'en fichent même de ce qui pousse un Dragon à attaquer des villes du jour au lendemain.<br><br>
        Vous vous rendez compte que vous êtes aussi dans le même cas que ces... brutes.<br><br>
        <strong>Leona</strong> : L'histoire est longue, aventurier et je crains de ne pas pouvoir tout expliquer ici. Faudra que tu rebrousses chemin et qu'on se donne rendez-vous en ville...<br><br>
        Allez-vous accorder votre confiance à Leona et faire demi-tour après tout le chemin parcouru ? Ou l'attaquer pour enfin en finir ?
        `,
        choices: [
            { text: "Attaquer la dresseuse", next: "attaquerLeona", action: fightLeona},
            { text: "Lui faire confiance et faire demi-tour", next: "demiTour"},
        ]
    },

    demiTour: {
        text: `
        Pas que vous ayez peur de l'affronter elle, ou le dragon mais vous voulez comprendre ses motivations ainsi que ce qui irrite le monstre. Vous acceptez de rebrousser chemin. Surprise, Leona vous regarde d'un air admiratif avant d'éclater de rire.<br><br>
        <strong>Leona</strong> : Tu es vraiment spécial, j'aime ça !!<br><br>
        La drsseuse vous donne ensuite l'adresse d'une taverne où vous pourrez la retrouver.<br><br>
        <strong>Leona</strong> : Je vais rester ici encore un moment et défendre Raganna. Je te rejoindrai plus tard, aventurier.<br><br>
        Vous vous mettez en route. Le retour, quoique difficile, fut plus rapide que l'aller. Chemin faisant, vous vous rendez compte que Leona évite aux malheureux qu'elle tabaasse une mort certaine en affrontant le Dragon...<br><br>
        `,
        choices: [
            { text: "Suivant", next: "rdvLeona"},
        ]
    },


    rdvLeona: {
        text: `
        Une fois en ville, vous vous rendez dans la fameuse taverne pour y attendre Leona. L'établissement, peu fréquenté, est idéal pour traiter d'affaires louches ou graves en toute quiétude.<br><br>
        Leona vous rejoint des heures plus tard, suivie par deux Jackalopes. Aussitôt arrivée, elle passe sa commmande. 
        La table est bientôt remplie de plats de viandes rôtis et de fûts de bières. 
        Les mets fumants vous font envie mais vous restez concentré.<br><br>
        <strong>Leona</strong> : Tu m'as attendu comme promis, aventurier.  
        Ta patience sera récompensé.(Elle ricane bruyamment)<br><br>
        Vous étiez donc espionné pendant tout ce temps !!<br><br>
        <strong>Leona</strong> : Il est temps de te révéler les infos que j'ai glané durant ces derniers mois.<br><br>

        Il y a deux ou trois mois, des Chevaliers du Roi ont lancé un raid ayant pour but de capturer le Dragon Ancien. 
        Mais ils ont échoué à la maîtriser. Et oui, "la", car c'est une femelle. Malheureusement, même s'ils n'ont pas réussi leur quête, ils ne sont pas rentré les mains vides. 
        Ils ont dérobé l'œuf de la Dragonne.<br><br>
        Ce qui explique pourquoi elle est folle de rage et pourquoi elle ne cesse d'attaquer le royaume. Vous n'en croyez pas vos oreilles. 
        Le Roi est donc responsable de cette calamité qui s'abat sur Realm... Et pour couronner le tout il cherche à se débarrasser de la créature, sans motif...<br><br>
        <strong>Leona</strong> : Il y a bien un but derrière tout ça. Et je l'ai découvert grâce à mon réseau d'espionnage qui s'étend à tout Realm. (Vous la regardez dubitatif et elle éclate de rire) 
        En plus de mes fidèles Jackalopes, d'autres monstres et animaux recueillent des infos pour moi. Même les rats, les chats, les chiens et les oiseaux. (Vous vous dites qu'elle doit être vraiment doué en dressage) 
        D'après ces braves bêtes, de mystérieuses expériences magiques sont menées dans les sous-bassements du château. L'objectif serait d'extraire l'énergie vitale de puissants monstres et de le transmettre à des humains. 
        Tu te rends compte de la situation ?? Au moment même où on parle, les Mages et Alchimistes du Roi doivent être entrain de drainer les réserves d'énergie vitale de la pauvre créature, même pas encore sortie de coquille.<br><br>
        Elle fait une pause et boit une bonne rasade de bière, pour vous laisser le temps de digérer les informations. Puis elle reprend.
        <strong>Leona</strong> : Peu importe ce que trame le Roi, s'il arrive malheur au dragonnet, Realm ne survivra pas à la fureur de Raganna (on dirait qu'elle a donné ce nom au dragon). 
        Il faut agir, aventurier. Joins tes forces aux miennes et sauvons Realm tout en rendant un petit à sa mère.<br><br>
        Leona vous regarde d'un air déterminé, empreint de sincérité et de douceur. Conscient de la gravité de la situation, vous acquiescez et acceptez de l'aider.<br><br>
        <strong>Leona</strong> : (Elle éclate de rire) Je savais que je pouvais compter sur toi ! J'ai rassemblé une armée de Jackalopes, Lupus et autres monstres pour lancer un raid sur le château. 
        Quand tu seras prêt, nous lancerons l'assaut. <strong>Tu n'auras qu'à te rendre en ville et choisir l'option "Combattre le Dragon".</strong><br><br>
        Vous acquiescez et vous vous préparer à prendre congé de la Dresseuse, mais cette dernière vous invite à partager le repas avec elle. Vous acceptez.
        `,
        choices: [
            { text: "Suivant", next: "city", action: raidFinal},
        ]
    },

    combatFinalRaganna: {
        text: `
        Vous pénétrez dans le flanc de la montagne, où le repaire du Dragon Ancien s’ouvre comme une gueule béante dans la roche. 
        L’air devient lourd et chargé d’une étrange énergie, presque suffocante. 
        À chaque pas, le sol semble vibrer, comme s’il portait le souffle de la créature qui hante cet endroit depuis des siècles.<br><br>  

        Les parois de la caverne sont incrustées de pierres précieuses, leurs reflets scintillants pulsant faiblement, comme si elles étaient vivantes. 
        Ces gemmes, saturées d’énergie magique, témoignent de la puissance écrasante du Dragon Ancien. 
        Au centre de la caverne, un immense nid vide, tissé d’ossements de monstres et de débris de métal, trône comme une relique funeste.<br><br>  

        Puis, un grondement sourd retentit, provenant des entrailles mêmes de la montagne. 
        Les ténèbres devant vous s’animent. Une silhouette colossale se déploie lentement, son corps recouvert d’écailles noires comme de l’obsidienne, chaque mouvement dégageant une aura écrasante. 
        Des reflets émeraude parcourent ses écailles, pulsant avec une énergie surnaturelle qui semble émaner des pierres précieuses autour de lui.<br><br>  

        Les yeux du Dragon Ancien brillent d’un éclat spectral, deux lueurs immenses qui semblent sonder votre âme. 
        Il ne parle pas. Il n’a pas besoin de mots. Son souffle, brûlant et chargé d’une rage inexpliquée, suffit à exprimer toute la haine et la puissance de cette créature.  
        Il s’élève lentement, ses ailes effleurant les parois, et libère un rugissement qui fait trembler la caverne tout entière. 
        Des fragments de roche se détachent et s’écrasent autour de vous.<br><br>  
        Le combat est inévitable. Votre destin, celui de Realm et peut-être celui du monde, se joue ici. Vous resserrez votre prise sur votre arme.<br><br>          `,
        choices: [
            { text: "Suivant", next: "combatRaganna", action: fightDragon},
        ]
    },

    combatRaganna: {
        text: `
        <strong>Le Dragon Ancien fond sur vous dans un assaut fulgurant. La bataille finale commence.</strong>
         `,
     },

     finishGame2: {
        text: `
        Une partie de la caverne s'écroule à cause de l'intensité du combat. 
        Les battements furieux de votre cœur résonnent dans vos tempes tandis que le colossal Dragon Ancien s'effondre enfin. 
        Ses écailles noires luisent une dernière fois, émettant un éclat émeraude avant de ternir, comme si toute l'énergie qui animait cette créature millénaire s'était éteinte.<br><br>  

        L'air, auparavant lourd et oppressant, semble s'alléger, mais un étrange malaise persiste. 
        Vous contemplez le corps inerte du dragon, un mélange de soulagement et de triomphe vous envahit. 
        Pourtant, une pensée fugace traverse votre esprit : <strong>Était-ce vraiment la bonne chose à faire ?</strong><br><br> 

        Alors que vous quittez la Montagne, des messagers du royaume vous accueillent à l’entrée, acclamant votre victoire. 
        Vous êtes conduit au palais royal, où une cérémonie somptueuse vous attend.<br><br>  

        Le roi, en grande pompe, vous remet une bourse contenant <strong>500 000 pièces d'or</strong> et vous élève au rang de <strong>Chevalier royal</strong>, vous honorant comme le <strong>Sauveur de Realm</strong>. 
        Les citoyens scandent votre nom, leurs cris remplis de gratitude et d’admiration.<br><br>

        Mais au milieu de cette célébration, le roi s'approche de vous. 
        Ses yeux brillent d'un éclat qui vous met mal à l’aise. D’une voix presque imperceptible, il murmure à votre oreille :<br><br>  
        <strong>"Votre bravoure est inégalée, aventurier. Grâce à vous, le royaume est sauvé… et mes recherches pourront enfin progresser. Vous n’imaginez pas combien cet œuf précieux représentera pour l’avenir de Realm... ou, devrais-je dire, pour mon avenir."</strong><br><br> 

        Ces paroles glacent votre sang. Vous repensez soudain aux gemmes lumineuses de la caverne, au nid vide, à la rage inexpliquée du Dragon Ancien... et à cette brave dresseuse... 
        Tout s’assemble dans un tableau dérangeant. 
        Le roi s'éloigne, un sourire satisfait aux lèvres, acclamé par la foule.<br><br>  

        <strong>Le royaume est sauvé, mais à quel prix ?</strong> 
        Un mystère s’éteint avec le dernier souffle du Dragon Ancien, tandis qu’un autre, plus sombre, commence à naître.
        `,
        choices: [
            { text: "Vous avez fini le Jeu !!", next: "combatRaganna",},
        ]
    },

    raidLeona: {
        text: `
        Une fois vos préparatifs terminés, vous retrouvez Leona aux abords de la ville, où une armée hétéroclite de Jackalopes et de Lupus l'attend dans l'ombre. 
        Le regard déterminé, elle s’approche de vous.<br><br> 

        <strong>Leona</strong> : C’est l’heure. Nous allons passer par les égouts pour infiltrer les sous-bassements du château. 
        Le passage est étroit et dangereux, mais c’est notre meilleure chance de réussir.<br><br> 

        Vous hochez la tête, prêt à affronter les périls. Le groupe se met en marche, avançant dans les tunnels sombres et humides. 
        L’odeur est suffocante, mais la concentration de Leona et la discipline des monstres sont impressionnantes.<br><br>  

        Après plusieurs minutes de marche dans les égouts, vous débouchez dans une salle plus large, où des chevaliers et des gardes royaux, alertés de votre présence, vous tendent une embuscade.<br><br>  

        <strong>Chevalier</strong> : Enfin ! On t'aura, Leona. Cela fait des mois que tu rôdes autour du château avec tes bêtes !<br><br>  

        Leona ricane, sans se laisser impressionner.<br><br>  

        <strong>Leona</strong> : Oh, comme c’est flatteur d’être si surveillée. Cela veut dire que je suis sur la bonne piste, pas vrai ?<br><br>  

        <strong>Chevalier</strong> : Tes petites manigances s’arrêtent ici. Par ordre du Roi, tu ne poseras plus jamais un pied dans ce château !<br><br>  

        <strong>Leona</strong> : Jackalopes, Lupus, à l'attaque !<br><br>

        Les Jackalopes bondissent sur les chevaliers, esquivant leurs coups d’épée et les harcelant de toutes parts, tandis que les Lupus chargent férocement, renversant les ennemis. 
        Leona se bat avec une agilité et une précision redoutables, dirigeant ses compagnons comme un chef d’orchestre.<br><br>  

        Vous-même engagez le combat, repoussant les gardes avec votre arme. Malgré leur entraînement, vos adversaires tombent les uns après les autres sous l’assaut combiné de votre groupe.
        `,
        choices: [
            { text: "Suivant", next: "raidLeona2"},
        ]
    },

    raidLeona2: {
        text: `
        Alors que vous pensez avoir remporté la bataille, un bruit lourd et métallique résonne. 
        Une silhouette imposante apparaît dans l’ombre. Un homme gigantesque, au visage grave encadré par de longs cheveux blonds, vêtu d’une armure brillante ornée de motifs royaux et d'une magnifique cape rouge, s’avance lentement.<br><br>  

        <strong>Mystérieux chevalier</strong> : Alors, voilà donc la fameuse Leona, la fouineuse du château. Tu as fait beaucoup trop de bruit cette fois. Cela s’arrête ici.<br><br>

        Leona serre les dents, réalisant la gravité de la situation.<br><br>

        <strong>Leona</strong> : Albion... Le Grand Chevalier Royal. Cela explique pourquoi ils étaient si confiants.<br><br>  

        Albion dégaine une épée colossale qui semble scintiller d’une énergie magique.  

        <strong>Albion</strong> : Vous ne franchirez pas cette salle. Par l’honneur de Realm et sous les ordres de Sa Majesté, je vais vous arrêter ici et maintenant.<br><br>
        `,
        choices: [
            { text: "Suivant", next: "raidLeona3"},
        ]
    },

    raidLeona3: {
        text: `
        Leona ordonne à ses monstres de foncer sur Albion, mais dans un mouvement rapide et précis, il les repousse d’un seul revers d’épée, projetant Jackalopes et Lupus contre les murs.<br><br>  

        <strong>Leona</strong> : C’est ton combat, aventurier. Il est trop puissant pour mes compagnons. Montre-lui ce dont tu es capable !<br><br>

        Elle reste en retrait pour contenir d’autres renforts ennemis, vous laissant seul face au chevalier royal. Vous vous lancez à l'assaut !
        `,
        choices: [
            { text: "Combattre Albion", next: "combattreAlbion", action: fightAlbion},
        ]
    },

    combattreAlbion: {
        text: `
        Albion attaque immédiatement, enchaînant des frappes brutales et rapides. 
        Son style de combat allie force physique et compétences magiques, rendant chaque coup difficile à esquiver. 
        Vous devez vous concentrer pour parer ses attaques et contre-attaquer au bon moment.<br><br>

        Le combat est acharné, et vous puisez dans toutes vos ressources pour tenir tête à ce guerrier redoutable. 
        Chaque coup échangé résonne dans la salle, témoignant de l’intensité du duel.  
        `
    },

    victoireAlbion: {
        text: `
        Après un affrontement épique, vous parvenez à briser la garde d’Albion et à lui porter un coup décisif. 
        Désarmé, il tombe à genoux, essoufflé mais toujours digne.<br><br>

        <strong>Albion</strong> : Vous pensez vraiment que vaincre un homme suffira à stopper les machinations du roi ? 
        Vous êtes bien naïf... Vous ne comprenez pas ce qui est en jeu.<br><br> 
        Avant que vous ne puissiez répondre, Leona revient, ayant éliminé les derniers renforts ennemis.<br><br>  

        <strong>Leona</strong> : Belle performance, aventurier. Mais ne perdons pas de temps. Nous devons avancer. Raganna et son œuf n’attendront pas.<br><br> 

        Vous hochez la tête, laissant Albion à son sort. Le groupe reprend sa marche à travers les sous-bassements, déterminé à atteindre la salle des expériences et à sauver l’œuf avant qu’il ne soit trop tard.
        `,
        choices: [
            { text: "Suivant", next: "raidLeona4"},
        ]
    },

    raidLeona4: {
        text: `
        Vous et Leona franchissez une lourde porte de métal, suivis par vos compagnons Lupus et Jackalopes. 
        L’atmosphère change immédiatement : le laboratoire est immense, baigné d’une lumière surnaturelle émanant des multiples cuves de verre remplies d’un liquide brillant.<br><br>

        À l’intérieur des cuves, des monstres de toutes sortes flottent inertes, maintenus dans un état d’hibernation artificielle. 
        Des tuyaux s’échappent des cuves, connectés à des chevaliers et aventuriers attachés sur des tables métalliques. Ces cobayes, visiblement volontaires ou hypnotisés, sont alimentés par la magie des créatures.<br><br>

        Au centre de la pièce, sur une estrade, repose l’immense œuf de dragon. 
        Une énergie brute et étincelante émane de lui, pulsant à chaque seconde. 
        Vous remarquez plusieurs flacons reliés à l’œuf par des tubes, dans lesquels sa magie est lentement distillée en un liquide doré.<br><br>

        <strong>Leona</strong> : C’est pire que ce que je craignais... Regardez ce qu’ils font, ces monstres !<br><br>

        Vous êtes interrompu par une voix grave et autoritaire.<br><br>

        <strong>Roi Hermès X</strong> : Alors, voilà nos intrus. Enfin face à face.<br><br>

        Le roi se tient sur l’estrade, entouré de mages et d’alchimistes qui travaillent frénétiquement. Quarantenaire aux cheveux bruns mi-longs, son regard est froid, calculateur. 
        Il est vêtu d’une armure d’apparat ornée de runes scintillantes et d'une longue cape dorée. Preuve de son autorité et de sa puissance, une couronne repose sur sa tête.<br><br>

        <strong>Roi Hermès X</strong> : Je dois admettre que vous êtes plus persévérants que je ne le pensais. Mais, malheureusement pour vous, vous arrivez trop tard.
        `,
        choices: [
            { text: "Suivant", next: "raidLeona5"},
        ]
    },

    raidLeona5: {
        text: `
        Avant qu’il ne puisse continuer, Leona lève un bras et ordonne à ses monstres d’attaquer.<br><br>

        <strong>Leona</strong> : Lupus, Jackalopes, détruisez tout !<br><br>
        Les créatures bondissent dans le laboratoire, semant le chaos parmi les mages et les alchimistes. 
        Des tables sont renversées, des fioles éclatent, et des machines complexes explosent sous les assauts des monstres. 
        Pris par surprise, les mages tentent de riposter avec leurs sorts, mais ils sont rapidement maîtrisés par l’assaut coordonné de Leona.<br><br>

        Malgré le chaos, le roi reste impassible.<br><br>

        <strong>Roi Hermès X</strong> : Pathétique. Vous pensez pouvoir arrêter un plan de cette envergure avec quelques créatures sauvages ?

        `,
        choices: [
            { text: "Suivant", next: "raidLeona6"},
        ]
    },

    raidLeona6: {
        text: `
        Il descend calmement de l’estrade, s’approchant de vous avec un sourire froid.<br><br>

        <strong>Roi Hermès X</strong> : Depuis des siècles, nos royaumes ont été faibles, divisés, à la merci de monstres et de dragons. 
        Mais grâce à cette technologie et à cet œuf, tout cela va changer. 
        Nous avons enfin trouvé le moyen d’extraire l’énergie vitale des créatures et des dragons et de la convertir en potions et produits dopants.<br><br>

        Il désigne un des chevaliers attachés, dont le corps semble éclater d’une énergie surnaturelle.<br><br>

        <strong>Roi Hermès X</strong> : Imaginez une armée entière de chevaliers comme lui, alimentés par la magie des monstres et des dragons. 
        Aucun royaume ne pourra nous résister. Je vais unifier ces terres par la guerre et fonder un empire indestructible.<br><br>

        <strong>Leona</strong> : (furieuse) Vous n’êtes qu’un tyran avide de pouvoir. 
        Vous pensez que tout cela est noble ? Vous êtes en train de condamner des vies innocentes, humaines et non humaines, pour votre ambition !<br><br>

        <strong>Roi Hermès X</strong> : (en ricanant) Ah, Leona... Toujours à défendre les faibles et les créatures sans importance. 
        Mais c’est la loi de ce monde : seuls les forts survivent. Et aujourd’hui, le plus fort, c’est moi.
        `,
        choices: [
            { text: "Suivant", next: "raidLeona7"},
        ]
    },

    raidLeona7: {
        text: `
        Vous serrez les poings, sentant la colère monter. 
        Derrière vous, les monstres de Leona continuent de détruire le laboratoire, réduisant en miettes les instruments des alchimistes et les cuves de monstres. 
        Mais une présence oppressante s’intensifie : le roi est sur le point de passer à l’attaque.<br><br>

        Leona vous attrape le bras, son regard brûlant de détermination.<br><br>

        <strong>Leona</strong> : On doit sauver l’œuf. Il reste une chance de stopper ce carnage sans le détruire. 
        Si on le récupère, on peut inverser ce processus et éviter une catastrophe encore pire.<br><br>

        Vous hésitez un instant, mais son argument fait écho à votre propre désir de mettre fin à ce désastre sans annihiler la vie innocente.<br><br>

        Avant que vous ne puissiez répondre, un grondement résonne derrière vous. 
        Vous vous retournez pour voir Albion, le Grand Chevalier Royal que vous aviez mis hors combat plus tôt, s’effondrer à genoux... mais il ne semble pas vaincu.
        `,
        choices: [
            { text: "Suivant", next: "raidLeona8"},
        ]
    },

    raidLeona8: {
        text: `
        Sous l’ordre impérieux du roi, Albion agrippe un lot de fioles contenant la magie pure extraite du dragon.<br><br>

        <strong>Roi Hermès X</strong> : Relève-toi, Albion. Bois ces élixirs et prouve que tu es digne d’être l’instrument de ma grandeur !<br><br>

        Albion obéit sans hésitation. 
        Il avale les fioles une par une, et ses cris de douleur se transforment en rugissements bestiaux. 
        Devant vos yeux horrifiés, son armure se fissure, remplacée par des plaques d’écailles luisantes. 
        Des ailes imposantes jaillissent de son dos, et ses yeux s’illuminent d’une lueur dorée intense.<br><br>

        Il n’est plus un homme : il est devenu un Chevalier-Dragon, une abomination alimentée par la magie du dragon.<br><br>

        <strong>Roi Hermès X</strong> : (triomphant) Magnifique... Mon chef-d’œuvre ! Une armée entière comme lui, voilà ce qui assurera ma domination absolue sur tous les royaumes !<br><br>

        Mais l’euphorie du roi est de courte durée. 
        Albion se tourne vers vous, mais son regard est vide, consumé par une rage incontrôlable. 
        Il rugit, projetant un souffle brûlant qui manque de vous réduire en cendres.

        <strong>Leona</strong> : Il a perdu la raison ! On doit l’arrêter avant qu’il ne détruise tout !
        `,
        choices: [
            { text: "Suivant", next: "raidLeona9"},
        ]
    },

    raidLeona9: {
        text: `
        Le roi ricane, dédaigneux.<br><br>

        <strong>Roi Hermès X</strong> : Un simple outil. 
        Si Albion est incontrôlable, il sera néanmoins le test parfait pour voir de quoi vous êtes capables. 
        Moi, je me réserve une adversaire digne de moi.<br><br>

        Il pointe son épée scintillante vers Leona.<br><br>

        <strong>Roi Hermès X</strong> : Approche, gamine. Montre-moi si ta soi-disant justice peut surpasser un roi.<br><br>

        Leona ne perd pas de temps et bondit à l’attaque, aussi rapide qu'un fauve. 
        Le combat singulier entre elle et le roi éclate dans un déluge de coups puissants et d’éclats d’énergie.<br><br>

        Pendant ce temps, Albion s’avance lourdement vers vous, ses ailes déployées, faisant trembler le sol à chaque pas. 
        Sa nouvelle force est écrasante, et son souffle ardent est capable de pulvériser des blocs entiers de pierre.<br><br>

        Vous vous tenez prêt, sachant que c’est à vous de neutraliser cette monstruosité avant qu’elle ne détruise le laboratoire — ou pire, l’œuf de dragon.<br><br>

        <strong>Leona</strong> : (vous criant au milieu de son duel) Tiens-le éloigné de l’œuf ! Je m’occupe du roi !<br><br>
        Vous vous lancez à l'assaut !
        `,
        choices: [
            { text: "Attaquer Albion, le Chevalier Dragon", next: "combattreAlbion2", action: fightAlbion2},
        ]
    },

    combattreAlbion2: {
        text: `
        Albion rugit et charge, balayant tout sur son passage. 
        Vous esquivez de justesse un coup de sa griffe monstrueuse, le choc créant un cratère là où vous vous teniez quelques instants auparavant. 
        Il est évident qu’affronter ce Chevalier-Dragon ne sera pas une simple affaire de force brute.<br><br>

        Il est devenu urgent de le stopper, non seulement pour protéger l’œuf, mais aussi pour empêcher qu’il ne détruise tout sur son passage. 
        Vous ajustez votre prise sur votre arme, le cœur battant à tout rompre.
        `,
    },

    raidLeona10: {
        text: `
        Le laboratoire tremble violemment, des explosions secouant ses fondations alors que vous portez le coup final à Albion. 
        Le Chevalier-Dragon rugit une dernière fois avant de s’effondrer lourdement, son corps monstrueux retrouvant une apparence humaine, vidé de toute énergie.<br><br>

        De l’autre côté de la salle, Leona parvient à désarmer le roi après un duel acharné. 
        Son épée brisée tombe au sol, et il s’effondre, vaincu et furieux.<br><br>

        <strong>Roi Hermès X</strong> : Vous... ne comprenez rien... Mes plans étaient pour le bien du royaume...<br><br>

        Leona le regarde avec un mélange de colère et de tristesse.<br><br>

        <strong>Leona</strong> : Non. Ce n’était que ta soif de pouvoir. Et regarde ce qu’elle a coûté...<br><br>

        Elle tourne son regard vers l’œuf de dragon, toujours intact malgré les ravages autour. 
        Mais les secousses deviennent plus fortes, et vous réalisez que le laboratoire ne tiendra plus longtemps.<br><br>

        <strong>Leona</strong> : On doit partir ! Prenons l’œuf !<br><br>

        Avec précaution, Leona récupère l’œuf brillant, et ensemble, vous vous précipitez hors du laboratoire en ruines. 
        Derrière vous, une explosion massive engloutit les lieux, réduisant les machinations du roi à néant.<br><br><br><br>

        Dehors, sous un ciel étoilé, vous apercevez une silhouette immense descendre des nuages. 
        Raganna, la dragonne, atterrit avec majesté sous les regards effarés des habitants rassemblés à l’extérieur du château.<br><br>

        Sa taille imposante et son aura intimidante figent tout le monde, mais elle ne montre aucune hostilité. 
        Ses yeux brillants se posent sur vous et Leona, et elle pousse un puissant grognement, presque apaisé, en récupérant son œuf.<br><br>

        Un instant, elle semble vous fixer avec intensité, puis incline légèrement la tête, comme pour vous remercier.<br><br>

        <strong>Leona</strong> : (chuchotant) C’est comme si elle comprenait... Elle sait qu’on a voulu protéger son enfant.

        Raganna s’envole alors, majestueuse, vers son repaire, disparaissant dans la nuit.
        `,
        choices: [
            { text: "Suivant", next: "finishGame1"},
        ]
    },

    finishGame1: {
        text: `
        Le lendemain, les manigances du roi Hermès X sont révélées au grand public. Les témoignages des chevaliers survivants, les preuves trouvées dans le laboratoire détruit et l’intervention de Raganne ne laissent aucun doute : son règne est marqué par la corruption et la trahison.<br><br>

        Le peuple acclame Leona et vous comme des héros, reconnaissant votre rôle dans la sauvegarde du royaume et la prévention d’une guerre mondiale.<br><br>

        Quelques semaines plus tard, le conseil royal, appuyé par le peuple, proclame Leona comme la nouvelle souveraine. Sa bravoure, son sens de la justice et son lien avec le peuple en font le choix évident.<br><br>

        Quant à vous, votre bravoure ne passe pas inaperçue. Lors d’une cérémonie grandiose dans la grande salle du trône, Leona, désormais <strong>Reine Leona</strong>, vous appelle à ses côtés.<br><br>

        <strong>Reine Leona</strong> : Pour ton courage, ta loyauté et ton rôle déterminant dans ces événements, je te nomme Grand Chevalier Royal. Que ton épée et ton cœur continuent de protéger ce royaume.<br><br>

        Les applaudissements résonnent dans toute la salle alors que vous recevez ce titre honorifique. Vous vous inclinez devant Leona, votre amie et reine, satisfait d’avoir évité un conflit mondial et apporté la paix à Realm.<br><br><br><br>

        Sous le règne de Leona, Realm entre dans une nouvelle ère. La paix avec les autres royaumes est consolidée, et les projets du roi déchu deviennent une mise en garde contre l’abus de pouvoir.<br><br>

        De votre côté, vous pouvez soit servir loyalement la couronne portant fièrement le titre de Grand Chevalier Royal, soit reprendre vos pérégrinations. Le choix vous appartient.<br><br>
        Quant à Raganna, elle reste une figure mystique et légendaire, veillant discrètement sur son royaume depuis les cieux.<br><br>

        Et ainsi, une histoire qui aurait pu plonger Realm dans les ténèbres s’est terminée sur une note d’espoir et de renouveau.
        `,
        choices: [
            { text: "Vous avez fini le Jeu !!", next: "",},
        ]
    },

};



function displaySection(sectionId) {
    playerProgression = sectionId;
    const section = story[sectionId];
    if (!section) {
        console.warn(`Section "${sectionId}" introuvable dans l'histoire.`);
        return;
    }

    // Afficher le texte de l'histoire
    textDiv.innerHTML = section.text;

    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });

    // Gérer les choix
    choicesDiv.innerHTML = ""; // Effacer les anciens choix
    if (section.choices) {
        section.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.onclick = () => displaySection(choice.next);
            button.addEventListener('click', choice.action);
            choicesDiv.appendChild(button);
        });
        nextButton.style.display = "none"; // Cacher le bouton Suivant
    } else if (section.next) {
        // Si pas de choix, afficher le bouton Suivant
        nextButton.style.display = "block";
        nextButton.onclick = () => displaySection(section.next);
    } else {
        nextButton.style.display = "none"; // Pas de suite ni choix
    }
}

// Initialisez la section de départ
displaySection("start");

button3.onclick = () => {
    useDiv.style.display = 'none';

    // Générer un nombre aléatoire entre 0 et 1
    let chance = Math.random();

    if (chance < 2 / 3) { // 2 chances sur 3 de réussir
        console.log("Vous avez réussi à vous enfuir !");
        displaySection("explore");
        monsterStats.style.display = 'none';
        actionsDiv.style.display = 'none';
        menuDiv.style.display = 'block';
    } else {
        console.log("Vous avez échoué à fuir !");
        textDiv.innerHTML += "Vous n'avez pas réussi à vous enfuir.<br><br>";
        // Vous pouvez ajouter des conséquences ici (par exemple, le monstre attaque)
        if (isPlayerDodge()) {
            textDiv.innerHTML += "Vous esquivez l'attaque du monstre.<br>";
        } else {
            let opponentDamage = getAttackValue(monsters[monsterIndex].power);
            health -= opponentDamage;
            textDiv.innerHTML += "Vous recevez " + opponentDamage + " points de dégâts.<br><br>";
        }

        if (health < 0) {
            healthText.innerText = "0";
        } else {
            healthText.innerText = health;
        }
        if (health <= 0) {
            monsterStats.style.display = 'none';
            actionsDiv.style.display = 'none';
            useDiv.style.display = 'none';
            textDiv.innerHTML += "Vous n'avez pas réussi à vous enfuir.<br><br>";
            displaySection("lose");        
        }
    }
};


// Simuler un choix de l'utilisateur
//handleChoice(story.plains.choices[0]);  
// L'utilisateur choisit "Combattre des monstres"
