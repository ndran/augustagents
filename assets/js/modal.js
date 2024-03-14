// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("lineCardBtn");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// Detect Outside Click To Close Modal
modal.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal');
  if (isOutside) {
    modal.style.display = "none";
  }
})