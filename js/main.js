var navbar; 
var nav_height;

window.onload = function() {
  navbar = document.getElementById("navbar")
  nav_height = document.getElementById("navbar").getBoundingClientRect().height;
  if (window.scrollY >= 100) {
    solid_navbar();
  } else {
    clear_navbar();
  }
}

window.onscroll = function() {
  if (navbar && window.scrollY >= 100 ) {    
    solid_navbar();
  } else if (navbar){
    clear_navbar();
  }

  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++){
    var x = sections[i];
      clear_active();
      if (x.getBoundingClientRect().top - nav_height <= 0) {
        document.getElementById(x.id+"Btn").classList.add("active");
      }
  }
}

// Make navbar opaque
function solid_navbar(){
  navbar.classList.add("nav-colored");
  navbar.classList.remove("nav-transparent");
}

// Make navbar clear
function clear_navbar(){
  navbar.classList.add("nav-transparent");
  navbar.classList.remove("nav-colored");
}

function goto(section_name){
  if (section_name == 'top'){
      $('html,body').animate({ scrollTop: 0 }, 400);
  } else {
    var section_top = document.getElementById(section_name).getBoundingClientRect().top;
    var btn = document.getElementById(section_name+"Btn");
    clear_active();
    btn.classList.add("active");
    $('html,body').animate({ scrollTop: window.scrollY +  section_top - nav_height}, 400);
  }
  
}

function clear_active(){
  var btns = document.getElementsByClassName("navBtn");
  for (var i = 0; i < btns.length; i++){
    btns[i].classList.remove("active");
  }
}