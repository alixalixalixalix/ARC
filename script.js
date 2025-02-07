const li = document.querySelectorAll("li");

li.forEach((lii) => {
  lii.addEventListener("click", function () {
    document.querySelector(".navActiv")?.classList.remove("navActiv");
    lii.classList.add("navActiv");
  });
});

/*
const linkPoules = document.getElementById("linkPoules");
const linkFinale = document.getElementById("linkFinale");
const linkWinrate = document.getElementById("linkWinrate");
const linkCartes = document.getElementById("linkCartes");
const sectionPoules = document.getElementById("sectionPoules");
const sectionFinale = document.getElementById("sectionFinale");
const sectionWinrate = document.getElementById("sectionWinrate");
const sectionCartes = document.getElementById("sectionCartes");

linkWinrate.addEventListener("click", function () {
  sectionPoules.style.display = "none";
  sectionFinale.style.display = "none";
  sectionWinrate.style.display = "flex";
  sectionCartes.style.display = "none";
});

linkPoules.addEventListener("click", function () {
  sectionPoules.style.display = "flex";
  sectionFinale.style.display = "none";
  sectionWinrate.style.display = "none";
  sectionCartes.style.display = "none";
});
*/

const fetchData = async () => {
  try {
    const res = await fetch("https://alixbocquier.fr/arc/data/poules.json");
    const dataPoules = await res.json();

    function generatorPoules(dataPoules) {
      const listeArticles = document.querySelector("#listeArticles");
      listeArticles.innerHTML = "";

      /*————— GÉNÉRATOR POULE —————*/
      for (let i = 0; i < dataPoules.length; i++) {
        // <article>
        const article = document.createElement("article");
        listeArticles.appendChild(article);
        // <p> numéro poule
        const numPoule = document.createElement("p");
        numPoule.innerText = "Poule " + dataPoules[i].idPoule;
        article.appendChild(numPoule);
        // <div> poule container
        const poulesContainer = document.createElement("div");
        poulesContainer.classList.add("poules__container");
        article.appendChild(poulesContainer);
        // <div> onglets buttonq
        const poulesContainerOnglets = document.createElement("div");
        poulesContainerOnglets.classList.add("poules__container__onglets");
        poulesContainer.appendChild(poulesContainerOnglets);
        // <button> classement
        const btnClassement = document.createElement("button");
        btnClassement.innerText = "CLASSEMENT";
        btnClassement.setAttribute("id", "btnClassement");
        btnClassement.classList.add("btnActif");
        // <button> matchs
        const btnMatchs = document.createElement("button");
        btnMatchs.innerText = "MATCHS";
        btnMatchs.setAttribute("id", "btnMatchs");
        poulesContainerOnglets.appendChild(btnClassement);
        poulesContainerOnglets.appendChild(btnMatchs);

        //————— BLOC CLASSEMENT —————//
        // <div>
        const poulesContainerClassement = document.createElement("div");
        poulesContainerClassement.classList.add(
          "poules__container__classement"
        );
        poulesContainer.appendChild(poulesContainerClassement);
        // <div> légende
        const poulesContainerClassementLegendes = document.createElement("div");
        poulesContainerClassementLegendes.classList.add(
          "poules__container__classement__legendes"
        );
        poulesContainerClassement.appendChild(
          poulesContainerClassementLegendes
        );
        // <p> légendes joueurs
        const legendeJoueur = document.createElement("p");
        legendeJoueur.innerText = "Joueurs";
        poulesContainerClassementLegendes.appendChild(legendeJoueur);
        // <div> points decklist
        const legendePointsDescklistes = document.createElement("div");
        poulesContainerClassementLegendes.appendChild(legendePointsDescklistes);
        // <p> légendes points
        const legendePoints = document.createElement("p");
        legendePoints.innerText = "Points";
        legendePointsDescklistes.appendChild(legendePoints);
        // <p> légendes decklist
        const legendeDecklist = document.createElement("p");
        legendeDecklist.innerText = "Listes";
        legendePointsDescklistes.appendChild(legendeDecklist);
        // <div> liste Joueurs
        const poulesContainerClassementListJoueurs =
          document.createElement("div");
        poulesContainerClassementListJoueurs.classList.add(
          "poules__container__classement__listJoueurs"
        );
        poulesContainerClassement.appendChild(
          poulesContainerClassementListJoueurs
        );

        //————— GÉNÉRATOR JOUEUR CLASSEMENT —————//
        for (let j = 0; j < dataPoules[i].joueurs.length; j++) {
          dataPoules[i].joueurs.sort(
            (a, b) => parseInt(b.points) - parseInt(a.points)
          );
          // <div> joueur
          const poulesContainerClassementListJoueursJoueur =
            document.createElement("div");
          poulesContainerClassementListJoueursJoueur.classList.add(
            "poules__container__classement__listJoueurs__joueur"
          );
          poulesContainerClassementListJoueurs.appendChild(
            poulesContainerClassementListJoueursJoueur
          );
          // <div> container img nom
          const imgNom = document.createElement("div");
          poulesContainerClassementListJoueursJoueur.appendChild(imgNom);
          // <img> joueur img héros
          const joueurHeros = document.createElement("img");
          joueurHeros.src = dataPoules[i].joueurs[j].imgHeros;
          imgNom.appendChild(joueurHeros);
          // <p> joueur nom
          const joueurNom = document.createElement("p");
          joueurNom.innerText = dataPoules[i].joueurs[j].nom;
          imgNom.appendChild(joueurNom);
          // <p> container points decklists
          const joueurPointsDecklists = document.createElement("div");
          poulesContainerClassementListJoueursJoueur.appendChild(
            joueurPointsDecklists
          );
          joueurPointsDecklists.classList.add("joueur__ptsDecklist");
          // <p> joueur points
          const joueurPoints = document.createElement("p");
          joueurPoints.innerText = dataPoules[i].joueurs[j].points
          joueurPointsDecklists.appendChild(joueurPoints);
          // <a> joueur decklist
          const joueurDecklistLink = document.createElement("a");
          joueurDecklistLink.href = dataPoules[i].joueurs[j].decklist;
          joueurDecklistLink.setAttribute("target", "_blank");
          joueurPointsDecklists.appendChild(joueurDecklistLink);
          // <img> icon decklist          
          const joueurDecklistImg = document.createElement("img");
          joueurDecklistImg.src = "assets/icon-decklist.png";
          joueurDecklistLink.appendChild(joueurDecklistImg);
        }

        //————— BLOC MATCHS —————//
        const poulesContainerMatchs = document.createElement("div");
        poulesContainerMatchs.classList.add("poules__container__matchs");
        poulesContainer.appendChild(poulesContainerMatchs);

        //————— GÉNÉRATOR VERSUS MATCH —————//
        for (let m = 0; m < dataPoules[i].matchs.length; m++) {
          // <div> matchs versus
          const poulesContainerMatchsVersus = document.createElement("div");
          poulesContainerMatchsVersus.classList.add(
            "poules__container__matchs__versus"
          );
          poulesContainerMatchs.appendChild(poulesContainerMatchsVersus);

          // JOUEUR 1 //
          // <div> joueur1
          const poulesContainerMatchsVersusJoueur1 =
            document.createElement("div");
          poulesContainerMatchsVersusJoueur1.classList.add(
            "poules__container__matchs__versus__joueur"
          );
          poulesContainerMatchsVersus.appendChild(
            poulesContainerMatchsVersusJoueur1
          );
          // <div> joueur1 container ImgNom
          const versusImgNom1 = document.createElement("div");
          poulesContainerMatchsVersusJoueur1.appendChild(versusImgNom1);
          // <img> joueur1 img héros
          const versusJoueur1Img = document.createElement("img");
          versusJoueur1Img.src = dataPoules[i].matchs[m].heros1;
          versusImgNom1.appendChild(versusJoueur1Img);
          // <p> joueur1 nom
          const versusJoueur1Nom = document.createElement("p");
          versusJoueur1Nom.innerText = dataPoules[i].matchs[m].joueur1;
          versusImgNom1.appendChild(versusJoueur1Nom);

          // <p> vs
          const versusP = document.createElement("p");
          versusP.innerText = "vs";
          versusP.classList.add("vs");
          poulesContainerMatchsVersus.appendChild(versusP);

          // JOUEUR 2 //
          // <div> joueur2
          const poulesContainerMatchsVersusJoueur2 =
            document.createElement("div");
          poulesContainerMatchsVersusJoueur2.classList.add(
            "poules__container__matchs__versus__joueur"
          );
          poulesContainerMatchsVersus.appendChild(
            poulesContainerMatchsVersusJoueur2
          );
          // <div> joueur2 container ImgNom
          const versusImgNom2 = document.createElement("div");
          poulesContainerMatchsVersusJoueur2.appendChild(versusImgNom2);
          // <img> joueur2 img héros
          const versusJoueur2Img = document.createElement("img");
          versusJoueur2Img.src = dataPoules[i].matchs[m].heros2;
          versusImgNom2.appendChild(versusJoueur2Img);
          // <p> joueur2 nom
          const versusJoueur2Nom = document.createElement("p");
          versusJoueur2Nom.innerText = dataPoules[i].matchs[m].joueur2;
          versusImgNom2.appendChild(versusJoueur2Nom);

          // WIN
          if (
            dataPoules[i].matchs[m].vainqueur ===
            dataPoules[i].matchs[m].joueur1
          ) {
            const versusJoueur1Win = document.createElement("p");
            versusJoueur1Win.innerText = "WIN";
            poulesContainerMatchsVersusJoueur1.appendChild(versusJoueur1Win);
            versusJoueur2Nom.style.opacity = "0.3";
            versusJoueur2Img.style.opacity = "0.5";
          } else {
            const versusJoueur2Win = document.createElement("p");
            versusJoueur2Win.innerText = "WIN";
            poulesContainerMatchsVersusJoueur2.appendChild(versusJoueur2Win);
            versusJoueur1Nom.style.opacity = "0.3";
            versusJoueur1Img.style.opacity = "0.5";
          }
        }

        //————— ONGLET SWITCH —————//
        // Switch onglet
        const groupeOnglet = poulesContainerOnglets.children;
        for (let i = 0; i < groupeOnglet.length; i++) {
          groupeOnglet[i].addEventListener("click", function () {
            groupeOnglet[0].classList.remove("btnActif");
            groupeOnglet[1].classList.remove("btnActif");
            groupeOnglet[i].classList.add("btnActif");
          });
        }
        // Onglet classement
        btnClassement.addEventListener("click", function () {
          poulesContainerClassement.style.display = "block";
          poulesContainerMatchs.style.display = "none";
        });
        // Onglet match
        btnMatchs.addEventListener("click", function () {
          poulesContainerClassement.style.display = "none";
          poulesContainerMatchs.style.display = "flex";
        });
      }
    }

    generatorPoules(dataPoules);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

fetchData();

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
Je veux compter toutes les fois où chaque joueur est considéré vainqueur
for (let x = 0; x < dataPoules[i].joueurs.length; x++){
  let points = 0
  if(dataPoules[i].matchs[m].vainqueur === dataPoules[i].joueurs[x]){
  points += 1
  joueurPoints[x].innerText = dataPoules[i].points[x]
  }
}
*/