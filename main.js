const textarea = document.getElementById("input");
const svg = document.getElementById("svg");
const savebtn = document.getElementById("save-btn");
const path = svg.querySelector("path");

let value = "";

let hasItem = localStorage.getItem("path");

if (hasItem) {
  value = hasItem;
  textarea.value = value;
  updatePath();
}

textarea.addEventListener("input", (e) => {
  value = e.target.value;
  updatePath();
});

function updatePath() {
  path.setAttribute("d", value);
}

savebtn.addEventListener("click", () => {
  localStorage.setItem("path", value);
});
