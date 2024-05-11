const container = document.querySelector('.english-power-container');
const rotate11 = container.querySelector('.container-bellow-bg-11');
const rotate9 = container.querySelector('.container-bellow-bg-9');
const bookImg = container.querySelector('.proposal-books-img');

const windowHeight = window.innerHeight;

window.addEventListener('scroll', function () {
    const containerTop = container.getBoundingClientRect().top;
    const containerBottom = container.getBoundingClientRect().bottom;

    if (containerTop > 0 && containerBottom < windowHeight) {
        rotate11.classList.add('rotate-11');
        rotate9.classList.add('rotate-9');
        bookImg.classList.add('books-bounce');
    } else {
        rotate11.classList.remove('rotate-11');
        rotate9.classList.remove('rotate-9');
        bookImg.classList.remove('books-bounce');
    }
});