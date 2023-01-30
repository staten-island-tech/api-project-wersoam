import "./style.css";
const dom = {
  input: document.querySelector("#input"),
  image: document.getElementById("image"),
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
};
const card = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${dom.input.textContent}`;
async function getinfo() {
  try {
    const response = await fetch(card);
    const info = await response.json();
    console.log(info);
    return info;
  } catch (error) {
    console.log(error);
  }
}
async function inserteffect() {
  const moneff = await getinfo();
  console.log(moneff);
  dom.image.insertAdjacentHTML(
    "beforeend",
    `<img src="${moneff.data[0].card_images[0].image_url}" >
  <p>effect: ${moneff.data[0].desc}</p>`
  );
}
dom.button.addEventListener(`click`, function () {
  clear();
  inserteffect();
});
inserteffect();
const clear = function () {
  dom.image.innerHTML = "";
};
