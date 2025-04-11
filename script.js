// script.js

// Scroll-to-top button
const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "⬆";
document.body.appendChild(topBtn);

window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
