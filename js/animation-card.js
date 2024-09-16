document.addEventListener('DOMContentLoaded', function() {
    const serviceGrid = document.querySelector('.service-grid');
    const cardWidth = document.querySelector('.service-card').offsetWidth;
    
    const rightArrow = document.getElementById('right-arrow');
    const leftArrow = document.getElementById('left-arrow');
    
    rightArrow.addEventListener('click', function() {
        serviceGrid.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    leftArrow.addEventListener('click', function() {
        serviceGrid.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
});
