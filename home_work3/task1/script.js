const title = document.querySelector(".title");
const btn = document.querySelector("button");

const onChangeColor = () => {
  title.style.color = "green";
};

btn.addEventListener("click", onChangeColor);
