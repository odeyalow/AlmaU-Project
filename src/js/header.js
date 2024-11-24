'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-btn'),
        langOptions = langBtn.querySelectorAll('.item__drop-down-menu .menu-item'),
        selectedLangText = document.querySelector('.selected-lang__text'),
        menuOpenBtn = document.querySelector('.menu-open__btn'),
        menuCloseBtn = document.querySelector('.menu-close__btn'),
        menu = document.querySelector('.header__nav-items');

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


    menuOpenBtn.addEventListener('click', () => {menu.classList.add('menu-active')});
    menuCloseBtn.addEventListener('click', () => {menu.classList.remove('menu-active')});
})