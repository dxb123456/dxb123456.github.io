/**
 * Created by Administrator on 2016/7/21.
 */
    var timer;
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
            $(".one_2006").css({top:86,opacity:1,transition:"all 0.5s 3s",})
            $(".one_text").css({top:142,opacity:1,transition:"all 0.5s 3.3s"})
        },800);

    }
//var two_img2=document.getElementsByClassName("two_img2")[0];
    function f2(){
        $('.two_img1').css({transition:"all 0.3s",'transform': "skew(0deg)",opacity:1});
        //$('.two_img2').css({transition:"all 0.3s 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275)",top:333,opacity:1});
        $('.two_img2').css({animation:"0.4s 0.5s two_img2",'animation-fill-mode': "both"});
        $('.two_img3').css({transition:"all 0.3s 1s cubic-bezier(0.175, 0.885, 0.320, 1.275)",top:158,opacity:1});
        //$(".smoke1 img").eq(0).css({transition:"1s 0.7s",left:-30,width:103});
        $(".smoke1 img").eq(0).css({animation:"0.8s 0.6s smoke1_1"});
        $(".smoke1 img").eq(1).css({animation:"0.8s 0.6s smoke1_2"});
        $(".smoke1 img").eq(2).css({animation:"0.8s 0.6s smoke1_3"});
        $(".smoke2 img").eq(0).css({animation:"0.8s 1.1s smoke2_1"});
        $(".smoke2 img").eq(1).css({animation:"0.8s 1.1s smoke2_2"});
        $(".smoke2 img").eq(2).css({animation:"0.8s 1.1s smoke2_3"});
        $(".smoke3 img").eq(0).css({animation:"0.8s 1.1s smoke2_1"});
        $(".smoke3 img").eq(1).css({animation:"0.8s 1.1s smoke2_2"});
        $(".smoke3 img").eq(2).css({animation:"0.8s 1.1s smoke2_3"});
        $('.arrow1').css({transition:"all 0.2s 1.5s",width: 25,height:36,left: 177,top:593,transform: 'rotateZ(0deg)',opacity:1})
        $('.arrow2').css({transition:"all 0.2s 1.6s",width: 39,height:78,left: 287,top:570,transform: 'rotateZ(0deg)',opacity:1})
        $('.arrow3').css({transition:"all 0.2s 1.8s",width: 30,height:42,left: 228,top:539,opacity:1})
        $('.arrow4').css({transition:"all 0.2s 1.9s",width: 30,height:42,left: 620,top:580,opacity:1})
        $('.arrow5').css({transition:"all 0.2s 2.0s",width: 37,height:68,left:685,top:518,transform: 'rotateZ(0deg)',opacity:1})
        $('.arrow6').css({transition:"all 0.2s 2.1s",width: 30,height:42,left: 324,top:500, transform: 'rotateZ(10deg) rotateY(180deg)',opacity:1})
        $('.arrow7').css({transition:"all 0.3s 2.3s",width: 44,height:95,left: 190,top:549, transform:'rotateZ(-10deg) rotateY(180deg)' ,opacity:1})
        $(".soldiers_left").css({animation:"1s 2.6s soldiers_left",'animation-fill-mode': "both"})
        $(".soldiers_right").css({animation:"1s 2.6s soldiers_right",'animation-fill-mode': "both"})
        $(".soldiers_arrow1").css({transition:"all 0.15s 3.6s",top:517,left:689,width:35,height: 40,transform:"rotateZ(0deg) rotateX(0deg)",opacity:1})
        $(".soldiers_arrow2").css({transition:"all 0.15s 3.8s",top:508,left: 662,width:37,height: 40,transform:"rotateZ(-22deg) rotateX(-30deg)",opacity:1})
        $(".mouth").css({transition:"opacity 0s 4.0s",opacity:1})
        $(".two_2008").css({top:66,opacity:1,transition:"all 0.5s 4.1s",})
        $(".two_text").css({top:122,opacity:1,transition:"all 0.5s 4.4s"})
        //$(".smoke1 img").eq(1).css({transition:"1s 0.7s",left:95,width:103});
        //$(".smoke1 img").eq(2).css({transition:"1s 0.7s",width:103});
        //$(".two_smoke1").css({animation:"1s 0.7s smoke1",'animation-fill-mode': "both"})
    }
    function f3(){
        $(".three_window").css({transition:"all 0.5s 0.2s",transform: "rotateX(0deg) skew(0deg)"});
        //$(".three_sofa").css({transition:"all 0.4s 0.4s cubic-bezier(0.620, 1.130, 0.550, 1.650)",top:460})
        $(".three_sofa").css({"animation":".5s 0.6s sofa","animation-fill-mode":"both"})
        //$(".three_lamp").css({transition:"all 0.4s 0.6s cubic-bezier(0.620, 1.130, 0.550, 1.650)",top:297,opacity:1})
        $(".three_lamp").css({"animation":".5s 1s lamp","animation-fill-mode":"both"})
        $(".three_flower").css({"animation":".5s 1.3s flower","animation-fill-mode":"both"})
        $(".three_girl").css({"animation":".5s 1.5s girl","animation-fill-mode":"both"})
        setTimeout(function(){
            maopao();
        },1600)
        setTimeout(function(){
            var a=-180;
            timer=setInterval(function(){
                a=a+2;
                $(".three6").css({"transformOrigin":"416px 424px","transform":"rotateZ("+a+"deg)",opacity:1})
                if(a==0){clearInterval(timer)}
            },16)
        },3400);
        setTimeout(function(){
            $(".three6_mask3").css({opacity:0});
            $(".three_flower").css({'z-index':'0'})
            $('.three6_mask1').css({transition:"opacity 0.5s 0.5s",opacity:0})
            $('.three6_mask2').css({transition:"opacity 0.5s 0.5s",opacity:0})
        },4400)
        $(".three_2010").css({top:76,opacity:1,transition:"all 0.5s 5s"})
        $(".three_text").css({top:132,opacity:1,transition:"all 0.5s 5.5s"})
        //$(".three6").css({'transform-origin':"center center",transition:"all 0.3s 1.8s",transform:'rotateZ(0deg)'})
    }
    function f4(){
        $('.four_mountain').css({transition:"all 0.4s",'transform-origin':'bottom','transform': "skew(0deg)",opacity:1})
        $('.four_penguin').css({"animation":".4s 0.4s penguin","animation-fill-mode":"both"})
    }

