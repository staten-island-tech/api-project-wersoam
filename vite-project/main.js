import "./style.css";
const dom = {
  input: document.querySelector("#input"),
  image: document.getElementById("image"),
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
};
const card =
  "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=gunkan%20suship%20shari%20red";

async function getinfo() {
  try {
    const response = await fetch(card);
    const info = await response.json();
    info.array.forEach((desc) => {});
    dom.image.insertAdjacentHTML(
      "beforeend",
      `<p>${info.data.name}: ${info.data.desc}</p>`
    );
    console.log(info);
    return info;
  } catch (error) {
    console.log(error);
  }
}

// const inserteffect = async () => {
//   const moneff = await getinfo();
//   dom.image.innerHTML = `effect: ${moneff.data.desc}`;
// };

getinfo();

dom.button.addEventListener("click", function () {
  getinfo();
});
