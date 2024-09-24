document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
  
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });



const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarCheckbox = document.getElementById('openSidebarMenu');

const sidebarLinks = document.querySelectorAll('#sidebarMenu .sidebarMenuInner li a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebarCheckbox.checked = false;
    });
});

window.onscroll = function() {
  const header = document.querySelector('header'); // Επιλέγουμε το στοιχείο <header>
  const menuMobile = document.getElementById('menu_mobile'); // Επιλέγουμε το στοιχείο <section>

  if (window.scrollY > 15) {
      // Αλλάζουμε το background αν το scroll είναι πάνω από 15px
      header.style.background = "#333";
      menuMobile.style.display = "block";

  } else {
      // Επαναφέρουμε το αρχικό background αν είναι κάτω από 15px
      header.style.background = "transparent"; // Ή το αρχικό σου χρώμα
      menuMobile.style.display = "none";

  }
};


  