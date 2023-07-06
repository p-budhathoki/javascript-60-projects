const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttonEl = document.querySelectorAll("button");
const gamePlay = document.querySelector(".gameplay");
// console.log(buttonEl);

let curCardValue = 0;
let scoreValue = 0;
let deck = [];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suits = ["hearts", "diams", "clubs", "spades"];

for (let i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener("click", playGame);
}

function toggleButtons() {
  buttonEl.forEach((element) => {
    element.classList.toggle("hide");
    // console.log(element);
  });
  gamePlay.classList.toggle("hide");
}

function playGame(e) {
  //   console.log("clicked");
  let temp = e.target.innerText;
  //   console.log(temp);
  let myCard = drawCard();
  console.log(myCard);

  if (temp === "Start") {
    // console.log("You clicked Start");
    message.innerHTML = "Higher or Lower";
    // gamePlay.innerHTML = myCard.rank + " " + myCard.suit;
    gamePlay.innerHTML = "";
    makeCard(myCard);
    toggleButtons();
    return;
  }
  //   console.log(myCard);
  if (myCard.value == curCardValue) {
    message.innerHTML = "Draw";
  } else {
    if (
      (temp == "Higher" && myCard.value > curCardValue) ||
      (temp == "Lower" && myCard.value < curCardValue)
    ) {
      scoreValue++;
      score.innerHTML = scoreValue;
      message.innerHTML = "Correct, Next ?";
    } else {
      message.innerHTML = "Wrong! Game Over!!";
      //   console.log(myCard);
      //   makeCard(myCard);
      toggleButtons();
      //   score.innerHTML = 0;
      let startOver = document.querySelector(".start");
      startOver.textContent = "Start Over";
    }
    makeCard(myCard);
  }
}

function drawCard() {
  if (deck.length > 0) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(randomIndex, 1)[0];
    // console.log(card);
    return card;
  } else {
    makeDeck();
    return drawCard();
  }
}
function makeDeck() {
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
  //   console.log(deck);
}
function makeCard(card) {
  //   console.log(card);
  let html1 = card.rank + "<br />&" + card.suit + ";";
  let html2 = card.rank + "&" + card.suit + ";";
  let curCards = document.querySelectorAll(".card");

  let div = document.createElement("div");
  div.setAttribute("class", "card");
  div.style.left = curCards.length * 25 + "px";
  curCardValue = card.value;

  if (card.suit === "hearts" || card.suit === "diams") {
    div.classList.add("red");
  }

  let span1 = document.createElement("span");
  span1.setAttribute("class", "tiny-top");
  span1.innerHTML = html2;
  div.appendChild(span1);

  let span2 = document.createElement("span");
  span2.setAttribute("class", "big");
  span2.innerHTML = html1;
  div.appendChild(span2);

  let span3 = document.createElement("span");
  span3.setAttribute("class", "tiny-bottom");
  span3.innerHTML = html2;
  div.appendChild(span3);

  //   div.innerHTML = html1;
  gamePlay.appendChild(div);
}
