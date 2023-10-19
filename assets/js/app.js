let btn = document.querySelector(".btn");
let clip = document.querySelector(".clip");
let closeX = document.querySelector(".close");

// btn.onclick = function () {
//   // btn.classList.add('active')
//   clip.classList.add("active");
// };

// closeX.onclick = function () {
//   clip.classList.remove("active");
// };

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});


$('#design-card').owlCarousel({
  loop:true,
  margin:15,
  items:1,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:1
      }
  }
})

$(document).ready(function () {
  $("#bar1").barfiller({ barColor: "#fb527a" });
  $("#bar2").barfiller({ barColor: "#fb527a" });
  $("#bar3").barfiller({ barColor: "#fb527a" });
  $("#bar4").barfiller({ barColor: "#fb527a", duration: 3000 });
});
