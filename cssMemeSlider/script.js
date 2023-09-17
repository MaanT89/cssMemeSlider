let sliderImages = document.querySelectorAll('.slider_img');
let sliderLine = document.querySelector('.slider_line');
let sliderDots = document.querySelectorAll('.slider_dot');

let sliderCount = 0;
let sliderWidth;

let text = document.querySelector('.text');

window.addEventListener('resize', showSlide);

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

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
        changeText();
    })
})

function changeText() {
    if (sliderCount == 1) {
        text.textContent = 'Листай дальше';
    } else if (sliderCount == 2) {
        text.textContent = 'Еще дальше';
    } else if (sliderCount == 3) {
        text.textContent = 'Готово хозяин:)';
    }
}