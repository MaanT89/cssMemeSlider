let sliderImages = document.querySelectorAll('.slider_img');
let sliderLine = document.querySelector('.slider_line');
let sliderDots = document.querySelectorAll('.slider_dot');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.getElementsByClassName.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.getElementsByClassName.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})