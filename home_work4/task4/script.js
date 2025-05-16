const btn = document.querySelector("button");
const newPost = {
  title: "Мой заголовок",
  body: "Текст поста",
  userId: 1,
};
function addPost() {
  return fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newPost),
  }).then((response) => response.json());
}

function post() {
  addPost().then((res) => console.log(res));
}

btn.addEventListener("click", () => post());
