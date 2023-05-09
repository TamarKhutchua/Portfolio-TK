const images = document.querySelectorAll(".slider img");
const slider = document.getElementById("slider");
let index = 0;
setInterval(() => {
  images[index].style.display = "none";
  index = (index + 1) % images.length;
  images[index].style.display = "block";
}, 5000);
