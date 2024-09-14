// Get the sidebar menu and checkbox
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarCheckbox = document.getElementById('openSidebarMenu');

// Get all links inside the sidebar menu
const sidebarLinks = document.querySelectorAll('#sidebarMenu .sidebarMenuInner li a');

// Add event listeners to each link
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Uncheck the checkbox to close the sidebar menu
        sidebarCheckbox.checked = false;
    });
});
