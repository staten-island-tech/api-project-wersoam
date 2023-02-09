import "./style.css";
const dom = {
  input: document.querySelector(".input"),
  image: document.getElementById("image"),
  button: document.querySelector(".btn"),
  text: document.getElementById("text"),
};
async function getinfo(card) {
  const response = await fetch(card);
  const info = await response.json();
  try {
    if (response.status > 199 || response.status > 300) {
      dom.image.insertAdjacentHTML(
        "beforeend",
        `<div class="ygo"><img src="${info.data[0].card_images[0].image_url}" ></div>
        <div class="ygo2"><p class="textcolor">effect: ${info.data[0].desc}</p></div>`
      );
    } else {
      dom.image.insertAdjacentHTML("beforeend", `<h1>Error, try again</h1>`);
    }
  } catch (error) {
    console.log(error);
  }
}

dom.button.addEventListener("click", function () {
  clear();
  let input = dom.input.value;
  const card = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${input}`;
  getinfo(card);
});

const clear = function () {
  dom.image.innerHTML = "";
};
// Aluber_the_goober_of_Duber
async function inserteffect() {
  try {
    let feedback = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Aluber%20the%20Jester%20of%20Despia"
    );
    let moneff = await feedback.json();
    dom.image.insertAdjacentHTML(
      "beforeend",
      `<div class="ygo"><img src="${moneff.data[0].card_images[0].image_url}" ></div>
      <div class="ygo2"><p class="textcolor">effect: ${moneff.data[0].desc}</p></div>`
    );
  } catch (error) {
    console.log(error);
  }
}
inserteffect();
