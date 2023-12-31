const app = function () {
  const game = {};
  const suits = ["spades", "hearts", "clubs", "diams"];
  const ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const score = [0, 0];

  //   btnDeal = document.querySelector(".btn-deal");
  //   btnStand = document.querySelector(".btn-stand");
  //   btnHit = document.querySelector(".btn-hit");

  function init() {
    console.log("init ready");
    game.cash = 100;
    game.bet = 0;
    buildGameBoard();
    turnOff(game.btnHit);
    turnOff(game.btnStand);
    buildDeck();
    addClicker();
    showScore();
    updateCash();
  }

  function updateCash() {
    console.log(isNaN(game.inputBet.value));
    if (isNaN(game.inputBet.value) || game.inputBet.value.length < 1) {
      game.inputBet.value = 0;
    }
    if (game.inputBet.value > game.cash) {
      game.inputBet.value = game.cash;
    }
    game.bet = Number(game.inputBet.value);
    game.playerCash.textContent = "Player Cash : $" + (game.cash - game.bet);
  }

  function lockWager(tog) {
    game.inputBet.disabled = tog;
    game.betButton.disabled = tog;
    if (tog) {
      game.betButton.style.backgroundColor = "#ddd";
      game.inputBet.style.backgroundColor = "#ddd";
    } else {
      game.betButton.style.backgroundColor = "#000";
      game.inputBet.style.backgroundColor = "whitesmoke";
    }
  }
  function setBet() {
    game.status.textContent = "You bet $" + game.bet;
    game.cash = game.cash - game.bet;
    game.playerCash.textContent = "Player Cash $" + game.cash;
    lockWager(true);
  }

  function showScore() {
    game.scoreBoard.textContent = `Dealer ${score[0]} vs Player ${score[1]}`;
  }

  function addClicker() {
    game.btnDeal.addEventListener("click", deal);
    game.btnStand.addEventListener("click", playerStand);
    game.btnHit.addEventListener("click", nextCard);
    game.betButton.addEventListener("click", setBet);
    game.inputBet.addEventListener("change", updateCash);
  }

  function deal() {
    game.dealerHand = [];
    game.playerHand = [];
    game.dealerScore.textContent = "*";
    game.start = true;
    lockWager(true);
    turnOff(game.btnDeal);
    game.playerCards.innerHTML = "";
    game.dealerCards.innerHTML = "";
    takeCard(game.dealerHand, game.dealerCards, true);
    takeCard(game.dealerHand, game.dealerCards, false);
    takeCard(game.playerHand, game.playerCards, false);
    takeCard(game.playerHand, game.playerCards, false);

    updateCount();
  }
  function playerStand() {
    dealerPlay();
    turnOff(game.btnHit);
    turnOff(game.btnStand);
  }

  function nextCard() {
    takeCard(game.playerHand, game.playerCards, false);
    updateCount();
  }
  function findWinner() {
    let player = scorer(game.playerHand);
    let dealer = scorer(game.dealerHand);
    console.log(player, dealer);
    if (player > 21) {
      game.status.textContent = "You Busted with " + player + " ";
    }
    if (dealer > 21) {
      game.status.textContent = "Dealer Busted with " + dealer + " ";
    }

    if (player == dealer) {
      game.status.textContent = "Draw no winners " + player + " ";
      game.cash = game.bet + game.cash;
    } else if ((player < 22 && player > dealer) || dealer > 21) {
      game.status.textContent += "You win with " + player + " ";
      game.cash = game.bet * 2 + game.cash;
      score[1]++;
    } else {
      game.status.textContent += "Dealer wins with " + dealer + " ";
      score[0]++;
    }
    if (game.cash < 1) {
      game.cash = 0;
      game.bet = 0;
    }
    showScore();
    game.playerCash.textContent = "Player Cash $" + game.cash;
    lockWager(false);
    turnOff(game.btnHit);
    turnOff(game.btnStand);
    turnOn(game.btnDeal);
  }
  function dealerPlay() {
    let dealer = scorer(game.dealerHand);
    game.cardBack.style.display = "none";
    console.log(dealer);
    game.status.textContent = "Dealer score : " + dealer + " ";
    if (dealer >= 17) {
      game.dealerScore.textContent = dealer;
      findWinner();
    } else {
      takeCard(game.dealerHand, game.dealerCards, false);
      game.dealerScore.textContent = dealer;
      dealerPlay();
    }
  }

  function updateCount() {
    let player = scorer(game.playerHand);
    let dealer = scorer(game.dealerHand);
    console.log(player, dealer);
    game.playerScore.textContent = player;
    if (player < 21) {
      turnOn(game.btnHit);
      turnOn(game.btnStand);
      game.status.textContent = "Stand or take another card.";
    } else if (player > 21) {
      findWinner();
    } else {
      game.status.textContent = "Dealer in Play to 17 minimum";
      dealerPlay(dealer);
    }
    if (dealer == 21 && game.dealerHand.length == 2) {
      game.status.textContent = "Dealer Got BlackJack.";
      gameEnd();
      findWinner();
    }
  }

  function scoreAce(val, aces) {
    if (val < 21) {
      return val;
    } else if (aces > 0) {
      aces--;
      val = val - 10;
      return scoreAce(val, aces);
    } else {
      return val;
    }
  }

  function scorer(hand) {
    let total = 0;
    let ace = 0;
    hand.forEach((card) => {
      console.log(card);
      if (card.rank == "A") {
        ace++;
      }
      total = total + Number(card.value);
    });
    if (ace > 0 && total > 21) {
      total = scoreAce(total, ace);
    }
    if (total > 21) {
      gameEnd();
      return Number(total);
    }
    return Number(total);
  }

  function gameEnd() {
    turnOff(game.btnHit);
    turnOff(game.btnStand);
    console.log("ended");
  }

  function takeCard(hand, ele, h) {
    if (game.deck.length == 0) {
      buildDeck();
    }
    let temp = game.deck.shift();
    console.log(temp);
    hand.push(temp);
    console.log(game);

    showCard(temp, ele);
    if (h) {
      game.cardBack = document.createElement("div");
      game.cardBack.classList.add("cardB");
      ele.append(game.cardBack);
    }
  }

  function showCard(card, el) {
    // el.textContent = "Ready"
    if (card != undefined) {
      //   el.innerHTML = card.rank + "&" + card.suit + ";";
      let div = document.createElement("div");
      div.classList.add("card");
      if (card.suit === "hearts" || card.suit === "diams") {
        div.classList.add("red");
      }
      let span1 = document.createElement("span");
      span1.innerHTML = card.rank + "&" + card.suit + ";";
      span1.classList.add("tiny");
      div.appendChild(span1);

      let span2 = document.createElement("span");
      span2.innerHTML = card.rank;
      span2.classList.add("big");
      div.appendChild(span2);

      let span3 = document.createElement("span");
      span3.innerHTML = "&" + card.suit + ";";
      span3.classList.add("big");
      div.appendChild(span3);

      el.appendChild(div);
    }
  }

  function turnOn(btn) {
    btn.disabled = false;
    btn.style.backgroundColor = "#000";
  }

  function turnOff(btn) {
    btn.disabled = true;
    btn.style.backgroundColor = "#ddd";
  }

  function buildDeck() {
    game.deck = [];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        let card = {};
        //   if ranks[j] is not number assign 10
        let tempValue = isNaN(ranks[j]) ? 10 : ranks[j];
        // if ranks[j] is A assign 11
        tempValue = ranks[j] == "A" ? 11 : tempValue;

        card.suit = suits[i];
        card.rank = ranks[j];
        card.value = tempValue;
        //   console.log(suits[i], ranks[j], tempValue);
        game.deck.push(card);
      }
    }
    shuffle(game.deck);
    console.log(game.deck);
  }

  function shuffle(cards) {
    cards.sort(function () {
      // console.log(.5-Math.random())
      return 0.5 - Math.random();
    });
    return cards;
  }

  function buildGameBoard() {
    game.main = document.querySelector("#game");
    console.log(game);
    game.scoreBoard = document.createElement("div");
    game.scoreBoard.setAttribute("class", "score-board");
    game.scoreBoard.textContent = "Dealer 0  vs Player 0";
    game.main.append(game.scoreBoard);

    game.table = document.createElement("div");
    game.dealer = document.createElement("div");
    game.dealerCards = document.createElement("div");
    game.dealerCards.textContent = "Dealer Card : ";
    game.dealerCards.setAttribute("class", "card");

    game.dealerScore = document.createElement("div");
    game.dealerScore.textContent = "-";
    game.dealerScore.classList.add("score");
    game.dealer.append(game.dealerScore);
    game.table.append(game.dealer);
    game.dealer.append(game.dealerCards);

    game.player = document.createElement("div");
    game.playerCards = document.createElement("div");
    game.playerCards.setAttribute("class", "card");
    game.playerCards.textContent = "Player Card : ";
    game.playerScore = document.createElement("div");
    game.playerScore.textContent = "-";
    game.playerScore.classList.add("score");
    game.player.append(game.playerScore);
    game.table.append(game.player);
    game.player.append(game.playerCards);

    game.dashBoard = document.createElement("div");
    game.status = document.createElement("div");
    game.status.classList.add("message");
    game.status.textContent = "Message for Player : ";
    game.dashBoard.append(game.status);

    game.btnDeal = document.createElement("button");
    game.btnDeal.textContent = "Deal";
    game.btnDeal.classList.add("btn", "btn-deal");
    game.dashBoard.append(game.btnDeal);

    game.btnHit = document.createElement("button");
    game.btnHit.textContent = "Hit";
    game.btnHit.classList.add("btn", "btn-hit");
    game.dashBoard.append(game.btnHit);

    game.btnStand = document.createElement("button");
    game.btnStand.textContent = "Stand";
    game.btnStand.classList.add("btn", "btn-stand");
    game.dashBoard.append(game.btnStand);

    game.playerCash = document.createElement("button");
    game.playerCash.textContent = "Player Cash $100";
    game.playerCash.classList.add("message");
    game.dashBoard.append(game.playerCash);

    game.inputBet = document.createElement("input");
    game.inputBet.setAttribute("type", "number");
    game.inputBet.classList.add("input-value");
    game.dashBoard.append(game.inputBet);

    game.betButton = document.createElement("button");
    game.betButton.textContent = "Bet Amount : ";
    game.betButton.classList.add("btn");
    game.dashBoard.append(game.betButton);

    game.table.append(game.dashBoard);
    game.main.append(game.table);
  }

  return {
    init: init,
  };
}();
