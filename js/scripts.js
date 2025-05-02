let menuBtn = document.querySelector(".menu-icon");
let nevItem = document.querySelector(".navber")



menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('showNav');
    nevItem.classList.toggle('showNav')
})

// let cartDetails = document.querySelector(".caretDetails");
// let webCloseICons = document.querySelector(".close-icon")

// console.log(webCart)


// cartDetails.addEventListener('click', () => {
//     cartDetails.classList.add('show-web-design-cart');
//     webCloseICons.classList.remove('show-web-design-cart')
// })


// Typing effect
const text = " Fronted Developer";
let showSkills = document.querySelector(".showSkills");
console.log(showSkills);


let index = 0;
let isDeleting = false;

const typeEffect = () => {
    if (!isDeleting && index <= text.length) {
        showSkills.textContent = text.substring(0, index);
        index++;
    } else if (isDeleting && index >= 0) {
        showSkills.textContent = text.substring(0, index)
        index--;
    }
    
    if (index > text.length) {
        isDeleting = true;
    }
    else if (index < 0) {
        isDeleting = false
    }
    setTimeout(typeEffect, 100);
}
typeEffect();