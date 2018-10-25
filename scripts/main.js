$(document).ready( function(){
        $(".burime-item").each(function () {
            var color = Math.random()*360;
            $(this).css({"box-shadow":"inset 0px 0px 101px -19px hsla("+color+",100%,50%,0.6)"})
        });
        $(".opened-burime .author").each(function () {
            $(this).css("color","hsla("+Math.random()*360+",100%,50%,0.8)")
        });
        var lastScrollTop = 0;
        $(window).scroll(function(event){
            var st = $(this).scrollTop();
            if (st > lastScrollTop){
                $('header').css('top','-69px');
            } else {
                $('header').css('top','0');
            }
            lastScrollTop = st;
        });
});
new Vue({
    el: '#vue-react',
    data: {
        row1: '',
        row2: ''
    }
});