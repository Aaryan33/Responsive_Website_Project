$(document).ready(function () {
    console.log('Document loaded');

    initializeNavbar();
    initializePricing();  
    initializePricingModal(); 
});

function initializeNavbar() {
    const navItems = document.querySelectorAll('.nav-item a');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initializePricingModal() {
    const modal = document.querySelector('#purchaseModal'); 
    const closeModal = document.querySelector('.modal-close'); 
    const modalOverlay = document.querySelector('.modal-overlay'); 

    if (!modal || !closeModal || !modalOverlay) {
        console.log('Modal or related elements not found in the DOM.');
        return; 
    }

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', function () {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });
}
