console.log("connecté !");

const switchBox = document.querySelector(".switch");
// console.log(switchBox);
const btn = document.querySelector(".btn");
// console.log(btn);
const icone = document.querySelector("i");
// console.log(icone);
const container = document.querySelector(".container");
// console.log(container);
const titre = document.querySelector("h1");
// console.log(titre);

// Je déplace le cercle
switchBox.addEventListener("click", function () {
  console.log("Bouton cliqué !");
  btn.classList.toggle("btn-change");
  // Je déplace l'icône
  icone.classList.toggle("icone-change");
  // Je change l'icône
  icone.classList.toggle("fa-sun");
  // La div switch change de couleur de fond
  switchBox.classList.toggle("switch-change");
  // Le container change de couleur
  container.classList.toggle("container-change");
  //   Le titre change
  if (titre.innerText === "DARK MODE") {
    titre.innerText = "LIGHT MODE";
  } else {
    titre.innerText = "DARK MODE";
  }
});
