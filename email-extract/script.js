const rawText = document.querySelector("textarea[name=txtarea]");
const finishedText = document.querySelector("textarea[name=output]");
const btnEl = document.querySelector("button");
const sel = document.querySelector("#sep");
// const counterEl = document.querySelector(".counter");
// let mytimer;

const str =
  "svekis@example.com test hello world svekis1@example.com svekis2@example.com";
rawText.value = str;

btnEl.addEventListener("click", getEmails);

function getEmails() {
  const temp = rawText.value;
  const regExp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+)/gi;
  const emailsRaw = temp.match(regExp);
  const emails = [];
  emailsRaw.forEach((email) => {
    if (!emails.includes(email)) {
      emails.push(email);
    }
  });
  console.log(emails);

  let myEmails = emails.join(sep.value);
  if (emails.length > 0) {
    finishedText.value = myEmails;
    finishedText.focus();
    finishedText.addEventListener("click", () => {
      finishedText.select();
    });
  }

  downBtn = document.querySelector(".btn-download");
  downBtn.innerHTML = "Download " + emails.length + " Emails";
  downBtn.addEventListener("click", () => {
    const fileName = "Emails.txt";
    const a = document.createElement("a");
    a.setAttribute(
      "href",
      "data:text/plain;charset=utf8," + encodeURIComponent(myEmails)
    );
    a.setAttribute("download", fileName);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}
