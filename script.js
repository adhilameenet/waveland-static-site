$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
   var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
     });
   });
 });
});


// Swiper

const swiper = new Swiper('.swiper', {

loop : true ,

pagination: {
  el: '.swiper-pagination',
},

autoplay: {
  delay: 3000,
},

speed: 600,

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
});



// Scroll To Top

// const to_top = document.querySelector(".to_top");
// window.addEventListener("scroll", () => {
//     if(window.pageYOffset > 100) {
//       to_top.classList.add("active");
//     } else {
//       to_top.classList.remove("active");
//     }
// })



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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}