// Fonction pour afficher les équipements dans le shop
const potion = {
    globalIndex: 0,
    name: "Mini potion de soin",
    description: "Une petite potion qui restaure 30 points de santé.",
    price: 15,
    action: () => { 
        health += 30;
        if (health > maxHealth) {
            health = maxHealth;
        } 
        healthText.innerText = health;
        removeFromInventory("name", "Mini potion de soin");
        displayInventory(); // Met à jour l'affichage
    }
};

function displayShopItems() {
    menuDiv.style.display = 'none';
    // Combiner les articles à vendre et ajouter la potion en premier
    const allItems = [
        { ...potion, type: 'potion' }, // Ajouter la potion comme premier élément
        ...weapons.map((item, index) => ({ ...item, globalIndex: index + 1, type: 'weapon' })),
        ...protections.map((item, index) => ({ ...item, globalIndex: index + 1 + weapons.length, type: 'protection' })),
        ...accessoires.map((item, index) => ({ ...item, globalIndex: index + 1 + weapons.length + protections.length, type: 'accessory' }))
    ];

    const itemsForSale = allItems.filter(item => item.price); // Filtrer les objets avec un prix défini

    const shopItemsHTML = itemsForSale.map((item) => {
        return `
            <div class="shop-item">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <ul>
                    ${item.power !== undefined ? `<li><strong>Puissance :</strong> ${item.power}</li>` : ''}
                    ${item.defense !== undefined ? `<li><strong>Défense :</strong> ${item.defense}</li>` : ''}
                    ${item.speed !== undefined ? `<li><strong>Vitesse :</strong> ${item.speed}</li>` : ''}
                    ${item.durability !== undefined ? `<li><strong>Durabilité :</strong> ${item.durability}</li>` : ''}
                </ul>
                <p><strong>Prix :</strong> ${item.price} pièces d'or</p>
                <button class="buy-button" onclick="buyItem(${item.globalIndex}, '${item.type}')">Acheter</button>
                <p id="message-${item.type}-${item.globalIndex}" class="buy-message"></p>
            </div>
        `;
    }).join('');

    shopDiv.innerHTML = shopItemsHTML; // Met à jour le shop
    
    shopDiv.style.display = 'flex';
}

// Fonction pour acheter un équipement
function buyItem(index, type) {
    console.log("buyItem appelée avec index :", index, "et type :", type);
    const item = getItemByIndex(index, type); // Récupère l'équipement par son index et son type
    const messageElement = document.getElementById(`message-${type}-${index}`);
    
    if (!item) {
        console.error("Équipement introuvable !");
        return;
    }

    if (gold < item.price) {
        messageElement.textContent = "Pas assez de pièces d'or";
        messageElement.style.color = "red";
        messageElement.style.display = "block";
    } else {
        gold -= item.price;
        goldText.innerText = gold;
        messageElement.textContent = "Achat réussi !";
        messageElement.style.color = "green";
        messageElement.style.display = "block";

        // Ajouter l'objet au bon tableau
        switch (type) {
            case 'weapon':
                playerWeapons.push(item);
                updateEquipOptions(); // Mettre à jour les listes déroulantes
                break;
            case 'protection':
                playerProtections.push(item);
                updateEquipOptions(); // Mettre à jour les listes déroulantes
                break;
            case 'accessory':
                playerAccessoires.push(item);
                updateEquipOptions(); // Mettre à jour les listes déroulantes
                break;
            case 'potion':
                inventory.push(item); // Ajoute la potion à l'inventaire
                break;
            default:
                console.warn("Type d'équipement inconnu.");
        }
        displayInventory();
        console.log(`Or restant : ${gold}`);
    }
}

// Fonction pour récupérer un équipement par son index et type
function getItemByIndex(index, type) {
    console.log("getItemByIndex appelée avec index :", index, "et type :", type);
    if (type === 'potion') {
        return potion; // Retourne la potion
    }

    switch (type) {
        case 'weapon':
            return weapons[index - 1]; // Compte pour l'index décalé
        case 'protection':
            return protections[index - 1 - weapons.length];
        case 'accessory':
            return accessoires[index - 1 - weapons.length - protections.length];
        default:
            return null;
    }
}

