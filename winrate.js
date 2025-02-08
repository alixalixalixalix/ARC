const fetchData = async () => {
  try {
    const res = await fetch("/data/winrate.json");
    const dataWinrate = await res.json();

    function generatorWinrateHeros(dataWinrate) {
      const winrateList = document.querySelector(".winrate__list");
      winrateList.innerHTML = "";

      /*————— GÉNÉRATOR POULE —————*/
      for (let i = 0; i < dataWinrate[1].heros.length; i++) {
        // <article> card
        const card = document.createElement("article");
        card.classList.add("winrate__list__card");
        winrateList.appendChild(card);

        // <div> card top
        const cardTop = document.createElement("div");
        cardTop.classList.add("winrate__list__card__top");
        cardTop.style.backgroundImage = "url(" + dataWinrate[1].heros[i].img + ")"
        card.appendChild(cardTop);
        // <div> grade
        const cardTopGrade = document.createElement("div");
        cardTopGrade.classList.add("winrate__list__card__top__grade");
        cardTop.appendChild(cardTopGrade);
        if(dataWinrate[1].heros[i].top === ""){
            cardTopGrade.style.opacity = "0"
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
        nombreHerosP.innerText = dataWinrate[1].heros[i].nbJoueurs
        cardTopNombre.appendChild(nombreHerosP);
        // <img> nombre
        const nombreHerosImg = document.createElement("img");
        nombreHerosImg.src = "assets/icon-nbjoueurs.png"
        cardTopNombre.appendChild(nombreHerosImg);

        // <div> card bot
        const cardBot = document.createElement("div");
        cardBot.classList.add("winrate__list__card__bot");
        card.appendChild(cardBot);
        // <p> winTitre
        const winTitre = document.createElement("p");
        winTitre.classList.add("winTitre");
        winTitre.innerText = "Winrate"
        cardBot.appendChild(winTitre);
        // <p> winPourcentage
        const winPourcentage = document.createElement("p");
        winPourcentage.classList.add("winPourcentage");
        winPourcentage.innerText = Math.round((dataWinrate[1].heros[i].nbWin / dataWinrate[1].heros[i].nbMatchs) *100) + "%";
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
        nbVsP.innerText = dataWinrate[1].heros[i].nbMatchs
        nbVs.appendChild(nbVsP);
        // <img> nombre vs
        const nbVsImg = document.createElement("img");
        nbVsImg.src = "assets/icon-vs.png"
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
        nbWinImg.src = "assets/icon-win.png"
        nbWin.appendChild(nbWinImg);
      }
    }

    generatorWinrateHeros(dataWinrate);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

fetchData();
