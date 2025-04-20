const cards = document.querySelectorAll(".cards__item");

const onChangeCardColor = (event) => {
  event.currentTarget.style["background-color"] = "green";
};

cards.forEach((card) => {
  card.addEventListener("click", onChangeCardColor);
});
