// Sidebar Menu //

document.querySelector('.hamburger').addEventListener('click', function(event) {
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.sidebar-overlay');
// Toggle sidebar visibility
if (sidebar.style.left === '0px') {
    sidebar.style.left = '-280px';
    overlay.style.display = 'none'; // Hide overlay
} else {
    sidebar.style.left = '0px';
    overlay.style.display = 'block'; // Show overlay
}
event.stopPropagation();
});

document.addEventListener('click', function(event) {
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.sidebar-overlay');
if (sidebar.style.left === '0px' && !event.target.closest('.sidebar') && !event.target.classList.contains('hamburger')) {
    sidebar.style.left = '-280px';
    overlay.style.display = 'none'; // Hide overlay
}
});

document.querySelector('.sidebar-overlay').addEventListener('click', function() {
// Close the sidebar when the overlay is clicked
document.querySelector('.sidebar').style.left = '-280px';
this.style.display = 'none'; // Hide overlay
});

// Carousel //

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
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-dot";
}