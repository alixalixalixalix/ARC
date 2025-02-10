const fetchData = async () => {
  try {
    const res = await fetch("/data/phaseFinale.json");
    const dataPhaseFinale = await res.json();

    function generatorPhaseFinale(dataPhaseFinale) {
      const tourList = document.getElementById("sectionFinale__listTour");
      tourList.innerHTML = "";

      for (let i = 0; i < dataPhaseFinale.length; i++) {
        // <div> liste match
        const sectionFinale__listMatchs = document.createElement("div");
        sectionFinale__listMatchs.classList.add("sectionFinale__listMatchs");
        if (dataPhaseFinale[i].idTour === dataPhaseFinale[1].idTour) {
          if (window.innerWidth < 600) {
            sectionFinale__listMatchs.style.gap = "100px";
          } else {
            sectionFinale__listMatchs.style.gap = "164px";
          }
        }
        if (dataPhaseFinale[i].idTour === dataPhaseFinale[2].idTour) {
          if (window.innerWidth < 600) {
            sectionFinale__listMatchs.style.gap = "270px";
          } else {
            sectionFinale__listMatchs.style.gap = "440px";
          }
        }
        tourList.appendChild(sectionFinale__listMatchs);

        for (let j = 0; j < dataPhaseFinale[i].matchs.length; j++) {
          // <article> match (2 joueurs)
          const sectionFinale__listMatchs__match =
            document.createElement("article");
          sectionFinale__listMatchs__match.classList.add(
            "sectionFinale__listMatchs__match"
          );
          sectionFinale__listMatchs.appendChild(
            sectionFinale__listMatchs__match
          );

          // JOUEUR 1 //
          // <div> joueur1
          const sectionFinale__listMatchs__match__joueur1 =
            document.createElement("div");
          sectionFinale__listMatchs__match__joueur1.classList.add(
            "sectionFinale__listMatchs__match__joueur"
          );
          sectionFinale__listMatchs__match.appendChild(
            sectionFinale__listMatchs__match__joueur1
          );
          // <div> joueur1 container ImgNom
          const joueur__imgNom1 = document.createElement("div");
          sectionFinale__listMatchs__match__joueur1.appendChild(
            joueur__imgNom1
          );
          // <img> joueur1 img héros
          const joueur1Img = document.createElement("img");
          joueur1Img.src = dataPhaseFinale[i].matchs[j].heros1;
          joueur__imgNom1.appendChild(joueur1Img);
          // <p> joueur1 nom
          const joueur1Nom = document.createElement("p");
          joueur1Nom.innerText = dataPhaseFinale[i].matchs[j].joueur1;
          joueur__imgNom1.appendChild(joueur1Nom);

          // JOUEUR 2 //
          // <div> joueur2
          const sectionFinale__listMatchs__match__joueur2 =
            document.createElement("div");
          sectionFinale__listMatchs__match__joueur2.classList.add(
            "sectionFinale__listMatchs__match__joueur"
          );
          sectionFinale__listMatchs__match.appendChild(
            sectionFinale__listMatchs__match__joueur2
          );
          // <div> joueur2 container ImgNom
          const joueur__imgNom2 = document.createElement("div");
          sectionFinale__listMatchs__match__joueur2.appendChild(
            joueur__imgNom2
          );
          // <img> joueur2 img héros
          const joueur2Img = document.createElement("img");
          joueur2Img.src = dataPhaseFinale[i].matchs[j].heros2;
          joueur__imgNom2.appendChild(joueur2Img);
          // <p> joueur2 nom
          const joueur2Nom = document.createElement("p");
          joueur2Nom.innerText = dataPhaseFinale[i].matchs[j].joueur2;
          joueur__imgNom2.appendChild(joueur2Nom);

          // WIN
          if (
            dataPhaseFinale[i].matchs[j].vainqueur ===
            dataPhaseFinale[i].matchs[j].joueur1
          ) {
            const versusJoueur1Win = document.createElement("p");
            versusJoueur1Win.innerText = "WIN";
            sectionFinale__listMatchs__match__joueur1.appendChild(
              versusJoueur1Win
            );
            joueur2Nom.style.opacity = "0.3";
            joueur2Img.style.opacity = "0.5";
          } else {
            const versusJoueur2Win = document.createElement("p");
            versusJoueur2Win.innerText = "WIN";
            sectionFinale__listMatchs__match__joueur2.appendChild(
              versusJoueur2Win
            );
            joueur__imgNom1.style.opacity = "0.3";
            joueur1Img.style.opacity = "0.5";
          }
        }
      }
    }

    generatorPhaseFinale(dataPhaseFinale);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

fetchData();
