let card = document.getElementById("card");
let yes_btn = document.getElementById("si-btn");
let no_btn = document.getElementById("no-btn");

const random_entre = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

no_btn.addEventListener("mouseover", () => {
  card.style.top = random_entre(200, 500) + "px";
  card.style.left = random_entre(200, 900) + "px";
});
yes_btn.addEventListener("click", () => {
  alert("felicitaciones, eres mi novia xd");
});
no_btn.addEventListener("click", () => {
  alert("sad :C");
});
