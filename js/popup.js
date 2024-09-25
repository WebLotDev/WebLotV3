// Popup functionality
document.addEventListener('DOMContentLoaded', () => {
  const openPopupBtns = [
      { button: document.getElementById('openPopupBtn'), overlay: document.getElementById('popupOverlay'), popup: document.getElementById('popup') },
      { button: document.getElementById('openPopupBtn2'), overlay: document.getElementById('popupOverlay2'), popup: document.getElementById('popup2') },
      { button: document.getElementById('openPopupBtn3'), overlay: document.getElementById('popupOverlay3'), popup: document.getElementById('popup3') },
      { button: document.getElementById('openPopupBtn4'), overlay: document.getElementById('popupOverlay4'), popup: document.getElementById('popup4') }
  ];

  openPopupBtns.forEach(({ button, overlay, popup }) => {
      button.addEventListener('click', () => {
          overlay.style.display = 'block'; // Show overlay
          popup.classList.add('show'); // Add the show class to popup
      });

      const closeBtn = popup.querySelector('.closePopup, .closePopup2, .closePopup3, .closePopup4');
      closeBtn.addEventListener('click', () => {
          overlay.style.display = 'none'; // Hide overlay
          popup.classList.remove('show'); // Remove show class
      });

      // Close popup when clicking outside of it
      overlay.addEventListener('click', (event) => {
          if (event.target === overlay) {
              overlay.style.display = 'none'; // Hide overlay
              popup.classList.remove('show'); // Remove show class
          }
      });
  });
});
