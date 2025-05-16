function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
}

function post5() {
  getPosts().then((posts) => {
    const postSlice  = posts.slice(0, 5)
    console.log(postSlice);
    
  });
}

post5()