/**
 * Created by Administrator on 2016/7/21.
 */
    function f0(){
        $("#div00 .img0_2").css({width:285,height:76,left:340,top:250,opacity:1});
        $("#div00 .img0_1").css({width:32,height:20,left:310,top:242,opacity:1});
        $("#div00 .img0_3").css({width:72,height:72,left:365,top:330,opacity:1})
        $("#div00 .img0_4").css({width:216,height:75,left:442,top:323,opacity:1})
        $("#div00 .img0_5").css({width:32,height:20,left:658,top:308,opacity:1})
    }
    function f1(){
        $("#one_img1").css({transition:"all 0.5s linear",left:24,top:505,opacity:1});
        $("#one_img2").css({transition:'all 0.5s 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)',transform:"rotateX(0deg) skew(0deg)",opacity:1})
        setTimeout(function(){
            $(".left_div").css({animation: "0.6s move1_1",opacity: 1})
            $(".img401").css({top:297,opacity:1,transition: 'all 0.2s 0.7s linear'});
            $(".img402").css({top:276,opacity:1,transition: 'all 0.2s 0.9s linear'});
            $(".img403").css({top:270,opacity:1,transition: 'all 0.3s 1.1s linear'});
            $(".img404").css({top:276,opacity:1,transition: 'all 0.2s 1s linear'});
            $(".img405").css({top:297,opacity:1,transition: 'all 0.2s 0.8s linear'});
            $("#ma1").css({opacity:1,transition: 'opacity 0s 1s linear'});
            $("#ma2").css({opacity:1,transition: 'opacity 0s 1s linear'});
            $(".img60").css({animation: "2s 1s linear move1_9",'animation-fill-mode': "forwards","z-index":"3"});
            $(".show601").css({animation: "0.55s 1s move601",'animation-fill-mode': "both"});
            $(".show602").css({animation: "0.26s 1.6s move602",'animation-fill-mode': "both"});
            $(".show603").css({animation: "0.25s 1.9s move603",'animation-fill-mode': "both"});
            $(".show604").css({animation: "0.25s 2.2s move604",'animation-fill-mode': "both"});
            $(".show605").css({animation: "0.8s 2.5s move605",'animation-fill-mode': "both"});
            $(".one_2006").css({top:86,opacity:1,transition:"all 0.5s 3s",})
            $(".one_text").css({top:142,opacity:1,transition:"all 0.5s 3.3s"})
        },800);

    }
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
    }
    function f3(){
        $(".three6").css({position: 'absolute',top:167,left:88,'z-index':0,transform: 'rotateZ(-180deg)',opacity:0});
        var btn3 =  $("#list1").children().eq(3)[0];
        clearTimeout(btn3.timer11);
        clearTimeout(btn3.timer33);
        clearInterval(btn3.timer22);
        $(".three_window").css({transition:"all 0.5s 0.2s",transform: "rotateX(0deg) skew(0deg)"});
        $(".three_sofa").css({"animation":".5s 0.6s sofa","animation-fill-mode":"both"})
        $(".three_lamp").css({"animation":".5s 1s lamp","animation-fill-mode":"both"})
        $(".three_flower").css({"animation":".5s 1.3s flower","animation-fill-mode":"both"})
        $(".three_girl").css({"animation":".5s 1.5s girl","animation-fill-mode":"both"})
        setTimeout(function(){
            bubbling();
        },1600);
        btn3.timer11=setTimeout(function(){
            clearInterval(btn3.timer22);
            var a=-180;
            btn3.timer22=setInterval(function(){
                a=a+2;
                $(".three6").css({"transformOrigin":"414px 415px","transform":"rotateZ("+a+"deg)",opacity:1})
                if(a==0){
                    clearInterval(btn3.timer22);
                }
            },16)
        },3400);
        btn3.timer33=setTimeout(function(){
            $(".three6_mask3").css({opacity:0});
            $(".three_flower").css({'z-index':'0'})
            $('.three6_mask1').css({transition:"opacity 0.5s 0.5s",opacity:0})
            $('.three6_mask2').css({transition:"opacity 0.5s 0.5s",opacity:0})
        },4400)
        $(".three_2010").css({top:76,opacity:1,transition:"all 0.5s 5s"})
        $(".three_text").css({top:132,opacity:1,transition:"all 0.5s 5.5s"})
    }
    function f4(){
        $('.four_mountain').css({transition:"all 0.4s",'transform-origin':'bottom','transform': "skew(0deg)",opacity:1})
        $('.four_penguin').css({"animation":".4s 0.4s penguin","animation-fill-mode":"both"})

        setTimeout(function(){
            hedge();
            $(".four_sweat").css({transition:"top 0.6s ",opacity:1,top:207})
        },800)
        $(".man_center").css({'animation':".2s 1.8s man_center","animation-fill-mode":"both"})
        $(".center_man3").css({'animation':"1.3s 1.9s man_center3","animation-fill-mode":"both"})
        $(".man_left").css({'animation':"0.2s 2.6s man_left","animation-fill-mode":"both"})
        $(".man_right").css({'animation':"0.2s 2.8s man_right","animation-fill-mode":"both"})
        $(".center_man1").css({animation:'3s 2.4s infinite  man_head '})
        $(".leftflag").css({animation:'6s 2.5s leftflag infinite alternate'})
        $(".rightflag").css({animation:'8s 2.7s leftflag infinite alternate'})

        $(".four_2012").css({top:60,opacity:1,transition:"all 0.5s 3s",})
        $(".four_text").css({top:122,opacity:1,transition:"all 0.5s 3.3s"})
    }
    function f5(){
        $('.five_mountain').css({transition:'height 0.2s',height:100})
        $('.five_bg1').css({transition:'transform 0.3s 0.4s',"transform-origin": "bottom center",transform: "scale(1)"})
        $('.five_cloud1').css({transition:'transform 0.3s 0.5s',transform: "scale(1)"})
        $('.five_cloud2').css({transition:'transform 0.3s 0.5s',transform: "scale(1)"})
        $('.five_logo').css({transition:'transform 0.4s 0.7s',"transform-origin": "bottom center",transform: "scale(1)"})
        $('.five_bg2').css({transition:'all 0.6s 0.7s',opacity:0.1,animation:"40s infinite bg2"})
        $('.five_smalllogo').css({animation:'0.6s 1.8s smalllogo',"animation-fill-mode":"both"})

        $(".five_2013").css({top:56,opacity:1,transition:"all 0.5s 2.4s",})
        $(".five_text").css({top:127,opacity:1,transition:"all 0.5s 2.6s"})

    }

