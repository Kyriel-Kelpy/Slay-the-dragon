function updateLevel(currentXp) {
    let newLevel = Math.floor(currentXp / 100) + 1; // Calcule le niveau

    if (newLevel > lvl) {
        // Génère un nombre aléatoire entre 0, 1 et 2
        let randomStatBoost = Math.floor(Math.random() * 3);

        // Initialise un message pour afficher les augmentations
        let statMessage = "";

        // Augmente les statistiques selon la valeur aléatoire
        switch (randomStatBoost) {
            case 0:
                health += 1;
                maxHealth += 1;
                baseHealth += 1;
                speed += 1;
                baseSpeed +=1;
                strenght += 1;
                baseStrenght += 1;
                statMessage = "Vos stats ont augmenté : Santé max +1, Puissance +1, Vitesse +1.";
                strenghtText.innerText = strenght;
                speedText.innerText = speed;
                healthText.innerText = health;
                maxHealthText.innerText = maxHealth;
                break;
            case 1:
                maxHealth += 1;
                health += 1;
                baseHealth += 1;
                speed += 1;
                baseSpeed +=1;
                statMessage = "Vos statistiques ont augmenté : Santé max +1, Vitesse +1.";
                speedText.innerText = speed;
                healthText.innerText = health;
                maxHealthText.innerText = maxHealth;
                break;
            case 2:
                maxHealth += 1;
                health += 1;
                baseHealth += 1;
                strenght += 1;
                baseStrenght +=1;
                statMessage = "Vos statistiques ont augmenté : Santé max +1, Puissance +1.";
                strenghtText.innerText = strenght;
                healthText.innerText = health;
                maxHealthText.innerText = maxHealth;
                break;
        }

          // Combine les messages et affiche dans une seule boîte de dialogue
          showLevelUpDialog(`Level Up !! Vous êtes passé du niveau ${lvl} au niveau ${newLevel}.<br>${statMessage}`);
        
        // Met à jour le niveau et l'affichage
        lvl = newLevel;
        lvlText.innerText = lvl;
    }

    console.log(`XP actuel : ${currentXp}, Niveau actuel : ${lvl}`);
}

function showLevelUpDialog(message) {
    // Sélectionne le dialog box et le message de niveau
    const dialogBox = document.getElementById("levelUpDialog");
    const levelUpMessage = document.getElementById("levelUpMessage");
    
    if (!dialogBox || !levelUpMessage) {
        console.error("Les éléments levelUpDialog ou levelUpMessage sont introuvables !");
        return;
    }
    
    // Mettre à jour le contenu du message
    levelUpMessage.innerHTML = message;
    
    // Afficher la boîte de dialogue
    dialogBox.classList.remove("hidden"); // Enlever la classe "hidden" pour afficher la boîte
}

function showBroken(message) {
    // Sélectionne le dialog box et le message de niveau
    const dialogBox = document.getElementById("brokenWeapon");
    const brokenMessage = document.getElementById("brokenWeaponMsg");
    
    if (!dialogBox || !brokenMessage) {
        console.error("Les éléments levelUpDialog ou levelUpMessage sont introuvables !");
        return;
    }
    
    // Mettre à jour le contenu du message
    brokenMessage.innerText = message;
    
    // Afficher la boîte de dialogue
    dialogBox.classList.remove("hidden"); // Enlever la classe "hidden" pour afficher la boîte
}

