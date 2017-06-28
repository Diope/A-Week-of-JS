const body = document.body;
const input = document.querySelector("input[type=text]");
const overlay = document.querySelector(".overlay");

function showFloater() {
  document.body.classList.add("show-floater");
}

function closeFloater() {
  if (body.classList.remove("show-floater")) body.classList.remove('show-floater');
}

input.addEventListener("focus", showFloater);
input.addEventListener("focusout", closeFloater);
overlay.addEventListener("click", closeFloater);

