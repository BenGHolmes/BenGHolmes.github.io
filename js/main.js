var navbar; 

window.onload = function() {
  navbar = document.getElementById("navbar") 
  console.log("loaded")
}

window.onscroll = function() {
  console.log(window.scrollY)
  if (window.scrollY >= 100 ) {    
    navbar.classList.add("nav-colored");
    navbar.classList.remove("nav-transparent");
  } 
  else {
    navbar.classList.add("nav-transparent");
    navbar.classList.remove("nav-colored");
  }
}