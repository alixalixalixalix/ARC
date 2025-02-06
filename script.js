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
    const res = await fetch("/data/poules.json");
    const dataPoules = await res.json();

    function generatorPoules(dataPoules) {
      const listeArticles = document.querySelector("#listeArticles");
      listeArticles.innerHTML = "";

      for (let i = 0; i < dataPoules.length; i++) {
        // Article
        const article = document.createElement("article");
        listeArticles.appendChild(article);
        // Poule num
        const numPoule = document.createElement("p");
        numPoule.innerText = "Poule " + dataPoules[i].idPoule;
        article.appendChild(numPoule);
        // Div
        const poulesContainer = document.createElement("div");
        poulesContainer.classList.add("poules__container");
        article.appendChild(poulesContainer);
        // Div 2 boutons
        const poulesContainerOnglets = document.createElement("div");
        poulesContainerOnglets.classList.add("poules__container__onglets");
        poulesContainer.appendChild(poulesContainerOnglets);
        // Button classement
        const btnClassement = document.createElement("button");
        btnClassement.innerText = "CLASSEMENT";
        btnClassement.setAttribute("id", "btnClassement");
        btnClassement.classList.add("btnActif");
        // Button Matchs
        const btnMatchs = document.createElement("button");
        btnMatchs.innerText = "MATCHS";
        btnMatchs.setAttribute("id", "btnMatchs");
        poulesContainerOnglets.appendChild(btnClassement);
        poulesContainerOnglets.appendChild(btnMatchs);

        //————— BLOC CLASSEMENT —————//
        const poulesContainerClassement = document.createElement("div");
        poulesContainerClassement.classList.add(
          "poules__container__classement"
        );
        poulesContainer.appendChild(poulesContainerClassement);
        // Div légende
        const poulesContainerClassementLegendes = document.createElement("div");
        poulesContainerClassementLegendes.classList.add(
          "poules__container__classement__legendes"
        );
        poulesContainerClassement.appendChild(
          poulesContainerClassementLegendes
        );
        // P légendes joueurs
        const legendeJoueur = document.createElement("p");
        legendeJoueur.innerText = "Joueurs";
        poulesContainerClassementLegendes.appendChild(legendeJoueur);
        // Div points decklist
        const legendePointsDescklistes = document.createElement("div");
        poulesContainerClassementLegendes.appendChild(legendePointsDescklistes);
        // P légendes points
        const legendePoints = document.createElement("p");
        legendePoints.innerText = "Points";
        legendePointsDescklistes.appendChild(legendePoints);
        // P légendes decklist
        const legendeDecklist = document.createElement("p");
        legendeDecklist.innerText = "Listes";
        legendePointsDescklistes.appendChild(legendeDecklist);
        // Div Liste Joueurs
        const poulesContainerClassementListJoueurs =
          document.createElement("div");
        poulesContainerClassementListJoueurs.classList.add(
          "poules__container__classement__listJoueurs"
        );
        poulesContainerClassement.appendChild(
          poulesContainerClassementListJoueurs
        );

        //————— GÉNÉRATOR JOUEUR —————//
        for (let j = 0; j < dataPoules[i].joueurs.length; j++) {
          dataPoules[i].joueurs.sort(
            (a, b) => parseInt(b.points) - parseInt(a.points)
          );
          // Div Joueur
          const poulesContainerClassementListJoueursJoueur =
            document.createElement("div");
          poulesContainerClassementListJoueursJoueur.classList.add(
            "poules__container__classement__listJoueurs__joueur"
          );
          poulesContainerClassementListJoueurs.appendChild(
            poulesContainerClassementListJoueursJoueur
          );
          // Div imgNom
          const imgNom = document.createElement("div");
          poulesContainerClassementListJoueursJoueur.appendChild(imgNom);
          // Joueur Img héros
          const joueurHeros = document.createElement("img");
          joueurHeros.src = dataPoules[i].joueurs[j].imgHeros;
          imgNom.appendChild(joueurHeros);
          // Joueur nom
          const joueurNom = document.createElement("p");
          joueurNom.innerText = dataPoules[i].joueurs[j].nom;
          imgNom.appendChild(joueurNom);
          // Div Joueur points decklists
          const joueurPointsDecklists = document.createElement("div");
          poulesContainerClassementListJoueursJoueur.appendChild(
            joueurPointsDecklists
          );
          joueurPointsDecklists.classList.add("joueur__ptsDecklist");
          // Nombre points
          const joueurPoints = document.createElement("p");
          joueurPoints.innerText = dataPoules[i].joueurs[j].points;
          joueurPointsDecklists.appendChild(joueurPoints);
          // Decklist
          const joueurDecklistLink = document.createElement("a");
          joueurDecklistLink.href = dataPoules[i].joueurs[j].decklist;
          joueurDecklistLink.setAttribute("target", "_blank");
          joueurPointsDecklists.appendChild(joueurDecklistLink);
          const joueurDecklistImg = document.createElement("img");
          joueurDecklistImg.src = "assets/icon-decklist.png";
          joueurDecklistLink.appendChild(joueurDecklistImg);
        }

        //————— BLOC MATCHS —————//
        const poulesContainerMatchs = document.createElement("div");
        poulesContainerMatchs.classList.add("poules__container__matchs");
        poulesContainer.appendChild(poulesContainerMatchs);

        for (let m = 0; m < dataPoules[i].matchs.length; m++) {
          // Div matchs__versus
          const poulesContainerMatchsVersus = document.createElement("div");
          poulesContainerMatchsVersus.classList.add(
            "poules__container__matchs__versus"
          );
          poulesContainerMatchs.appendChild(poulesContainerMatchsVersus);
          // Div matchs__versus_joueur1
          const poulesContainerMatchsVersusJoueur1 =
            document.createElement("div");
          poulesContainerMatchsVersusJoueur1.classList.add(
            "poules__container__matchs__versus__joueur"
          );
          poulesContainerMatchsVersus.appendChild(
            poulesContainerMatchsVersusJoueur1
          );
          // Div versusImgNom
          const versusImgNom1 = document.createElement("div");
          poulesContainerMatchsVersusJoueur1.appendChild(versusImgNom1);
          // Img héros joueur 1
          const versusJoueur1Img = document.createElement("img");
          versusJoueur1Img.src = "assets/heros/small/y-akesha.png";
          versusImgNom1.appendChild(versusJoueur1Img);

          // Versus Joueur 1 nom
          const versusJoueur1Nom = document.createElement("p");
          versusJoueur1Nom.innerText = dataPoules[i].matchs[m].joueur1;
          versusImgNom1.appendChild(versusJoueur1Nom);

          // Versus Joueur 1 win
          const versusJoueur1Win = document.createElement("p");
          versusJoueur1Win.innerText = "WIN";
          poulesContainerMatchsVersusJoueur1.appendChild(versusJoueur1Win);

          // Versus p
          const versusP = document.createElement("p");
          versusP.innerText = "vs";
          versusP.classList.add("vs");
          poulesContainerMatchsVersus.appendChild(versusP);

          // Div matchs__versus_joueur2
          const poulesContainerMatchsVersusJoueur2 =
            document.createElement("div");
          poulesContainerMatchsVersusJoueur2.classList.add(
            "poules__container__matchs__versus__joueur"
          );
          poulesContainerMatchsVersus.appendChild(
            poulesContainerMatchsVersusJoueur2
          );
          // Div versusImgNom
          const versusImgNom2 = document.createElement("div");
          poulesContainerMatchsVersusJoueur2.appendChild(versusImgNom2);
          // Img héros joueur 2
          const versusJoueur2Img = document.createElement("img");
          versusJoueur2Img.src = "assets/heros/small/y-afanas.png";
          versusImgNom2.appendChild(versusJoueur2Img);
          // Versus Joueur 1 nom
          const versusJoueur2Nom = document.createElement("p");
          versusJoueur2Nom.innerText = dataPoules[i].matchs[m].joueur2;
          versusImgNom2.appendChild(versusJoueur2Nom);

          // Versus Joueur 1 win
          const versusJoueur2Win = document.createElement("p");
          versusJoueur2Win.innerText = "WIN";
          poulesContainerMatchsVersusJoueur2.appendChild(versusJoueur2Win);
        }

        //————— ONGLET SWITCH —————//
        const groupeOnglet = document.querySelectorAll(
          ".poules__container__onglets button"
        );
        // Switch onglet
        for (let i = 0; i < groupeOnglet.length; i++) {
          groupeOnglet[i].addEventListener("click", function () {
            document.querySelector(".btnActif").classList.remove("btnActif"); //suppr la class active
            groupeOnglet[i].classList.add("btnActif"); //ajoute la class sur élément cliqué
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
          poulesContainerMatchs.style.display = "block";
        });
      }
    }

    generatorPoules(dataPoules);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

fetchData();
