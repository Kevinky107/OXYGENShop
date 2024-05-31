// MODAL SUBSCRIBE SCRIPT

//modal elements

let modal = document.getElementById("popUp");
let close = document.getElementById("modalCross");

if(localStorage.modal == null) {
  setTimeout(() => {
    popUp(0.25)
  }, 5000);
}

//click outside modal (event)
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});

//escape pressed (event)
window.addEventListener("keydown", function(event) {
  if (event.code == "Escape") {
    closeModal();
  }
});

function popUp(scrolled) {

  if(localStorage.modal == null)
  {
    if(scrolled*100 >= 25)
      modal.style.display = "block";
  } 

}

function closeModal() {
  modal.style.display = "none";
  localStorage.modal = "decline"
}

close.addEventListener("click", function(){closeModal()});