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

    // ----- Correctif de hauteur d'écran pour mobile -----
    // Certains navigateurs mobiles (Safari iOS notamment) calculent mal
    // 100vh à cause de leur barre d'adresse rétractable. On calcule donc
    // la vraie hauteur disponible en JS et on l'expose via --vh, utilisée
    // en CSS comme filet de sécurité derrière 100dvh.
    function setViewportHeight() {
        document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
    }
    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);
    window.addEventListener("orientationchange", setViewportHeight);

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

        function getMonsterMaxHealth() {
            // monsters[monsterIndex].health est la vraie vie max du monstre
            // en combat (variables globales définies par monsters.js /
            // variables.js, jamais modifiées pendant le combat — seule la
            // variable monsterHealth diminue). On l'utilise en priorité.
            if (typeof monsters !== "undefined" && typeof monsterIndex !== "undefined" && monsters[monsterIndex]) {
                return monsters[monsterIndex].health;
            }
            return null;
        }

        function updateMonsterHealthBar() {
            if (!monsterHealthBarFill) return;
            const current = getNum(monsterHealthText);
            const max = getMonsterMaxHealth();
            if (max) {
                monsterHealthBarFill.style.width = toPercent(current, max) + "%";
            }
        }

        watchText(monsterHealthText, updateMonsterHealthBar);
        updateMonsterHealthBar();

        // ----- Bouton de fermeture (×) pour la boutique et "Utiliser un objet" -----
        // Ces deux panneaux voient leur contenu entièrement remplacé via
        // innerHTML par le moteur de jeu existant (shop.js / script.js), ce
        // qui effacerait un bouton statique posé dans le HTML. On le
        // réinsère donc automatiquement à chaque mise à jour du contenu,
        // sans toucher à la logique de jeu elle-même.
        function ensureCloseButton(sectionId, onClosed) {
            const panel = document.getElementById(sectionId);
            if (!panel) return;

            function insertCloseButton() {
                if (panel.querySelector(":scope > .modal-close")) return;
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "modal-close";
                btn.setAttribute("aria-label", "Fermer");
                btn.textContent = "×";
                btn.onclick = function () {
                    closeSection(sectionId);
                    if (typeof onClosed === "function") onClosed();
                };
                panel.insertBefore(btn, panel.firstChild);
            }

            insertCloseButton();
            const observer = new MutationObserver(insertCloseButton);
            observer.observe(panel, { childList: true });
        }

        ensureCloseButton("shop", function () {
            // Fermer le tiroir d'articles ramène toujours à la section
            // "boutique" (Acheter / Vendre / Retourner), qu'on soit venu
            // du sous-écran d'achat ou de vente.
            if (typeof displaySection === "function") {
                displaySection("boutique");
            }
            // displayShopItems()/sellItems() cachent le menu en l'ouvrant ;
            // il faut le réafficher ici, sinon il reste caché tant qu'on ne
            // relance pas une action qui le force (ex: goExplore).
            if (typeof menuDiv !== "undefined" && menuDiv) {
                menuDiv.style.display = 'block';
            }
        });
        ensureCloseButton("useObject");

        // ----- Remonte le défilement de l'histoire en haut à chaque nouveau texte -----
        // displaySection() (events.js) fait `textDiv.innerHTML = section.text;`
        // à chaque nouvelle section/choix : on observe ce changement et on
        // ramène simplement le scroll de la zone centrale en haut.
        const storyText = document.getElementById("storyText");
        const appMain = document.getElementById("appMain");

        function scrollStoryToTop() {
            if (appMain) appMain.scrollTop = 0;
        }

        watchText(storyText, scrollStoryToTop);

        // ----- Notifications flottantes (toasts) -----
        // Le moteur de jeu affiche déjà un petit message quand on utilise
        // un objet (script.js, useItem) ou qu'on en vend un (shop.js,
        // sellItem) : un <p> orange ajouté au texte d'histoire. On repère
        // automatiquement ces messages (sans toucher au code qui les crée)
        // et on les affiche aussi sous forme de notification bien visible,
        // au lieu de les laisser se perdre en bas du texte.
        const toastStack = document.createElement("div");
        toastStack.className = "toast-stack";
        appMain.insertBefore(toastStack, appMain.firstChild);

        function showToast(text) {
            if (!text) return;
            const toast = document.createElement("div");
            toast.className = "toast";
            toast.textContent = text;
            toastStack.appendChild(toast);
            toast.addEventListener("animationend", function (e) {
                if (e.animationName === "toastOut") toast.remove();
            });
        }

        if (storyText) {
            const toastObserver = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    mutation.addedNodes.forEach(function (node) {
                        if (
                            node.nodeType === 1 &&
                            node.tagName === "P" &&
                            node.style &&
                            node.style.color === "orange"
                        ) {
                            showToast(node.textContent);
                        }
                    });
                });
            });
            toastObserver.observe(storyText, { childList: true });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
