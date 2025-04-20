const btn = document.querySelector(".btn");
const cont = document.querySelector(".cards");

const onAddCard = () => {
  cont.insertAdjacentHTML(
    "beforeend",
    `<li class="cards__item">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora, facilis delectus sint voluptas
          consequatur id nam aspernatur quod. Enim necessitatibus repudiandae veritatis dolorum quisquam fuga et,
          nventore sint nesciunt?
        </p>
     </li>`
  );
};

btn.addEventListener("click", onAddCard)
