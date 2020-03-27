// For Mobile navigation to fade out on scroll
const toggle = document.getElementById("toggler");
window.addEventListener("scroll", () => (toggle.checked = false));

const buttons = document.querySelector(".category").children;
const items = document.querySelector(".image-gallery").children;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const target = this.getAttribute("data-target");
    for (let j = 0; j < items.length; j++) {
      items[j].style.display = "none";

      if (items[j].getAttribute("data-id") === target) {
        items[j].style.display = "block";
      }

      if (target === "all") {
        items[j].style.display = "block";
      }
    }
  });
}
