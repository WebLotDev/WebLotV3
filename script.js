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

  