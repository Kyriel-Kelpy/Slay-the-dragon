// ================== Arène : paris sur les monstres du bestiaire ==================
// Principe : à chaque visite, 3 (parfois 4) monstres déjà rencontrés sont
// tirés au sort avec des cotes de victoire différentes. Le gain est
// proportionnel à la cote (favori = petit gain, outsider = gros gain), avec
// une petite marge pour la "maison" pour que ça reste risqué sur la durée.
// Un seul pari est autorisé par visite.

const ARENE_HOUSE_PAYBACK = 0.85; // 15% de marge pour la maison
let areneRoster = [];
let areneBetPlaced = false;

function generateAreneRoster() {
    const pool = bestiaire.length >= 3 ? bestiaire.slice() : monsters.slice();
    const combattantCount = Math.min(pool.length, Math.random() < 0.4 ? 4 : 3);

    const chosen = [];
    while (chosen.length < combattantCount && pool.length > 0) {
        const i = Math.floor(Math.random() * pool.length);
        chosen.push(pool.splice(i, 1)[0]);
    }

    // Poids aléatoires -> probabilités de victoire normalisées (somme = 1)
    const weights = chosen.map(() => 0.4 + Math.random());
    const totalWeight = weights.reduce((a, b) => a + b, 0);

    areneRoster = chosen.map((monster, i) => {
        const probability = weights[i] / totalWeight;
        const payoutMultiplier = ARENE_HOUSE_PAYBACK / probability;
        return { monster, probability, payoutMultiplier };
    });

    areneBetPlaced = false;
}

function renderArene() {
    generateAreneRoster();
    const areneDiv = document.getElementById("arene");
    if (!areneDiv) return;

    if (areneRoster.length === 0) {
        areneDiv.innerHTML = `<p class="no-items-message">Aucun monstre n'est encore disponible pour l'Arène. Explorez un peu Realm d'abord.</p>`;
        areneDiv.style.display = 'flex';
        return;
    }

    const cardsHTML = areneRoster.map((entry, index) => {
        const pct = Math.round(entry.probability * 100);
        const mult = entry.payoutMultiplier.toFixed(2);
        return `
            <div class="arene-card">
                <h3>${entry.monster.name}</h3>
                <p>Chances de victoire estimées : <strong>${pct}%</strong></p>
                <p>Gain si vous misez sur lui : <strong>×${mult}</strong></p>
                <div class="arene-bets">
                    <button class="arene-bet-btn" onclick="placeAreneBet(${index}, 50)">Miser 50</button>
                    <button class="arene-bet-btn" onclick="placeAreneBet(${index}, 100)">Miser 100</button>
                    <button class="arene-bet-btn" onclick="placeAreneBet(${index}, 200)">Miser 200</button>
                </div>
            </div>
        `;
    }).join('');

    areneDiv.innerHTML = cardsHTML + `<p id="areneResult" class="arene-result"></p>`;
    areneDiv.style.display = 'flex';
}

function openArene() {
    menuDiv.style.display = 'none';
    renderArene();
}

function placeAreneBet(index, amount) {
    const resultEl = document.getElementById("areneResult");

    if (areneBetPlaced) {
        if (resultEl) resultEl.textContent = "Vous avez déjà misé lors de cette visite. Revenez plus tard pour de nouvelles cotes.";
        return;
    }
    if (gold < amount) {
        if (resultEl) resultEl.textContent = "Vous n'avez pas assez d'or pour cette mise.";
        return;
    }

    const chosenEntry = areneRoster[index];
    if (!chosenEntry) return;

    areneBetPlaced = true;
    gold -= amount;

    // Tirage du vainqueur selon les probabilités attribuées
    const roll = Math.random();
    let cumulative = 0;
    let winningEntry = areneRoster[areneRoster.length - 1];
    for (const entry of areneRoster) {
        cumulative += entry.probability;
        if (roll < cumulative) {
            winningEntry = entry;
            break;
        }
    }

    const won = winningEntry === chosenEntry;
    if (won) {
        const payout = Math.round(amount * chosenEntry.payoutMultiplier);
        gold += payout;
        if (resultEl) resultEl.textContent = `${chosenEntry.monster.name} l'emporte ! Vous gagnez ${payout} pièces d'or.`;
    } else {
        if (resultEl) resultEl.textContent = `${winningEntry.monster.name} l'emporte... Vous perdez votre mise de ${amount} pièces d'or.`;
    }

    goldText.innerText = gold;

    // Désactive toutes les mises jusqu'à la prochaine visite
    document.querySelectorAll(".arene-bet-btn").forEach(btn => btn.disabled = true);
}
