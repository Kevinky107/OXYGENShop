// MODAL SUBSCRIBE SCRIPT

//modal elements

let modal = document.getElementById("popUp");

if(localStorage.modal == null) {
  setTimeout(() => {
    popUp(0.25)
  }, 5000);
}

//click outside modal (event)
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

//escape pressed (event)
window.onkeydown = function(event) {
  if (event.keyCode == 27) {
    closeModal();
  }
}

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