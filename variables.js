// ================== Difficulté, pseudo & courbe d'XP ==================
// Réglages par difficulté : plafond d'inventaire (objets de type "inventory",
// hors armes/protections/accessoires possédés, qui restent illimités),
// multiplicateur d'XP gagnée et multiplicateur de taux de drop de butin.
const difficultySettings = {
    novice:     { label: "Novice",     inventoryCap: Infinity, xpMultiplier: 1,    dropMultiplier: 1 },
    aventurier: { label: "Aventurier", inventoryCap: 6,        xpMultiplier: 0.75, dropMultiplier: 0.7 },
    heroique:   { label: "Héroïque",   inventoryCap: 4,        xpMultiplier: 0.5,  dropMultiplier: 0.5 }
};

let pseudo = "";
let difficulty = "novice"; // Valeur par défaut tant que le joueur n'a pas choisi via l'écran d'intro

function getDifficultySettings() {
    return difficultySettings[difficulty] || difficultySettings.novice;
}
function getXpMultiplier() {
    return getDifficultySettings().xpMultiplier;
}
function getDropMultiplier() {
    return getDifficultySettings().dropMultiplier;
}
function getInventoryCap() {
    return getDifficultySettings().inventoryCap;
}
function hasInventorySpace() {
    return inventory.length < getInventoryCap();
}

// Affiche pseudo + difficulté dans le panneau "Infos" du menu
function updateInfosSection() {
    const infosPseudo = document.getElementById("infosPseudo");
    const infosDifficulty = document.getElementById("infosDifficulty");
    const infosAttack = document.getElementById("infosAttack");
    const infosSpeed = document.getElementById("infosSpeed");
    const infosScoreValue = document.getElementById("infosScoreValue");
    const infosScoreDetails = document.getElementById("infosScoreDetails");

    if (infosPseudo) infosPseudo.innerText = pseudo || "Aventurier inconnu";
    if (infosDifficulty) infosDifficulty.innerText = getDifficultySettings().label;
    // Valeurs totales actuelles (équipement/effets compris), pas les valeurs de base
    if (infosAttack) infosAttack.innerText = strenght;
    if (infosSpeed) infosSpeed.innerText = speed;

    if (infosScoreValue && infosScoreDetails) {
        const { total, details } = computeScore();
        infosScoreValue.innerText = `${total} / 100`;
        infosScoreDetails.innerHTML = "";
        details.forEach(detail => {
            const li = document.createElement("li");
            const label = document.createElement("span");
            label.innerText = detail.label;
            const points = document.createElement("strong");
            points.innerText = (detail.points >= 0 ? "+" : "") + detail.points;
            li.appendChild(label);
            li.appendChild(points);
            infosScoreDetails.appendChild(li);
        });
    }
}

// Ajoute le pseudo choisi à l'intro comme option sélectionnable dans le menu
// déroulant des titres, et en fait le titre affiché par défaut (à la place
// du placeholder générique "Aventurier").
function addPseudoTitleOption() {
    const titleSelect = document.getElementById("titleSelect");
    if (!titleSelect || !pseudo) return;

    let pseudoOption = titleSelect.querySelector('option[data-pseudo-option="true"]');
    if (!pseudoOption) {
        pseudoOption = document.createElement("option");
        pseudoOption.dataset.pseudoOption = "true";
        titleSelect.insertBefore(pseudoOption, titleSelect.firstChild);
    }
    pseudoOption.value = pseudo;
    pseudoOption.textContent = pseudo;
    titleSelect.value = pseudo;
}

// Réinitialise complètement la partie (stats, inventaire, sauvegarde) et
// relance le jeu depuis l'écran d'intro.
function startNewGame() {
    const confirmed = confirm(
        "Cela va effacer la sauvegarde actuelle et recommencer une nouvelle partie depuis le début. Continuer ?"
    );
    if (!confirmed) return;
    localStorage.removeItem("slayTheDragonSave");
    location.reload();
}

// Objet en attente d'ajout tant que le joueur n'a pas libéré une place
let pendingLoot = null;

