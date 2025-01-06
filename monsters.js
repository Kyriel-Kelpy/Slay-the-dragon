const monsters = [
    {
        index : 0,
        name: "flaskeu",
        level: 2,
        health : 20,
        power : 5,
        speed : 5,
        description : "Une petite gelée verte vivante",
        type: "slime",
        zone : "plaines émeraudes",
        butin : ""
    },

    {
        index : 1,
        name: "viskeu",
        level: 4,
        health : 40,
        power : 10,
        speed : 10,
        description : "Une grosse gelée rouge vivante. Il naît de la fusion de deux Flaskeu",
        type: "slime",
        zone : "plaines émeraudes",
        butin : ""
    },

    {
        index : 2,
        name: "grorat",
        level: 3,
        health : 35,
        power : 13,
        speed : 9,
        description : "Un rongeur géant haut d'environ un mètre.",
        type: "bête",
        zone : "plaines émeraudes",
        butin : ""
    },

    {
        index : 3,
        name: "jackalope",
        level: 3,
        health : 18,
        power : 22,
        speed : 11,
        description : "Un lapin sauvage ayant d'énormes pattes postérieures. Leurs coups de pieds sont redoutables",
        type: "bête",
        zone : "plaines émeraudes",
        butin : ""
    },

    {
        index : 4,
        name: "kokorikoko",
        level: 5,
        health : 40,
        power : 22,
        speed : 13,
        description : "Un oiseau qui attaque en piqué. Il crie souvent kokori quand il se lance à l'attaque",
        type: "bête ailée",
        zone : "plaines émeraudes",
        butin : ""
    },

    {
        index : 5,
        name: "champi boxeur",
        level: 4,
        health : 33,
        power : 28,
        speed : 8,
        description : "Un drôle de grand champignon immobile, faisant les un mètre et demi. Pourvu de mains en forme de gants de boxe, ses attaques font très mal. Mais ca vaut le coup de le cuisiner",
        type: "plante",
        zone : "plaines émeraudes",
        butin : ""
    },

    {
        index : 6,
        name: "chifoumi",
        level: 6,
        health : 46,
        power : 36,
        speed : 10,
        description : "Une fourmi géante noire très résistante",
        type: "insecte",
        zone : "plaines émeraudes",
        butin : ""
    },

    {
        index : 7,
        name: "magrouilleur",
        level: 8,
        health : 49,
        power : 29,
        speed : 18,
        description : "Un reptile humanoïde à peau verte qui vit en tribu. Il manie même une lance",
        type: "reptile",
        zone : "plaines émeraudes",
        butin : ""

    },

    {
        index : 8,
        name: "magrouilleur noir",
        level: 9,
        health : 55,
        power : 36,
        speed : 20,
        description : "Un magrouilleur rare, plus puissant que les autres. Il dirige une tribu de magrouilleurs",
        type: "reptile",
        zone : "plaines émeraudes",
        butin : ""
    },

    {
        index : 9,
        name: "lupus",
        level: 8,
        health : 40,
        power : 22,
        speed : 14,
        description : "Un loup noir, habitué àchasser de nuit et à se fondre dans l'ombre",
        type: "bête",
        zone : "forêt lugubre",
        butin : ""
    },

    {
        index : 10,
        name: "araknofobia",
        level: 9,
        health : 30,
        power : 20,
        speed : 40,
        description : "Une araignée aussi grosse qu'un chien adulte. Elle est très rapide.",
        type: "insecte",
        zone : "forêt lugubre",
        butin : ""
    },

    {
        index : 11,
        name: "spektral",
        level: 10,
        health : 30,
        power : 15,
        speed : 50,
        description : "Une créature fantomatique qui se matérialise le temps de frapper. Elle est très difficile à toucher",
        type: "spirit",
        zone : "forêt lugubre",
        butin : ""
    },

    {
        index : 12,
        name: "bouzeu",
        level: 11,
        health : 40,
        power : 20,
        speed : 60,
        description : "Une flaque de boue animée. Cette créature se fond dans les marais pour piéger les aventuriers",
        type: "slime",
        zone : "forêt lugubre",
        butin : ""
    },

    {
        index : 13,
        name: "lupus blanc",
        level: 16,
        health : 69,
        power : 44,
        speed : 30,
        description : "Un lupus solitaire. Rejetés par leurs semblables à cause de la couleur de leur pelage, ils préfèrent chasser de jour. Ils sont très féroces",
        type: "bête",
        zone : "forêt lugubre",
        butin : ""
    },

    {
        index : 14,
        name: "yaga",
        level: 13,
        health : 47,
        power : 21,
        speed : 20,
        description : "Créature humanoïde à peau bleue qui vit dans les forêts. Les yagas attaquent en embuscade avec des arcs ou projectiles. Ils dévorent les humains.",
        type: "démon",
        zone : "forêt lugubre",
        butin : ""
    },

    {
        index : 15,
        name: "venominaga",
        level: 17,
        health : 70,
        power : 49,
        speed : 49,
        description : "Un serpent géant aux écailles vertes scintillantes. ",
        type: "reptile",
        zone : "forêt lugubre",
        butin : ""
    },

    {
        index : 16,
        name: "férik",
        level: 25,
        health : 10,
        power : 0,
        speed : 75,
        description : "Une magnifique créature humanoïde dotée d'ailes. Quiconque en élimine une subira une malédiction.",
        type: "spirit",
        zone : "forêt lugubre",
        butin : ""
    },

    {
        index : 17,
        name: "baba yaga",
        level: 19,
        health : 57,
        power : 41,
        speed : 40,
        description : "Un yaga doué en combat rapproché contrairement aux autres. Ils se battent à mains nues mais possèdent yne force incroyable",
        type: "démon",
        zone : "forêt lugubre",
        butin : ""
    },

    {
        index : 18,
        name: "limule",
        level: 16,
        health : 60,
        power : 30,
        speed : 75,
        description : "Une gelée de couleur bleue. C'est le plus puissant des slimes. Il nait de la fusion d'au moins trois Flaskeu",
        type: "slime",
        zone : "grottes obscures",
        butin : ""
    },

    {
        index : 19,
        name: "colosse cornu",
        level: 18,
        health : 70,
        power : 43,
        speed : 15,
        description : "Un monstre humanoïde géant qui aime balancer de gros rochers sur ses adversaires pour les écraser",
        type: "humanoïde",
        zone : "grottes obscures",
        butin : ""
    },

    {
        index : 20,
        name: "homo-lupus",
        level: 20,
        health : 80,
        power : 44,
        speed : 59,
        description : "Fusion entre un homme et un lupus, suite à une malédiction. Ce lupus humanoïde est très agile",
        type: "bête",
        zone : "grottes obscures",
        butin : ""
    },

    {
        index : 21,
        name: "dragon des cavernes",
        level: 19,
        health : 91,
        power : 51,
        speed : 41,
        description : "Un dragon noir qui établit son repère dans les grottes. Ses coups de queue sont redoutables",
        type: "dragon",
        zone : "grottes obscures",
        butin : ""
    },

    {
        index : 22,
        name: "geist",
        level: 21,
        health : 71,
        power : 33,
        speed : 71,
        description : "Une créature fantomatique insaisissable capable de se glisser dans les ombres",
        type: "spirit",
        zone : "grottes obscures",
        butin : ""
    },

    {
        index : 23,
        name: "fodragon des cavernes",
        level: 19,
        health : 81,
        power : 31,
        speed : 21,
        description : "Un gros reptile qu'on peut confondre avec un dragon. Il n'a pas d'ailes comme les dragons et ne crache pas de feu, mais reste quand même redoutable",
        type: "reptile",
        zone : "grottes obscures",
        butin : ""        
    },

    {
        index : 24,
        name: "golem antique",
        level: 22,
        health : 150,
        power : 45,
        speed : 20,
        description : "Créature animée par une ancienne magie. Il est quasi indestructible",
        type: "humanoïde",
        zone : "grottes obscures",
        butin : ""

    },

    {
        index : 25,
        name: "skeletik",
        level: 23,
        health : 39,
        power : 49,
        speed : 40,
        description : "Squelette d'un aventurier mort ramené à la vie par un sombral pour le servir. Peu résistant, mais redoutable.",
        type: "spirit",
        zone : "grottes obscures",
        butin : ""
    },

    {
        index : 26,
        name: "sombral",
        level: 25,
        health : 200,
        power : 50,
        speed : 51,
        description : "La plus puissante créature vivant dans les grottes obscures. Rares sont ceux qui survivent aux assauts de sa faux",
        type: "démon",
        zone : "grottes obscures",
        butin : ""
    },

    {
        index : 100,
        name: "raganna, la dragonne",
        level: 60,
        health : 600,
        power : 60,
        speed : 60,
        description : "Un dragon surpuissant qui habite les montagnes. Nul ne sait pourquoi il attaque les villes de Realm",
        type: "dragon",
        zone : "Montagnes",
        butin : ""
    },

    {
        index : 101,
        name: "golem doré",
        level: 45,
        health : 400,
        power : 55,
        speed : 30,
        description : "Un golem en or gardien d'un trésor enfoui dans les grottes obscures",
        type: "dragon",
        zone : "grottes obscures",
        butin : ""
    },

    {
        index : 102,
        name: "Arlen, le chevalier fantôme",
        level: 40,
        health : 300,
        power : 40,
        speed : 45,
        description : "Un chevalier fantôme qui garde les Ruines du château de son Roi, même après la mort.",
        type: "spirit",
        zone : "ruines plaines émeraudes",
        butin : ""
    },

    {
        index : 103,
        name: "Arlak, le Fort",
        level: 20,
        health : 100,
        power : 40,
        speed : 30,
        description : "L'un des deux meilleurs disciples de Ragam. Il possède une grande force physique.",
        type: "humain",
        zone : "École d'Escrime Épée Cramoisie",
        butin : ""
    },

    {
        index : 104,
        name: "Anssio, le Rapide",
        level: 20,
        health : 100,
        power : 20,
        speed : 60,
        description : "L'un des deux meilleurs disciples de Ragam. Il possède une grande agilité.",
        type: "humain",
        zone : "École d'Escrime Épée Cramoisie",
        butin : ""
    },

    {
        index : 105,
        name: "Leona Mereo, la Dresseuse Gloutonne",
        level: 39,
        health : 139,
        power : 39,
        speed : 69,
        description : "Une dresseuse farouche qui protège le Dragon Ancien des aventuriers en quête de l'éliminer.",
        type: "humain",
        zone : "Realm",
        butin : ""
    },

    {
        index : 106,
        name: "Albion, le Chevalier Royal",
        level: 40,
        health : 140,
        power : 40,
        speed : 70,
        description : "Le plus puissant Chevalier Royal de Realm. Sa loyauté envers le Roi est sans failles.",
        type: "humain",
        zone : "Realm",
        butin : ""
    },

    {
        index : 107,
        name: "Albion, le Chevalier Dragon",
        level: 50,
        health : 500,
        power : 55,
        speed : 55,
        description : "Un Chevalier Royal gorgé d'énergie vitale de Dragon Ancien. Il pourrait réduire en cendres des quartiers de Realm s'il le souhaite...",
        type: "dragon",
        zone : "Realm",
        butin : ""
    },
];
