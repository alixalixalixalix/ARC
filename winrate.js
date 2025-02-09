// Suppr de marginApp sur listeArticles
const listeArticles = document.getElementById("winrate");
if (window.innerWidth < 600) {
  listeArticles.classList.remove("marginApp");
}

const fetchData = async () => {
  try {
    const res = await fetch("/data/winrate.json");
    const dataWinrate = await res.json();

    function generatorWinrateHeros(dataWinrate) {
      const winrateList = document.querySelector(".winrate__list");
      winrateList.innerHTML = "";

      /*————— WINRATE HÉROS —————*/
      for (let i = 0; i < dataWinrate[1].heros.length; i++) {
        // filtre Grade + %
        dataWinrate[1].heros.sort((a, b) => {
          const nameComparison = a.top - b.top;
          if (a.top !== b.top) return nameComparison;
          return (b.nbWin / b.nbMatchs) * 100 - (a.nbWin / a.nbMatchs) * 100;
        });

        // <article> card
        const card = document.createElement("article");
        card.classList.add("winrate__list__card");
        winrateList.appendChild(card);

        // <div> card top
        const cardTop = document.createElement("div");
        cardTop.classList.add("winrate__list__card__top");
        cardTop.style.backgroundImage =
          "url(" + dataWinrate[1].heros[i].img + ")";
        card.appendChild(cardTop);
        // <div> grade
        const cardTopGrade = document.createElement("div");
        cardTopGrade.classList.add("winrate__list__card__top__grade");
        cardTop.appendChild(cardTopGrade);
        if (
          dataWinrate[1].heros[i].top === "40" ||
          dataWinrate[1].heros[i].top === "1000"
        ) {
          cardTopGrade.style.opacity = "0";
        }
        if (dataWinrate[1].heros[i].top === "1") {
          cardTopGrade.style.backgroundColor = "#e9b901";
        }
        if (dataWinrate[1].heros[i].top === "2") {
          cardTopGrade.style.backgroundColor = "#C0C0C0";
        }

        // <p> top 1
        const gradeHeros = document.createElement("p");
        gradeHeros.innerText = "TOP " + dataWinrate[1].heros[i].top;
        cardTopGrade.appendChild(gradeHeros);
        // <div> nombre
        const cardTopNombre = document.createElement("div");
        cardTopNombre.classList.add("winrate__list__card__icon");
        cardTop.appendChild(cardTopNombre);
        // <p> nombre
        const nombreHerosP = document.createElement("p");
        nombreHerosP.innerText = dataWinrate[1].heros[i].nbJoueurs;
        cardTopNombre.appendChild(nombreHerosP);
        // <img> nombre
        const nombreHerosImg = document.createElement("img");
        nombreHerosImg.src = "assets/icon-nbjoueurs.png";
        cardTopNombre.appendChild(nombreHerosImg);

        // <div> card bot
        const cardBot = document.createElement("div");
        cardBot.classList.add("winrate__list__card__bot");
        card.appendChild(cardBot);
        // <p> winTitre
        const winTitre = document.createElement("p");
        winTitre.classList.add("winTitre");
        winTitre.innerText = "Winrate";
        cardBot.appendChild(winTitre);
        // <p> winPourcentage
        const winPourcentage = document.createElement("p");
        winPourcentage.classList.add("winPourcentage");
        const calculPourcentage = Math.round(
          (dataWinrate[1].heros[i].nbWin / dataWinrate[1].heros[i].nbMatchs) *
            100
        );
        if (dataWinrate[1].heros[i].nbJoueurs === 0) {
          winPourcentage.innerText = "/";
        } else {
          winPourcentage.innerText = calculPourcentage + "%";
        }
        cardBot.appendChild(winPourcentage);

        // <div> stats vs win
        const statsVsWin = document.createElement("div");
        statsVsWin.classList.add("winrate__list__card__bot__vs");
        cardBot.appendChild(statsVsWin);
        // <div> nombre vs
        const nbVs = document.createElement("div");
        nbVs.classList.add("winrate__list__card__icon");
        statsVsWin.appendChild(nbVs);
        // <p> nombre vs
        const nbVsP = document.createElement("p");
        nbVsP.innerText = dataWinrate[1].heros[i].nbMatchs;
        nbVs.appendChild(nbVsP);
        // <img> nombre vs
        const nbVsImg = document.createElement("img");
        nbVsImg.src = "assets/icon-vs.png";
        nbVs.appendChild(nbVsImg);
        // <div> nombre win
        const nbWin = document.createElement("div");
        nbWin.classList.add("winrate__list__card__icon");
        statsVsWin.appendChild(nbWin);
        // <p> nombre win
        const nbWinP = document.createElement("p");
        nbWinP.innerText = dataWinrate[1].heros[i].nbWin;
        nbWin.appendChild(nbWinP);
        // <img> nombre win
        const nbWinImg = document.createElement("img");
        nbWinImg.src = "assets/icon-win.png";
        nbWin.appendChild(nbWinImg);
      }
    }

    function generatorWinrateFactions(dataWinrate) {
      const winrateFactionsList = document.querySelector(
        ".winrateFactions__list"
      );
      winrateFactionsList.innerHTML = "";

      /*————— WINRATE FACTIONS —————*/
      // filtre Grade + %
      dataWinrate[0].factions.sort((a, b) => {
        const nameComparison = a.top - b.top;
        if (a.top !== b.top) return nameComparison;
        return (
          (b.recupNbWin / b.recupNbMatchs) * 100 -
          (a.recupNbWin / a.recupNbMatchs) * 100
        );
      });
      for (let i = 0; i < dataWinrate[0].factions.length; i++) {
        // <article> card
        const card = document.createElement("article");
        card.classList.add("winrate__list__card");
        winrateFactionsList.appendChild(card);

        // <div> card top
        const cardTop = document.createElement("div");
        cardTop.classList.add("winrate__list__card__top");
        cardTop.style.backgroundImage =
          "url(" + dataWinrate[0].factions[i].img + ")";
        card.appendChild(cardTop);
        // <div> grade
        const cardTopGrade = document.createElement("div");
        cardTopGrade.classList.add("winrate__list__card__top__grade");
        cardTop.appendChild(cardTopGrade);
        if (
          dataWinrate[0].factions[i].top === "40" ||
          dataWinrate[0].factions[i].top === "1000"
        ) {
          cardTopGrade.style.opacity = "0";
        }
        if (dataWinrate[0].factions[i].top === "1") {
          cardTopGrade.style.backgroundColor = "#e9b901";
        }
        if (dataWinrate[0].factions[i].top === "2") {
          cardTopGrade.style.backgroundColor = "#C0C0C0";
        }

        // <p> top 1
        const gradeHeros = document.createElement("p");
        gradeHeros.innerText = "TOP " + dataWinrate[0].factions[i].top;
        cardTopGrade.appendChild(gradeHeros);
        // <div> nombre
        const cardTopNombre = document.createElement("div");
        cardTopNombre.classList.add("winrate__list__card__icon");
        cardTop.appendChild(cardTopNombre);
        // <p> nombre
        const nombreHerosP = document.createElement("p");
        const nomFaction = dataWinrate[0].factions[i].nom;
        const recupNbHerosFaction = dataWinrate[1].heros
          .filter((hero) => hero.faction === nomFaction)
          .reduce((total, hero) => total + hero.nbJoueurs, 0);
        nombreHerosP.innerText = recupNbHerosFaction;
        cardTopNombre.appendChild(nombreHerosP);
        // <img> nombre
        const nombreHerosImg = document.createElement("img");
        nombreHerosImg.src = "assets/icon-nbjoueurs.png";
        cardTopNombre.appendChild(nombreHerosImg);

        // <div> card bot
        const cardBot = document.createElement("div");
        cardBot.classList.add("winrate__list__card__bot");
        card.appendChild(cardBot);
        // <p> winTitre
        const winTitre = document.createElement("p");
        winTitre.classList.add("winTitre");
        winTitre.innerText = "Winrate";
        cardBot.appendChild(winTitre);
        // <p> winPourcentage
        const winPourcentage = document.createElement("p");
        winPourcentage.classList.add("winPourcentage");

        const recupNbMatchs = dataWinrate[1].heros
          .filter((hero) => hero.faction === nomFaction)
          .reduce((total, hero) => total + hero.nbMatchs, 0);
        const recupNbWin = dataWinrate[1].heros
          .filter((hero) => hero.faction === nomFaction)
          .reduce((total, hero) => total + hero.nbWin, 0);

        const calculPourcentage = Math.round(
          (recupNbWin / recupNbMatchs) * 100
        );
        if (recupNbHerosFaction === 0) {
          winPourcentage.innerText = "/";
        } else {
          winPourcentage.innerText = calculPourcentage + "%";
        }
        cardBot.appendChild(winPourcentage);

        // <div> stats vs win
        const statsVsWin = document.createElement("div");
        statsVsWin.classList.add("winrate__list__card__bot__vs");
        cardBot.appendChild(statsVsWin);
        // <div> nombre vs
        const nbVs = document.createElement("div");
        nbVs.classList.add("winrate__list__card__icon");
        statsVsWin.appendChild(nbVs);
        // <p> nombre vs
        const nbVsP = document.createElement("p");
        nbVsP.innerText = recupNbMatchs;
        nbVs.appendChild(nbVsP);
        // <img> nombre vs
        const nbVsImg = document.createElement("img");
        nbVsImg.src = "assets/icon-vs.png";
        nbVs.appendChild(nbVsImg);
        // <div> nombre win
        const nbWin = document.createElement("div");
        nbWin.classList.add("winrate__list__card__icon");
        statsVsWin.appendChild(nbWin);
        // <p> nombre win
        const nbWinP = document.createElement("p");
        nbWinP.innerText = recupNbWin;
        nbWin.appendChild(nbWinP);
        // <img> nombre win
        const nbWinImg = document.createElement("img");
        nbWinImg.src = "assets/icon-win.png";
        nbWin.appendChild(nbWinImg);
      }
    }

    generatorWinrateHeros(dataWinrate);
    generatorWinrateFactions(dataWinrate);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

fetchData();


