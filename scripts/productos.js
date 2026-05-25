const carousel = document.getElementById("productos_carousel");

document.querySelector(".productos_next").addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
});

document.querySelector(".productos_prev").addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
});