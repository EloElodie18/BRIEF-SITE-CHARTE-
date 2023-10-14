// Sélectionne le bouton dans le DOM
const button = document.querySelector(".btn");

// Liste des apprenants
const apprenants = [
  "Elodie",
  "Audrey",
  "Manue",
  "Kriss",
  "Sévrine",
  "Martin",
  "Virand",
  "Idris",
  "Xavier",
  "Davy",
];

let originalText = button.innerHTML; // Sauvegarde de l'état initial

// Fonction pour obtenir un index aléatoire
function random(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Fonction pour choisir un apprenant aléatoire et mettre à jour le texte du bouton
function randomApprenant() {
  const randomIndex = random(apprenants);
  button.innerText = apprenants[randomIndex];
}

// Clic sur le bouton
button.onclick = () => {
  // Appelle la fonction pour choisir un apprenant aléatoire
  randomApprenant();
  // Réinitialise le texte du bouton après 3 secondes
  setTimeout(() => {
    button.innerHTML = originalText;
  }, 3000);
};

// Sélectionner tous les titres
const toggleButtons = document.querySelectorAll(".toggle-button");
// Sélectionner toutes les listes à cacher/afficher
const toggleLists = document.querySelectorAll(".toggle-list");

// Parcourir chaque paire titre-liste
for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener("click", () => {
    // Vérifier si la liste est actuellement cachée ou non visible
    if (
      toggleLists[i].style.display === "none" ||
      toggleLists[i].style.display === ""
    ) {
      // Si c'est le cas, la rendre visible (display: block)
      toggleLists[i].style.display = "block";
    } else {
      // Sinon, la cacher à nouveau (display: none)
      toggleLists[i].style.display = "none";
    }
  });
}
