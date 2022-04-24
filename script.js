const sliderConstainer = document.querySelector('.container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
const slidesLength = rightSlide.querySelectorAll('div').length;

console.log(slidesLength);

let activeIndex = 0;
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (dir) => {
    const sliderHeight = sliderConstainer.clientHeight
    console.log(sliderHeight);

    if (dir === 'up') {
        activeIndex++;
        if (activeIndex > slidesLength - 1) {
            activeIndex = 0;
        }
    } else if (dir === 'down') {
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = slidesLength - 1;
        }
    }

    rightSlide.style.transform = `translateY(-${activeIndex * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeIndex * sliderHeight}px)`
}

