document.addEventListener('DOMContentLoaded', function() {
    const serviceGrid = document.querySelector('.service-grid');
    const cardWidth = document.querySelector('.service-card').offsetWidth;
    
    const rightArrow = document.getElementById('right-arrow');
    const leftArrow = document.getElementById('left-arrow');
    
    function updateArrows() {
        const scrollLeft = serviceGrid.scrollLeft;
        const scrollWidth = serviceGrid.scrollWidth;
        const clientWidth = serviceGrid.clientWidth;

        // Ελέγχει αν υπάρχει περιθώριο για κύλιση προς τα δεξιά
        if (scrollLeft + clientWidth >= scrollWidth) {
            rightArrow.style.display = 'none';
        } else {
            rightArrow.style.display = 'block';
        }

        // Ελέγχει αν υπάρχει περιθώριο για κύλιση προς τα αριστερά
        if (scrollLeft > 0) {
            leftArrow.style.display = 'block';
        } else {
            leftArrow.style.display = 'none';
        }
    }

    // Ενημερώνει τα κουμπιά αρχικά
    updateArrows();

    // Ενημερώνει τα κουμπιά όταν η κύλιση αλλάξει
    serviceGrid.addEventListener('scroll', updateArrows);

    rightArrow.addEventListener('click', function() {
        serviceGrid.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    leftArrow.addEventListener('click', function() {
        serviceGrid.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
});
