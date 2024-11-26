// script.js
const circle = document.getElementById("circle");
const scoreBoard = document.getElementById("score-board");
const gameContainer = document.getElementById("game-container");

let score = 0;

// Fonction pour générer une position aléatoire pour le cercle
function getRandomPosition() {
    const containerRect = gameContainer.getBoundingClientRect();
    const maxX = containerRect.width - 50; // 50 = largeur du cercle
    const maxY = containerRect.height - 50;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    return { x, y };
}

// Fonction pour afficher le cercle
function showCircle() {
    const { x, y } = getRandomPosition();
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.display = "block";

    // Cache le cercle après un certain temps si non cliqué
    setTimeout(() => {
        if (circle.style.display === "block") {
            circle.style.display = "none";
            showCircle();
        }
    }, 1000); // 1 seconde
}

// Quand le cercle est cliqué
circle.addEventListener("click", () => {
    score++;
    scoreBoard.textContent = `Score : ${score}`;
    circle.style.display = "none";
    showCircle();
});

// Démarrage du jeu
showCircle();
