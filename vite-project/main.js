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
  "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon";

async function getinfo(card_effect) {
  try {
    const response = await fetch(card_effect);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
getinfo(card_effect);
const inserteffect = async () => {
  // defining an async arrow function
  const moneff = await fetchData(getinfo);
  dom.text.innerHTML = `effect: ${moneff.data.desc}`;
};

inserteffect();

dom.button.addEventListener("click", function () {
  console.log(dom.input);
  dom.image.insertAdjacentHTML(
    "beforeend",
    `<img src=${imagelink}><p>"https://yugiohprices.com/api/card_data/${dom.input}"</p>`
  );
});
const imagelink = `http://yugiohprices.com/api/card_image/${dom.input}`;
