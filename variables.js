let xp = 0;
let lvl = 1;
let health = 100;
let maxHealth = 100;
let baseHealth = 100;
let baseStrenght = 10;
let strenght = baseStrenght;
let baseSpeed = 10;
let speed = baseSpeed;
let gold = 100;
let monsterIndex;
let monsterHealth;
let inventory = [];
let currentWeapon;
let currentWeaponDurability;
let currentProtection;
let currentAccessory;
let bestiaire = [];
let klaara = 0;
let raidLeona = 0;
let ragam = 0;
let leona = 0;
let yann = 0;
let guild = 1;
let inn = 0;
let seeker = 0;
let rodeur = 0;
let seekSuccess = 0;
let seekFail = 0;
let killMonster = 0;
let finishGame1 = 0;
let finishGame2 = 0;

let playerTrophies = [];

function defeatDragon(){
    finishGame2 = 1;
    showTrophie();
}
function defeatAlbion(){
    finishGame1 = 1;
    showTrophie();
}

const menuDiv = document.querySelector("#controls");
const actionsDiv = document.querySelector("#actions");
const useDiv = document.querySelector("#useObject");

const choicesDiv = document.querySelector("#choices");
const nextButton = document.querySelector("#nextBtn");
const textDiv = document.querySelector("#storyText");

const close = document.querySelector("#close");
const equip = document.querySelector("#equip");
const seeInventory = document.querySelector("#inventory");
const inventoryList = document.getElementById('inventory-list');
const trophies = document.querySelector("#trophies");
const bestiary = document.querySelector("#bestiaire");


const buttonSave = document.querySelector("#save");
const buttonLoad = document.querySelector("#load");


const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");
const menu4 = document.querySelector("#menu4");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const lvlText = document.querySelector("#lvlText");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const maxHealthText = document.querySelector("#maxHealthText");
const strenghtText = document.querySelector("#strenght");
const speedText = document.querySelector("#speed");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");

const monsterHealthText = document.querySelector("#monsterHealth");

menu1.onclick = () => openSection("#equip");
menu2.onclick = () => openSection("#inventory");
menu3.onclick = () => openSection("#trophies");
menu4.onclick = () => openSection("#bestiaire");

const shopDiv = document.querySelector('#shop');

function closeSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'none';
    } else {
        console.warn(`Section avec l'id "${sectionId}" introuvable.`);
    }
}

function closeShop(){
    closeSection('shop');
}

let playerWeapons = [];
let playerProtections = [];
let playerAccessoires = [];


let monsterName2 = "";
let monsterType = "";
let typeBeast = 0;
let typeSlime = 0;
let typeInsect = 0;
let typeDemon = 0;
let typeSpirit = 0;
let typeDragon = 0;
let typeReptil = 0;
let typeHumanoid = 0;
let typeWinged = 0;
let typePlant = 0;
let explorateur = 0;
let trophieKlaara =0;
let trophieRagam = 0;
let trophieYann = 0;
let goShop = 0;

function goToShop(){
    goShop++;
    showTrophie();
}

function chooseKlaara(){
    klaara = 1;
    console.log("klaara choisi");
}
function chooseRagam(){
    ragam = 1;
    console.log("ragam choisi");
}
function chooseLeona(){
    leona = 1;
    console.log("leona choisi");

}
function chooseYann(){
    yann = 1;
    console.log("yann choisi");
}
function noGuild(){
    guild = 0;
    console.log("aucun choix");
}
function traitor(){
    gold = 0;
    health -= 10;
    healthText.innerText = health;
    goldText.innerText = gold;
    if (health <= 0) {
        health = 0; // S'assurer que la santé ne descend pas en dessous de 0
        healthText.innerText = health;
        monsterStats.style.display = 'none';
        actionsDiv.style.display = 'none';
        useDiv.style.display = 'none';
        displaySection("lose"); // Fin de partie
        return;
    }
}

function goExplore(){
    menuDiv.style.display = 'block';
    explorateur++;
    showTrophie();
}
