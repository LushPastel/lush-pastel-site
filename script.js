document.addEventListener("DOMContentLoaded", function () {  
    const slider = document.querySelector(".slider");  
    const slides = document.querySelectorAll(".slide");  
    let slideWidth = slides[0].offsetWidth; // Get the width of a slide  
    let currentIndex = 0;  
    let isTransitioning = false; // Flag to prevent multiple transitions  

    // Duplicate slides for infinite effect  
    slider.innerHTML += slider.innerHTML;  

    function moveSlide() {  
        if (isTransitioning) return; // Prevent overlapping transitions  
        isTransitioning = true;  

        currentIndex++;  
        slider.style.transition = "transform 0.5s ease-in-out";  
        slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`; // Use slideWidth  

        // Listen for the transition to end  
        slider.addEventListener("transitionend", function () {  
            isTransitioning = false;  
            if (currentIndex >= slides.length) {  
                slider.style.transition = "none";  
                currentIndex = 0;  
                slider.style.transform = `translateX(0)`;  
            }  
        }, { once: true }); // Ensure the listener only runs once  
    }  

    // Recalculate slideWidth on window resize  
    window.addEventListener('resize', function() {  
        slideWidth = slides[0].offsetWidth;  
        slider.style.transition = "none";  
        slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;  
    });  

    setInterval(moveSlide, 3000);  
});  
