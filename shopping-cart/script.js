const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

const itemInput1 = document.createElement("input");
itemInput1.setAttribute("type", "text");
itemInput1.setAttribute("placeholder", "Item Name");
container.appendChild(itemInput1);

const itemInput2 = document.createElement("input");
itemInput2.setAttribute("type", "number");
itemInput2.setAttribute("placeholder", "Item Cost");
container.appendChild(itemInput2);

const itemButton = document.createElement("button");
itemButton.textContent = "Add Item";
itemButton.addEventListener("click", addItem);
container.appendChild(itemButton);

const totalButton = document.createElement("button");
totalButton.textContent = "Total";
totalButton.addEventListener("click", () => {
  let temp = cart.totalCost();
  console.log(temp);
});
container.appendChild(totalButton);

const output1 = document.createElement("div");
output1.setAttribute("class", "output");
container.appendChild(output1);

const items = [];
const cart = new Cart();

// function cartMe() {
//   console.log(e);
// }

function Cart() {
  const myList = {};
  this.lister = function () {
    console.log(myList);
  };
  this.totalCost = function () {
    let total = 0;
    for (let pro in myList) {
      let subtotal = myList[pro].subtotal();
      total += subtotal;
    }
    return total;
  };
  this.outputTotal = function () {
    let total = 0;
    for (let pro in myList) {
      let subtotal = myList[pro].subtotal();
      let el = myList[pro];
      output1.innerHTML += `${el.name} $${el.price} X ${el.quantity} = $${subtotal}<br>`;
      total += subtotal;
    }
    output1.innerHTML += `Final Total $${total}`;
  };
  this.adder = function (item, cost) {
    let namer = item.toLowerCase();
    if (!myList[namer]) {
      myList[namer] = {
        name: item,
        price: cost,
        quantity: 1,
        subtotal: function () {
          return this.price * this.quantity;
        },
      };
    } else {
      myList[namer].quantity++;
    }
  };
}

function Item(name, cost) {
  this.name = name;
  this.cost = cost;

  this.withGST = function () {
    return (this.cost * 1.1).toFixed(2);
  };

  this.shipping = function () {
    return (this.cost * 1.05).toFixed(2);
  };
}

window.onload = function () {
  itemInput1.value = "Milk";
  itemInput2.value = 5;
  addItem();
};

function addItem() {
  let tempName = itemInput1.value || "test1";
  let tempValue = itemInput2.value || "1";

  let tempItem = new Item(tempName, tempValue);
  items.push(tempItem);
  console.log(items);

  let div = document.createElement("div");
  div.setAttribute("class", "item-list");
  div.innerHTML = `<h3>${tempName}</h3> $${tempValue}`;

  div.tempName = tempName;
  div.tempValue = tempValue;
  container.appendChild(div);
  div.addEventListener("click", () => {
    cart.adder(tempName, tempValue);
    cart.outputTotal();
  });
  itemInput1.value = "";
  itemInput2.value = "";
}
