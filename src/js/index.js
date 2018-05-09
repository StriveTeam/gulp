$(document).ready(function() {

    $(".scroll .con").animate({'left':'0'},1500,function(){

    });

    $('.botBtn .ruleBtn').click(function () {
        $('.bg1').fadeIn()

    })

    $('.botBtn .secBtn').click(function () {
        $('.bg2').fadeIn()
    })


    $('.close,.popBg .btn').click(function () {
        $(this).parent().parent('.popBg').fadeOut()
    })


    var startY;
    var tempY;
    var windowHeight = $(window).height();
    var dY;
    var nowpage = 0;

    var dangqianpage = $(".page").eq(nowpage);
    var xiapage = $(".page").eq(nowpage + 1);
    var shangpage = $(".page").eq(nowpage - 1);

    var nowZindex = 1;

    //开始触摸
    $('body .page').on("touchstart",function(event){
        var finger = event.touches[0];
        startY = finger.pageY;

        if(event.target.className === 'btn'){
            xiapage.css("z-index",nowZindex);
            xiapage.css("-webkit-transform","translateY(" + (windowHeight + dY) + "px)");
        }
    });

    //触摸滑动
    $('body .page').on("touchmove",function(event){
        event.preventDefault();
        var finger = event.touches[0];
        tempY = finger.pageY;
        dY = tempY - startY

        // 往上滑：
        if(dY < 0){
            //往上滑
            if(xiapage){
                xiapage.css("z-index",nowZindex);
                xiapage.css("-webkit-transform","translateY(" + (windowHeight + dY) + "px)");
            }
        }else if(dY > 0){
            //往下滑
            if(shangpage){
                shangpage.css("z-index",nowZindex);
                shangpage.css("-webkit-transform","translateY(" + (-windowHeight+ dY) + "px)");
            }
        }
    });

    //触摸结束
    $('body .page').on("touchend",function(event){
        if(event.target.className === 'btn'){
            dangqianpage.animate({"-webkit-transform":"translateY(0%)"},200);
            xiapage.animate({"-webkit-transform":"translateY(0)"},200);
            nowpage ++;
            $(".page").eq(nowpage).addClass("cur").siblings().removeClass("cur");
            initial();
            return
        }
        //上滑
        if(dY < -100){
            if(xiapage){
                dangqianpage.animate({"-webkit-transform":"translateY(0%)"},200);
                xiapage.animate({"-webkit-transform":"translateY(0)"},200);
                nowpage ++;
            }
            $(".page").eq(nowpage).addClass("cur").siblings().removeClass("cur");
        }else if(dY < 0){
            if(xiapage){
                dangqianpage.animate({"-webkit-transform":"translateY(0%)"},200);
                xiapage.animate({"-webkit-transform":"translateY(100%)"},200);
            }
        }

        //下滑
        if(dY > 100){
            if(shangpage){
                dangqianpage.animate({"-webkit-transform":"translateY(0%)"},200);
                shangpage.animate({"-webkit-transform":"translateY(0%)"},200);
                nowpage --;
            }
            $(".page").eq(nowpage).addClass("cur").siblings().removeClass("cur");
        }else if(dY > 0){
            if(shangpage){
                shangpage.animate({"-webkit-transform":"translateY(-100%)"},200);
            }
        }

        initial();
    });


    function initial(){
        dangqianpage = $(".page").eq(nowpage);
        xiapage = $(".page").eq(nowpage + 1);
        shangpage = $(".page").eq(nowpage - 1);

        if(nowpage == 0){
            shangpage = null;
        }else if(nowpage == 1){
            xiapage = null;
        }
        nowZindex++;

        if(xiapage){
            xiapage.css({"-webkit-transform" :"translateY(100%)" });
        }

        if(shangpage){
            shangpage.css({"-webkit-transform":"translateY(-100%)", });
        }

        if(dangqianpage){
            dangqianpage.css({"-webkit-transform" :"none" });
        }
    }
});
