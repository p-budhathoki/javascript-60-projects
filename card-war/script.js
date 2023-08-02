const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const gamePlay = document.querySelector(".game-play");
const userPlay = document.querySelector(".user-play");
const result = document.querySelector(".result");

let deck = [];
let players = [];
let deals = [];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suits = ["hearts", "diams", "clubs", "spades"];
let round = 0;
let inPlay = false;
let total = 0

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", playGame);
});

function playGame(e) {
  let temp = e.target.textContent;
  //   console.log(temp);
  if (temp == "Start") {
    btnToggle();
    startGame();
  }
  if (temp == "Attack") {
    let tempRuns = document.querySelector("input").value;
    result.innerHTML = "";
    round = 0;
    for (let i = 0; i < tempRuns; i++) {
      if (inPlay) {
        message.innerHTML = "Round " + (i + 1);

        makeCards();
      }
    }
  }
}

function btnToggle() {
  buttons.forEach((button, index) => {
    buttons[index].classList.toggle("hide");
  });
}

function startGame() {
  inPlay = true;
  gamePlay.innerHTML = "";
  let numberPlayers = document.querySelector("input").value;
  // console.log(numberPlayers)
  document.querySelector("input").focus();
  buildDeck();
  // console.log(deck)
  setupPlayers(numberPlayers);
  dealCards(0);
  makeCards();
  document.querySelector("input").value = "1";
}

function showCard(el, card) {
  console.log(card);
  if (card != undefined) {
    el.style.backgroundColor = "whitesmoke";
    let html1 = card.rank + "<br/>&" + card.suit + ";";
    let html2 = card.rank + "&" + card.suit + ";";
    let div = document.createElement("div");
    div.classList.add("card");

    if (card.suit === "hearts" || card.suit === "diams") {
      div.classList.add("red");
    }

    let span1 = document.createElement("span");
    span1.innerHTML = html2;
    span1.classList.add("tiny");
    div.appendChild(span1);

    let span2 = document.createElement("span");
    span2.innerHTML = html1;
    span2.classList.add("big");
    div.appendChild(span2);
    el.appendChild(div);
    console.log(div);
  }
}

function dealRound(playerList, tempHolder) {
  let curWinner = {
    high: null,
    player: playerList[0],
  };
  let playoff = [];

  for (let i = 0; i < players.length; i++) {
    let tempPlayerIndex = playerList[i];
    if (deals[tempPlayerIndex].length > 0) {
      let card = deals[tempPlayerIndex].shift();
      if (curWinner.high === card.value) {
        if (playoff.length == 0) {
          playoff.push(curWinner.player);
        }
        playoff.push(tempPlayerIndex);
      }
      if (!curWinner.high || curWinner.high < card.value) {
        curWinner.high = card.value;
        curWinner.player = tempPlayerIndex;
        curWinner.card = card;
      }
      tempHolder.push(card);
      showCard(players[tempPlayerIndex], card);
    }
  }
  if (playoff.length > 0) {
    dealRound(playoff, tempHolder);
  } else {
    updater(curWinner.player, tempHolder);
  }
}

function makeCards() {
  let tempHolder = [];
  let playerList = [];
  for (let i = 0; i < players.length; i++) {
    players[i].innerHTML = "";
    if (deals[i].length > 0) {
      playerList.push(i);
    }
  }
  if (playerList.length == 1) {
    winGame();
  }
  dealRound(playerList, tempHolder);
}

function winGame() {
  btnToggle();
  inPlay = false;
  for (let i = 0; i < players.length; i++) {
    players[i].innerHTML +=
      deals[i].length >= total ? "<br>Winner</br>" : "<br/>";
  }
  message.innerHTML = "Select Number of Players";
  document.querySelector("input").value = "3";
}

function updater(winner, tempHolder) {
  players[winner].style.backgroundColor = "green";

  console.log(tempHolder);
  tempHolder.sort(function () {
    return 0.5 - Math.random();
  });
  for (let record of tempHolder) {
    deals[winner].push(record);
  }
  console.log(tempHolder);

  for (let i = 0; i < players.length; i++) {
    let div = document.createElement("div");
    div.classList.add("stats");
    if (deals[i].length == total) {
      div.innerHTML = "Total " + deals[i].length + " cards";
      winGame();
    } else {
      div.innerHTML =
        deals[i].length < 1 ? "Lost" : "Cards : " + deals[i].length;
    }
    players[i].appendChild(div);
  }

  result.innerHTML =
    "Player " + (winner + 1) + "won" + tempHolder.length + " cards<br/>";
}

function dealCards(playerCard) {
  playerCard = playerCard >= players.length ? 0 : playerCard;
  console.log(playerCard);

  if (deck.length > 0) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(randomIndex, 1)[0];
    deals[playerCard].push(card);
    playerCard++;
    return dealCards(playerCard);
    console.log(deals);
  } else {
    message.textContent = "Cards dealt now";
    return;
  }
}

function setupPlayers(num) {
  players = [];
  deals = [];
  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", "player" + (i + 1));
    div.classList.add("player");
    console.log(div);

    let div1 = document.createElement("div");
    div1.textContent = "Player" + (i + 1);

    players[i] = document.createElement("div");
    players[i].textContent = "Cards";
    div.appendChild(div1);
    div.appendChild(players[i]);
    gamePlay.appendChild(div);
    deals.push([]);
  }
}

function buildDeck() {
  deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = {};
      card.suit = suits[i];
      card.rank = ranks[j];
      card.value = j + 1;
      deck.push(card);
    }
  }
}
