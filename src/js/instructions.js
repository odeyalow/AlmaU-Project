document.addEventListener('DOMContentLoaded', () => {
    const body = document.body,
        faqSection = document.querySelector('.faq'),
        scrollBtn2 = document.querySelector('.instructions-page .hero__scroll-btn'),
        selectBtn = document.querySelector('.instructions__select-btn'),
        infoBlockBody = document.querySelectorAll('.instructions__info--body'),
        infoBlockImgs = document.querySelectorAll('.instructions__info-placeholder-img'),
        expandBtn = document.querySelectorAll('.instructions__info-btn'),
        popup = document.querySelector('.instructions__image-popup'),
        instructionsImg = document.querySelectorAll('.instructions__info-img--block'),
        instructionsImgWrapper = document.querySelector('.instructions__popup-img-wrapper'),
        instructionsCards = document.querySelectorAll('.instructions__card'),
        instructionsCardsFiles = document.querySelectorAll('.instructions__cards-file'),
        selectOptionsParent = document.querySelector('.instructions__select-options'),
        instructionsInfoTabs = document.querySelectorAll('.instructions__info--tab'),
        infoBtnTexts = document.querySelectorAll('.instructions__info-btn-text'),
        pageHero = document.querySelector('.hero'),
        sideBtnScroll = document.querySelector('.scroll-to-top__btn');

        scrollBtn2.addEventListener('click', () => {
            faqSection.scrollIntoView({
                block: 'center',
                behavior:'smooth'
            });
        })

        for (let i = 1; i < instructionsInfoTabs.length; i++) {
            selectOptionsParent.insertAdjacentHTML('beforeend', `<button tabindex=${19+i} class="instructions__select-option">Пример ${i+1}</button>`);
        }
    
        let selectOptions = Array.from(selectOptionsParent.children);
    
        const toggleOptions = () => {
            selectOptions.forEach(item => {
                item.classList.toggle('option-active'); 
            })
        }
    
        selectBtn.addEventListener('click', () => {
            selectOptions.forEach(item => {
                if(item.classList.contains('instructions__select-option')){
                    item.classList.toggle('option-active'); 
                    toggleOptions();
                }
            })
        })
    
        selectOptions.forEach(item => { 
            item.addEventListener('click', e => {
                if(item.classList.contains('instructions__select-option')){
                    selectOptions.forEach(item => item.classList.remove('option-selected'))
                    selectBtn.textContent = e.target.textContent;
                    toggleOptions();
                    e.target.classList.add('option-selected');
    
                    for(let i = 0; i < selectOptions.length; i++){
                        if (selectOptions[i].classList.contains('option-selected')){
                            instructionsInfoTabs.forEach(item => item.classList.remove('tab-active'));
                            instructionsInfoTabs[i-1].classList.add('tab-active');
                            infoBlockBody.forEach(item => {
                                const infoArticleText = item.firstElementChild;
                                item.style.maxHeight = (infoArticleText.scrollHeight + 20) + 'px';
                                infoBtnTexts.forEach(item => item.textContent = 'Подробнее');
                            })
                        }
                    }
                }
            })
        })
        
        infoBlockBody.forEach(item => {
            const infoArticleText = item.firstElementChild;
            item.style.maxHeight = (infoArticleText.scrollHeight + 20) + 'px';
        })

        const onInfoImgFocusBlur = (target) => {
            let eventParent = target.closest('.instructions__info--block'),
                btnText = eventParent.children[2].children[0],
                btnIcon = eventParent.children[2].children[1],
                instructionsBody = eventParent.children[1],
                infoArticleText = instructionsBody.firstElementChild;
                
            btnText.textContent === 'Подробнее' ? btnText.textContent = 'Скрыть' : btnText.textContent = 'Подробнее';
            btnIcon.classList.toggle('btn-icon-active');
            if (instructionsBody.clientHeight == infoArticleText.clientHeight + 20) {
                instructionsBody.style.maxHeight = instructionsBody.scrollHeight + 'px'
            } else {
                instructionsBody.style.maxHeight = (infoArticleText.scrollHeight + 20) + 'px';
            }
        }

        infoBlockImgs.forEach(item => {
            item.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    let clonedImg = e.target.cloneNode();
                    clonedImg.classList.add('img-opened');
                    instructionsImgWrapper.prepend(clonedImg)
                    popup.classList.toggle('popup-active');
                    body.classList.toggle('body-lock');
                }
            });
            item.addEventListener('focus', e => {
                onInfoImgFocusBlur(e.target);
            });
            item.addEventListener('blur', e => {
                onInfoImgFocusBlur(e.target);
            });
        })
    
        expandBtn.forEach(item => { 
            item.addEventListener('click', e => {
                item.classList.toggle('instructions__info-btn-active');
                let btnText = e.target.closest('.instructions__info-btn').children[0],
                    btnIcon = e.target.closest('.instructions__info-btn').children[1],
                    instructionsBody = e.target.closest('.instructions__info--block').children[1],
                    infoArticleText = instructionsBody.firstElementChild;
    
                btnText.textContent === 'Подробнее' ? btnText.textContent = 'Скрыть' : btnText.textContent = 'Подробнее';
                btnIcon.classList.toggle('btn-icon-active');
                if (instructionsBody.clientHeight == infoArticleText.clientHeight + 20) {
                    instructionsBody.style.maxHeight = instructionsBody.scrollHeight + 'px'
                } else {
                    instructionsBody.style.maxHeight = (infoArticleText.scrollHeight + 20) + 'px';
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
        instructionsImgWrapper.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.target.classList.remove('img-opened');
                instructionsImgWrapper.firstElementChild.remove();
                popup.classList.toggle('popup-active');
                body.classList.toggle('body-lock');
            }
        })
    
        if (instructionsCards.length % 2 !== 0) {
            instructionsCards[0].parentElement.lastElementChild.style.gridColumn = "1/-1";
        }
    
        instructionsCardsFiles.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                let fileTitle = e.target.closest('.instructions__card').children[0].children[1].textContent,
                    itemClone = item.cloneNode();
                itemClone.download = fileTitle;
                document.body.appendChild(itemClone);
                itemClone.click();
                document.body.removeChild(itemClone);
            })
        })

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                sideBtnScroll.classList.remove('scroll-to-top__btn-active')
                } else {
                sideBtnScroll.classList.add('scroll-to-top__btn-active')
                }
            });
        };
    
        const observerOptions = {
            root: null,
            threshold: 0,
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        observer.observe(pageHero);
})