document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const templeLinks = document.querySelector(".temple-links");

  hamburger.addEventListener("click", () => {
    templeLinks.classList.toggle("active");
  });
});