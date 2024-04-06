



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

