const images = document.querySelectorAll(".slider img");
const slider = document.getElementById("slider");
let index = 0;
setInterval(() => {
  images[index].style.display = "none";
  index = (index + 1) % images.length;
  images[index].style.display = "block";
}, 5000);

window.addEventListener("scroll", function () {
  const skills = document.querySelectorAll(".skill");

  skills.forEach((skill) => {
    const skillPosition = skill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const skillBar = skill.querySelector(".skill-progress");
    const skillPercentage = skillBar.getAttribute("data-percent");
    const skillWidth = (parseInt(skillPercentage) / 100) * skillBar.offsetWidth;
    const skillNameSpan = skill.querySelector(".skill-name span");

    if (skillPosition < windowHeight) {
      skillBar.style.width = skillWidth + "px";
      skillNameSpan.classList.add("show");
    }
  });
});

window.addEventListener("scroll", function () {
  const skillBars = document.querySelectorAll(".skill-progress");
  const windowHeight = window.innerHeight;

  for (let i = 0; i < skillBars.length; i++) {
    const skillPosition = skillBars[i].getBoundingClientRect().top;
    const skillPercentage = skillBars[i].getAttribute("data-percent");
    const skillWidth =
      (parseFloat(skillPercentage) / 100) * skillBars[i].parentNode.offsetWidth;

    if (skillPosition < windowHeight) {
      skillBars[i].style.width = skillWidth + "px";
    }
  }
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector("p").style.display = "block";
  });

  card.addEventListener("mouseleave", () => {
    card.querySelector("p").style.display = "none";
  });
});
