document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.hero__scroll-btn'),
        infoSection = document.querySelector('.info'),
        homePageHero = document.querySelector('.hero');
    
    scrollBtn.addEventListener('click', () => {
        infoSection.scrollIntoView({
            block: 'start',
            behavior:'smooth'
        });
    })
})