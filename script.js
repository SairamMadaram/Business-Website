document.addEventListener("DOMContentLoaded", function() {
    // Simple script for buttons or interactions.
    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your interest! Please contact us for purchase details.');
        });
    });
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle visibility of nav
});


