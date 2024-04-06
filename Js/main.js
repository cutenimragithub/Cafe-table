// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav Hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
// Swiper Slider
const swiper = new Swiper('.my-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay:{
        delay: 3500,
    },
  });



// This script switches the table when the carousel slides
var myCarousel = document.querySelector('#coffeeCarousel');

myCarousel.addEventListener('slide.bs.carousel', function (e) {
  // Get the index of the next slide
  var nextSlideIndex = e.relatedTarget.getAttribute('data-bs-slide-number');

  // Hide all tables
  var tables = document.querySelectorAll('.pricing-table');
  tables.forEach(function (table) {
    table.classList.add('hidden');
  });

  // Show the table corresponding to the new carousel item
  var nextTable = document.querySelector('#menuTable' + nextSlideIndex);
  if (nextTable) {
    nextTable.classList.remove('hidden');
  }
});

