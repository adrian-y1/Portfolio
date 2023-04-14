document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', function () {
        let screenPosition = window.innerHeight;

        // About Me header Animation
        aboutMeHeaderAnimation(screenPosition);

        // About Me Text Animation
        aboutMeTextAnimation(screenPosition);

        // About Me Card Animation
        aboutMeCardAnimation(screenPosition);
        
        // My Projects header Animation
        projectsHeaderAnimation(screenPosition)

        // Project Card Animation
        animateProjectCards();

        // Contact Header Animation
        contactHeaderAnimation(screenPosition);

        // Contact Card Animation
        contactCardAnimation(screenPosition);
    });


    // Animate the projects cards everytime the filter button selection is clicked
    let btnContainer = document.getElementById('myprojects-btn-container');
    let btns = btnContainer.getElementsByClassName('btn');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            removeProjectCardsAnimation();
            animateProjectCards();
        });
    }    

    function contactHeaderAnimation(screenPosition) {
        let contactHeader = document.querySelector('.contact-header');
        let contactHeaderPosition = contactHeader.getBoundingClientRect().top;

        if ( contactHeaderPosition < screenPosition){
            contactHeader.style.animation = '1s slide-to-right'
            document.querySelector('.contact-header-border').style.animation = '1s slide-to-left'
        } else {
            contactHeader.style.animation = '1s slide-out'
            document.querySelector('.contact-header-border').style.animation = '1s slide-out'
        }
    }

    function aboutMeHeaderAnimation(screenPosition) {
        // About Me header Animation
        let aboutmeIntro = document.querySelector('.aboutme-intro');
        let aboutmeIntroPosition = aboutme.getBoundingClientRect().top;

        if ( aboutmeIntroPosition < screenPosition){
            aboutmeIntro.querySelector('.aboutme-intro-header').style.animation = '1s slide-to-right'
            document.querySelector('.aboutme-intro-header-border').style.animation = '1s slide-to-left'
        }else {
            aboutmeIntro.querySelector('.aboutme-intro-header').style.animation = '1s slide-out'
            document.querySelector('.aboutme-intro-header-border').style.animation = '1s slide-out'
        }
    }

    function aboutMeTextAnimation(screenPosition) {
        let aboutmeText = document.querySelector('.aboutme-text');
        let aboutmeTextPosition = aboutme.getBoundingClientRect().top;

        if ( aboutmeTextPosition < screenPosition){
            aboutmeText.style.animation = '1s grow'
        } else {
            aboutmeText.style.animation = '1s shrink'
        }
    }

    function aboutMeCardAnimation(screenPosition) {
        let aboutmeCardWrap = document.querySelector('.aboutme-card-wrap')
        let firstCard = aboutmeCardWrap.querySelector('.first-card')
        let secondCard = aboutmeCardWrap.querySelector('.second-card')
        let thirdCard = aboutmeCardWrap.querySelector('.third-card')
        let aboutmeCardWrapPosition = aboutmeCardWrap.getBoundingClientRect().top;

        if(aboutmeCardWrapPosition < screenPosition){
            firstCard.style.animation = '1s grow both'
            secondCard.style.animation = '1.3s grow 0.5s both'
            thirdCard.style.animation = '1.6s grow 1s both'
        } else {
            firstCard.style.animation = '1s shrink both'
            secondCard.style.animation = '1.3s shrink 0.5s both'
            thirdCard.style.animation = '1.6s shrink 1s both'
        }
    }

    function projectsHeaderAnimation(screenPosition) {
        let myprojectsHeader = document.querySelector('.myprojects-header');
        let myprojectsHeaderPosition = myprojectsHeader.getBoundingClientRect().top;

        if ( myprojectsHeaderPosition < screenPosition){
            myprojectsHeader.style.animation = '1s slide-to-right'
            document.querySelector('.myprojects-header-border').style.animation = '1s slide-to-left'
        } else {
            myprojectsHeader.style.animation = '1s slide-out'
            document.querySelector('.myprojects-header-border').style.animation = '1s slide-out'
        }
    }

    function contactCardAnimation(screenPosition) {
        let contactCardCon = document.querySelector('.contact-card-container')
        let contactCards = document.querySelectorAll('.contact-card')
        let contactCardConPosition = contactCardCon.getBoundingClientRect().top;

        if(contactCardConPosition < screenPosition){
            contactCards.forEach(card => {
                card.style.animation = '1.5s grow'
            })
        } else {
            contactCards.forEach(card => {
                card.style.animation = '1.5s shrink'
            })
        }
    }
})

function animateProjectCards() {
    let screenPosition = window.innerHeight;
    let myprojectsCardWrap = document.querySelector('.myprojects-card-wrap')
    let firstCardMPs = myprojectsCardWrap.querySelectorAll('.first-card-mp')
    let secondCardMPs = myprojectsCardWrap.querySelectorAll('.second-card-mp')
    let thirdCardMPs = myprojectsCardWrap.querySelectorAll('.third-card-mp')
    let myprojectsCardWrapPosition = myprojectsCardWrap.getBoundingClientRect().top;

    if(myprojectsCardWrapPosition < screenPosition){
        firstCardMPs.forEach((card) => {
            card.style.animation = '1s grow 0.8s both'
        })
        secondCardMPs.forEach((card) => {
            card.style.animation = '1s grow 0.3s both'
        })
        thirdCardMPs.forEach((card) => {
            card.style.animation = '1s grow 0.55s both'
        })
    } else {
        firstCardMPs.forEach((card) => {
            card.style.animation = '1s shrink 0.8s both'
        })
        secondCardMPs.forEach((card) => {
            card.style.animation = '1s shrink 0.3s both'
        })
        thirdCardMPs.forEach((card) => {
            card.style.animation = '1s shrink 0.55s both'
        })
    }
}
function removeProjectCardsAnimation() {
    let cards = document.querySelectorAll('.myprojects-card');
    cards.forEach((card) => {
      card.style.animation = 'none';
    });
  }