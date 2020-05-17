const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close");

galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("clicked");
    let selectedImage = item.querySelector("img").src;
    let selectedTitle = item.querySelector("h3").innerText;
    console.log(selectedTitle);
    let modalImage = modal.querySelector("img");
    let modalTitle = modal.querySelector("h3");
    modalImage.src = selectedImage;
    modalTitle.innerText = selectedTitle;
    toggleModal();
  });
});

// When user clicks on (x) button, close the modal
modalCloseBtn.addEventListener("click", toggleModal);
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    toggleModal();
  }
};

function toggleModal() {
  modal.classList.toggle("show");
}
