// General function to manage popups
function handlePopup(openBtnId, popupOverlayId, closeBtnClass) {
  const popupOverlay = document.getElementById(popupOverlayId);
  const openPopupBtn = document.getElementById(openBtnId);
  const closePopupBtn = popupOverlay.querySelector(closeBtnClass);

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
}

// Manage all popups
handlePopup("openPopupBtn", "popupOverlay", ".closePopup");
handlePopup("openPopupBtn2", "popupOverlay2", ".closePopup2");
handlePopup("openPopupBtn3", "popupOverlay3", ".closePopup3");
handlePopup("openPopupBtn4", "popupOverlay4", ".closePopup4");
