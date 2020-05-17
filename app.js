const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close");

galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("clicked");
    let selectedImage = item.childNodes[1].childNodes[1].src;
    console.log(selectedImage);
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
