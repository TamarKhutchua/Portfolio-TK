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

const slides = document.querySelectorAll(".quote");
const buttons = document.querySelectorAll(".rectangle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const slideNumber = button.getAttribute("data-slide");

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    const slideToShow = document.querySelector(
      `.quote[data-slide="${slideNumber}"]`
    );
    slideToShow.classList.add("active");
  });
});

const listItems = document.querySelectorAll(".list-item");
const projectItems = document.querySelectorAll(".project");

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    listItems.forEach((listItem) => {
      listItem.classList.remove("active");
    });
    item.classList.add("active");

    const category = item.innerText;

    projectItems.forEach((project, projectIndex) => {
      if (category === "All") {
        project.style.display = "block";
      } else if (projectIndex === index - 1) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

const logoContainer = document.querySelector(".logo-container");

logoContainer.addEventListener("mouseenter", () => {
  logoContainer.classList.add("active");
});

logoContainer.addEventListener("mouseleave", () => {
  logoContainer.classList.remove("active");
});

function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const message = document.getElementById("message").value;

  const formData = {
    name: name,
    email: email,
    website: website,
    message: message,
  };
}

const form = document.getElementById("myForm");
const feedbackMessage = document.getElementById("feedbackMessage");
const modal = document.getElementById("modal");
const closeModal = document.getElementsByClassName("close")[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  feedbackMessage.textContent =
    "Thank you for getting in touch! We appreciate you contacting us.";
  showModal();
});

function showModal() {
  modal.style.display = "block";
}

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});
