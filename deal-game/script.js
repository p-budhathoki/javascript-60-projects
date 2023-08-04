const app = (function () {
  const vals = [100, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20, 40, 50, 75, 1, 200];
  const page = {};
  const game = {};
  let sideVals = [];

  vals.sort(function (a, b) {
    return a - b;
  });
  game.offers = [100, 14, 4, 12, 2, 1].filter(function (item) {
    return item < vals.length;
  });

  game.offers.sort(function (a, b) {
    return b - a;
  });

  function init() {
    console.log("ready");
    page.modal1 = document.querySelector(".modal1");
    page.modal2 = document.querySelector(".modal2");
    page.modalBody = document.querySelector(".modal-body");
    page.modalBody2 = document.querySelector(".modal-body2");

    page.start = document.querySelector(".start");
    page.start.addEventListener("click", startGame);

    page.container = document.querySelector(".gameArea");
    page.main = document.querySelector(".main");
    page.leftSide = document.querySelector(".leftSide");
    page.rightSide = document.querySelector(".rightSide");

    game.inPlay = false;
    document.querySelector(".deal").addEventListener("click", makeDeal);
    document.querySelector(".noDeal").addEventListener("click", makeDeal);
    document.querySelector(".close").addEventListener("click", closePopUp);
    window.onclick = function (e) {
      if (e.target == page.modal1) {
        closePopUp();
      }
    };
  }

  function endGame() {
    game.inPlay = false;
    page.start.style.display = "block";
    let stillHidden = document.querySelectorAll(".case");
    stillHidden.forEach((el) => {
      if (!el.classList.contains("muted")) {
        el.textContent = el.val;
        el.classList.add("reveal");
      }
    });
    console.log("Game Over");
  }

  function makeDeal(e) {
    console.log(e.target.textContent);
    page.modal2.style.display = "none";
    if (e.target.textContent == "Accept") {
      popUp(
        `<div>You Earned : ${game.offerThis}</div> <br>Tickets in the game`
      );
      endGame();
    } else if (game.lastOffer) {
      popUp(`<div>You Case Has : ${game.sel} Tickets </div>  `);
      endGame();
    }
  }

  function closePopUp() {
    page.modal1.style.display = "none";
    console.log(game.offers.length);
    console.log(game.holdingArray.length);
    if (game.holdingArray.length == game.offers[game.offerMade]) {
      console.log("send offer");
      game.offerThis = Math.floor(
        calculateOffer() / game.holdingArray.length + 1
      );
      console.log(game.offerThis);
      game.offerMade++;
      let tempCaseNext;

      if (game.offerMade != game.offers.length) {
        tempCaseNext = `<p>Select ${
          game.offers[game.offerMade - 1] - game.offers[game.offerMade]
        } more cases</p>`;
      } else {
        tempCaseNext = `<p> Last Offer </p>`;
        game.lastOffer = true;
      }
      popUp2(
        `<div>Offer #${game.offerMade}</div> <br> ${game.offerThis} ${tempCaseNext}`
      );
    }
  }

  function popUp2() {
    console.log(message);
    page.modal2.style.display = "block";
    page.modalBody2.innerHTML = message;
  }

  function calculateOffer() {
    let total = game.sel;
    game.holdingArray.forEach((el) => {
      total += el;
    });
    return total;
  }

  function startGame() {
    console.log("game started");
    page.start.style.display = "none";
    buildGameBoard();

    game.lastOffer = false;
    game.inPlay = true;
    game.offerMade = 0;

    popUp(`Select a Case <br> Click any of the following cases`);
  }

  function popUp(message) {
    console.log(message);
    page.modal1.style.display = "block";
    page.modalBody.innerHTML = message;
  }

  function buildGameBoard() {
    sideVals = [];
    const val2 = vals.slice(0);
    page.container.innerHTML = "";
    game.holdingArray = [];
    page.main.style.width = window.innerWidth + "px";
    let tempCon = page.container.getBoundingClientRect();
    console.log(tempCon);
    let tempSide = page.rightSide.getBoundingClientRect();
    let spacer = tempCon.width / 4 - 10;
    let verPos = tempCon.top + 10;
    let horPos = tempCon.left - spacer / 1.2;
    let sideTop = 40;
    let leftHor = tempSide.width / 3;

    for (let i = 0; i < vals.length; i++) {
      sideVals[i] = document.createElement("div");
      sideVals[i].classList.add("sideVal");
      sideVals[i].textContent = vals[i];

      if ((i = Math.round(vals.length / 2))) {
        sideTop = 40;
        leftHor = tempSide.left + tempSide.width / 3;
      }
      //   sideVals[i].style.left = leftHor + "px";
      //   sideVals[i].style.top = sideTop + "px";
      sideTop += 45;
      if (i < vals.length / 2) {
        page.leftSide.appendChild(sideVals[i]);
      } else {
        // page.rightSide.appendChild(sideVals[i]);
      }

      let maker = document.createElement("div");
      let randIndex = Math.floor(Math.random() * val2.length);
      let temp = val2.splice(randIndex, 1)[0];
      game.holdingArray.push(temp);
      horPos += spacer;
      maker.val = temp;
      maker.ind = i + 1;

      maker.classList.add("case");
      maker.textContent = i + 1;
      maker.style.left = horPos + "px";
      maker.style.top = verPos + "px";
      maker.addEventListener("click", checkCase);
      page.container.appendChild(maker);

      if (i % 4 == 3) {
        verPos += 130;
        horPos = tempCon.left - spacer / 1.2;
      }
    }
    function checkCase(e) {
      if (game.inPlay) {
        let message = "";
        console.log(e.target.val);
        e.target.classList.add("muted");
        console.log(game.holdingArray);
        let ind = game.holdingArray.indexOf(e.target.val);
        console.log(ind);
        let ind2 = vals.indexOf(e.target.val);
        console.log(ind2);
        e.target.removeEventListener("click", checkCase);
        if (game.holdingArray.length == vals.length) {
          game.sel = game.holdingArray.splice(ind, 1)[0];
          let tempCaseNext =
            game.holdingArray.length - game.offers[game.offerMade];
          popUp(
            `Selected #${e.target.ind} <br>Now Select ${tempCaseNext} cases`
          );
        } else {
          console.log(sideVals);
          sideVals[ind2].classList.add("muted");
          if (ind != -1) {
            game.holdingArray.splice(ind, 1);
          }
          let halfWay = vals[Math.round(vals.length / 2)];
          console.log(halfWay);
          if (e.target.val <= halfWay) {
            message += `Great Job!`;
          } else {
            message += `Too Bad!`;
          }
          popUp(message + e.target.val);
        }
      }
    }
  }
  return {
    init: init,
  };
})();
document.addEventListener("DOMContentLoaded", app.init);
