const showBtn = document.querySelectorAll(".showBtn");
const content = document.querySelector(".answer");

showBtn.forEach(function (showBtn) {
  showBtn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.nextElementSibling;
    question.classList.toggle("show-content");
  });
});
