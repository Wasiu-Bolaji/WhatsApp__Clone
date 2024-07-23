// GETTING ACCESS TO ALL SECTIONS
const sectionHero = document.querySelector('#section-hero');
const sectionVoiceCall = document.querySelector('#section-voice-call');
const sectionSpeakFreely = document.querySelector('#section-speak-freely');
const sectionKeepinTouch = document.querySelector('#section-keep-in-touch');
const sectionWhatyouFeel = document.querySelector('#section-what-you-feel');
const sectionTransform = document.querySelector('#section-transform');
const footer = document.querySelector('#footer');

const main = document.querySelector('#main');



// SUB-FEATURES SM-SCREEN DROP-DOWN
const subFeatureItem = document.querySelector('.sub-feature__item');
const showSubfeatureItem = document.querySelector('.show-subFeature__item');

showSubfeatureItem.addEventListener('click', () => {
    const isOpen = subFeatureItem.classList.toggle('hidden');
    if(isOpen) {
        showSubfeatureItem.classList.remove('fa-minus');
        showSubfeatureItem.classList.add('fa-plus');
    } else {
        showSubfeatureItem.classList.remove('fa-plus');
        showSubfeatureItem.classList.add('fa-minus');
    };
});


// SUB FEATURES AND MODAL WINDOW XL SCREEN
const listItemMain = document.querySelector('.xlsub-item__main');
const listItemModal = document.querySelector('.xlsub-item__modal');
const modalWindowXl = document.querySelector('.xl-modal__window');

listItemMain.addEventListener('click', () => {
    modalWindowXl.classList.toggle('hidden');
    sectionHero.classList.toggle('invisible');
});

listItemModal.addEventListener('click', () => {
    modalWindowXl.classList.toggle('hidden');
    sectionHero.classList.toggle('invisible');
});


// HAMBURGER/CLOSE X TOGGLE
const hamburger = document.querySelector('.hamburger');
const modalWindowSm = document.querySelector('.sm-modal__window');
const header = document.querySelector('#header');
const closeHamburger = document.querySelector('.close-hamburger');
const floatChat = document.querySelector('.float-chat');

// hamburger.addEventListener('click', () => {
//     header.classList.add('hidden');
//     main.classList.toggle('hidden');
//     // modalWindowSm.classList.toggle('hidden');

//     modalWindowSm.classList.remove('hidden', 'modal-exit', 'modal-exit-active');
//     modalWindowSm.classList.add('modal-enter-active');

//     setTimeout(() => {
//         modalWindowSm.classList.remove('modal-enter');
//     }, 300);
// });

// hamburger.addEventListener('click', () => {
//     header.classList.add('hidden');
//     main.classList.toggle('hidden');
//     modalWindowSm.classList.remove('hidden', 'modal-exit', 'modal-exit-active');
//     modalWindowSm.classList.add('modal-enter-active');

//     setTimeout(() => {
//         modalWindowSm.classList.remove('modal-enter');
//     }, 300); // Duration should match the CSS transition duration
// });

// closeHamburger.addEventListener('click', () => {
//     modalWindowSm.classList.remove('modal-enter-active');
//     modalWindowSm.classList.add('modal-exit-active');

//     setTimeout(() => {
//         modalWindowSm.classList.remove('modal-exit-active');
//         modalWindowSm.classList.add('hidden', 'modal-enter');
//     }, 300); 
//     // modalWindowSm.classList.add('hidden');
//     header.classList.remove('hidden');
//     main.classList.toggle('hidden');
// });

hamburger.addEventListener('click', () => {
    header.classList.add('hidden');
    main.classList.add('hidden');

    // Ensure the modal is visible and starts with the enter transition
    modalWindowSm.classList.remove('hidden', 'modal-exit-active');
    modalWindowSm.classList.add('modal-enter');
    
    // Trigger reflow to apply the enter transition
    void modalWindowSm.offsetWidth;
    
    modalWindowSm.classList.add('modal-enter-active');

    // Show the close button and hide the hamburger button
    closeHamburger.classList.remove('hidden');
    hamburger.classList.add('hidden');
});

closeHamburger.addEventListener('click', () => {
    modalWindowSm.classList.remove('modal-enter-active');
    modalWindowSm.classList.add('modal-exit-active');

    setTimeout(() => {
        modalWindowSm.classList.add('hidden');
        modalWindowSm.classList.remove('modal-enter', 'modal-exit-active');
    }, 300); // Duration should match the CSS transition duration

    header.classList.remove('hidden');
    main.classList.remove('hidden');

    // Show the hamburger button and hide the close button
    hamburger.classList.remove('hidden');
    closeHamburger.classList.add('hidden');
});


// scroll reveal animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 600,
    // reset: true // resets animation
});

// Hero chats
sr.reveal(".hero__img1", { origin: "bottom" });
sr.reveal(".hero__img2", { origin: "bottom", duration: "4000" });
sr.reveal(".hero__img3", { origin: "bottom" });
sr.reveal(".hero__img4", { origin: "bottom" });
sr.reveal(".hero__img5", { origin: "bottom" });
sr.reveal(".hero__img6", { origin: "bottom", duration: "4000" });
sr.reveal(".hero__img7", { origin: "bottom" });


// Voce and Video call
sr.reveal(".chat1", { origin: "bottom" });
sr.reveal(".v-call", { origin: "bottom" });
sr.reveal(".chat2", { origin: "bottom" });
sr.reveal(".never-miss", { origin: "bottom" });


// Speak freely
sr.reveal(".speak-freely", { origin: "bottom" });

// Keep in touch
sr.reveal(".keep-in-touch", { origin: "bottom" });

// Say what you feel
sr.reveal(".what-you-feel", { origin: "bottom" });

// Tranform
sr.reveal(".transform", { origin: "bottom" });








