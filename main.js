const moreBtn = document.querySelector(".info .more .moreBtn");
const title = document.querySelector(".info .more .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