function showEvent() {
    // Sélectionne le dialog box et le message de niveau
    const dialogBox = document.getElementById("event");
    const msg = document.getElementById("eventMsg");
    let message = "";
    
    if (!dialogBox || !msg) {
        console.error("Les éléments dDialogBox ou msg sont introuvables !");
        return;
    }

    if (lvl === 25) {
        if (klaara === 1){
            message = "Vous avez atteint le niveau 25! Il est temps de rendre une visite à Klaara la Collectionneuse.";
            displaySection("klaara2");
            // Mettre à jour le contenu du message
            msg.innerText = message;
            // Afficher la boîte de dialogue
            dialogBox.classList.remove("hidden"); // Enlever la classe "hidden" pour afficher la boîte

        }else if (ragam === 1){
            message = "Vous avez atteint le niveau 25! Il est temps de rendre une visite à Ragam la Lame Rouge.";
            displaySection("ragam2");
            // Mettre à jour le contenu du message
            msg.innerText = message;
            // Afficher la boîte de dialogue
            dialogBox.classList.remove("hidden"); // Enlever la classe "hidden" pour afficher la boîte

        }else if (leona === 1){
            message = "Vous avez atteint le niveau 25! L'un des Jackalopes de compagnie de Leona se rapproche de vous essoufflé, avec un message attaché autour du cou. La bête file dès que vous prenez le message. Les mots que vous y lisez indique que Leona Mereo est prête à vous en révéler plus sur les manigances du Roi. Elle vous donne rendez-vous dans une taverne.";
            displaySection("leona2");
            // Mettre à jour le contenu du message
            msg.innerText = message;
            // Afficher la boîte de dialogue
            dialogBox.classList.remove("hidden"); // Enlever la classe "hidden" pour afficher la boîte

        }else if (yann === 1){
            message = "Vous avez atteint le niveau 25! Il est temps de rendre une visite à Yann l'Ambidextre.";
            displaySection("yann2");
            // Mettre à jour le contenu du message
            msg.innerText = message;
            // Afficher la boîte de dialogue
            dialogBox.classList.remove("hidden"); // Enlever la classe "hidden" pour afficher la boîte

        }else if (guild === 0){
            message = "Vous avez atteint le niveau 25! Vous décidez de faire un tour à la Guilde.";
            displaySection("nomission2");
            // Mettre à jour le contenu du message
            msg.innerText = message;
            // Afficher la boîte de dialogue
            dialogBox.classList.remove("hidden"); // Enlever la classe "hidden" pour afficher la boîte

        }

        klaara = 0;
        yann = 0;
        ragam = 0;
        leona = 0;
        guild = 1;
    }
    
}

function closeLevelUpDialog() {
    const dialogBox = document.getElementById("levelUpDialog");
    dialogBox.classList.add("hidden"); // Ajouter la classe "hidden" pour masquer la boîte de dialogue
}

function closeBroken() {
    const dialogBox = document.getElementById("brokenWeapon");
    dialogBox.classList.add("hidden"); // Ajouter la classe "hidden" pour masquer la boîte de dialogue
}

function closeEvent() {
    const dialogBox = document.getElementById("event");
    dialogBox.classList.add("hidden"); // Ajouter la classe "hidden" pour masquer la boîte de dialogue
}

function closeSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'none';
    } else {
        console.warn(`Section avec l'id "${sectionId}" introuvable.`);
    }
}

function showMenu(){
    menuDiv.style.display = 'block';
}

function closeShop(){
    closeSection('shop');
    menuDiv.style.display = 'block';
}

function openSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.style.display = 'block';
    } else {
        console.warn(`Section avec l'id "${sectionId}" introuvable.`);
    }
}




function handleWeaponDurability() {
    let broken = "";
    const randomChance = Math.floor(Math.random() * 100) + 1; // Génère un nombre entre 1 et 100
    if (randomChance > currentWeaponDurability) {
        // L'arme se brise
        console.log(`${currentWeapon} s'est brisée !`);
        broken = currentWeapon + " s'est brisé !"
        showBroken(broken);
        
        // Trouver l'index de l'arme actuelle dans le tableau
        const weaponIndex = playerWeapons.findIndex(weapon => weapon.name === currentWeapon);
        
        // Retirer l'arme brisée du tableau des armes
        if (weaponIndex !== -1) {
            playerWeapons.splice(weaponIndex, 1); // Supprime l'arme du tableau
            updateEquipOptions(); // Met à jour les options d'équipement
        }
        
        // Réinitialiser les valeurs associées à l'arme
        currentWeapon = "Rien";
        currentWeaponDurability = 100; // Réinitialiser la durabilité
        strenght = baseStrenght; // Réinitialiser la force
        strenghtText.innerText = baseStrenght;
    } else {
        // L'arme ne se brise pas
        console.log(`${currentWeapon} a survécu à l'attaque.`);
    }
}





