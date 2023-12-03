import './index.css';
import {openModal, closeModal} from "./scripts/modal";
import {animateSperm} from "./scripts/spermAnimation";
import {resetPositions} from "./scripts/resetPositions";

const popup = document.querySelector('.popup');

const buttonMore = document.querySelector('.slide-three__button');
const dots = document.querySelectorAll('.popup__dot');
const leftDot = document.querySelector('.popup__dot_left');
const rightDot = document.querySelector('.popup__dot_right');
const pointLists = document.querySelectorAll('.popup__point-list');
const firstList = document.querySelector('.popup__point-list_first');
const secondList = document.querySelector('.popup__point-list_second');

const spermOneImg = document.querySelector('.slide-two__sperm1-img');
const spermTwoImg = document.querySelector('.slide-two__sperm2-img');
const spermThreeImg = document.querySelector('.slide-two__sperm3-img');
const spermFourImg = document.querySelector('.slide-two__sperm4-img');
const spermFiveImg = document.querySelector('.slide-two__sperm5-img');

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

animateSperm(spermOneImg, 'slide-two__sperm-1-animation');
animateSperm(spermTwoImg, 'slide-two__sperm-2-animation');
animateSperm(spermThreeImg, 'slide-two__sperm-3-animation');
animateSperm(spermFourImg, 'slide-two__sperm-4-5-animation');
animateSperm(spermFiveImg, 'slide-two__sperm-4-5-animation');

resetPositions(scrollbar, textElem);

scrollbar.max = textElem.offsetHeight;
textElem.addEventListener("scroll", () => {
    scrollbar.value = textElem.scrollTop;
});
scrollbar.addEventListener("input", () => {
    textElem.scrollTop = scrollbar.value;
});


