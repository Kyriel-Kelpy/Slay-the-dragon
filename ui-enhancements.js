/* =========================================================
   ui-enhancements.js
   Script purement visuel et non-invasif : il ne modifie
   aucune variable ni logique de jeu. Il observe les
   éléments texte déjà mis à jour par script.js / events.js
   (healthText, xpText, monsterHealth, ...) et synchronise
   les jauges graphiques en conséquence.
   ========================================================= */

(function () {
    "use strict";

    function getNum(el) {
        if (!el) return 0;
        const n = parseFloat(el.textContent);
        return isNaN(n) ? 0 : n;
    }

    function toPercent(current, max) {
        const safeMax = max > 0 ? max : 1;
        let p = (current / safeMax) * 100;
        if (p < 0) p = 0;
        if (p > 100) p = 100;
        return p;
    }

    function watchText(el, callback) {
        if (!el) return;
        const observer = new MutationObserver(callback);
        observer.observe(el, { characterData: true, childList: true, subtree: true });
    }

    function init() {
        // ----- Barre de santé du joueur -----
        const healthText = document.getElementById("healthText");
        const maxHealthText = document.getElementById("maxHealthText");
        const healthBarFill = document.getElementById("healthBarFill");

        function updateHealthBar() {
            if (!healthBarFill) return;
            healthBarFill.style.width = toPercent(getNum(healthText), getNum(maxHealthText)) + "%";
        }

        watchText(healthText, updateHealthBar);
        watchText(maxHealthText, updateHealthBar);
        updateHealthBar();

        // ----- Barre d'XP (progression dans le niveau courant) -----
        const xpText = document.getElementById("xpText");
        const lvlText = document.getElementById("lvlText");
        const xpBarFill = document.getElementById("xpBarFill");

        function updateXpBar() {
            if (!xpBarFill) return;
            const lvl = getNum(lvlText) || 1;
            const xpAtLevelStart = (lvl - 1) * 100;
            const progress = getNum(xpText) - xpAtLevelStart;
            xpBarFill.style.width = toPercent(progress, 100) + "%";
        }

        watchText(xpText, updateXpBar);
        watchText(lvlText, updateXpBar);
        updateXpBar();

        // ----- Barre de santé de l'adversaire -----
        const monsterHealthText = document.getElementById("monsterHealth");
        const monsterHealthBarFill = document.getElementById("monsterHealthBarFill");
        let monsterMaxHealth = 0;

        function updateMonsterHealthBar() {
            if (!monsterHealthBarFill) return;
            const current = getNum(monsterHealthText);
            // Un nouvel adversaire apparaît toujours avec sa santé pleine,
            // donc toute hausse de la valeur signale un nouveau max à suivre.
            if (current > monsterMaxHealth) {
                monsterMaxHealth = current;
            }
            monsterHealthBarFill.style.width = toPercent(current, monsterMaxHealth) + "%";
        }

        watchText(monsterHealthText, updateMonsterHealthBar);
        updateMonsterHealthBar();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
