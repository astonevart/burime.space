$(document).ready( function(){
        $(".burime-item").each(function () {
            $(this).css("background-color","hsla("+Math.random()*360+",100%,50%,0.1)")
        });
});