var navbar; 
var nav_height;
var animating = false;

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

  if (!animating){
    var current;
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++){
      var x = sections[i];
        if (x.getBoundingClientRect().top - nav_height <= 20) {
          current = x;
        }
    }
    clear_active();
    if (current) {
      document.getElementById(current.id+"Btn").classList.add("active");
      document.getElementById(current.id+"Dropdown").classList.add("active");
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

function toggleDropdown(){
  let dropdown = document.getElementById("dropdownMenu");
  if (dropdown.classList.contains("hidden")){
    dropdown.classList.remove("hidden");
    solid_navbar();
    dropdown.style.top = (nav_height) + "px";
  } else {
    dropdown.classList.add("hidden");
    if (window.scrollY < 100) {clear_navbar();}
  }
}

function goto(section_name){
  if (section_name == 'top'){
      document.getElementById("dropdownMenu").classList.add("hidden");
      $('html,body').animate({ scrollTop: 0 }, 400);
  } else {
    animating = true;
    var section_top = document.getElementById(section_name).getBoundingClientRect().top;
    var btn = document.getElementById(section_name+"Btn");
    var dropdown = document.getElementById(section_name+"Dropdown");
    clear_active();
    btn.classList.add("active");
    dropdown.classList.add("active");
    $('html,body').animate({ scrollTop: window.scrollY +  section_top - nav_height}, 400, function() {
      animating = false;
    });
  }
}

function dropdownGoto(section_name){
  toggleDropdown();
  goto(section_name);
}

function clear_active(){
  var btns = document.getElementsByClassName("navBtn");
  var dropdown = document.getElementsByClassName("dropdownBtn");
  for (var i = 0; i < btns.length; i++){
    btns[i].classList.remove("active");
  }
  for (var i = 0; i < dropdown.length; i++){
    dropdown[i].classList.remove("active");
  }
}