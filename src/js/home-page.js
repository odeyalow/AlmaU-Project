'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.hero__scroll-btn'),
        infoSection = document.querySelector('.info'),
        question = document.querySelectorAll('.faq__question');

    scrollBtn.addEventListener('click', () => {
        infoSection.scrollIntoView({
            block:'start',
            behavior:'smooth'
        });
    })

    question.forEach(item => {
         item.addEventListener('click', e => {
           const currentQuestion = e.target.closest('.faq__question');
            currentQuestion.children[0].children[1].classList.toggle('question__cross-active');
            if (currentQuestion.children[1].style.maxHeight) {
                currentQuestion.children[1].style.maxHeight = null;
            } else {
                currentQuestion.children[1].style.maxHeight = currentQuestion.children[1].scrollHeight + "px";
            }
        }) 
    });
})