function getNameId(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (response) => response.json()
  );
}

function renderNameId() {
  getNameId(1).then((res) => {
    const body = document.querySelector("body");
    body.insertAdjacentHTML(
      "afterbegin",
      `
      <p>${res.name}</p>
      `
    );
  });
}

renderNameId();
