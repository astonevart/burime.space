$(document).ready( function(){
        $(".burime-item").each(function () {
            $(this).css("background-color","hsla("+Math.random()*360+",100%,50%,0.1)")
        });
        $(".opened-burime .author").each(function () {
            $(this).css("color","hsla("+Math.random()*360+",100%,50%,0.8)")
        });
});
new Vue({
    el: '#vue-react',
    data: {
        row1: '',
        row2: ''
    }
});