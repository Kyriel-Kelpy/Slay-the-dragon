const weapons = [
    {
        index: 0,
        name: "Dague",
        power: 5, 
        durability: 80,  
        description: "Une banale dague de combat. Une arme décente pour débuter.",
        type : "weapon",
        price: 50,
        action: () => { 
            strenght = baseStrenght + 5;
            strenghtText.innerText = strenght;
        }
    },

    {
        index: 1,  
        name: "Épée courte",  
        power: 10,  
        durability: 85,  
        description: "Une épée légère et facile à manier.",
        type : "weapon",
        price: 100,
        action: () => { 
            strenght = baseStrenght + 10;
            strenghtText.innerText = strenght;
        }
    },

    {
        index: 2,  
        name: "Masse de fer", 
        power: 20,  
        durability: 65,  
        description: "Une lourde masse capable d'infliger de grands dégâts. Mais elle peut vite se briser.",
        type : "weapon",
        price: 180,
        action: () => { 
            strenght = baseStrenght + 20;
            strenghtText.innerText = strenght;
        }
    },

    {
        index: 3,  
        name: "Hache de guerre",  
        power: 18,  
        durability: 75,  
        description: "Une hache imposante, souvent utilisée par les mercenaires. Redoutable en combat rapproché.",
        type : "weapon",
        price: 170,
        action: () => { 
            strenght = baseStrenght + 18;
            strenghtText.innerText = strenght;
        }
    },

    {
        index: 4,  
        name: "Lance de bronze",  
        power: 27,  
        durability: 80,  
        description: "Une lance forgée dans un alliage de bronze, idéale pour maintenir les ennemis à distance.",
        type : "weapon",
        price: 250,
        action: () => { 
            strenght = baseStrenght + 27;
            strenghtText.innerText = strenght;
        }
    },

    {
        index: 5,  
        name: "Épée longue",
        power: 30,  
        durability: 90,  
        description: "Une épée robuste, maniée par les chevaliers. Son tranchant inspire respect et crainte.",
        type : "weapon",
        price: 300,
        action: () => { 
            strenght = baseStrenght + 30;
            strenghtText.innerText = strenght;
        }
    },

    {
        index: 6,  
        name: "Faux avec chaîne",
        power: 35,  
        durability: 80,  
        description: "Une faux géante, dont le manche est relié à une longue chaine en métal. Pratique autant pour le corps à corps que les attaques à distance, elle reste difficle à maîtriser.",
        type : "weapon",
        price: 330,
        action: () => { 
            strenght = baseStrenght + 35;
            strenghtText.innerText = strenght;
        }
    },

    {
        index: 7,  
        name: "Chakram enchanté", 
        power: 38,  
        durability: 90,  
        description: "Une chakram gravé de runes magiques. Il revient vers son lanceur après avoir blessé sa cible. Il peut aussi être utilisé au corps à corps.",
        type : "weapon",
        price: 399,
        action: () => { 
            strenght = baseStrenght + 38;
            strenghtText.innerText = strenght;
        }
    },

    {
        index: 8,
        name: "Épée en argent",
        power: 40, 
        durability: 95,  
        description: "Une magnifique lame capable d'entailler la plus solide des carapaces. Elle est presque indestructible.",
        type : "weapon",
        price: 450,
        action: () => { 
            strenght = baseStrenght + 40;
            strenghtText.innerText = strenght;
        }
    },

    {
        index: 9,  
        name: "Kalibra", 
        power: 66,  
        durability: 100,  
        description: "Une épée magique que seul un valeureux guerrier peut brandir. Sa puissance permet de surclasser même les dragons.",
        type : "weapon",
        action: () => { 
            strenght = baseStrenght + 66;
            strenghtText.innerText = strenght;
        }
    }
];

