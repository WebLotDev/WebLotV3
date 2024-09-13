// Get the popup elements
const popupOverlay = document.getElementById("popupOverlay");
const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.querySelector(".closePopup");

// Open the popup
openPopupBtn.addEventListener("click", () => {
  popupOverlay.style.display = "block";
});

// Close the popup
closePopupBtn.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

// Close the popup when clicking outside of the popup content
window.addEventListener("click", (event) => {
  if (event.target == popupOverlay) {
    popupOverlay.style.display = "none";
  }
});

// Get the popup elements
const popupOverlay2 = document.getElementById("popupOverlay2");
const openPopupBtn2 = document.getElementById("openPopupBtn2");
const closePopupBtn2 = document.querySelector(".closePopup2");

// Open the popup
openPopupBtn2.addEventListener("click", () => {
  popupOverlay2.style.display = "block";
});

// Close the popup
closePopupBtn2.addEventListener("click", () => {
  popupOverlay2.style.display = "none";
});

// Close the popup when clicking outside of the popup content
window.addEventListener("click", (event) => {
  if (event.target == popupOverlay2) {
    popupOverlay2.style.display = "none";
  }
});


// Get the popup elements
const popupOverlay3 = document.getElementById("popupOverlay3");
const openPopupBtn3 = document.getElementById("openPopupBtn3");
const closePopupBtn3 = document.querySelector(".closePopup3");

// Open the popup
openPopupBtn3.addEventListener("click", () => {
  popupOverlay3.style.display = "block";
});

// Close the popup
closePopupBtn3.addEventListener("click", () => {
  popupOverlay3.style.display = "none";
});

// Close the popup when clicking outside of the popup content
window.addEventListener("click", (event) => {
  if (event.target == popupOverlay3) {
    popupOverlay3.style.display = "none";
  }
});


// Get the popup elements
const popupOverlay4 = document.getElementById("popupOverlay4");
const openPopupBtn4 = document.getElementById("openPopupBtn4");
const closePopupBtn4 = document.querySelector(".closePopup4");

// Open the popup
openPopupBtn4.addEventListener("click", () => {
  popupOverlay4.style.display = "block";
});

// Close the popup
closePopupBtn4.addEventListener("click", () => {
  popupOverlay4.style.display = "none";
});

// Close the popup when clicking outside of the popup content
window.addEventListener("click", (event) => {
  if (event.target == popupOverlay4) {
    popupOverlay4.style.display = "none";
  }
});