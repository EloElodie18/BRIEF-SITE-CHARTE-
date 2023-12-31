//Fonctions Utilitaires
// ==========================================================

// Fonction pour obtenir un index aléatoire
function random(arr) {
  return Math.floor(Math.random() * arr.length);
}

//Gestion du Bouton Aléatoire
// ==========================================================
let gateway;
// Sélectionne le bouton dans le DOM
const button = document.querySelector(".btn");

// Liste des apprenants
const apprenants = [
  "Elodie",
  "Audrey",
  "Manue",
  "Kriss",
  "Séverine",
  "Martin",
  "Virand",
  "Idris",
  "Xavier",
  "Davy",
];

let originalText = button.innerHTML; // Sauvegarde de l'état initial

// Fonction pour choisir un apprenant aléatoire et mettre à jour le texte du bouton
function randomApprenant() {
  const randomIndex = random(apprenants);
  button.innerText = apprenants[randomIndex];
  gateway = apprenants[randomIndex];
}

// Clic sur le bouton
button.onclick = () => {
  // Appelle la fonction pour choisir un apprenant aléatoire
  randomApprenant();
  button.classList.add("glitch");
  // Réinitialise le texte du bouton après 3 secondes
  setTimeout(() => {
    button.innerHTML = originalText;
    button.classList.remove("glitch");
  }, 3000);
};

//Gestion des Listes Cachées/Affichées
// ==========================================================

// Sélectionner tous les titres
const toggleButtons = document.querySelectorAll(".toggle-button");
// Sélectionner toutes les listes à cacher/afficher
const toggleLists = document.querySelectorAll(".toggle-list");
// Sélectionner le beaudeau
const bandeau = document.querySelector(".bandeau");
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
      setTimeout(function () {
        if (window.innerWidth <= 768) {
          toggleButtons[i].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          setTimeout(function () {
            window.scroll({
              top: window.scrollY - (bandeau.clientHeight + 25),
              behavior: "smooth",
            });
          }, 600);
        } else {
          toggleLists[i].scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        } // Fait défiler la page en douceur
      }, 500);
    } else {
      // Sinon, la cacher à nouveau (display: none)
      toggleLists[i].style.display = "none";
    }
  });
}

//"Le Coin des GIFs Magiques
// ==========================================================
//gif plus petit pour mobile
function Mobile() {
  return window.innerWidth <= 540 ? `/reduce` : "";
}
// Tableau de liens vers les GIFs aléatoires
const gifs = [
  `./gifs${Mobile()}/full.gif`,
  `./gifs${Mobile()}/anime-kawaii.gif`,
  "./gifs/deeb7.gif",
  "./gifs/93ec4.gif",
  `./gifs${Mobile()}/5709.gif`,
  `./gifs${Mobile()}/awhiskeraway-anime.gif`,
  `./gifs${Mobile()}/a-whisker-away-cat.gif`,
  `./gifs${Mobile()}/Qalh.gif`,
  "./gifs/4cb8.gif",
  `./gifs${Mobile()}/cc6148.gif`,
  `./gifs${Mobile()}/2225df9.gif`,
  `./gifs${Mobile()}/photofunky.gif`,
  `./gifs${Mobile()}/5aeo.gif`,
  "./gifs/30777.gif",
  `./gifs${Mobile()}/1082151.gif`,
  `./gifs${Mobile()}/PvWQ.gif`,
  `./gifs${Mobile()}/chat-dodo.gif`,
  `./gifs${Mobile()}/ZNKq.gif`,
];

const hermione = [
  `./gifs${Mobile()}/d68.gif`,
  `./gifs${Mobile()}/500.gif`,
  `./gifs${Mobile()}/6839.gif`,
  `./gifs${Mobile()}/b7d2e.gif`,
  `./gifs${Mobile()}/hermione-granger-wand.gif`,
  `./gifs${Mobile()}/tm5o.gif`,
];

// Fonction pour changer le GIF aléatoire
function changeRandomGif() {
  const randomGif = document.getElementById("randomGif");
  const randomIndex = random(gifs);
  const randomGifUrl = gifs[randomIndex];
  if (gateway == "Kriss") {
    randomGif.setAttribute("src", hermione[random(hermione)]);
  } else {
    randomGif.setAttribute("src", randomGifUrl);
  }
  randomGif.style.display = "block"; // Affiche l'image
  setTimeout(function () {
    randomGif.scrollIntoView({ behavior: "smooth" }); // Fait défiler la page jusqu'à l'image en douceur
  }, 500);
}

const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", changeRandomGif);
