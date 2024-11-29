document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.hero__scroll-btn'),
        infoSection = document.querySelector('.info'),
        sideBtnScroll = document.querySelector('.scroll-to-top__btn'),
        homePageHero = document.querySelector('.hero');
    
    scrollBtn.addEventListener('click', () => {
        infoSection.scrollIntoView({
            block: 'start',
            behavior:'smooth'
        });
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

    observer.observe(homePageHero);
})