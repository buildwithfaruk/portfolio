let menuBtn = document.querySelector(".menu-icon");
let nevItem = document.querySelector(".navber")



menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('showNav');
    nevItem.classList.toggle('showNav')
})




//typing animation home text

const dynamikText = document.querySelector(".home-animation-text span");
console.log(dynamikText);
const sentences = ["Fronted Developer",  "UI / UX Designer"];

// initialize
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


const typeEffect = ( ) =>{
    const currentWord = sentences[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamikText.textContent = currentChar;


    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 150);
    }else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 100);
    }else{
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % sentences.length : wordIndex;
        setTimeout(typeEffect, 1000);
    }
}
typeEffect()