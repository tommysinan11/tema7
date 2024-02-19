function forestFunction() {
  console.log("hej");
  document.querySelector("#Forest").addEventListener("click", forestCategories);
  document.querySelector("#confiderous").classList.add("hide");
  document.querySelector("#deciduous").classList.add("hide");
}
function forestCategories() {
  console.log("hejsa");
  document.querySelector("#confiderous").classList.remove("hide");
  document.querySelector("#deciduous").classList.remove("hide");
}
