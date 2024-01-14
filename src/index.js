import './index.css';
import {openModal, closeModal} from "./scripts/modal";
import {animateDaisy} from "./scripts/daisyAnimation";

const popup = document.querySelector('.popup');

const buttonMore = document.querySelector('.slide-three__button');
const dots = document.querySelectorAll('.popup__dot');
const leftDot = document.querySelector('.popup__dot_left');
const rightDot = document.querySelector('.popup__dot_right');
const pointLists = document.querySelectorAll('.popup__point-list');
const firstList = document.querySelector('.popup__point-list_first');
const secondList = document.querySelector('.popup__point-list_second');

const daisyOneImg = document.querySelector('.slide-two__daisy1-img');
const daisyTwoImg = document.querySelector('.slide-two__daisy2-img');
const daisyThreeImg = document.querySelector('.slide-two__daisy3-img');

const textElem = document.querySelector('.slide-two__text');
const scrollbar = document.querySelector('.slide-two__scrollbar');

buttonMore.addEventListener('click', function () {
    firstList.classList.remove('popup__point-list_inactive');
    secondList.classList.add('popup__point-list_inactive');

    leftDot.classList.remove('popup__dot_inactive');
    rightDot.classList.add('popup__dot_inactive');

    openModal(popup);
});

popup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup__close')) {
        closeModal(popup);
    }

    if (evt.target.classList.contains('popup__arrow')) {
        dots.forEach((dot) => {
            dot.classList.toggle('popup__dot_inactive');
        });
        pointLists.forEach((list) => {
            list.classList.toggle('popup__point-list_inactive');
        });
    }
})

animateDaisy(daisyOneImg, 'slide-two__daisy-1-animation');
animateDaisy(daisyTwoImg, 'slide-two__daisy-2-animation');
animateDaisy(daisyThreeImg, 'slide-two__daisy-3-animation');

scrollbar.max = textElem.offsetHeight;
textElem.addEventListener("scroll", () => {
    scrollbar.value = textElem.scrollTop;
});
scrollbar.addEventListener("input", () => {
    textElem.scrollTop = scrollbar.value;
});


