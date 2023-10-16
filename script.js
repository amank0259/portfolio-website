let rootEle = document.querySelector(":root");

rootEle.classList.add("light-mode");

function modeToggle() {
  rootEle.classList.toggle("dark-mode");
  toggleBtn.children[0].classList.toggle("displayNone");
  toggleBtn.children[1].classList.toggle("displayBlock");
}

var typed = new Typed(".malti-text", {
  strings: ["Student", "Frontend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
