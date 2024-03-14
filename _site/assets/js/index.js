// Electrical Lines Button //

document.getElementById("scroll-button-electrical").onclick = function() {
  document.getElementById("target-section-electrical").scrollIntoView({
    behavior: "smooth"
  });
};

// Lighting Lines Button //

document.getElementById("scroll-button-lighting").onclick = function() {
  document.getElementById("target-section-lighting").scrollIntoView({
    behavior: "smooth"
  });
};

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