// JavaScript para el carrusel
/* ===================================== CAROUSEL */
let main_slides = document.querySelectorAll(".main_slide");
let main_dotsContainer = document.querySelector(".main_dots");
let main_index = 0;

/* CREAR DOTS */
main_slides.forEach((_, i) => {
    let main_dot = document.createElement("span");
    main_dot.classList.add("main_dot");
    if(i === 0) main_dot.classList.add("active");
    main_dot.onclick = () => mostrarSlide(i);
    main_dotsContainer.appendChild(main_dot);
});

let main_dots = document.querySelectorAll(".main_dot");

/* FUNCIÓN */
function mostrarSlide(i) {
    main_slides[main_index].classList.remove("active");
    main_dots[main_index].classList.remove("active");

    main_index = i;

    main_slides[main_index].classList.add("active");
    main_dots[main_index].classList.add("active");
};

/* BOTONES */
document.querySelector(".main_next").onclick = () => {
    let i = (main_index + 1) % main_slides.length;
    mostrarSlide(i);
};

document.querySelector(".main_prev").onclick = () => {
    let i = (main_index - 1 + main_slides.length) % main_slides.length;
    mostrarSlide(i);
};

/* AUTO */
setInterval(() => {
    let i = (main_index + 1) % main_slides.length;
    mostrarSlide(i);
}, 4000);