// Ajoute un objet à l'inventaire en respectant le plafond de la difficulté.
// Si l'inventaire est plein, l'objet est mis en attente et une fenêtre
// demande au joueur de jeter un objet existant pour libérer une place ;
// l'objet en attente est alors ajouté automatiquement.
function addToInventory(item, obtainedMessage) {
    if (hasInventorySpace()) {
        inventory.push(item);
        displayInventory();
        if (obtainedMessage) textDiv.innerText += obtainedMessage;
        return true;
    }
    pendingLoot = { item: item, message: obtainedMessage };
    textDiv.innerText += `Votre inventaire est plein ! Jetez un objet pour récupérer : ${item.name}\n`;
    promptDiscardItem();
    return false;
}

function promptDiscardItem() {
    const discardList = document.getElementById("discardList");
    const discardPrompt = document.getElementById("discardPrompt");
    if (!discardList || !discardPrompt) return;

    discardList.innerHTML = "";
    inventory.forEach((invItem, index) => {
        const li = document.createElement("li");
        const name = document.createElement("strong");
        name.innerText = invItem.name;
        li.appendChild(name);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.innerText = "Jeter";
        btn.onclick = () => discardItemAt(index);
        li.appendChild(btn);

        discardList.appendChild(li);
    });

    discardPrompt.classList.remove("hidden");
}

function discardItemAt(index) {
    inventory.splice(index, 1);

    if (pendingLoot) {
        const loot = pendingLoot;
        pendingLoot = null;
        inventory.push(loot.item);
        if (loot.message) textDiv.innerText += loot.message;
    }

    displayInventory();

    const discardPrompt = document.getElementById("discardPrompt");
    if (discardPrompt) discardPrompt.classList.add("hidden");
}

// Coût en XP pour passer du niveau `level` au niveau `level + 1`.
// Progressif (100, 110, 120, ...) pour éviter que les gros gains d'XP de
// fin de jeu ne fassent grimper plusieurs niveaux d'un coup.
function xpCostForLevel(level) {
    return 100 + (level - 1) * 10;
}

// XP total cumulé nécessaire pour atteindre `level`.
function xpRequiredForLevel(level) {
    let total = 0;
    for (let l = 1; l < level; l++) {
        total += xpCostForLevel(l);
    }
    return total;
}

// Calcule le niveau correspondant à un total d'XP donné, en tenant compte
// du coût progressif par niveau.
function computeLevelFromXp(xpValue) {
    let level = 1;
    while (xpValue >= xpRequiredForLevel(level + 1)) {
        level++;
    }
    return level;
}

// ================== Score de fin de partie ==================
// Calcule un score sur 100 selon : la fin atteinte, le bestiaire découvert,
// les succès débloqués, le niveau atteint et un bonus lié à la difficulté.
function computeScore() {
    const details = [];
    let total = 0;

    // Fin atteinte (jusqu'à 30)
    let endingPoints = 0;
    if (typeof finishGame1 !== "undefined" && finishGame1 === 1) {
        endingPoints = 30;
        details.push({ label: "Fin : Reine Leona", points: endingPoints });
    } else if (typeof finishGame2 !== "undefined" && finishGame2 === 1) {
        endingPoints = 18;
        details.push({ label: "Fin : Sauveur de Realm", points: endingPoints });
    } else {
        details.push({ label: "Fin de la partie", points: 0 });
    }
    total += endingPoints;

    // Bestiaire découvert (jusqu'à 20)
    const totalMonsters = (typeof monsters !== "undefined" && monsters.length) || 0;
    const bestiaireRatio = totalMonsters > 0 ? bestiaire.length / totalMonsters : 0;
    const bestiairePoints = Math.round(bestiaireRatio * 20);
    details.push({ label: `Bestiaire découvert (${bestiaire.length}/${totalMonsters})`, points: bestiairePoints });
    total += bestiairePoints;

    // Succès débloqués (jusqu'à 20)
    const totalTitres = (typeof titres !== "undefined" && titres.length) || 0;
    const successRatio = totalTitres > 0 ? playerTrophies.length / totalTitres : 0;
    const successPoints = Math.round(successRatio * 20);
    details.push({ label: `Succès débloqués (${playerTrophies.length}/${totalTitres})`, points: successPoints });
    total += successPoints;

    // Niveau atteint, plafonné au niveau 50 (jusqu'à 15)
    const levelRatio = Math.min(lvl / 50, 1);
    const levelPoints = Math.round(levelRatio * 15);
    details.push({ label: `Niveau atteint (${lvl}/50)`, points: levelPoints });
    total += levelPoints;

    // Bonus lié à la difficulté choisie (jusqu'à 15)
    const difficultyBonus = { novice: 0, aventurier: 8, heroique: 15 };
    const diffPoints = difficultyBonus[difficulty] || 0;
    details.push({ label: `Difficulté : ${getDifficultySettings().label}`, points: diffPoints });
    total += diffPoints;

    total = Math.max(0, Math.min(total, 100));

    return { total, details };
}

