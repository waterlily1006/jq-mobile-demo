/**
 * Created by xiyu on 17/9/25.
 */
$(window).load(function(){
    $('#page_box').css({'height':$(window).height()-$('.header').height()});
    $('.page').css({'height':$(window).height()-$('.header').height()});

    //change pages
    var page=0;
    $('.page1').css({'margin-top':-page*$('.page').height()});
    $('next').touchstart(function(){
        page++;
        if(page>3)page=3;
        $('.page1').css({'margin-top':-page*$('.page').height()});
    });
    $('prev').touchstart(function(){
        page--;
        if(page<0)page=0;
        $('.page1').css({'margin-top':-page*$('.page').height()});
    });
    //touch&move
    document.addEventListener('touchstart',function(ev){
        var startY=0,
            y=0;
        startY=ev.targetTouches[0].pageY;
        function move(ev){
            y=ev.targetTouches[0].pageY-startY;
        }
        function end(){
            if(y<-50){
                page++;
                if(page>3)page=3;
            }else if(y>50){
                page--;
                if(page<0)page=0;
            }
            $('.page1').css({'margin-top':-page*$('.page').height()});
            document.removeEventListener('touchmove',move,false);
            document.removeEventListener('touchend',end,false);
        }
        document.addEventListener('touchmove',move,false);
        document.addEventListener('touchend',end,false);
        ev.preventDefault();
    },false);
    
});