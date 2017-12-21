$(document).ready(loadPage);

var target = 0;

var loadPage= function() {
    //elementos
    var $buttons = $(".control");
    var $previous= $(".previous");
    var $next = $(".next");
    // eventos
    $buttons.click(changeImage);
    $previous.click(previousImage);
    $next.click(nextImage);
};

var changeImage = function(){
    target= parseInt($(this).data("target"));
    showImage(target);
};

var previousImage = function(e){
    e.preventDefault();
    target=target -1 ;
    target=(target < 0) ? 4 : target ;
    showImage(target);
};

var nextImage = function(e) {
    e.preventDefault();
    target= target +1 ;
    target= (target>4) ? 0: target;
    showImage(target);
};

var showImage = function(target) {
   var $lastSlide = $("div.active");
   var $slide = $("div[data-slide='" + target + "']");
   $lastSlide.removeClass("active");
   $slide.addClass("active");
};