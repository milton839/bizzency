$(function(){
   
   $('.hs').click(function(){
       $('.navbar-nav').toggle();
   }); 
    
    $('.hs').click(function(){
       $('.fa-times').toggleClass('fa-bars');
   });
    
//wow.js 
new WOW().init();    
    
$('.slide-main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed:1000,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  autoplaySpeed: 2000,
});    
$('.slide-main2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed:1000,
  arrows:true,
  prevArrow:'.left2',
  nextArrow:'.right2',
  autoplaySpeed: 2000,
});      
$('.slide-main3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed:1000,
  arrows:true,
  prevArrow:'.left3',
  nextArrow:'.right3',
  autoplaySpeed: 2000,
});
    
$('.backtop').click(function(){
   $('html,body').animate({scrollTop:0},1500);
});    
    
    
    
$(window).scroll(function(){
   var scrolling= $(this).scrollTop();
    
    if(scrolling > 100){
        $('.navbar').addClass('bg');
    }
});   

    // venobox
$('.venobox').venobox();
    
//animation scroll js
var html_body = $('html, body');
$('.nav-link').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500);
            return false;
        }
    }
});        
    
    
    
    
});