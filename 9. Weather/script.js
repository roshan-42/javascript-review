const button = document.getElementById("search");
const input = document.getElementById("city");
button.addEventListener("click", () => {
  alert("clicked");
  console.log(input.value);
});
