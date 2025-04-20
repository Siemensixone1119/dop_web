const title = document.querySelector(".title")
const input = document.querySelector("input")

const onUpdateTitle = () => {
  title.textContent = input.value;
}

input.addEventListener("input", onUpdateTitle)