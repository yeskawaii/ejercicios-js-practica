const viewModal = document.querySelector(".modal-overlay");
const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", function () {
  viewModal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  viewModal.classList.remove("open-modal");
});
