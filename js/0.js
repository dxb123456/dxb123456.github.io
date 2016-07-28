/**
 * Created by Administrator on 2016/7/21.
 */

    function f0(){
        $("#div00 img").eq(1).css({width:285,height:76,left:340,top:250,opacity:1});
        $("#div00 img").eq(0).css({width:32,height:20,left:310,top:242,opacity:1});
        $("#div00 img").eq(2).css({width:72,height:72,left:365,top:330,opacity:1})
        $("#div00 img").eq(3).css({width:216,height:75,left:442,top:323,opacity:1})
        $("#div00 img").eq(4).css({width:32,height:20,left:658,top:308,opacity:1})
    }
    function f1(){
        $("#one_img1").css({transition:"all 0.5s linear",left:24,top:505,opacity:1});
        $("#one_img2").css({transition:'all 0.5s 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)',transform:"rotateX(0deg) skew(0deg)",opacity:1})
        setTimeout(function(){
            $(".left_div").css({animation: "0.6s move",opacity: 1})
            $(".img401").css({top:297,opacity:1,transition: 'all 0.2s 0.7s linear'});
            $(".img402").css({top:276,opacity:1,transition: 'all 0.2s 0.9s linear'});
            $(".img403").css({top:270,opacity:1,transition: 'all 0.3s 1.1s linear'});
            $(".img404").css({top:276,opacity:1,transition: 'all 0.2s 1s linear'});
            $(".img405").css({top:297,opacity:1,transition: 'all 0.2s 0.8s linear'});
            $("#ma1").css({opacity:1,transition: 'opacity 0s 1s linear'});
            $("#ma2").css({opacity:1,transition: 'opacity 0s 1s linear'});
            $(".img60").css({animation: "2s 1s linear move2",'animation-fill-mode': "forwards","z-index":"3"});
            $(".show601").css({animation: "0.55s 1s move601",'animation-fill-mode': "both"});
            $(".show602").css({animation: "0.26s 1.6s move602",'animation-fill-mode': "both"});
            $(".show603").css({animation: "0.25s 1.9s move603",'animation-fill-mode': "both"});
            $(".show604").css({animation: "0.25s 2.2s move604",'animation-fill-mode': "both"});
            $(".show605").css({animation: "0.6s 2.5s move605",'animation-fill-mode': "both"});
            $(".one_2006").css({top:86,opacity:1,transition:"all 0.5s 3s"})
            $(".one_text").css({top:142,opacity:1,transition:"all 0.5s 3.3s"})
        },800);

    }

/*#div00 img:nth-of-type(1){left:310px;top:242px;width: 32px;height: 20px;}*/
/*#div00 img:nth-of-type(2){left:340px;top:250px;width: 285px;height: 76px;}*/
/*#div00 img:nth-of-type(3){left:365px;top:330px;width: 72px;height: 72px;}*/
/*#div00 img:nth-of-type(4){left:442px;top:323px;width: 216px;height: 75px;}*/
/*#div00 img:nth-of-type(5){left:658px;top:308px;width: 32px;height: 20px;}*/