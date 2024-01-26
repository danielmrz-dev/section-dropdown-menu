const darkenedBg = document.querySelector('.header__darkened-bg');
const sideMenu = document.querySelector('.header__navbar');
const openMenuBt = document.querySelector('.header__btn-open');
const closeMenuBt = document.querySelector('.header__close-icon');
const featuresMenu = document.querySelector('.header__features');
const companyMenu = document.querySelector('.header__company');
const featuresLinks = document.querySelector('.header__features__list');
const companyLinks = document.querySelector('.header__company__list');
const links = document.querySelectorAll('.header__features__links');
const linksComp = document.querySelectorAll('.header__company__links');
const featureArrow = document.querySelector('.feature-arrow');
const companyArrow = document.querySelector('.company-arrow');

openMenuBt.addEventListener('click', () => {
    darkenedBg.classList.add('active-bg');
    sideMenu.classList.add('active-menu');
});

closeMenuBt.addEventListener('click', () => {
    darkenedBg.classList.remove('active-bg');
    sideMenu.classList.remove('active-menu');
});

darkenedBg.addEventListener('click', () => {
    darkenedBg.classList.remove('active-bg');
    sideMenu.classList.remove('active-menu');
});

featuresMenu.addEventListener('click', () => {
    featuresLinks.classList.toggle('active-link');
    links.forEach(element => {
        element.classList.toggle('active-pointer');
    });
    featureArrow.classList.toggle('active-feature-arrow')
})

companyMenu.addEventListener('click', () => {
    companyLinks.classList.toggle('active-link-company');
    linksComp.forEach(element => {
        element.classList.toggle('active-pointer');
    });
    companyArrow.classList.toggle('active-company-arrow')
    
})


