const containerEl = document.querySelector(".container");
const items = [
  { item: "Milk", cost: 5, id: 0 },
  { item: "Apple", cost: 3.5, id: 1 },
  { item: "Bread", cost: 4.6, id: 2 },
  { item: "Butter", cost: 6.56, id: 3 },
  { item: "Banana", cost: 4.89, id: 4 },
];

let itemDiv = document.createElement("div");
itemDiv.setAttribute("class", "item-div");

const cart = {};

let div = document.createElement("div");
div.setAttribute("class", "output");
containerEl.appendChild(div);
const outputEl = document.querySelector(".output");

items.forEach(function (ele) {
  // console.log(ele);
  let div = document.createElement("div");
  div.setAttribute("class", "item-container");
  div.innerHTML = `<h3>${ele.item}</h3> $$ ${ele.cost} Id: ${ele.id}`;
  itemDiv.appendChild(div);
  containerEl.appendChild(itemDiv);

  div.addEventListener("click", () => {
    let itemName = ele.item.toLocaleLowerCase();
    console.log(itemName);

    if (!cart[itemName]) {
      cart[itemName] = {
        name: ele.item,
        price: ele.cost,
        quantity: 1,
        subTotal: function () {
          return (this.price * this.quantity).toFixed(2);
        },
      };
    } else {
      cart[itemName].quantity++;
    }
    relist();
  });
});

function relist() {
  outputEl.innerHTML = "";
  // console.log(cart);
  let total = 0;
  for (let product in cart) {
    let subtotal = cart[product].subTotal();
    console.log(cart[product]);
    total += Number(subtotal);
    outputEl.innerHTML += `${cart[product].name} $${cart[product].price} X ${cart[product].quantity} Sub Total : ${subtotal} <br/>`;
    //   console.log(cart[product].subTotal());
    console.log(total);
  }

  outputEl.innerHTML += `<b>Total: $${total.toFixed(2)} </b>`;
}

const honda = new Car("Red", "Honda", "Accord", 45000, 2000);
const mustang = new Car("Black", "Ford", "Mustang", 50000, 1990);

function Car(color, brand, make, price, year) {
  this.color = color;
  this.brand = brand;
  this.make = make;
  this.price = price;
  this.year = year;
  this.drive = function () {
    console.log(`I'm driving my ${this.year} ${this.brand}, Vroom Vroom`);
  };
  this.park = function () {
    console.log(`Parking the ${this.make}`);
  };
  this.sell = function () {
    console.log(
      `I want to sell my ${this.make} for at least ${this.price * 0.8}`
    );
  };
}
//===========================================================================
// Dice Roll Game
//===========================================================================

const game = new DiceGame();

const dice = document.createElement("div");
dice.setAttribute("class", "game-area");
containerEl.appendChild(dice);
const buttonEl = document.createElement("button");
// buttonEl.setAttribute("class", "button");
buttonEl.textContent = "Dice Roll";
buttonEl.style.margin = "1rem";
dice.appendChild(buttonEl);

const diceOutput = document.createElement("div");
diceOutput.setAttribute("class", "output");
diceOutput.style.color = "black";
diceOutput.style.margin = "1rem";
diceOutput.style.width = "25rem";
diceOutput.style.textAlign = "center";
diceOutput.style.border = ".1rem solid #ddd ";
// diceOutput.style.lineHeight = "20rem";
diceOutput.textContent = "Result";

// diceOutput.style.display = "inline-block";
// diceOutput.style.innerHTML = "Output for Dice Roll";
// div.setAttribute("class", "output");

dice.appendChild(diceOutput);

buttonEl.addEventListener("click", () => {
  // console.log("Roll")
  let playerRoll = game.roll();
  let computerRoll = game.roll();
  let winner = game.checker(playerRoll, computerRoll);
  console.log(winner);
  diceOutput.innerHTML = `Player ${playerRoll} Vs Computer ${computerRoll}<br/> ${winner}`;
});

function DiceGame() {
  this.roll = function () {
    this.result = Math.floor(Math.random() * 6) + 1;
    return this.result;
  };
  this.checker = function (roll1, roll2) {
    if (roll1 > roll2) {
      return "Player Wins!";
    } else if (roll2 > roll1) {
      return "Computer Wins!";
    } else {
      return "Its a tie!";
    }
  };
}