function bubbling(){
    try{
        var img0=document.getElementById('small_logo').getElementsByTagName('img');
    } catch(ev){
        return;
    }
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
            if(window.navigator.userAgent.toLowerCase().indexOf("webkit")!=-1){
                m>30 ? m+=3:m+=5;
            }else{
                m>10 ? m+=3:m+=5;
            }
            img0[i].style.opacity=1;
            if(i%3==0){
                img0[i].style.animation=m+'s move3_2 infinite';
            }
            if(i%3==1){
                img0[i].style.animation=m+'s move3_1 infinite';
            }
            if(i%3==2){
                img0[i].style.animation=m+'s move3_3 infinite';
            }
        }
    },2000)
}
//冒泡函数
function hedge(){
    var hedge=document.getElementsByClassName('hedge')[0];
    var diamond=document.getElementsByClassName("diamond")[0];
    for(var i=0;i<18;i++){
        var li=document.createElement('li');
        var img=document.createElement('img');
        li.appendChild(img);
        li.style.left=i*31+"px";
        img.src='image/four/four_hedge.png';
        if(hedge){
            hedge.appendChild(li)
        }else{
            return;
        }
    }
    var n=0;
    var x=0;
    var timer;
    var timer1;
    timer=setInterval(function(){
        hedge.children[n].style.top=130+"px";
        hedge.children[n].style.opacity=1;
        n++;
        if(n>=18){
            clearInterval(timer);
        }
    },30);
    setTimeout(function(){
        timer1=setInterval(function(){
            x+=9;
            diamond.style.width=x+"px";
            if(x>560){
                clearInterval(timer1)
            }
        },10)
    },200)
}
//彩虹效果