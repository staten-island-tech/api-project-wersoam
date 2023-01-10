import "./style.css";
const dom = {
  input: document.querySelector("#input"),
  image: document.getElementById("image"),
  button: document.getElementById("button"),
  text: document.getElementById("text"),
};
const card_image =
  "http://yugiohprices.com/api/card_image/witchcrafter madame verre";
const card_effect =
  "https://yugiohprices.com/api/card_data/witchcrafter madame verre";

async function get(card_effect) {
  try {
    const response = await fetch(card_effect);
    const data = await response.json();
    dom.text.textContent = data.Content;
  } catch (error) {
    console.log(error);
  }
}
get(card_image);
dom.button.addEventListener("click", function () {
  console.log(dom.input);
  dom.image.insertAdjacentHTML(
    "beforeend",
    `<img src=${imagelink}><p>"https://yugiohprices.com/api/card_data/${dom.input}"</p>`
  );
});
const imagelink = `http://yugiohprices.com/api/card_image/${dom.input}`;
