/*
* @Author: Administrator
* @Date:   2016-03-14 22:53:13
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-10 15:13:01
*/

'use strict';

    // 链接
    function openNwindow(url){
            window.location.href=url;
        }



//加载在文本读取之后的js语句 开始 =============================================================
    function Scroll(obj,speed,interval){    //父级容器，轮播速度，切换间隔
        $("."+obj).each(function(){
            var $box = $(this),
            $imgUl = $box.children(".imgList"),
            $imgLi = $imgUl.children("li"),
            $btnUl = $box.children(".btnList"),
            $btnLi = $btnUl.children("li"),
            n = $imgLi.length,
            width = $imgLi.width(),
            left = parseFloat($imgUl.css("left")),
            k = 0,
            Player;
            $imgUl.css("width",n*width);
            function scroll(){                //轮播事件
                $imgUl.stop().animate({left:-width},speed,function(){
                    k += 1;
                    $imgUl.css("left",0);
                    $imgUl.children("li:first").appendTo($(this));
                    $btnLi.removeClass('cur');
                    if(k >= n){
                        k = 0;
                    }
                    $btnUl.children("li").eq(k).addClass('cur');
                });
            }

             /*左侧按钮*/
            $('.leftGo').click(function(){

                var dif = n-1;
                $imgUl.css("left",(-1)*width);
                $imgUl.children("li:lt("+dif+")").appendTo($imgUl);
                $imgUl.stop().animate({left:0},speed);

                var curnum = 0;
                $('.btnList li').each(function(flag){
                    if($(this).hasClass('cur')){
                        curnum = flag;
                    }
                });
                $('.btnList li').eq(curnum).removeClass('cur');
                if(curnum == 0){
                    curnum = $('.btnList li').length-1;
                }
                else{
                    curnum = curnum - 1;
                }
                $('.btnList li').eq(curnum).addClass('cur');




            });

            /*右侧按钮*/
            $('.rightGo').click(function(){

                var dif = 1;
                    left = -dif*width;
                    $imgUl.stop().animate({left:left},speed,function(){
                        $imgUl.css("left",0);
                        $imgUl.children("li:lt("+dif+")").appendTo($imgUl);
                    });

                 var curnum = 0;
                $('.btnList li').each(function(flag){
                    if($(this).hasClass('cur')){
                        curnum = flag;
                    }
                });
                $('.btnList li').eq(curnum).removeClass('cur');
                if(curnum == $('.btnList li').length-1){
                    curnum = 0;
                }
                else{
                    curnum = curnum + 1;
                }
                console.log(curnum);
                $('.btnList li').eq(curnum).addClass('cur');

                console.log(curnum);


            });

            $btnLi.click(function(){          //小圆点点击事件
                var index = $btnLi.index(this);
                $(this).addClass('cur').siblings("li").removeClass('cur');
                if(index >= k){
                    var dif = index-k;
                    left = -dif*width;
                    $imgUl.stop().animate({left:left},speed,function(){
                        $imgUl.css("left",0);
                        $imgUl.children("li:lt("+dif+")").appendTo($imgUl);
                    });
                }
                else{
                    var j = n-(k-index);
                    $imgUl.css("left",(index-k)*width);
                    $imgUl.children("li:lt("+j+")").appendTo($imgUl);
                    $imgUl.stop().animate({left:0},speed);
                }
                k = index;
            });
            $box.hover(                     //鼠标移入、移出事件
                function(){
                    clearInterval(Player);
                },
                function(){
                    Player = setInterval(function(){scroll()},interval);
                }
                );
            $('.rightGo').hover(                     //鼠标移入、移出事件
                function(){
                    clearInterval(Player);
                },
                function(){
                    Player = setInterval(function(){scroll()},interval);
                }
                );
            $('.leftGo').hover(                     //鼠标移入、移出事件
                function(){
                    clearInterval(Player);
                },
                function(){
                    Player = setInterval(function(){scroll()},interval);
                }
                );
            Player = setInterval(function(){scroll()},interval);
        });
    }
$(function () {                           //读取轮播事件
    Scroll("bannerCon",600,4000);


});