function sellItems() {
    menuDiv.style.display = 'none';
    // Liste des noms des objets autorisés à être vendus (uniquement pour l'inventaire)
    const allowedItems = ['Joyau', 'Gemme', 'Mini potion de soin', 'Maxi potion de soin'];

    // Combiner tous les objets vendables
    const sellableItems = [
        ...inventory.filter(item => allowedItems.includes(item.name) && item.price > 0).map((item, index) => ({ ...item, source: 'inventory', index })),
        ...playerWeapons.filter(item => item.price > 0).map((item, index) => ({ ...item, source: 'weapon', index })),
        ...playerProtections.filter(item => item.price > 0).map((item, index) => ({ ...item, source: 'protection', index })),
        ...playerAccessoires.filter(item => item.price > 0).map((item, index) => ({ ...item, source: 'accessory', index }))
    ];

    // Vérifier s'il y a des objets à vendre
    if (sellableItems.length === 0) {
        shopDiv.innerHTML = `<p class="no-items-message">Aucun objet à vendre.</p>`;
        shopDiv.style.display = 'flex'; // Affiche la section même si vide
        return;
    }

    // Créer le HTML pour les objets à vendre
    const sellItemsHTML = sellableItems.map((item, globalIndex) => {
        const isDiscounted = ['weapon', 'protection', 'accessory'].includes(item.source);  // Vérifier si l'objet appartient aux catégories concernées
        const displayPrice = isDiscounted ? Math.floor(item.price * 0.5) : item.price;  // Appliquer la réduction si nécessaire
        const priceText = isDiscounted ? `Prix : ${displayPrice} pièces d'or (Réduit)` : `Prix : ${displayPrice} pièces d'or`;  // Afficher le prix réduit ou normal

        return `
            <div class="sell-item">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>${priceText}</p>
                <button class="sell-button" onclick="sellItem('${item.source}', ${globalIndex})">Vendre</button>
                <p id="message-sell-${item.source}-${globalIndex}" class="sell-message"></p>
            </div>
        `;
    }).join('');

    // Mettre à jour l'interface utilisateur
    shopDiv.innerHTML = sellItemsHTML; // `shopDiv` est le conteneur pour afficher les objets à vendre
    shopDiv.style.display = 'flex'; // Affiche la section de vente
}


// Fonction pour vendre un objet
function sellItem(source, index) {
    let item;
    let collection;

    // Identifier la collection source et récupérer l'objet
    switch (source) {
        case 'inventory':
            collection = inventory;
            break;
        case 'weapon':
            collection = playerWeapons;
            break;
        case 'protection':
            collection = playerProtections;
            break;
        case 'accessory':
            collection = playerAccessoires;
            break;
        default:
            console.error("Source inconnue !");
            return;
    }

    // Utiliser l'index pour accéder à l'objet dans la collection vendable (sellableItems)
    item = collection[index];
    if (!item) {
        console.error(`Objet introuvable dans la collection ${source} à l'index ${index}.`);
        return;
    }

    // Validation du prix de l'objet
    if (!item.price || isNaN(item.price)) {
        console.error(`Prix invalide pour l'objet : ${item.name}. Vente annulée.`);
        return;
    }

    // Calculer le prix de vente
    const isDiscounted = ['weapon', 'protection', 'accessory'].includes(source);
    const sellPrice = isDiscounted ? Math.floor(item.price * 0.5) : item.price;

    // Mettre à jour le gold
    const newGold = gold + sellPrice;
    if (isNaN(newGold)) {
        console.error("Erreur : la valeur de gold est invalide après la vente.");
        return;
    }
    gold = newGold;
    goldText.innerText = gold;

    // Supprimer l'objet de sa collection
    collection.splice(index, 1);

    // Ajouter un message de confirmation
    if (textDiv) {
        const message = document.createElement('p');
        message.textContent = `Vente réussie ! Vous avez gagné ${sellPrice} pièces d'or.`;
        message.style.color = "orange";
        textDiv.appendChild(message);
    } else {
        console.error("textDiv n'a pas été trouvé dans le DOM !");
    }

    // Réafficher les objets restants à vendre
    sellItems();
    updateEquipOptions();
    displayInventory();
}

