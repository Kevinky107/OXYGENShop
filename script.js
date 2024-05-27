// Navigation elements
var nav = document.getElementById("nav");
var navIcon = document.getElementById("burguer");
var scroller = document.getElementById("scroller");
var topBtn = document.getElementById("floatBtn");

//Call to the navigation scroll indicator
window.onscroll = function() {updateScroll()};

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

  var totalHeight = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = totalHeight / height;

  scroller.style.width = scrolled*100 + "%";
  showButton(scrolled)

}

function showButton(scrolled) {

  if((scrolled*100) > 50)
    topBtn.style.display = "block";
  else
    topBtn.style.display = "none";

}

function goTop() {

  setTimeout(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, 200);
  
}