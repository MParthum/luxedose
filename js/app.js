const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navClick = document.querySelectorAll('.nav-links li a');

    // Event Listener for Mobile Menu
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        // Animate Links
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 5 + .5}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
};


const serviceSlide = () => {
    const serviceSection = document.querySelector('#services');
    // Injectable variables
    const injectableButton = document.querySelector('.injectable-btn');
    const injectableClose = document.querySelector('.injectable-close');
    const injectableSection = document.querySelector('#injectables');
    // Skincare variables
    const skinButton = document.querySelector('.skin-btn');
    const skinClose = document.querySelector('.skin-close');
    const skinSection = document.querySelector('#skin');
    // Health and Wellness variables
    const healthButton = document.querySelector('.health-btn');
    const healthClose = document.querySelector('.health-close');
    const healthSection = document.querySelector('#health');
    // Mens Suite variables
    const mensButton = document.querySelector('.mens-btn');
    const mensClose = document.querySelector('.mens-close');
    const mensSection = document.querySelector('#mens');

    // Injectable Buttons

    injectableButton.addEventListener('click', () => {

        if (!skinSection.classList.contains('display-none')){
            skinSection.classList.toggle('display-none');
        }

        if (!healthSection.classList.contains('display-none')){
            healthSection.classList.toggle('display-none');
        }

        if (!mensSection.classList.contains('display-none')){
            mensSection.classList.toggle('display-none');
        }

        if (injectableSection.classList.contains('display-none')) {
            injectableSection.classList.toggle('display-none');
            injectableSection.scrollIntoView({behavior: "smooth", block: "start"});
            injectableSection.style.animation = `serviceFadeIn 0.5s ease-in`;
        } else {
            injectableSection.classList.toggle('display-none');
            serviceSection.scrollIntoView({behavior: "smooth", block: "start"});
        }
        
    });

    injectableClose.addEventListener('click', ()=> {
        injectableSection.classList.toggle('display-none');
        serviceSection.scrollIntoView({behavior: "smooth", block: "start"});
    });


    // Skincare Buttons

    skinButton.addEventListener('click', () => {

        if (!injectableSection.classList.contains('display-none')){
            injectableSection.classList.toggle('display-none');
        }

        if (!healthSection.classList.contains('display-none')){
            healthSection.classList.toggle('display-none');
        }

        if (!mensSection.classList.contains('display-none')){
            mensSection.classList.toggle('display-none');
        }

        if (skinSection.classList.contains('display-none')) {
            skinSection.classList.toggle('display-none');
            skinSection.scrollIntoView({behavior: "smooth", block: "start"});
            skinSection.style.animation = `serviceFadeIn 0.5s ease-in`;
        } else {
            skinSection.classList.toggle('display-none');
            serviceSection.scrollIntoView({behavior: "smooth", block: "start"});
        }
        
    });

    skinClose.addEventListener('click', ()=> {
        skinSection.classList.toggle('display-none');
        serviceSection.scrollIntoView({behavior: "smooth", block: "start"});
    });

    // Health and Wellness Buttons

    healthButton.addEventListener('click', () => {

        if (!injectableSection.classList.contains('display-none')){
            injectableSection.classList.toggle('display-none');
        }

        if (!skinSection.classList.contains('display-none')){
            skinSection.classList.toggle('display-none');
        }

        if (!mensSection.classList.contains('display-none')){
            mensSection.classList.toggle('display-none');
        }

        if (healthSection.classList.contains('display-none')) {
            healthSection.classList.toggle('display-none');
            healthSection.scrollIntoView({behavior: "smooth", block: "start"});
            healthSection.style.animation = `serviceFadeIn 0.5s ease-in`;
        } else {
            healthSection.classList.toggle('display-none');
            serviceSection.scrollIntoView({behavior: "smooth", block: "start"});
        }
        
    });

    healthClose.addEventListener('click', ()=> {
        healthSection.classList.toggle('display-none');
        serviceSection.scrollIntoView({behavior: "smooth", block: "start"});
    });

    // Mens Suite Buttons

    mensButton.addEventListener('click', () => {

        if (!injectableSection.classList.contains('display-none')){
            injectableSection.classList.toggle('display-none');
        }

        if (!skinSection.classList.contains('display-none')){
            skinSection.classList.toggle('display-none');
        }

        if (!healthSection.classList.contains('display-none')){
            healthSection.classList.toggle('display-none');
        }

        if (mensSection.classList.contains('display-none')) {
            mensSection.classList.toggle('display-none');
            mensSection.scrollIntoView({behavior: "smooth", block: "start"});
            mensSection.style.animation = `serviceFadeIn 0.5s ease-in`;
        } else {
            mensSection.classList.toggle('display-none');
            serviceSection.scrollIntoView({behavior: "smooth", block: "start"});
        }
        
    });

    mensClose.addEventListener('click', ()=> {
        mensSection.classList.toggle('display-none');
        serviceSection.scrollIntoView({behavior: "smooth", block: "start"});
    });

};

function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

navSlide();
serviceSlide();