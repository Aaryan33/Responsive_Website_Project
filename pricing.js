$(document).ready(function () {
    initializePricing(); 
});

function initializePricing() {
    const pricingCards = document.querySelectorAll('.card');

    pricingCards.forEach(card => {
        card.addEventListener('mouseover', function () {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', function () {
            card.style.transform = 'scale(1)';
        });

        card.addEventListener('click', function () {
            const selectedPricing = card.querySelector('.card-header').innerText;
            showPricingModal(selectedPricing);
        });
    });
}


function showPricingModal(selectedPricing) {
    const modal = document.querySelector('#purchaseModal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const pricingInfo = modal ? modal.querySelector('.pricing-info') : null;

    if (!modal || !modalOverlay || !pricingInfo) {
        console.log('Pricing modal or elements not found in the DOM.');
        return; 
    }

    pricingInfo.innerText = `You selected: ${selectedPricing}`;
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}
