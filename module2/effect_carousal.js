
var slider=1;
var timeout;
var slides = document.getElementsByClassName("mySlides");


// Next/previous controls
function forward(){
    "use strict";
    slider=(slider+1)%slides.length;
    showSlides(slider);
}

// Thumbnail image controls
function backward(){
    "use strict";
    slider= slider<1?slides.length-1: slider-1;
    console.log(slider);
    showSlides(slider);
}

function showSlides(slide) {
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slide].style.display="block";
}

timeout=setInterval(()=>{
    showSlides(slider);
    slider=(slider+1)%slides.length;
},10000);