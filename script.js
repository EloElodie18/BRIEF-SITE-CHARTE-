<<<<<<< HEAD
let button = document.querySelector(".btn");
function random(nb) {
  return Math.floor(Math.random() * nb);
}
function Reset() {
  button.innerText = "Random apprenant";
}
function choixApprenant() {
  let TableauApprenant = [
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
  let index = random(10);
  button.innerText = TableauApprenant[index];
}
addEventListener("button.onclick", (event) => {
  choixApprenant();
  setTimeout(() => Reset(), 3000);
});
button.onclick = () => {
  choixApprenant();
  setTimeout(() => Reset(), 3000);
};
=======
test;
>>>>>>> 62d589c194d68bfe2f4bc8fd7f31e8789ea94d32
