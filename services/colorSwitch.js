const radioButtons = document.getElementsByName("color-switch");

const storedColor =
  localStorage.getItem("color") ||
  (window.matchMedia("(prefers-color-scheme: orange)"));
if (storedColor)
  document.documentElement.setAttribute("data-color", storedColor);

radioButtons.forEach((radio) => {
  if (radio.value === storedColor) {
    radio.checked = true
  }

  radio.addEventListener("change", () => {
    localStorage.setItem("color", radio.value)

    document.documentElement.setAttribute("data-color", radio.value)
  })
});
