const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slideCounts = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0
const height = container.clientHeight;

sidebar.style.top = `-${(slideCounts -1 ) * 100}vh`;

upButton.addEventListener('click', () => {
    changeSlide('up')
})
downButton.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slideCounts) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCounts - 1;
        }
    }

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}