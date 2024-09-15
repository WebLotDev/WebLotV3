const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarCheckbox = document.getElementById('openSidebarMenu');

const sidebarLinks = document.querySelectorAll('#sidebarMenu .sidebarMenuInner li a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebarCheckbox.checked = false;
    });
});
