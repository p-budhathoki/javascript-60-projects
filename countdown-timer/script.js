// create a new container div
div = document.createElement("div");
div.setAttribute("class", "container");
document.body.appendChild(div);

// heading
h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.textContent = "Countdown Timer";
div.appendChild(h1);

// input
dateInput = document.createElement("input");
dateInput.setAttribute("type", "date");
dateInput.setAttribute("class", "input-value");
dateInput.setAttribute("name", "endDate");
div.appendChild(dateInput);

// clock div
clockDiv = document.createElement("div");
clockDiv.setAttribute("class", "clock");
div.appendChild(clockDiv);

// clock div Days
daysDiv = document.createElement("div");
daysDiv.setAttribute("class", "days");
daysDiv.textContent = "Days";
clockDiv.appendChild(daysDiv);

spanDays = document.createElement("span");
spanDays.textContent = 0;
daysDiv.appendChild(spanDays);

// clock div Hours
hoursDiv = document.createElement("div");
hoursDiv.setAttribute("class", "hours");
hoursDiv.textContent = "Hours";
clockDiv.appendChild(hoursDiv);

spanHours = document.createElement("span");
spanHours.textContent = 0;
hoursDiv.appendChild(spanHours);

// clock div Minutes
minutesDiv = document.createElement("div");
minutesDiv.setAttribute("class", "minutes");
minutesDiv.textContent = "Minutes";
clockDiv.appendChild(minutesDiv);

spanMinutes = document.createElement("span");
spanMinutes.textContent = 0;
minutesDiv.appendChild(spanMinutes);

// clock div Seconds
secondsDiv = document.createElement("div");
secondsDiv.setAttribute("class", "seconds");
secondsDiv.textContent = "Seconds";
clockDiv.appendChild(secondsDiv);

spanSeconds = document.createElement("span");
spanSeconds.textContent = 0;
secondsDiv.appendChild(spanSeconds);

// button
// button = document.createElement("button");
// button.setAttribute("class", "btn btn-play");
// button.innerHTML = "Start";
// gameDiv.appendChild(button);

// Result
// divMsg = document.createElement("h1");
// divMsg.setAttribute("class", "message hide");
// divMsg.textContent = "Result :";
// div.appendChild(divMsg);

const endDate = document.querySelector("input[name='endDate']");
console.log(endDate);
const clock = document.querySelector(".clock");
console.log(clock);
let timeInterval;
let timeStop = true;
const savedValue = localStorage.getItem("countdown") || false;
if (savedValue) {
  startClock(savedValue);
  let inputValue = new Date(savedValue);
  console.log(inputValue);
  endDate.valueAsDate = inputValue;
}
// add event listener to date input
endDate.addEventListener("change", (e) => {
  e.preventDefault();
  clearInterval(timeInterval);
  // console.log(endDate.value);
  const temp = new Date(endDate.value);
  localStorage.setItem("countdown", temp);
  //   console.log(temp);

  startClock(temp);
  timeStop = true;
});

function startClock(d) {
  function updateCounter() {
    //   console.log(d);
    //   console.log(Date.parse(d)); // milliseconds
    //   timeLeft(d);
    // console.log(timeLeft(d));
    let totalTimeLeft = timeLeft(d);
    console.log(totalTimeLeft);
    if (totalTimeLeft.total <= 0) {
      timeStop = false;
    }
    for (let propty in totalTimeLeft) {
      console.log(propty + " " + totalTimeLeft[propty]);

      let el = document.querySelector("." + propty);
      // let el = document
      //   .getElementsByClassName("." + propty)
      //   .querySelectorAll("span")
      //   .forEach((element) => console.log(element));
      if (el) {
        console.log(el);
        // string.charAt(0).toUpperCase()+string.slice(1)
        // el.innerHTML = totalTimeLeft[propty];
        el.textContent = `${totalTimeLeft[propty]} ${propty}`;
        // console.log("First Child : " + el);
      }
    }
  }
  updateCounter();
  if (timeStop) {
    timeInterval = setInterval(updateCounter, 1000);
  } else {
    clearInterval(timeInterval);
  }
}

function timeLeft(d) {
  let currentDate = new Date();
  //   console.log(Date.parse(d));
  //   console.log("Current date: " + currentDate);
  //   console.log("Current Date : " + Date.parse(currentDate));

  // difference between current date and chosen date
  let t = Date.parse(d) - Date.parse(currentDate);
  //   console.log(t);

  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  if (t > 0) {
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  } else {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
}
