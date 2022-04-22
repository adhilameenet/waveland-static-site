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