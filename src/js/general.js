'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-btn'),
        langOptions = langBtn.querySelectorAll('.item__drop-down-menu .menu-item'),
        selectedLangText = document.querySelector('.selected-lang__text'),
        menuOpenBtn = document.querySelector('.menu-open__btn'),
        menuCloseBtn = document.querySelector('.menu-close__btn'),
        menu = document.querySelector('.header__nav-items'),
        body = document.body,
        question = document.querySelectorAll('.faq__question'),
        scrollBtn = document.querySelector('.hero__scroll-btn'),
        infoSection = document.querySelector('.info'),
        scrollBtn2 = document.querySelector('.instructions-page .hero__scroll-btn'),
        faqSection = document.querySelector('.faq'),
        selectBtn = document.querySelector('.instructions__select-btn'),
        selectOptions = document.querySelectorAll('.instructions__select-option'),
        infoBlockBody = document.querySelectorAll('.instructions__info--body'),
        expandBtn = document.querySelectorAll('.instructions__info-btn'),
        popup = document.querySelector('.instructions__image-popup'),
        instructionsImg = document.querySelectorAll('.instructions__info-img--block'),
        instructionsImgWrapper = document.querySelector('.instructions__popup-img-wrapper');

    langOptions.forEach(option => {
        if (option.classList.contains('active-lang')) {
            selectedLangText.textContent = option.textContent;
        }
    })

    const onLangSelect = (lang) => {
        langOptions.forEach(option => {
            option.classList.remove('active-lang');
        });
        lang.classList.add('active-lang');
        langOptions.forEach(option => {
            selectedLangText.textContent = lang.textContent;
        });
    }

    langOptions.forEach(option => {
        option.addEventListener('click', () => onLangSelect(option));
    })

    if(window.innerWidth <= 770){
        langBtn.parentElement.parentElement.append(langBtn);
        langBtn.style.marginRight="50px"; 
    }

    menuOpenBtn.addEventListener('click', () => {
        menu.classList.add('menu-active');
        body.classList.add('body-lock');
    });
    menuCloseBtn.addEventListener('click', () => {
        menu.classList.remove('menu-active')
        body.classList.remove('body-lock');
    });

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

    const scrollTo = (element, btn, block) => {
        btn.addEventListener('click', () => {
            element.scrollIntoView({
                block: block,
                behavior:'smooth'
            });
        })
    }

    scrollTo(infoSection, scrollBtn, 'start');
    scrollTo(faqSection, scrollBtn2, 'center');

    selectBtn.addEventListener('click', () => {
        selectOptions.forEach(item => {
            item.classList.toggle('option-active'); 
        })
    })

    selectOptions.forEach(item => {
        item.addEventListener('click', e => {
            selectBtn.textContent = e.target.textContent;
            selectOptions.forEach(item => {
                item.classList.toggle('option-active'); 
            })
        })
    })

    infoBlockBody.forEach(item => {
        const infoArticleText = item.firstElementChild;
        item.style.maxHeight = (infoArticleText.scrollHeight + 20) + 'px';
    })

    expandBtn.forEach(item => {
        item.addEventListener('click', e => {
            let btnText = e.target.closest('.instructions__info-btn').children[0],
                btnIcon = e.target.closest('.instructions__info-btn').children[1],
                instructionsBody = e.target.closest('.instructions__info--block').children[1],
                infoArticleText = instructionsBody.firstElementChild;

            btnText.textContent === 'Подробнее' ? btnText.textContent = 'Скрыть' : btnText.textContent = 'Подробнее';
            btnIcon.classList.toggle('btn-icon-active');
            if (instructionsBody.clientHeight == infoArticleText.clientHeight + 20) {
                instructionsBody.style.maxHeight = instructionsBody.scrollHeight + 'px'
                console.log('открыли')
            } else {
                console.log('закрыли')
                instructionsBody.style.maxHeight = (infoArticleText.scrollHeight + 20) + 'px'   ;
            }
        })
    })

    instructionsImg.forEach(item => {
        item.addEventListener('click', e => {
            let clonedImg = e.target.cloneNode();
            clonedImg.classList.add('img-opened');
            instructionsImgWrapper.prepend(clonedImg)
            popup.classList.toggle('popup-active');
            body.classList.toggle('body-lock');
        })
    })

    instructionsImgWrapper.addEventListener('click', e => {
        e.target.classList.remove('img-opened');
        instructionsImgWrapper.firstElementChild.remove();
        popup.classList.toggle('popup-active');
        body.classList.toggle('body-lock');
    })
})