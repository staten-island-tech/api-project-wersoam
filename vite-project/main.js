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
  "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=gunkan%20suship%20shari%20red";

async function getinfo() {
  try {
  
    const response = await fetch(card_effect);
    const data = await response.json();
    if (!response.ok){throw new Error(`failed to fetch post: ${response.status}`)}
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
getinfo(card_effect);
const inserteffect = async () => {
  const moneff = await fetchData(getinfo(card_effect));
  dom.text.innerHTML = `effect: ${moneff.data.desc}`;
};

inserteffect();

// dom.button.addEventListener("click", function () {
//   console.log(dom.input.value);
//   dom.image.insertAdjacentHTML(
//     "beforeend",
//     `<img src=${imagelink}><p>"https://yugiohprices.com/api/card_data/${dom.input.value}"</p>`
//   );
// });
// const imagelink = `http://yugiohprices.com/api/card_image/${dom.input.value}`;
