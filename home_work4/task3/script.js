function getRandomCatImg() {
  return fetch("https://api.thecatapi.com/v1/images/search").then((response) =>
    response.json()
  );
}

function addCatImg() {
  getRandomCatImg().then((img) => {
    const body = document.querySelector("body");
    body.insertAdjacentHTML(
      "afterbegin",
      `
      <img src="${img[0].url}">
      `
    );
  });
}

addCatImg();
