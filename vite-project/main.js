import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
const dom = {
  input: document.querySelector("#input"),
  image: document.getElementById("image"),
  button: document.getElementById("button"),
};
// image = "http://yugiohprices.com/api/card_image/${dom.input}";
// data = "https://yugiohprices.com/api/card_data/${dom.input}";

dom.button.addEventListener("click", function () {
  console.log(dom.input);
  dom.image.insertAdjacentHTML(
    "beforeend",
    `<img src="http://yugiohprices.com/api/card_image/${dom.input}"><p>"https://yugiohprices.com/api/card_data/${dom.input}"</p>`
  );
});
