const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActivcClasses();
    panel.classList.add("active");
  });
});
function removeActivcClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
