// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Add "appear" class when element is in viewport
function revealOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideUpElements = document.querySelectorAll('.slide-up');

    fadeInElements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('appear');
        }
    });

    slideUpElements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('appear');
        }
    });
}

document.addEventListener('scroll', revealOnScroll);

// Initial call to reveal elements already in view
revealOnScroll();
