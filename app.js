const body = document.querySelector("body");
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalImage = modal.querySelector("img");
const modalTitle = modal.querySelector(".modal-title");
const navbar = document.querySelector("#nav-menu");
const navlinks = navbar.querySelectorAll("li");
const sections = document.querySelectorAll("main section");
const hamburger = document.querySelector(".hamburger-menu-wrapper .toggle");

/* Preload Images */
var images = [];
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582561833407-b95380302a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=692&q=80",
  "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1577382539905-e036755649ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565695924652-662be98fe809?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1519068737630-e5db30e12e42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
  "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1533003665028-324a81ae814b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1556139954-ec19cce61d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1526134026104-232655599392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
  "https://images.unsplash.com/photo-1589850854371-05116dafbd22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
  "https://images.unsplash.com/photo-1488523811425-75699793b3e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1415383790716-98053c3c25fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
  "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1068&q=80",
  "https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1526991264492-46764d2d26e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "",
  ""
);

/* Modal */
galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    let selectedImage = item.querySelector("img").src;
    let selectedTitle = item.querySelector("h3").innerText;

    modalImage.src = selectedImage;
    modalTitle.innerText = selectedTitle;
    toggleModal();
  });
});

// When user clicks on (x) button, close the modal
modalCloseBtn.addEventListener("click", toggleModal);
// When the user clicks anywhere outside of the modal, close it

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    toggleModal();
  }
});

function toggleModal() {
  modal.classList.toggle("show");
  body.classList.toggle("modal-open");
}

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" && modal.classList.contains("show")) {
    toggleModal();
  }
});

/* Navbar  */
navlinks.forEach((navlink) => {
  navlink.addEventListener("click", function () {
    let activeSection = document.querySelector("section.active");
    let selectedSection = this.innerText;
    sections.forEach((section) => {
      if (
        selectedSection !== activeSection.id &&
        selectedSection === section.id
      ) {
        hideSectionAnim(activeSection);
        showSectionAnim(section);
        setTimeout(function () {
          section.style.opacity = 1;
        }, 600);
      }
    });
  });
});

function showSectionAnim(section) {
  section.style.opacity = 0;
  section.classList.add("active");
  setTimeout(function () {
    section.classList.remove("hide");
  }, 500);
}

function hideSectionAnim(section) {
  section.style.opacity = 0; // fade out over 500ms
  section.classList.remove("active");
  setTimeout(function () {
    section.classList.add("hide");
  }, 500); // hide after 500ms fade
}

/* Grid Items Scroll Animations */
window.addEventListener("scroll", function () {
  scrollPosition = window.pageYOffset + window.innerHeight;
  console.log(scrollPosition);

  galleryItems.forEach((item) => {
    console.log(item.offsetTop);
    if (
      item.offsetTop <= scrollPosition &&
      item.offsetTop >= window.innerHeight
    ) {
      item.classList.add("animate");
    }
  });
});
