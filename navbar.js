function toggleMobileMenu() {
    const mobileMenuBtn = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (mobileMenuBtn && navbarCollapse) {
        mobileMenuBtn.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
    } else {
        console.log("Mobile menu button or navbar collapse element not found.");
    }
}

toggleMobileMenu();
