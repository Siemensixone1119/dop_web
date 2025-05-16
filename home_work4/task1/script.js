function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
}

function postCount() {
  getPosts().then((posts) => console.log(posts.length));
}

postCount();
