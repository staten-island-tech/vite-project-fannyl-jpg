import './style.css'
import { setupCounter } from './counter.js'

let colorsArray = [`#AC1F20`, `#D82526`, `#E24F50`, `#EA7A7A`, `#F1A5A6`];
let isFeched = false;
document.getElementById("color-scheme-button").addEventListener("click", () => {
  const colorHex = document.getElementById("color-input").value.slice(1);
  const colorScheme = document
    .getElementById("select-mode")
    .value.toLowerCase();

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${colorScheme}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      colorsArray = data.colors;
      isFeched = true;
      render(colorsArray);
    });
});

function render(data) {
  let html = "";

  data.forEach((item) => {
    const hexCode = isFeched ? item.hex.value : item;
    html += `
          <div class="pallete" style="background:${hexCode}"> 
                  <span class="hex-color" data-hex="${hexCode}" id=${hexCode}>${hexCode}</span>
                </div>
        `;
  });
  document.getElementById("color-scheme-container").innerHTML = html;
}
render(colorsArray);

document
  .querySelector("#color-scheme-container")
  .addEventListener("click", (e) => {
    if (e.target.dataset.hex) {
      const copyHex = e.target.dataset.hex;
      // navigator.clipboard.writeText(copyHex);

      document.getElementById(`${copyHex}`).textContent = "copied!!";
      document.getElementById(`${copyHex}`).style.background = "#f4f4f4";
      setTimeout(() => {
        document.getElementById(`${copyHex}`).textContent = copyHex;
        document.getElementById(`${copyHex}`).style.background = "#fff";
      }, 1000);
    }
  });