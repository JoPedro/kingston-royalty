// Slides Script
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let descs = document.getElementsByClassName("artist-desc");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        descs[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    descs[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Função pra mostrar o menu mobile
function showMenu() {
    let menu = document.getElementById("menu-hamburguer");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    }

    else {
        menu.style.display = "block";
    }
}