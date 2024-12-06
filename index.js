// Initialisation des variables
const min = 1;
const max = 100;
const nombreMystere = Math.floor(Math.random() * max) + min;
let tentative = 0;

// Sélection des éléments du DOM
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const attempts = document.getElementById("attempts");

// Fonction pour valider une devinette
function validerDeviner() {
    const guess = parseInt(guessInput.value, 10);

    if (isNaN(guess) || guess < min || guess > max) {
        feedback.textContent = `Veuillez entrer un nombre valide entre ${min} et ${max}.`;
        feedback.style.color = "red";
        return;
    }

    tentative++;

    if (guess < nombreMystere) {
        feedback.textContent = "C'est plus !";
        feedback.style.color = "orange";
    } else if (guess > nombreMystere) {
        feedback.textContent = "C'est moins !";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = `Félicitations ! Vous avez trouvé le nombre ${nombreMystere} en ${tentative} tentative(s).`;
        feedback.style.color = "green";
        guessInput.disabled = true;
        submitGuess.disabled = true;
    }

    attempts.textContent = `Nombre de tentatives : ${tentative}`;
    guessInput.value = ""; // Réinitialiser le champ de saisie
}

// Événement pour le clic sur le bouton
submitGuess.addEventListener("click", validerDeviner);

// Événement pour appuyer sur "Enter" dans le champ d'entrée
guessInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        validerDeviner();
    }
});
