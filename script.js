document.body.classList.add("js-enabled");


const slides = document.querySelector(".gallery figure");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let current = 0;
let slideTimer;

function showSlide(i) {
    slides.forEach((slide, index) =>{
        slide.classList.toggle("active", index === i);
    });
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

function startShow(){
    slideTimer = setInterval(nextSlide, 3000);
}

function stopShow(){
    clearInterval(slideTimer);
}

nextBtn.addEventListener("click", () => {
    stopShow();
    nextSlide();
});

prevBtn.addEventListener("click", () => {
    stopShow();
    prevSlide();
});

showSlide(current);
startShow();
