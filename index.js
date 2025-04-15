const learnBtn = document.querySelector(".learn-btn");
const mainContent = document.querySelector(".shiva-info");
const closebtn = document.querySelector(".close-btn");

learnBtn.addEventListener("click", () => {
  mainContent.classList.add("active");
});

closebtn.addEventListener("click", () => {
  mainContent.classList.remove("active");
});
