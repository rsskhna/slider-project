import './index.css';
import {openModal, closeModal} from "./scripts/modal";

const popup = document.querySelector('.popup');
const buttonMore = document.querySelector('.slide-three__button');
const dots = document.querySelectorAll('.popup__dot');
const pointLists = document.querySelectorAll('.popup__point-list');


buttonMore.addEventListener('click', function () {
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