function attack() {
    useDiv.style.display = 'none';
    let playerDamage = 0;
    let opponentDamage = 0;
    textDiv.innerText = monsterName2 + " attaque !\n";

    if (currentWeapon === undefined || currentWeapon === "Rien") {
        strenght = baseStrenght;
        strenghtText.innerText = baseStrenght;
        currentWeaponDurability = 100;
        textDiv.innerText += " Vous attaquez à mains nues...\n";
    } else {
        textDiv.innerText += " Vous attaquez avec votre " + currentWeapon + ".\n";
    }

    // Joueur attaque le monstre
    if (isMonsterDodge(monsters[monsterIndex].speed)) {
        textDiv.innerText += "L'adversaire esquive votre attaque.\n";
    } else {
        playerDamage = getAttackValue(strenght);
        monsterHealth -= playerDamage;
        textDiv.innerText += "Vous infligez " + playerDamage + " points de dégâts.\n";
    }

    // Vérification après l'attaque du joueur
    if (monsterHealth <= 0) {
        monsterHealth = 0; // S'assurer que la santé du monstre ne descend pas en dessous de 0
        monsterHealthText.innerText = monsterHealth;
        defeatMonster(); // Fin du combat, pas d'attaque du monstre
        return;
    }

    // Monstre attaque le joueur
    if (isPlayerDodge()) {
        textDiv.innerText += "Vous esquivez l'attaque du monstre.\n";
    } else {
        opponentDamage = getAttackValue(monsters[monsterIndex].power);
        health -= opponentDamage;
        textDiv.innerText += "Vous recevez " + opponentDamage + " points de dégâts.\n";
    }

    // Vérification après l'attaque du monstre
    if (health <= 0) {
        health = 0; // S'assurer que la santé ne descend pas en dessous de 0
        healthText.innerText = health;
        monsterStats.style.display = 'none';
        actionsDiv.style.display = 'none';
        useDiv.style.display = 'none';
        displaySection("lose"); // Fin de partie
        return;
    }

    // Met à jour les stats si le combat continue
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;

    handleWeaponDurability();
}


function getAttackValue(power){
    const hit = power + Math.floor(Math.random() * (power * 0.2));
    return hit;
}

function isMonsterDodge (speed){
    return Math.random() * 100 < speed;
}
function isPlayerDodge (speed){
    return Math.random() * 100 < speed;
}

function defeatMonster(){
    menuDiv.style.display = 'none';
    displaySection("victory");
    killMonster++;
    useDiv.style.display = 'none';
    let bonusGold = Math.floor(monsters[monsterIndex].level * 3.5);
    gold += bonusGold;
    let bonusXp = Math.floor(monsters[monsterIndex].level * 4);
    xp += bonusXp;
    goldText.innerText = gold;
    xpText.innerText = xp;
    textDiv.innerText += "Vous avez gagné " + bonusXp + " XP\n"
    textDiv.innerText += "Vous avez gagné " + bonusGold + " pièces d'or\n"
    if (Math.floor(Math.random() * 2) === 1) {
        let randomNumber = Math.floor(Math.random() * 8);
        let butin = butins[randomNumber];
        let butinName = butins[randomNumber].name;
        inventory.push(butin);
        displayInventory();
        textDiv.innerText += "Vous avez obtenu : " + butinName + "\n"
    } else {
       textDiv.innerText += "Vous n'avez obtenu aucun butin... \n";
    }

    if (monsterName2 === "Arlen, le chevalier fantôme"){
        displaySection("yannS");
        textDiv.innerText += "Vous avez gagné " + bonusXp + " XP\n"
        textDiv.innerText += "Vous avez gagné " + bonusGold + " pièces d'or\n"
    }

    if (monsterName2 === "Arlak, le Fort"){
        menuDiv.style.display = 'block';
        displaySection("ragam5");
    }

    if (monsterName2 === "Anssio, le Rapide"){
        menuDiv.style.display = 'block';
        displaySection("ragam6");
    }

    if (monsterName2 === "Leona Mereo, la Dresseuse Gloutonne"){
        menuDiv.style.display = 'block';
        displaySection("vaincreLeona");
    }

    if (monsterName2 === "raganna, la dragonne"){
        menuDiv.style.display = 'block';
        defeatDragon();
        displaySection("finishGame2");
    }

    if (monsterName2 === "Albion, le Chevalier Royal"){
        menuDiv.style.display = 'block';
        defeatDragon();
        displaySection("victoireAlbion");
    }

    if (monsterName2 === "Albion, le Chevalier Dragon"){
        menuDiv.style.display = 'block';
        defeatAlbion();
        displaySection("raidLeona10");
    }

    if (monsterName2 === "férik"){
        textDiv.innerText += "Vous avez été maudit par la Forêt...\n\n";
        textDiv.innerText += "Vous perdez 20 points de santé maximum...\n\n";
        baseHealth -= 20;
        maxHealth -= 20;
        maxHealthText.innerText = maxHealth;
    }

    if (monsterType === "slime"){
        typeSlime++;
    }else if (monsterType === "bête"){
        typeBeast++;
    }else if (monsterType === "bête ailée"){
        typeWinged++;
    }else if (monsterType === "plante"){
        typePlant++;
    }else if (monsterType === "insecte"){
        typeInsect++;
    }else if (monsterType === "reptile"){
        typeReptil++;
    }else if (monsterType === "spirit"){
        typeSpirit++;
    }else if (monsterType === "démon"){
        typeDemon++;
    }else if (monsterType === "humanoïde"){
        typeHumanoid++;
    }else if (monsterType === "dragon"){
        typeDragon++;
    }

    monsterStats.style.display = 'none';
    actionsDiv.style.display = 'none';
    menuDiv.style.display = 'block';
    updateLevel(xp);

    showEvent();
    showTrophie();
}

