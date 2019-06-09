function gridView(){
    $('#project-timeline')[0].classList.add('hidden')
    $('#project-grid')[0].classList.remove('hidden')
}

function timelineView(){
    $('#project-grid')[0].classList.add('hidden')
    $('#project-timeline')[0].classList.remove('hidden')
}

function checkWidth() {
    if ($(window).width() < 768) {
        gridView()
    } else {
        timelineView()
    }
}
  
$(document).ready(function() {
    checkWidth();

    $(window).resize(function() {
        checkWidth();
    });
});