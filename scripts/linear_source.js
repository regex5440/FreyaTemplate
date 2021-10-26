var main_carousel = document.getElementsByClassName('fade');
var carousel_text = $('.carousel .fade div .text .lable');
var carousel_Btn = $('.carousel .fade div .text .carousel_Btn');
var carousalSlides = document.getElementsByClassName('cimg');
var scrollParllax = document.getElementsByClassName('py-carousel');
$(document).on('scroll', () => {
    //Scrolled document from the top of the body
    var scrolledPosition = $(document).scrollTop();
    let header = document.getElementsByClassName('exp_header')[0];
    if (scrolledPosition > header.offsetHeight) {
        document.getElementsByClassName('header')[0].style.marginTop = '20px';
        header.style = "width: 70%; height: 3.5rem; border-radius: 23px";
    } else {
        document.getElementsByClassName('header')[0].style.marginTop = '0px';
        header.style = "width: 100%; height: 4rem; border-radius: none";
    }

    /*     Main Carousel Effect of changing the transform     ------>Module #1
           Adding background-position on scroll
*/
    for (let i = 1; i < main_carousel.length + 1; i++) {
        let pointer = (".carousel > .fade > .img" + i).toString();
        $(pointer).css({
            'background-position': '0 ' + Math.round(scrolledPosition / 4) + 'px'
        });
    }

    for(let i=0;i<carousalSlides.length;i++){
        carousalSlides[i].style = `background-position: 0px ${Math.round(-scrolledPosition / 4)}px`;
    }
    carousel_text.css({ 'transform': 'translate3d(0px, ' + Math.round(-scrolledPosition / 10) + 'px, 0px' });
    carousel_Btn.css({ 'transform': 'translate3d(0px, ' + Math.round(-scrolledPosition / 10) + 'px, 0px' });
    carousel_Btn.css({ 'transform': 'translate3d(0px, ' + Math.round(-scrolledPosition / 10) + 'px, 0px' });


    /*-------------------------Parallax Effect For class="py-carousel"*/

    var offsetheight1 = scrolledPosition - (scrollParllax[0].offsetHeight);
    if(scrolledPosition>scrollParllax[0].scrollHeight){
    ///----------->>>>>>>>>>>CONSOLE console.log(offsetheight + " is py-carousel " + scrolledPosition);
    $('.py-carousel').css({ 'background-position': '0 ' + Math.round(-offsetheight1 / 20) + 'px' });
    $('.py-carousel > .container > .py_text').css({ 'transform': 'translate3d(0px, ' + Math.round(-offsetheight1 / 5) + 'px, 0px' });
    }
    /*
        -------------------------Parllax Effect for class="py-carousel2"*/
    var offsetheight2 = (offsetheight1) - scrollParllax[1].offsetHeight;
    ///----------->>>>>>>>>>>CONSOLE console.log(offsetheight + " is py-carousel " + scrolledPosition);
    $('.py-carousel2').css({ 'background-position': '0 ' + Math.round(-offsetheight2 / 25) + 'px' });
    $('.py-carousel2 > .container > .py_text').css({ 'transform': 'translate3d(0px, ' + Math.round(-offsetheight2 / 15) + 'px, 0px' });

    /*
        -------------------------Parllax Effect for class="py-carousel3"*/
    var offsetheight3 = (offsetheight2) - scrollParllax[2].offsetHeight;
    ///----------->>>>>>>>>>>CONSOLE console.log(offsetheight + " is py-carousel " + scrolledPosition);
    $('.py-carousel3').css({ 'background-position': '0px ' + Math.round(-offsetheight3 / 30) + 'px' });
    $('.py-carousel3 > .container > .py_text').css({ 'transform': 'translate3d(0px, ' + Math.round(-offsetheight3 / 25) + 'px, 0px' });

    /*
        -------------------------Parllax Effect for class="py-carousel4"*/
    var offsetheight4 = offsetheight3 - (document.documentElement.offsetHeight - scrolledPosition);// (document.getElementsByClassName('footer')[0].offsetHeight);
    ///----------->>>>>>>>>>>CONSOLE console.log(offsetheight + " is py-carousel " + scrolledPosition);
    $('.py-carousel4').css({ 'background-position': '0px ' + Math.round(-offsetheight4 / 50) + 'px' });
    $('.py-carousel4 > .container > .py_text').css({ 'transform': 'translate3d(0px, ' + Math.round(-offsetheight3 / 35) + 'px, 0px' });
});
let menu_btn = document.getElementsByClassName('alex_Btn')[0];
var hrs = menu_btn.getElementsByTagName('hr');
var isopen=true;
menu_btn.onclick= () => {
    $('nav').slideToggle();
    $('.contact_footer').toggle();
    if(isopen){
        hrs[0].style.transform='rotate(-42deg)';
        hrs[1].style='width: 0; visibility: hidden';
        hrs[2].style.transform='rotate(40deg)';
        isopen=false;
    }else{
        hrs[0].style.transform='rotate(0deg)';
        hrs[1].style='width: 97%; visibility: visible';
        hrs[2].style.transform='rotate(0deg)';
        isopen=true;
    }
};