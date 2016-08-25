
    $(function(){
        var last=null;
        var timer=null;
        $(".nav_ul").get(0).onmouseover=$(".nav_box").get(0).onmouseover=function(ev){
            clearTimeout(timer);
            $(".nav_box").show();
        }
        $(".nav_ul").get(0).onmouseout=$(".nav_box").get(0).onmouseout=function(ev){
            timer=setTimeout(function(){
                $(".nav_box").hide();
            },100)
        }
        $(".nav_ul li").hover(function(ev){
            i=$(this).index();
            $(".nav_box>div").eq(last).css({animation: last<i?"0.4s m0":"0.4s m3","animation-fill-mode":'forwards'}).siblings().hide();
            $(".nav_box>div").eq(i).css({animation: last<i?"0.4s m1":"0.4s m4","animation-fill-mode":'forwards'}).show();
            last=i;
        },function(){
        })
        $(".hover h3").hover(function(ev){
            var $index=$(this).index();
            $(this).addClass("nav_active").siblings().removeClass("nav_active");
            $(this).closest(".hover").css({display:"block",animation:""}).find(".nav_tab").eq($index).show().siblings(".nav_tab").hide();
        },function(){
        })

    })


