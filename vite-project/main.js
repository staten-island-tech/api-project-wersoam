import "./style.css";
const dom = {
  input: document.querySelector("#input"),
  image: document.getElementById("image"),
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
};
const quote = "https://animechan.vercel.app/api/random/character?name=king";

async function getinfo() {
  try {
    const response = await fetch(quote);
    const data = await response.json();
    dom.image.innerHTML = `${data.character}: ${data.quote}`;
    console.log(data);
    return data;
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
