// Navigation Menu Toggle
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Image Slider Functionality
let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    document.querySelector(".slider").style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);
