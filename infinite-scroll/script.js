// const url =
//   "https://script.google.com/macros/s/AKfycbxFlQXkvna9jYamLWhTQ1k3cJItWZDvCYoCmLTcN-CJcr7vZw/exec";
const url =
  "https://script.google.com/macros/s/AKfycbxFlQXkvna9jYamLWhTQ1k3cJItWZDvCYoCmLTcN-CJcr7vZw/exec";
const val = { page: 15 };

const page = {};
page.loaderMore = true;
page.message = document.createElement("div");
page.message.textContent = "---Scroll to Load More Content...---";
page.container = document.createElement("div");
page.container.textContent = "Infinity and Beyond";
page.main = document.querySelector("section");
page.main.append(page.container);
page.main.append(page.message);

firstLoad();
function firstLoad() {
  page.container.innerHTML = "";
  getCourses();
}

function getCourses() {
  const baseURL = url + "?p=" + val.page;
  page.message.textContent = "Loading...";

  fetch(baseURL)
    .then((rep) => rep.json())
    .then((json) => {
      if (json.data.pages.next != null) {
        page.loaderMore = true;
        page.message.textContent =
          "-Page " + val.page + " --Scroll to load more content---";
      } else {
        page.message.style.display = "none";
      }
      console.log(page);
      console.log(json.data);
      renderPost(json.data.posts);
    });
}

window.onscroll = function (e) {
  //   console.log(e);
  //   console.log(window.innerHeight);
  //   console.log(window.scrollY);
  //   console.log(document.body.offsetHeight);

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
    console.log("Scrolling");
    if (page.loaderMore) {
      page.loaderMore = false;
      addNewPosts();
    }
  }
};

function addNewPosts() {
  val.page++;
  getCourses();
}

function renderPost(data) {
  data.forEach((post)=> {
    const div = document.createElement("div");
    div.innerHTML = `${post[8]}`;
    page.container.append(div);
  });
}
