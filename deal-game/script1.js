const app = function () {
  const vals = [100, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20, 40, 50, 75, 1, 200];
  //const vals = [100, 2,  1, 200];
  const page = {};
  const game = {};
  let sideVals = [];
  vals.sort(function (a, b) {
    return a - b;
  })
  game.offers = [100, 12, 5, 8, 2, 1].filter(function (x) {
    return x < vals.length;
  })
  game.offers.sort(function (a, b) {
    return b - a;
  })

  function init() {
    page.modal1 = document.querySelector('.modal1');
    page.modal2 = document.querySelector('.modal2');
    page.modalBody = document.querySelector('.modal-body');
    page.modalBody2 = document.querySelector('.modal-body2');
    page.start = document.querySelector('.start');
    page.start.addEventListener('click', startGame);
    page.con = document.querySelector('.gameArea');
    page.main = document.querySelector('.main');
    page.leftSide = document.querySelector('.leftSide');
    page.rightSide = document.querySelector('.rightSide');
    game.inPlay = false;
    document.querySelector('.deal').addEventListener('click', makeDeal);
    document.querySelector('.noDeal').addEventListener('click', makeDeal);
    document.querySelector('.close').addEventListener('click', closePopUp);
    window.onclick = function (e) {
      if (e.target == page.modal1) {
        closePopUp();
      }
    }
  }

  function endGame() {
    game.inPlay = false;
    //show remaining
    page.start.style.display = "block";
    ////console.log('GAME OVER');
    let stillHidden = document.querySelectorAll('.case');
    stillHidden.forEach(function (el) {
      if (!el.classList.contains('muted')) {
        el.textContent = el.val;
        el.classList.add('reveal');
      }
    })
  }

  function makeDeal(e) {
    ////console.log(e.target.textContent);
    page.modal2.style.display = "none";
    if (e.target.textContent == "Accept") {
      popUp('<div>You Earned</div><h1>' + game.offerThis + '</h1><div>Tickets in this game</div>');
      endGame();
    }
    else if (game.lastOffer) {
      popUp('<div>Your case Has</div><h1>' + game.sel + '</h1><div>Tickets</div>');
      endGame();
    }
  }

  function closePopUp() {
    page.modal1.style.display = 'none';
    ////console.log(game.offers.length);
    ////console.log(game.holdingArray.length);
    if (game.holdingArray.length == game.offers[game.offerMade]) {
      ////console.log('send offer');
      game.offerThis = Math.floor(calculateOffer() / (game.holdingArray.length + 1));
      ////console.log(game.offerThis);
      game.offerMade++;
      let tempCaseNext;
      if (game.offerMade != game.offers.length) {
        tempCaseNext = '<p>Or Select ' + (game.offers[game.offerMade - 1] - game.offers[game.offerMade]) + ' more cases</p>';
      }
      else {
        tempCaseNext = '<p>Last Offer</p>';
        game.lastOffer = true;
      }
      popUp2('<div>Offer #' + (game.offerMade) + '</div><h1>' + game.offerThis + '</h1>' + tempCaseNext);
    }
    ///add offer logic
  }

  function popUp2(message) {
    ////console.log(message);
    page.modal2.style.display = "block";
    page.modalBody2.innerHTML = message;
  }

  function calculateOffer() {
    let total = game.sel;
    game.holdingArray.forEach(function (el) {
        total += el;
      })
      ////console.log('****');
      ////console.log(total);
    return total;
  }

  function startGame() {
    ////console.log('game started');
    page.start.style.display = 'none';
    buildGameBoard();
    game.lastOffer = false;
    game.inPlay = true;
    game.offerMade = 0;
    popUp('<h1>Select a Case</h1>Click any of the below cases');
  }

  function popUp(message) {
    ////console.log(message);
    page.modal1.style.display = "block";
    page.modalBody.innerHTML = message;
  }

  function buildGameBoard() {
    //build board  
    sideVal = [];
    const val2 = vals.slice(0);
    page.con.innerHTML = "";
    game.holdingArray = [];
    page.main.style.width = window.innerWidth + 'px';
    let tempCon = page.con.getBoundingClientRect();
    ////console.log(tempCon);
    let tempSide = page.rightSide.getBoundingClientRect();
    let spacer = (tempCon.width / 4) - 10;
    let ver = tempCon.top + 10;
    let hor = tempCon.left - (spacer / 1.2);
    let sideTop = 40;
    let leftHor = tempSide.width / 3;
    for (let x = 0; x < vals.length; x++) {
      sideVal[x] = document.createElement('div');
      sideVal[x].classList.add('sideVal');
      sideVal[x].textContent = vals[x];
      if (x == Math.round(vals.length / 2)) {
        sideTop = 40;
        leftHor = tempSide.left + (tempSide.width / 3);
      }
      sideVal[x].style.left = leftHor + 'px';
      sideVal[x].style.top = sideTop + 'px';
      sideTop += 45;
      if (x < (vals.length / 2)) {
        page.leftSide.appendChild(sideVal[x]);
      }
      else {
        page.rightSide.appendChild(sideVal[x]);
      }
      let maker = document.createElement('div');
      let ranIndex = Math.floor(Math.random() * val2.length);
      let temp = val2.splice(ranIndex, 1)[0];
      game.holdingArray.push(temp);
      ////console.log(temp);
      ////console.log(val2);
      hor += spacer;
      maker.val = temp;
      maker.ind = x + 1;
      maker.classList.add('case');
      maker.textContent = x + 1;
      maker.style.left = hor + 'px';
      maker.style.top = ver + 'px';
      maker.addEventListener('click', checkCase);
      page.con.appendChild(maker);
      if ((x % 4) == 3) {
        ver += 130;
        hor = tempCon.left - (spacer / 1.2);
      }
    }

    function checkCase(e) {
      if (game.inPlay) {
        let message = "";
        ////console.log(e.target.ind);
        ////console.log(e.target.val);
        e.target.classList.add('muted');
        ////console.log(game.holdingArray);
        let ind = game.holdingArray.indexOf(e.target.val);
        ////console.log(ind);
        let ind2 = vals.indexOf(e.target.val);
        ////console.log(ind2);
        e.target.removeEventListener('click', checkCase);
        if (game.holdingArray.length == vals.length) {
          game.sel = game.holdingArray.splice(ind, 1)[0];
          let tempCaseNext = game.holdingArray.length - game.offers[game.offerMade];
          popUp('<h1>Selected #' + e.target.ind + '</h1><p>Now Select ' + tempCaseNext + ' cases</p>');
        }
        else {
          ////console.log(sideVal);
          sideVal[ind2].classList.add('muted');
          if (ind != -1) {
            game.holdingArray.splice(ind, 1);
          }
          let halfWay = vals[(Math.round(vals.length / 2))];
          ////console.log(halfWay);
          if (e.target.val <= halfWay) {
            message += "<h1>Great Job</h1>";
          }
          else {
            message += "<h1>Too bad</h1>";
          }
          popUp(message + e.target.val);
        }
      }
    }
  }
  return {
    init: init
  }
}();
document.addEventListener('DOMContentLoaded', app.init);