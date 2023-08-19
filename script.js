// JavaScript for dropdown menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".has-dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

// .searchBox:hover .menu-nav {
//     display: none;
//   }

const searchBox = document.querySelector(".searchBox");
const searchInput = document.querySelector(".searchInput");

const searchButton = document.querySelector(".searchButton");
const crossButton = document.querySelector(".crossButton");

const menuNav = document.querySelector(".menu-nav");

searchButton.addEventListener("click", function () {
  menuNav.style.display = "none";
  searchInput.style.display = "block";
  searchInput.style.width = "600px";
  searchInput.focus();
  searchBox.style.transform = "translate(-90%, 0%)";
  searchInput.style.transition = "1.4s";
  searchInput.style.background = "#DE4E10";
  searchInput.style.borderRadius = "40px";
  searchButton.style.display = "none";
  crossButton.style.display = "block";
});

crossButton.addEventListener("click", function () {
  searchInput.style.width = "0px";
  searchInput.style.display = "none";
  searchInput.value = "";

  //   searchBox.style.transform = "translate(0, -88%)";
  //   searchInput.style.transition = "1.4s";
  searchButton.style.display = "block";
  menuNav.style.display = "block";
  crossButton.style.display = "none";
});
