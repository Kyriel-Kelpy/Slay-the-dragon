// ================== Colisée : combats payants contre des adversaires boostés ==================
// Principe : on paie un droit d'entrée, un monstre déjà rencontré (jamais un
// boss d'événement ni "férik", voir SPECIAL_MONSTER_NAMES) est tiré au sort
// et affronté avec des statistiques largement gonflées. Le combat utilise le
// moteur normal (attaque, esquive, objets, fuite). Victoire = grosse
// récompense d'XP. Défaite = pas de game over, juste une évacuation coûteuse.

const COLISEE_HEALTH_MULT = 2.2;
const COLISEE_POWER_MULT = 1.7;
const COLISEE_SPEED_MULT = 1.3;

let inColisee = false;          // vrai pendant un combat de Colisée
let coliseeTempIndex = null;    // index du clone boosté temporairement ajouté à `monsters`
let coliseeEntryFee = 0;        // mise déjà payée pour cette tentative

function getColiseeFee() {
    return 150 + 10 * lvl;
}

function openColisee() {
    menuDiv.style.display = 'none';

    const pool = bestiaire.filter(m => !SPECIAL_MONSTER_NAMES.includes(m.name));
    if (pool.length === 0) {
        showQuickToast("Aucun monstre n'est encore assez connu pour le Colisée. Explorez un peu Realm d'abord.");
        menuDiv.style.display = 'block';
        return;
    }

    const fee = getColiseeFee();
    if (gold < fee) {
        showQuickToast(`Le Colisée demande ${fee} pièces d'or pour vous laisser entrer. Vous n'avez pas assez d'or.`);
        menuDiv.style.display = 'block';
        return;
    }

    const base = pool[Math.floor(Math.random() * pool.length)];

    gold -= fee;
    goldText.innerText = gold;
    coliseeEntryFee = fee;

    // Clone boosté du monstre choisi, ajouté temporairement en fin du
    // tableau `monsters` (jamais de manière permanente : on le retire dès
    // que le combat se termine, pour ne pas fausser monsters.length -
    // utilisé ailleurs, notamment pour le score).
    coliseeTempIndex = monsters.length;
    const boosted = {
        ...base,
        index: coliseeTempIndex,
        health: Math.round(base.health * COLISEE_HEALTH_MULT),
        power: Math.round(base.power * COLISEE_POWER_MULT),
        speed: Math.round(base.speed * COLISEE_SPEED_MULT)
    };
    monsters.push(boosted);

    inColisee = true;
    monsterIndex = coliseeTempIndex;
    monsterName.innerText = boosted.name + " (Colisée)";
    monsterName2 = boosted.name;
    monsterType = boosted.type;
    monsterHealth = boosted.health;
    monsterHealthText.innerText = boosted.health;
    monsterStats.style.display = 'flex';
    button3.style.display = 'block';
    actionsDiv.style.display = 'flex';

    textDiv.innerText += `Vous entrez dans l'arène du Colisée (entrée : ${fee} or). Un ${base.name} bien plus puissant que d'habitude vous attend...\n`;
}

// Retire le clone temporaire ajouté à `monsters` et réinitialise l'état.
function cleanupColisee() {
    if (coliseeTempIndex !== null && monsters.length - 1 === coliseeTempIndex) {
        monsters.pop();
    }
    inColisee = false;
    coliseeTempIndex = null;
}

function resolveColiseeVictory() {
    const reward = Math.max(1, Math.round(xpCostForLevel(lvl) / 3));
    xp += reward;
    xpText.innerText = xp;
    textDiv.innerText += `Vous triomphez au Colisée ! Vous gagnez ${reward} XP.\n`;
    monsterStats.style.display = 'none';
    actionsDiv.style.display = 'none';
    cleanupColisee();
    updateLevel(xp);
}

function resolveColiseeDefeat() {
    health = 1;
    healthText.innerText = health;
    monsterStats.style.display = 'none';
    actionsDiv.style.display = 'none';
    useDiv.style.display = 'none';
    textDiv.innerText += `Vous êtes évacué du Colisée in extremis (1 PV restant). Votre mise de ${coliseeEntryFee} pièces d'or est perdue.\n`;
    cleanupColisee();
    menuDiv.style.display = 'block';
}

function resolveColiseeFlee() {
    textDiv.innerText += `Vous fuyez le Colisée. Votre mise de ${coliseeEntryFee} pièces d'or n'est pas remboursée.\n`;
    cleanupColisee();
    menuDiv.style.display = 'block';
}
