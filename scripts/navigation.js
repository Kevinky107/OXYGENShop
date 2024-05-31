// NAVIGATION SCRIPT

// Navigation elements
let nav = document.getElementById("nav");
let navIcon = document.getElementById("burguer");
let scroller = document.getElementById("scroller");
let topBtn = document.getElementById("floatBtn");

// Call to the navigation scroll indicator
window.addEventListener("scroll", function() {updateScroll()});


// Navigation functions

function changeNav() {
    
  if (nav.style.display === "block") {
    nav.style.display = "none";
    navIcon.src = "resources/Menu.png";
  } else {
    nav.style.display = "block";
    navIcon.src = "resources/cross.png";
  }
}

function updateScroll() {

  let totalHeight = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = totalHeight / height;

  scroller.style.width = scrolled*100 + "%";

  //functions that take place when you scroll some height
  showButton(scrolled);
  popUp(scrolled);

}

function showButton(scrolled) {

  if((scrolled*100) > 25)
    topBtn.style.display = "block";
  else
    topBtn.style.display = "none";

}

function goTop() {

  setTimeout(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, 200);
  
}