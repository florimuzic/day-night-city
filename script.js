//photos: https://stephenwilkes.com/

const offBlack = "#171717";
const offWhite = "#bdbdbd";

const input = document.querySelector("input");
const cards = document.querySelectorAll(".card");
const borderBox = document.querySelectorAll(".borderBox");
const switchLabels = document.querySelector(".switchLabels");
const lightenLayer = document.querySelector(".lightenLayer");
const site = document.querySelector(".site");

const link = document.querySelector("a");

const colorChanges = [link, site, switchLabels];

input.addEventListener("click", function () {
  if (input.checked) {
    borderBox.forEach((box) => box.setAttribute("class", "active"));
    lightenLayer.style.background = "none";
    cards.forEach((card) => {
      card.style.marginLeft = "0px";
    });
    colorChanges.forEach((el) => {
      el.style.color = offWhite;
    });
  } else {
    borderBox.forEach((box) => box.setAttribute("class", "borderBox"));
    lightenLayer.style.background = "rgba(160, 215, 255, 0.7)";
    cards.forEach((card) => {
      card.style.marginLeft = "-190px";
    });
    colorChanges.forEach((el) => {
      el.style.color = offBlack;
    });
  }
});