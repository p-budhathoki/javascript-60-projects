// // API : AIzaSyAGWZkoCWhqhdD5OnI8HtXHmQFap37WhlQ
// const api = "AIzaSyCjrXTwgKfSUcTVatZ6HSKLK5JTxZ-jjkw";
const api = "AIzaSyCne3ADZ3RsWuN6H5UQXAsEGPImkNLMkDA";
const output = document.querySelector(".output");
// const outputWrapper = document.querySelector(".output .output-wrapper");
const searchTerm = document.querySelector("input");
const btns = document.querySelectorAll("button");

// searchTerm.setAttribute("value", "Search...");
searchTerm.setAttribute("placeholder", "Search...");
searchTerm.focus();

const btnNext = document.createElement("button");
btnNext.setAttribute("disabled", "disabled");
btnNext.textContent = "Next";
btnNext.style.width = "12rem";
btnNext.style.padding = "1.2rem";
btnNext.style.position = "absolute";
btnNext.style.top = "8rem";
btnNext.style.right = "5rem";
document.body.appendChild(btnNext);

const btnPrevious = document.createElement("button");
btnPrevious.setAttribute("disabled", true);
btnPrevious.textContent = "Previous";
btnPrevious.style.position = "absolute";
btnPrevious.style.top = "8rem";
btnPrevious.style.left = "4rem";
document.body.appendChild(btnPrevious);

btns.forEach((btn) => {
  btn.addEventListener("click", ySearch);
});

function ySearch(e) {
  // when search button is clicked get the serach term
  let search = searchTerm.value;
  search = encodeURIComponent(search);
  let url =
    "https://www.googleapis.com/youtube/v3/search/?part=snippet&key=" +
    api +
    "&q=test&maxResults=20";
  if (e.target.token) {
    url += "&token=" + e.target.token;
  }
  // document.querySelector(".output").textContent = url;
  // console.log(url);

  fetch(url)
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      if (data.prevPageToken) {
        btnPrevious.token = data.prevPageToken;
        // btnPrevious.setAttribute("disabled", false);
        btnPrevious.disabled = false;
      } else {
        btnPrevious.token = false;
        // btnPrevious.setAttribute("disabled", true);
        btnPrevious.disabled = true;
      }

      if (data.nextPageToken) {
        btnNext.token = data.nextPageToken;
        btnNext.disabled = false;
      } else {
        btnNext.token = false;
        btnNext.disabled = true;
      }
      console.log(data.items);
      //   show(data.items);
      //   let data1 = data.items.map(function (item) {
      return data.items.map(function (item) {
        return {
          title: item.snippet.title,
          des: item.snippet.description,
          img: item.snippet.thumbnails.default.url,
          id: item.id.videoId,
          item: item,
        };
      });
    })
    .then(function (arr) {
      show(arr);
    })
    .catch(function (err) {
      console.log(err);
    });
}
// ySearch();
function show(data) {
  console.log(data);
  console.log(data.length);
  output.textContent = "";
  data.forEach((video) => {
    console.log(video);
    let div = document.createElement("div");
    div.classList.add("box");
    // let temp = document.createTextNode(video.snippet.description);
    let temp = document.createTextNode(video.des);
    let span = document.createElement("span");
    // span.innerHTML =
    // '<a href="http://www.youtube.com/watch?v=' +
    // video.id.videoId +
    // '" target="_blank">' +
    // video.snippet.title +
    // "</a>";
    span.innerHTML =
      '<a href="http://www.youtube.com/watch?v=' +
      video.id +
      '" target="_blank">' +
      video.title +
      "</a>";
    div.appendChild(span);
    div.appendChild(temp);
    output.append(div);
    // outputWrapper.append(div);
  });
}
