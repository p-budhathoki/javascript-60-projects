const output = document.querySelector(".output");
const btns = document.querySelectorAll("button");
const getVals = document.querySelectorAll("input");

btns.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", btnAction);
});
document.addEventListener("DOMContentLoaded", () => {
  //   console.log("ready");
  const now = new Date();
  const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  // console.log(nextWeek)

  let day = +"0" + nextWeek.getDate().toString().slice(-2);
  let month = +"0" + (nextWeek.getMonth() + 1).toString().slice(-2);
  let year = +nextWeek.getFullYear().toString();
  // console.log(day, month, year);

  document.querySelector("input[type=date]").value =
    year + "-" + month + "-" + day;
});

function btnAction(e) {
  //   console.log(e.srcElement.innerText);
  let temp = e.srcElement.innerText.substring(
    0,
    e.srcElement.innerText.lastIndexOf(" ")
  );
  //   console.log(temp);
  let v = {};

  getVals.forEach((item, index) => {
    let tempName = item.getAttribute("name");
    let tempValue = tempName != "cookieExpired" ? item.value : item.valueAsDate;
    // console.log(tempValue);
    v[tempName] = tempValue;
  });
  console.log(v);
  console.log(temp);

  if (temp === "Set") {
    setCookie(v.cookieName, v.cookieValue, v.cookieExpire);
  } else if (temp === "Get") {
    getCookie(v.cookieName);
  } else if (temp === "Delete") {
    eraseCookie(v.cookieName);
  } else if (temp === "All") {
    listCookies();
  }
}

function setCookie(name, value, expire) {
  // console.log(expire.toUTCString())
  // console.log(name,value,expire);
  if (value.length > 0) {
    document.cookie =
      name + "=" + encodeURIComponent(value) + "; path=/;expires=" + expire;
  } else {
    output.textContent = "Cooke needs a value";
    console.log("Cooke needs a value");
  }
}
function getCookie(name) {
  let cookies = document.cookie.split(";");
  // console.log(cookies);
  output.textContent = "No Cookies Found";
  cookies.forEach(function (item, index) {
    item = item.trim();
    let tempCookie = item.split("=");
    if (tempCookie[0] === name) {
      output.textContent =
        "Found : " +
        tempCookie[0].trim() +
        " is " +
        decodeURIComponent(tempCookie[1]);
    }
    console.log(tempCookie);
  });
}
function eraseCookie(name) {
  document.cookie = name + "=;path=/;expires=Thu,01 Jan 1970 00:00:01 GMT;";
  output.textContent = "Cookie " + name + " Removed";
}
function listCookies() {
  let cookies = document.cookie.split(";");
  // console.log(cookies);
  output.textContent = "";
  cookies.forEach(function (item, index) {
    item = item.trim();
    let tempCookie = item.split("=");

    if (tempCookie[0].length > 0) {
      let div = document.createElement("div");
      div.setAttribute("class", "cookie");
      div.addEventListener("click", () => {
        console.log(tempCookie);
      });
      div.textContent =
        tempCookie[0].trim() + "" + decodeURIComponent(tempCookie[1]);
      output.appendChild(div);
    }

    if (tempCookie[0] === name) {
      output.textContent =
        "Found : " +
        tempCookie[0].trim() +
        " is " +
        decodeURIComponent(tempCookie[1]);
    }
  });
}
