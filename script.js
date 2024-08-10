let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += n;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    const slideWidth = slides[0].clientWidth;
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
