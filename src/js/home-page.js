'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const question = document.querySelectorAll('.faq__question');

    question.forEach(item => {
        item.addEventListener('click', e => {
            const currentQuestion = e.target.closest('.faq__question');
            currentQuestion.children[0].children[1].classList.toggle('question__cross-active');
            if (currentQuestion.children[1].style.maxHeight) {
                currentQuestion.children[1].style.maxHeight = null;
                // currentQuestion.children[1].style.overflow="hidden";
            } else {
                currentQuestion.children[1].style.maxHeight = currentQuestion.children[1].scrollHeight + "px";
            }
        }) 
    });
})