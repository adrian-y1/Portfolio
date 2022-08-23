

document.addEventListener('DOMContentLoaded', () => {

    // On link click, close hamburger menu
    let mediaQuery = window.matchMedia('(max-width: 1146px)');
    let navbarLinks = document.querySelectorAll('.navbar-right li')
    if(mediaQuery.matches === true){
        navbarLinks.forEach(link => {
            link.onclick = () => {
                document.querySelector('.hamburger-menu .toggler').click()
            }
        })
    }
    window.addEventListener('scroll', function () {

        let screenPositiom = window.innerHeight;

        // About Me header Animation
        let aboutmeIntro = document.querySelector('.aboutme-intro');
        let aboutmeIntroPosition = aboutme.getBoundingClientRect().top;
        if ( aboutmeIntroPosition < screenPositiom){
            aboutmeIntro.querySelector('.aboutme-intro-header').style.animation = '1s slide-to-right'
            document.querySelector('.aboutme-intro-header-border').style.animation = '1s slide-to-left'
        }else {
            aboutmeIntro.querySelector('.aboutme-intro-header').style.animation = '1s slide-out'
            document.querySelector('.aboutme-intro-header-border').style.animation = '1s slide-out'
        }

        // About Me Text Animation
        let aboutmeText = document.querySelector('.aboutme-text');
        let aboutmeTextPosition = aboutme.getBoundingClientRect().top;
        if ( aboutmeTextPosition < screenPositiom){
            aboutmeText.style.animation = '1s grow'
        } else {
            aboutmeText.style.animation = '1s shrink'
        }

        // About Me Card Animation
        let aboutmeCardWrap = document.querySelector('.aboutme-card-wrap')
        let firstCard = aboutmeCardWrap.querySelector('.first-card')
        let secondCard = aboutmeCardWrap.querySelector('.second-card')
        let thirdCard = aboutmeCardWrap.querySelector('.third-card')
        let aboutmeCardWrapPosition = aboutmeCardWrap.getBoundingClientRect().top;

        if(aboutmeCardWrapPosition < screenPositiom){
            firstCard.style.animation = '1s grow both'
            secondCard.style.animation = '1.3s grow 0.5s both'
            thirdCard.style.animation = '1.6s grow 1s both'
        } else {
            firstCard.style.animation = '1s shrink both'
            secondCard.style.animation = '1.3s shrink 0.5s both'
            thirdCard.style.animation = '1.6s shrink 1s both'
        }
        
        // My Projects header Animation
        let myprojectsHeader = document.querySelector('.myprojects-header');
        let myprojectsHeaderPosition = myprojectsHeader.getBoundingClientRect().top;
        if ( myprojectsHeaderPosition < screenPositiom){
            myprojectsHeader.style.animation = '1s slide-to-right'
            document.querySelector('.myprojects-header-border').style.animation = '1s slide-to-left'
        } else {
            myprojectsHeader.style.animation = '1s slide-out'
            document.querySelector('.myprojects-header-border').style.animation = '1s slide-out'
        }

        // My Projects Card Animation
        let myprojectsCardWrap = document.querySelector('.myprojects-card-wrap')
        let firstCardMP = myprojectsCardWrap.querySelector('.first-card-mp')
        let secondCardMP = myprojectsCardWrap.querySelector('.second-card-mp')
        let thirdCardMP = myprojectsCardWrap.querySelector('.third-card-mp')
        let myprojectsCardWrapPosition = myprojectsCardWrap.getBoundingClientRect().top;

        if(myprojectsCardWrapPosition < screenPositiom){
            firstCardMP.style.animation = '1s grow 1.1s both'

            secondCardMP.style.animation = '1s grow 0.5s both'

            thirdCardMP.style.animation = '1s grow 0.8s both'
        } else {
            firstCardMP.style.animation = '1s shrink 1.1s both'

            secondCardMP.style.animation = '1s shrink 0.5s both'

            thirdCardMP.style.animation = '1s shrink 0.8s both'
        }

        // Contact Header Animation
        let contactHeader = document.querySelector('.contact-header');
        let contactHeaderPosition = contactHeader.getBoundingClientRect().top;
        if ( contactHeaderPosition < screenPositiom){
            contactHeader.style.animation = '1s slide-to-right'
            document.querySelector('.contact-header-border').style.animation = '1s slide-to-left'
        } else {
            contactHeader.style.animation = '1s slide-out'
            document.querySelector('.contact-header-border').style.animation = '1s slide-out'
        }


        // Contact Card Animation
        let contactCardCon = document.querySelector('.contact-card-container')
        let contactCards = document.querySelectorAll('.contact-card')
        let contactCardConPosition = contactCardCon.getBoundingClientRect().top;

        if(contactCardConPosition < screenPositiom){
            contactCards.forEach(card => {
                card.style.animation = '1.5s grow'
            })
        } else {
            contactCards.forEach(card => {
                card.style.animation = '1.5s shrink'
            })
        }
    });
})