/*#div00 img:nth-of-type(1){left:310px;top:242px;width: 32px;height: 20px;}*/
/*#div00 img:nth-of-type(2){left:340px;top:250px;width: 285px;height: 76px;}*/
/*#div00 img:nth-of-type(3){left:365px;top:330px;width: 72px;height: 72px;}*/
/*#div00 img:nth-of-type(4){left:442px;top:323px;width: 216px;height: 75px;}*/
/*#div00 img:nth-of-type(5){left:658px;top:308px;width: 32px;height: 20px;}*/
function maopao(){
    var img0=document.getElementById('small_logo').getElementsByTagName('img');
    var a=0;
    var m=10;
    for(var i=0;i<img0.length;i++){
        if(i%2==1){
            a-=0.2;
        }
        a+=0.3;
        img0[i].style.animation="0.8s "+a+'s small_logo1';
        img0[i].style['animation-fill-mode']='both';
        img0[i].style.transition="all 1s 2s";
    }
    setTimeout(function(){
        for(var i=0;i<img0.length;i++){
            m>30 ? m+=3:m+=5;
            img0[i].style.opacity=1;
            if(i%3==0){
                img0[i].style.animation=m+'s move_1 infinite'
            }
            if(i%3==1){
                img0[i].style.animation=m+'s move infinite';
            }
            if(i%3==2){
                img0[i].style.animation=m+'s move_2 infinite';
            }
        }
    },2000)
}