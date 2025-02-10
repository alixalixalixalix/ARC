const li = document.querySelectorAll("li");

li.forEach((lii) => {
  lii.addEventListener("click", function () {
    document.querySelector(".navActiv")?.classList.remove("navActiv");
    lii.classList.add("navActiv");
  });
});

// Suppr de marginApp sur listeArticles
const listeArticles = document.getElementById("listeArticles");
if (window.innerWidth < 600) {
  listeArticles.classList.remove("marginApp");
}

const linkPoules = document.getElementById("linkPoules");
const linkFinale = document.getElementById("linkFinale");
const linkWinrate = document.getElementById("linkWinrate");
const sectionPoules = document.getElementById("sectionPoules");
const sectionFinale = document.getElementById("sectionFinale");
const sectionWinrate = document.getElementById("sectionWinrate");
/*
const linkCartes = document.getElementById("linkCartes");
const sectionCartes = document.getElementById("sectionCartes");
*/

linkPoules.addEventListener("click", function () {
  sectionPoules.style.display = "flex";
  sectionFinale.style.display = "none";
  sectionWinrate.style.display = "none";
});

linkFinale.addEventListener("click", function () {
  sectionPoules.style.display = "none";
  sectionFinale.style.display = "flex";
  sectionWinrate.style.display = "none";
});

linkWinrate.addEventListener("click", function () {
  sectionPoules.style.display = "none";
  sectionFinale.style.display = "none";
  sectionWinrate.style.display = "flex";
});


/*

IMAGE MATCH DYNAMIQUE
Tant que nom du joueur1 (match) n'est pas === à joueurs (classement), boucle.
Une fois trouvé, on prend le imgHeros du joueur[i] et on le met en src à versusJoueur1Img

for (let z = 0; dataPoules[i].joueurs[j].nom != dataPoules[i].matchs[m].joueur1; z++) {
  versusJoueur1Img.src = dataPoules[i].joueurs[j].imgHeros[z];
}

*/

// dataPoules[i].joueurs[j].nom = tous les "nom" de chaque objets joueurs
// dataPoules[i].matchs[m].joueur1 = tous les "joueur1" de chaque objets matchs

/*
  Je veux compter le nombre de fois qu'un joueur est déclaré vainqueur (dans matchs)
  et l'afficher dans les points du classement
  
  const joueurPoints = document.createElement("p");
  joueurPoints.innerText = dataPoules[i].joueurs[j].points
  joueurPointsDecklists.appendChild(joueurPoints);


for (let x = 0; x < dataPoules[i].joueurs.length; x++){
  let points = 0
  if(dataPoules[i].matchs[m].vainqueur === dataPoules[i].joueurs[x]){
  points += 1
  joueurPoints[x].innerText = points
  }
}

for (let x = 0; dataPoules[i].matchs.length ; x++){
  let points = 0
  if(dataPoules[i].matchs[x].vainqueur === dataPoules[i].joueurs.nom)
}

*/
