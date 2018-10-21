$(document).ready( function(){
        $(".burime-item").each(function () {
            $(this).css("background-color","hsla("+Math.random()*360+",100%,50%,0.2)")
        });
        $(".opened-burime .author").each(function () {
            $(this).css("color","hsla("+Math.random()*360+",100%,50%,0.8)")
        });
});