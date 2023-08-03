//https://developers.google.com/youtube/v3/quickstart/js
// const api = "";
const api = "AIzaSyCne3ADZ3RsWuN6H5UQXAsEGPImkNLMkDA";

const output = document.querySelector(".output");
const searchTerm = document.querySelector("input");
const btn = document.querySelector("button");
// searchTerm.setAttribute("value", "test");
btn.addEventListener("click", ySearch);

function ySearch(e) {
  let search = searchTerm.value;
  search = encodeURIComponent(search);
  const url =
    "https://www.googleapis.com/youtube/v3/search/?part=snippet&key=" +
    api +
    "&q=" +
    search +
    "&maxResults=20";
  document.output.textContent = url;
  fetch(url)
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.items);
      show(data.items);
    });
}

function show(data) {
  console.log(data);
  console.log(data.length);
  data.forEach(function (video) {
    console.log(video);
    let div = document.createElement("div");
    div.classList.add("box");
    let temp = document.createTextNode(video.snippet.description);
    div.appendChild(temp);
    let span = document.createElement("span");
    span.innerHTML =
      '<a href="http://www.youtube.com/watch?v=' +
      video.id.videoId +
      '" target="_blank">' +
      video.snippet.title +
      "</a>";
    div.appendChild(span);
    output.appendChild(div);
  });
}
