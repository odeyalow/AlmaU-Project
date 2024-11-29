'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-btn'),
        langOptions = langBtn.querySelectorAll('.item__drop-down-menu .menu-item'),
        platformsBtn = document.querySelector('.second'),
        platformOptions = document.querySelectorAll('.item-link'),
        dropDownMenu = document.querySelectorAll('.item__drop-down-menu'),
        selectedLangText = document.querySelector('.selected-lang__text'),
        menuOpenBtn = document.querySelector('.menu-open__btn'),
        menuCloseBtn = document.querySelector('.menu-close__btn'),
        menu = document.querySelector('.header__nav-items'),
        body = document.body,
        question = document.querySelectorAll('.faq__question'),
        scrollToTopBtn = document.querySelector('.scroll-to-top__btn');

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
        langOptions.forEach(() => {
            selectedLangText.textContent = lang.textContent;
        });
    }

    langOptions.forEach(option => {
        option.addEventListener('click', () => onLangSelect(option));
    })
    langOptions.forEach(option => {
        option.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                onLangSelect(option)
            }
        });
    })

    if(window.innerWidth <= 770){
        langBtn.parentElement.parentElement.append(langBtn);
        langBtn.style.marginRight="50px"; 
    }

    menuOpenBtn.addEventListener('click', () => {
        menu.classList.add('menu-active');
        body.classList.add('body-nav-lock');
    });
    menuCloseBtn.addEventListener('click', () => {
        menu.classList.remove('menu-active')
        body.classList.remove('body-nav-lock');
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

    scrollToTopBtn.addEventListener('click', () => {
        body.scrollIntoView({
            block: 'start',
            behavior:'smooth'
        });
    })

    let langBtnActive = false;

    const onItemFocus = (focusItem, dropMenu) => {
        let isMouseDown = false;
        focusItem.addEventListener('mousedown', () => {
            isMouseDown = true;
        })
        focusItem.addEventListener('focus', () => {
            if (!isMouseDown) {
                dropMenu.style.visibility="visible";
                dropMenu.style.opacity="1";
                dropMenu.style.paddingTop="3em";
            }
            isMouseDown = false;
        })
    }
    const onItemBlur = (blurItem, dropMenu) => {
        let isMouseDown = false;
        blurItem.addEventListener('mousedown', () => {
            isMouseDown = true;
        })
        blurItem.addEventListener('blur', () => {
            if (!isMouseDown) {
                dropMenu.style.visibility="hidden";
                dropMenu.style.opacity="0";
                dropMenu.style.paddingTop="0";
            }
        })
    }

    onItemFocus(langBtn, dropDownMenu[0]);
    onItemFocus(platformsBtn, dropDownMenu[1]);
    onItemBlur(langOptions[langOptions.length-1], dropDownMenu[0]);
    onItemBlur(platformOptions[platformOptions.length-1].children[0], dropDownMenu[1]);
})