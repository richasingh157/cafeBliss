const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle"); // animate hamburger to X
});

const submitBtn = document.querySelector(".btn_submit");
submitBtn.addEventListener("click", () => {
  console.log("msg submitted successfully");
});
