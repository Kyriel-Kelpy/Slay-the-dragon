const butins = [
    // Potions de soin
    {
        index: 0,
        name: "Mini potion de soin",
        description: "Une petite potion qui restaure 30 points de santé.",
        price: 15,
        action: () => { 
            health += 30;
            if (health > maxHealth){
                health = maxHealth;
            } 
            healthText.innerText = health;
            removeFromInventory("index", 0);
            displayInventory(); // Met à jour l'affichage
        }
    },
    {
        index: 1,
        name: "Maxi potion de soin",
        description: "Une potion qui restaure 60 points de santé.",
        price: 30,
        action: () => { 
            health += 60;
            if (health > maxHealth){
                health = maxHealth;
            }
            healthText.innerText = health;
            removeFromInventory("index", 1);
            displayInventory(); // Met à jour l'affichage
        }
    },

    // Parchemins magiques
    {
        index: 2,
        name: "Parchemin magique ~ Heaven Punishment",
        description: "Libère une force magique qui frappe l'ennemi à tous les coups et lui inflige 50 points de dégâts.",
        action: () => {
            monsterHealth -= 50;
            monsterHealthText.innerText = monsterHealth;
            removeFromInventory("index", 2);
            displayInventory(); // Met à jour l'affichage
        }
    },
    {
        index: 3,
        name: "Parchemin magique ~ Fairy Kiss",
        description: "Augmente votre total maximum de santé de 5 points.",
        action: () => {
            baseHealth += 5;
            maxHealth += 5; 
            health += 5;
            maxHealthText.innerText = maxHealth;
            healthText.innerText = health; 
            removeFromInventory("index", 3);
            displayInventory(); // Met à jour l'affichage
        }
    },
    {
        index: 4,
        name: "Parchemin magique ~ Fairy Blessing",
        description: "Augmente votre puissance de 1 point et votre vitesse de 1 point.",
        action: () => { 
            baseSpeed += 1;
            speed += 1; 
            baseStrenght += 1;
            strenght += 1;
            speedText.innerText = speed;
            strenghtText.innerText = strenght; 
            removeFromInventory("index", 4);
            displayInventory(); // Met à jour l'affichage
        }
    },
    {
        index: 5,
        name: "Parchemin magique ~ Heaven Heal",
        description: "Restaure 50 points de santé.",
        action: () => { 
            health += 50;
            if (health > maxHealth){
                health = maxHealth;
            }
            healthText.innerText = health;
            removeFromInventory("index", 5);
            displayInventory(); // Met à jour l'affichage
        }
    },

    // Pierres précieuses
    {
        index: 6,
        name: "Joyau",
        description: "Une pierre précieuse qui se vend à bon prix",
        price: 50
    },
    {
        index: 7,
        name: "Gemme",
        description: "Une pierre précieuse qui se vend très cher",
        price: 100
    },
    // Parchemin magique ultime
    {
        index: 8,
        name: "Parchemin magique ~ Black Divider",
        description: "Parchemin magique légendaire. Lance un très puissant sort qui divise l'endurance de la cible par trois",
        action: () => {
            monsterHealth = Math.floor(monsterHealth / 3);
            monsterHealthText.innerText = monsterHealth;
            removeFromInventory("index", 8);
            displayInventory(); // Met à jour l'affichage
       }
    },

    // Recompense speciale
    {
        index: 9,
        name: "Grelot de chat",
        description: "Ce drôle d'artefact permet d'invoquer une seule fois Mio, un chat spirit légendaire. Il lance le sort Miaou-Miaou et divise la santé de l'adversaire par deux.",
        action: () => {
            monsterHealth = Math.floor(monsterHealth / 2);
            monsterHealthText.innerText = monsterHealth;
            removeFromInventory("index", 9);
            displayInventory(); // Met à jour l'affichage
       }
    }
];

function recompenseKlaara(){
    trophieKlaara = 1;
    let butin = butins[8];
    inventory.push(butin);
    displayInventory();
    showTrophie();
}