// Mise à jour des listes déroulantes en fonction des équipements du joueur
function updateEquipOptions() {
    // Préserver les sélections actuelles
    const currentWeaponIndex = document.getElementById("arme").value;
    const currentProtectionIndex = document.getElementById("protection").value;
    const currentAccessoryIndex = document.getElementById("accessoire").value;

    // Réinitialiser les listes déroulantes
    document.getElementById("arme").innerHTML = '<option value="" selected>Rien</option>';
    document.getElementById("protection").innerHTML = '<option value="" selected>Rien</option>';
    document.getElementById("accessoire").innerHTML = '<option value="" selected>Rien</option>';

    // Ajouter les armes
    playerWeapons.forEach((weapon, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = weapon.name;
        document.getElementById("arme").appendChild(option);
    });

    // Ajouter les protections
    playerProtections.forEach((protection, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = protection.name;
        document.getElementById("protection").appendChild(option);
    });

    // Ajouter les accessoires
    playerAccessoires.forEach((accessory, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = accessory.name;
        document.getElementById("accessoire").appendChild(option);
    });

    // Restaurer les sélections
    if (currentWeaponIndex) {
        document.getElementById("arme").value = currentWeaponIndex;
    }
    if (currentProtectionIndex) {
        document.getElementById("protection").value = currentProtectionIndex;
    }
    if (currentAccessoryIndex) {
        document.getElementById("accessoire").value = currentAccessoryIndex;
    }
}



// Fonction pour équiper ou déséquiper un objet
function equipItem(type) {
    let selectedIndex;
    let item;

    if (type === "weapon") {
        selectedIndex = document.getElementById("arme").value;
        item = selectedIndex ? playerWeapons[selectedIndex] : null;

        if (!item) {
            // Réinitialiser la force si rien n'est sélectionné
            currentWeapon = "Rien";
            strenght = baseStrenght;
            strenghtText.innerText = baseStrenght;
            console.log("Aucune arme équipée, force réinitialisée :", strenght);
        } else {
            item.action();
            console.log(`${item.name} équipé avec succès !`);
            currentWeapon = item.name;
            currentWeaponDurability = item.durability;
            console.log(`${item.durability} de durabilite`)
        }
    } else if (type === "protection") {
        selectedIndex = document.getElementById("protection").value;
        item = selectedIndex ? playerProtections[selectedIndex] : null;
    
        if (!item) {
            // Réinitialiser la santé si rien n'est sélectionné
            maxHealth = baseHealth;
            maxHealthText.innerText = maxHealth;
            console.log("Aucune protection équipée, santé réinitialisée :", maxHealth);
            currentProtection = "Rien";
        } else {
            // Réinitialiser la santé avant d'appliquer un nouvel effet
            maxHealth = baseHealth;
    
            // Appliquer l'effet de l'item sélectionné
            item.action();
    
            console.log(`${item.name} équipé avec succès !`);
            currentProtection = item.name;
        }
    } else if (type === "accessory") {
        selectedIndex = document.getElementById("accessoire").value;
        item = selectedIndex ? playerAccessoires[selectedIndex] : null;

        if (!item) {
            // Réinitialiser la vitesse si rien n'est sélectionné
            speed = baseSpeed;
            speedText.innerText = speed;
            console.log("Aucun accessoire équipé, vitesse réinitialisée :", speed);
        } else {
            item.action();
            console.log(`${item.name} équipé avec succès !`);
            currentAccessory = item.name;
        }
    }
}


