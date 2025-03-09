// Function to load external HTML content
function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load header and footer
document.addEventListener("DOMContentLoaded", function () {
    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");

    // Like/Dislike functionality
    document.addEventListener("DOMContentLoaded", function () {
        const hearts = document.querySelectorAll(".heart-icon");
    
        hearts.forEach((heart) => {
            heart.addEventListener("click", function () {
                this.classList.toggle("liked"); // Toggle the 'liked' class directly
            });
        });
    });          

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("heart-icon")) {
            event.target.classList.toggle("liked");
        }
    });

    // Slider functionality
    setTimeout(() => {
        const slider = document.querySelector(".slider");
        if (!slider) return;

        const slides = document.querySelectorAll(".slide");
        if (slides.length === 0) return;

        let slideWidth = slides[0].offsetWidth;
        let currentIndex = 0;
        let isTransitioning = false;

        // Duplicate slides for infinite effect
        slider.innerHTML += slider.innerHTML;

        function moveSlide() {
            if (isTransitioning) return;
            isTransitioning = true;

            currentIndex++;
            slider.style.transition = "transform 0.5s ease-in-out";
            slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

            slider.addEventListener("transitionend", function () {
                isTransitioning = false;
                if (currentIndex >= slides.length) {
                    slider.style.transition = "none";
                    currentIndex = 0;
                    slider.style.transform = `translateX(0)`;
                }
            }, { once: true });
        }

        window.addEventListener("resize", function () {
            slideWidth = slides[0].offsetWidth;
            slider.style.transition = "none";
            slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
        });

        setInterval(moveSlide, 3000);
    }, 500); // Delay to ensure header/footer are loaded
});
