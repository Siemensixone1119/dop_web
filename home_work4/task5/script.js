const inputEl = document.getElementById("userIdInput");
const btnEl = document.getElementById("fetchBtn");
const resultEl = document.getElementById("result");

function getUserById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  );
}

btnEl.addEventListener("click", () => {
  const id = inputEl.value.trim();
  resultEl.textContent = "";

  getUserById(id)
    .then((user) => {
      resultEl.textContent = JSON.stringify(user, null, 2);
    })
    .catch((err) => {
      resultEl.textContent = "Ошибка: " + err.message;
    });
});