// Affiche la fenêtre de révélation du score à la fin de la partie.
function revealScore() {
    const scoreDialog = document.getElementById("scoreReveal");
    const scoreValue = document.getElementById("scoreValue");
    const scoreDetails = document.getElementById("scoreDetails");
    if (!scoreDialog || !scoreValue || !scoreDetails) return;

    const { total, details } = computeScore();

    scoreValue.innerText = `${total} / 100`;
    scoreDetails.innerHTML = "";
    details.forEach(detail => {
        const li = document.createElement("li");
        const label = document.createElement("span");
        label.innerText = detail.label;
        const points = document.createElement("strong");
        points.innerText = (detail.points >= 0 ? "+" : "") + detail.points;
        li.appendChild(label);
        li.appendChild(points);
        scoreDetails.appendChild(li);
    });

    scoreDialog.classList.remove("hidden");
}

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
let playerProgression = "";
let playerTrophies = [];

function defeatDragon(){
    finishGame2 = 1;
    showTrophie();
}
function defeatAlbion(){
    finishGame1 = 1;
    showTrophie();
}


const menuDiv = document.querySelector("#afficheMenu");
const menuContent = document.querySelector("#controls");
menuContent.style.display = 'none';
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
const menu5 = document.querySelector("#menu5");
const newGameBtn = document.querySelector("#newGameBtn");

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
menu5.onclick = () => {
    updateInfosSection();
    openSection("#infos");
};
newGameBtn.onclick = startNewGame;

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

function afficheMenu(){
    if (menuContent.style.display === 'none'){
        menuContent.style.display = 'block';
    } else {
        menuContent.style.display = 'none';
    }
}

menuDiv.onclick = afficheMenu;

// ================== Écran d'intro : pseudo + difficulté ==================
(function setupIntroScreen() {
    const introScreen = document.getElementById("introScreen");
    const pseudoInput = document.getElementById("pseudoInput");
    const startBtn = document.getElementById("startAdventureBtn");
    const introError = document.getElementById("introError");
    const introLoadBtn = document.getElementById("introLoadBtn");
    const difficultyButtons = document.querySelectorAll(".difficulty-btn");

    if (!introScreen || !startBtn) return;

    // Si une sauvegarde existe déjà, on propose de la charger directement
    // depuis l'écran d'intro plutôt que d'obliger à recommencer.
    if (introLoadBtn) {
        if (localStorage.getItem("slayTheDragonSave")) {
            introLoadBtn.classList.remove("hidden");
            introLoadBtn.onclick = () => {
                loadGame();
            };
        } else {
            introLoadBtn.classList.add("hidden");
        }
    }

    let chosenDifficulty = null;

    difficultyButtons.forEach(btn => {
        btn.onclick = () => {
            chosenDifficulty = btn.dataset.difficulty;
            difficultyButtons.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            if (introError) introError.classList.add("hidden");
        };
    });

    startBtn.onclick = () => {
        const typedPseudo = (pseudoInput.value || "").trim();
        if (!typedPseudo) {
            introError.textContent = "Merci d'entrer un nom d'aventurier.";
            introError.classList.remove("hidden");
            return;
        }
        if (!chosenDifficulty) {
            introError.textContent = "Merci de choisir une difficulté.";
            introError.classList.remove("hidden");
            return;
        }
        pseudo = typedPseudo;
        difficulty = chosenDifficulty;
        addPseudoTitleOption();
        introScreen.classList.add("hidden");
    };
})();
