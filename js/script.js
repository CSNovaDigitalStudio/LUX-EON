const menuBtn = document.getElementById("menuBtn");

if(menuBtn){

    const navLinks =
    document.querySelector(".nav-links");

    menuBtn.addEventListener("click", ()=>{

        navLinks.classList.toggle("show");

    });

}


const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

}, 4000);




document
.getElementById("contactForm")
.addEventListener("submit", e=>{

e.preventDefault();

const name =
e.target[0].value;

const message =
e.target[2].value;

window.open(
`https://wa.me/27639561729?text=Hi Luxeon, my name is ${name}. ${message}`
);

});