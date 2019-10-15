$(window).scroll(function(e){
    e.preventDefault();
    var wScroll = $(window).scrollTop();
    
    var offset2 = (wScroll - $(".s2 .scrolled1").offset().top) * 0.5;
    var offset3 = (wScroll - $(".s2 .scrolled2").offset().top) * 0.2;
    
    var offset4 = (wScroll - $(".s3 .scrolled1").offset().top) * 0.5;
    var offset5 = (wScroll - $(".s3 .scrolled2").offset().top) * 0.2;
    
    var offset6 = (wScroll - $(".s4 .scrolled1").offset().top) * 0.5;
    var offset7 = (wScroll - $(".s4 .scrolled2").offset().top) * 0.2;
    
    var offset8 = (wScroll - $(".s5 .scrolled1").offset().top) * 0.5;
    var offset9 = (wScroll - $(".s5 .scrolled2").offset().top) * 0.2;
    
    var offset10 = (wScroll - $(".s6 .scrolled1").offset().top) * 0.5;
    var offset11 = (wScroll - $(".s6 .scrolled2").offset().top) * 0.2;
    
    var offset12 = (wScroll - $(".s7 .scrolled1").offset().top) * 0.5;
    var offset13 = (wScroll - $(".s7 .scrolled2").offset().top) * 0.2;
    
    var offset14 = (wScroll - $(".s8 .scrolled1").offset().top) * 0.5;
    var offset15 = (wScroll - $(".s8 .scrolled2").offset().top) * 0.2;
    
    $(".s2 .scrolled1").css({'transform' : 'translateY('+offset2+'px)' });
    $(".s2 .scrolled2").css({'transform' : 'translateY('+offset3+'px)' });
    
    $(".s3 .scrolled1").css({'transform' : 'translateY('+offset4+'px)' });
    $(".s3 .scrolled2").css({'transform' : 'translateY('+offset5+'px)' });
    
    $(".s4 .scrolled1").css({'transform' : 'translateY('+offset6+'px)' });
    $(".s4 .scrolled2").css({'transform' : 'translateY('+offset7+'px)' });
    
    $(".s5 .scrolled1").css({'transform' : 'translateY('+offset8+'px)' });
    $(".s5 .scrolled2").css({'transform' : 'translateY('+offset9+'px)' });
    
    $(".s6 .scrolled1").css({'transform' : 'translateY('+offset10+'px)' });
    $(".s6 .scrolled2").css({'transform' : 'translateY('+offset11+'px)' });
    
    $(".s7 .scrolled1").css({'transform' : 'translateY('+offset12+'px)' });
    $(".s7 .scrolled2").css({'transform' : 'translateY('+offset13+'px)' });
   
    $(".s8 .scrolled1").css({'transform' : 'translateY('+offset14+'px)' });
    $(".s8 .scrolled2").css({'transform' : 'translateY('+offset15+'px)' });
  });

 /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}