// Écouteurs d'événements pour les listes déroulantes
document.getElementById("arme").addEventListener("change", () => equipItem("weapon"));
document.getElementById("protection").addEventListener("change", () => equipItem("protection"));
document.getElementById("accessoire").addEventListener("change", () => equipItem("accessory"));

button1.onclick = attack;

function useObject() {
    const allowedItems = [
        'Parchemin magique ~ Heaven Punishment',
        'Mini potion de soin',
        'Maxi potion de soin',
        'Parchemin magique ~ Heaven Heal',
        'Parchemin magique ~ Black Divider',
        'Grelot de chat'
    ];

    const usableItems = inventory.filter(item => allowedItems.includes(item.name));

    if (usableItems.length === 0) {
        useDiv.innerHTML = `<p class="no-items-message">Aucun objet à utiliser.</p>`;
        useDiv.style.display = 'flex';
        return;
    }

    const useItemsHTML = usableItems.map((item, index) => {
        return `
            <div class="use-item">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <button class="use-button" onclick="useItem(${index})">Utiliser</button>
                <p id="message-use-${item.name}-${index}" class="use-message"></p>
            </div>
        `;
    }).join('');

    useDiv.innerHTML = useItemsHTML;
    useDiv.style.display = 'flex';
}

function useItem(index) {
    const item = inventory[index];

    if (!item) {
        console.error("Objet introuvable !");
        return;
    }

    // Vérifier si l'action est une fonction et l'exécuter
    if (typeof item.action === 'function') {
        item.action(); // Exécuter l'action définie dans l'objet
        console.log(`${item.name} a été utilisé.`);
    } else {
        console.error("Aucune action valide définie pour cet objet !");
    }

    // Retirer l'objet de l'inventaire après utilisation
    inventory.splice(index, 1);

    if (textDiv) {
        const message = document.createElement('p');
        message.textContent = `Vous avez utilisé ${item.name}.`;
        message.style.color = "orange";
        textDiv.appendChild(message);
    } else {
        console.error("textDiv n'a pas été trouvé dans le DOM !");
    }

    // Si le monstre est KO, traiter sa défaite
    if (monsterHealth <= 0) {
        defeatMonster();
    } else {
        // Si le monstre est encore vivant, gérer son attaque
        if (isPlayerDodge()) {
            textDiv.innerHTML += "Vous esquivez l'attaque du monstre.<br>";
        } else {
            let opponentDamage = getAttackValue(monsters[monsterIndex].power);
            health -= opponentDamage;
            textDiv.innerHTML += "Vous recevez " + opponentDamage + " points de dégâts.<br><br>";
        }
    }

    // Mettre à jour l'affichage de la santé du joueur
    if (health < 0) {
        healthText.innerText = 0;
    } else {
        healthText.innerText = health;
    }

    // Si la santé du joueur tombe à 0 ou moins, afficher l'écran de défaite
    if (health <= 0) {
        monsterStats.style.display = 'none';
        actionsDiv.style.display = 'none';
        useDiv.style.display = 'none';
        displaySection("lose");
    }

    // Mettre à jour l'interface utilisateur
    useDiv.style.display = 'none';
    displayInventory();
}

button2.onclick = () =>{
    useObject();
}

if (lvl === 50 && (finishGame2 !== 1 || raidLeona !== 1)){
    displaySection("lose2");        
    monsterStats.style.display = 'none';
    actionsDiv.style.display = 'none';
    useDiv.style.display = 'none';
    menuDiv.style.display = 'none';
}

