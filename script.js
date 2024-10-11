const element = document.querySelector("input");
element.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);
  console.log(`User input: ${event.target.value}`);
  if (event.key === "Enter") {
    const info = element.value
    element.innerHTML += "<p>" + element.value + "</p>";
    element.value = ''
  }
});
