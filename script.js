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

// Set Project Thumbnail

let allProjectThumbnails = document.querySelectorAll(".thumbnail");
function setProjectThumbnails(allProjectThumbnail, projectName, color) {
  allProjectThumbnail.style = `
    background:url(src/ProjectThumbnails/${projectName}.jpeg) no-repeat center;
    background-size: contain;
    background-color: ${color};
    `;
}

setProjectThumbnails(allProjectThumbnails[0], "project1", "#A32F3B");
setProjectThumbnails(allProjectThumbnails[1], "project2", "#8339ec");
setProjectThumbnails(allProjectThumbnails[2], "project3", "#B1BD61");
setProjectThumbnails(allProjectThumbnails[3], "project4", "#3B3E4F");
setProjectThumbnails(allProjectThumbnails[4], "project5", "#fff");
setProjectThumbnails(allProjectThumbnails[5], "project6", "#202020");

// Nav Shadow

window.addEventListener("scroll", () => {
  let navbar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("navShadow");
  } else {
    navbar.classList.remove("navShadow");
  }
});

// nav Menu Toggle

let allNavMenuItems = document.querySelectorAll(".navMenuItem");
let navLogo = document.querySelector(".logo a");
let hireMe = document.querySelector(".hireMe");

for (let i = 0; i < allNavMenuItems.length; i++) {
  activeClassFunction(allNavMenuItems[i], allNavMenuItems[i]);
}
activeClassFunction(navLogo, allNavMenuItems[0]);
activeClassFunction(hireMe, allNavMenuItems[4]);

let revealAnimationElements = document.querySelectorAll(
  "li, .name, .heading h1, .projectName"
);
revealAnimationElements.forEach((revealAnimationElement) => {
  revealAnimationElement.style = `position: relative;
  overflow: hidden;`;
  revealAnimationElement.classList.add("hiddenRevealAnimation`");
});

function observeFunction(elements, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
      // for Animation every time
      // else {
      //   entry.target.classList.remove(className);
      // }
    });
  });
  elements.forEach((el) => observer.observe(el));
}
observeFunction(revealAnimationElements, "showRevealAnimation");

let leftAnimationElements = document.querySelectorAll(
  ".position, #aboutSection .biosec"
);
leftAnimationElements.forEach((leftAnimationElement) => {
  leftAnimationElement.classList.add("hiddenLeftAnimation");
});

let rightAnimationElements = document.querySelectorAll(
  ".circle, #aboutSection .circle"
);
rightAnimationElements.forEach((rightAnimationElement) => {
  rightAnimationElement.classList.add("hiddenRightAnimation");
});

let upAnimationElements = document.querySelectorAll(
  ".bio, .btns button, .links, .skills h1, .projectDesc, input, textarea"
);
upAnimationElements.forEach((upAnimationElement) => {
  upAnimationElement.classList.add("hiddenUpAnimation");
});

let progressBarAnimationElements = document.querySelectorAll(".progressBar");
progressBarAnimationElements.forEach((progressBarAnimationElement) => {
  progressBarAnimationElement.classList.add("hiddenProgressBarAnimation");
});

let thumbnailAnimationElements = document.querySelectorAll(".progressBar");
thumbnailAnimationElements.forEach((thumbnailAnimationElement) => {
  thumbnailAnimationElement.classList.add("hiddenThumbnailAnimation");
});

observeFunction(revealAnimationElements, "showRevealAnimation");
observeFunction(leftAnimationElements, "showLeftAnimation");
observeFunction(rightAnimationElements, "showRightAnimation");
observeFunction(upAnimationElements, "showUpAnimation");
observeFunction(progressBarAnimationElements, "showProgressBarAnimation");
observeFunction(thumbnailAnimationElements, "showThumbnailAnimation");

// hamburger Animation

let hamburger = document.querySelectorAll(".hamburger, .navList, header");
let body = document.querySelector("body");

function hamburgerAnimation() {
  hamburger[2].classList.toggle("hamburgerAnimation");
  hamburger[1].classList.toggle("navListAnimation");
  hamburger[0].classList.toggle("navListBackgroundAnimation");
  body.classList.toggle("scrollOff");
}

hamburger.forEach((e) => {
  e.addEventListener("click", () => {
    hamburger[2].classList.toggle("hamburgerAnimation");
    hamburger[1].classList.toggle("navListAnimation");
    hamburger[0].classList.toggle("navListBackgroundAnimation");
    body.classList.toggle("scrollOff");
  });
});