const protections = [
    {
        index: 0,
        name: "Armure de cuir",
        defense: 10,
        description: "Une armure légère en cuir tanné. Elle protège contre les coups légers tout en restant flexible.",
        type : "protection",
        price: 80,
        action: () => { 
            maxHealth += 10;
            maxHealthText.innerText = maxHealth;
        }
    },

    {
        index: 1,
        name: "Plastron d'acier",
        defense: 15,
        description: "Un plastron solide, forgé dans un acier commun. Idéal pour les aventuriers en quête de meilleures protections.",
        type : "protection",
        price: 120,
        action: () => { 
            maxHealth += 15;
            maxHealthText.innerText = maxHealth;
        }
    },

    {
        index: 2,
        name: "Haubert renforcé",
        defense: 25,
        description: "Un haubert orné de plaques métalliques, parfait pour encaisser des coups plus puissants.",
        type : "protection",
        price: 200,
        action: () => { 
            maxHealth += 25;
            maxHealthText.innerText = maxHealth;
        }
    },

    {
        index: 3,
        name: "Armure en argent",
        defense: 35,
        description: "Une armure magnifique forgée avec de l'argent de qualité.",
        type : "protection",
        price: 280,
        action: () => { 
            maxHealth += 10;
            maxHealthText.innerText = maxHealth;
        }
    },

    {
        index: 4,
        name: "Armure royale",
        defense: 45,
        description: "Une armure magistrale, très a appréciée des chevaliers du Roi. Elle est très résistante.",
        type : "protection",
        price: 360,
        action: () => { 
            maxHealth += 45;
            maxHealthText.innerText = maxHealth;
        }
    },

    {
        index: 5,
        name: "Arsenal",
        defense: 55,
        description: "Une armure magique très chère. Elle offre une défense inégalée et inspire un respect profond.",
        type : "protection",
        price: 555,
        action: () => { 
            maxHealth += 55;
            maxHealthText.innerText = maxHealth;
        }
    }
];

const accessoires = [
    {
        index: 0,
        name: "Bottes d'aventurier",
        speed: 11,
        description: "Des bottes légères, idéales pour les longs voyages.",
        type : "accessory",
        price : 60,
        action: () => { 
            speed = baseSpeed + 11;
            speedText.innerText = speed;
        }
    },

    {
        index: 1,
        name: "Cape d'explorateur",
        speed: 18,
        description: "Une cape rouge pratique pour se protéger des mauvais temps.",
        type : "accessory",
        price : 90,
        action: () => { 
            speed = baseSpeed + 18;
            speedText.innerText = speed;
        }
    },

    {
        index: 2,
        name: "Bottes d'aventurier renforcées",
        speed: 22,
        description: "Des bottes d'aventuriers plus résistantes.",
        type : "accessory",
        price : 132,
        action: () => { 
            speed = baseSpeed + 22;
            speedText.innerText = speed;
        }
    },

    {
        index: 3,
        name: "Bottes Jackalope",
        speed: 38,
        description: "Des bottes en forme de pattes de Jackalope. Bien qu'un peu grotesques, elles permettent de faire des sauts incroyables",
        type : "accessory",
        price : 220,
        action: () => { 
            speed = baseSpeed + 38;
            speedText.innerText = speed;
        }
    },

    {
        index: 4,
        name: "Cape royale",
        speed: 43,
        description: "Une cape verte très prisée par les Chevaliers de Realm",
        type : "accessory",
        price : 258,
        action: () => { 
            speed = baseSpeed + 43;
            speedText.innerText = speed;
        }
    },

    {
        index: 5,
        name: "Bague Fulguris",
        speed: 51,
        description: "une bague magique orné d'un symbole de foudre. Elle accroît considérablement la vitesse de son porteur",
        type : "accessory",
        price : 500,
        action: () => { 
            speed = baseSpeed + 51;
            speedText.innerText = speed;
        }
    }
];

const orikalk = {
    name: "Orikalk",
    defense: 65,
    description: "UUne magnifique armure dorée trouvée dans les Ruines Anciennes des Plaines Émeraudes.",
    type : "protection",
    action: () => { 
        maxHealth = maxHealth + 65;
        maxHealthText.innerText = maxHealth;
    }
}

function recompenseArlen(){
    trophieYann = 1;
    const armor = orikalk;
    playerProtections.push(armor);
    updateEquipOptions();
    showTrophie();
}

function recompenseRagam(){
    trophieRagam = 1;
    playerWeapons.push(weapons[9]);
    updateEquipOptions();
    showTrophie();
}