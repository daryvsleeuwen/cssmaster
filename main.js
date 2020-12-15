let background = document.querySelector(".background");
let cutout = document.querySelector(".phone-cutout");
let options = document.querySelectorAll(".option-box");

let cutoutdimensions = cutout.getBoundingClientRect();
let backgroundspeed = 0.01;
let cutoutsspeed = 0.03;

window.addEventListener("mousemove", (event) => {
  background.style.transform = `translate(${event.pageX * backgroundspeed}px, ${
    event.pageY * backgroundspeed
  }px)`;
  cutout.style.transform = `translate(${event.pageX * cutoutsspeed}px, ${
    event.pageY * cutoutsspeed
  }px)`;
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let xDifference = cutout.offsetLeft - option.offsetLeft;
    let yDifference = cutout.offsetTop - option.offsetTop;

    option.style.transform = `translate(${xDifference}px, ${yDifference}px)`;
    option.style.opacity = 0;
  });
});

document.addEventListener("onmouseover", function detectMouse() {
  console.log("Hover Detected");
});
