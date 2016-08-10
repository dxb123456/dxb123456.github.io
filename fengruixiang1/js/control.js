/**
 * Created by fullrich_UI on 2016/3/21.
 * js about all control
 */

//link
function openNwindow(url){
    window.location.href=url;
}

//top nav
function  topMenu(flag){
    $(".nav ul .other-item").eq(flag).addClass("curre");
}
$(".nav .other-item").mouseover(function(){
    if($(this).children().length > 1){
        $(this).find('ol').show();
    }
});
$(".nav li").mouseleave(function(){
    $(this).find('ol').hide();
});

//left menu
function  leftMenu(flag){
    $(".left-menu ul li").eq(flag).find("a").addClass("fc3");
}
function  leftMenu1(flag){
    $(".left-menu1 ul li").eq(flag).find("a").addClass("fc3");
}
    $(window).scroll(function() {
        var w = $(".left-menu").width();
        if ($(window).scrollTop() > 400) {

            var l = (parseFloat($(window).width()) - $(".center").width()) / 2 + "px"
            $('.left-menu').css({"width":w, "position": "fixed", "top": "4em", "left": l});

        } else {
            $('.left-menu').css({"width": "18%","position": "relative", "top": "0", "left": "0"});
        }
    });

    $(window).scroll(function() {
        var w = $(".left-menu1").width();
        if ($(window).scrollTop() > 58) {

            var l = (parseFloat($(window).width()) - $(".center").width()) / 2 + "px"
            $('.left-menu1').css({"width":w, "position": "fixed", "top": "4em", "left": l});

        } else {
            $('.left-menu1').css({"width": "18%","position": "relative", "top": "0", "left": "0"});
        }
    });



//sub menu
function subMenu(flag){
    $(".sub-menu ul li").eq(flag).addClass("curr-sub");

}


    // $(window).scroll(function() {

    //         if ($(window).scrollTop() > 160) {

    //             $('.header1').css("display","none");
    //             $('#sub-top').addClass("sub-top");
    //             $('.sub-menu').css({"position": "fixed", "top": "0","z-index": 99,"margin":0,"height":"3em"});

    //         }else {
    //             $('.sub-menu').css({"position": "static"});
    //              $('.sub-top').css("margin-top","0");
    //              $("#job-list").css("padding-top","0");
    //              $("#h-news").css("padding-top","0");
    //              $("#d1").css("padding-top","0");
    //             $('.header1').css("display","block");

    //         }
    //         // console.log($(window).width());
    //         if($(window).width() > 468){

    //            $("#header").removeClass("header1");

    //         }



    // })


// add html5 menu
function menu(){
    $(".submenu").toggle();
    var count = $(".header").children().length;
    var h = $(".header").height();

    var addhtml = '';
    addhtml += '<div class="wall hauto over submenu bgc9" style="position: fixed;z-index: 999;">';
    addhtml += '<div class="other-item fs0 bgc1 " style="width:90%;padding:0 5%; border-top: 1px solid #ddd"><a href="index.html">首页</a></div>';
    addhtml += '<div class="other-item fs0 bgc1 " style="width:90%;padding:0 5%; border-top: 1px solid #ddd"><a href="product_classification.html">产品与方案</a></div>';
    addhtml += '<ol class="nav-sub bgc1" style="width:100%;border-top: 1px solid #ddd; display: block;">';
    addhtml += ' <li><a href="product_classification.html" style="display: block;padding: 0.65em 2em;">第三方支付</a></li>';
    addhtml += ' <li><a href="product_detail.html" style="display: block;padding: 0.65em 2em;">祥付宝</a></li>';
    addhtml += ' <li><a href="product_detail2.html" style="display: block;padding: 0.65em 2em;">互联网金融</a></li>';
    addhtml += '</ol>';
    addhtml += '<div class="other-item fs0 bgc1 " style="width:90%;padding:0 5%; border-top: 1px solid #ddd"><a href="news_list.html">新闻</a></div>';
    addhtml += '<div class="other-item fs0 bgc1 " style="width:90%;padding:0 5%; border-top: 1px solid #ddd"><a href="job_list.html">招聘</a></div>';
    addhtml += '<div class="other-item fs0 bgc1 " style="width:90%;padding:0 5%; border-top: 1px solid #ddd"><a href="company.html">我们</a></div>';
    addhtml += '<div class="submenu-b" style="width:100%; height: 23em; margin-top: 11em;"></div>';
    addhtml += '</div>';
    if(count == 1){
        $(".header").append(addhtml);
    }


    $(".submenu").css({'top': '50px'});
    var bh = $("body").height();
    $(".submenu").css("height",bh);
    $(".submenu .submenu-b").on('click',function(){
        $(".submenu").css("display",'none');
    });
    $(".submenu").on('touchmove',function(){
        $(".submenu").css("display",'none');
    });
}

//return top
var $backToTopTxt = "", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
    .text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
        $("html, body").animate({ scrollTop: 0 }, 120);
    }), $backToTopFun = function() {
    var st = $(document).scrollTop(), winh = $(window).height();
    (st > 0)? $backToTopEle.show(): $backToTopEle.hide();
    //IE6下的定位
    if (!window.XMLHttpRequest) {
        $backToTopEle.css("top", st + winh - 166);
    }
};
$(window).bind("scroll", $backToTopFun);
$(function() {
    $backToTopFun();

    $('.sub-menu li').on("click",function(){
        $(this).addClass("curr-sub").siblings().removeClass("curr-sub");
    });

    $('.left-menu li').on("click",function(){
            $(this).find("a").addClass("fc3").siblings().removeClass("fc3");
    });



    $(window).scroll(function () {
    var docScrollTop = $(document).scrollTop();

    if(docScrollTop > 0) {
      $(".nav").css({
        "position": "fixed",
        "top": 0
    });

    $(".banner").css("margin-top" ,$(".nav").height());
    $(".banner2").css("margin-top" ,$(".nav").height());
    $(".banner3").css("margin-top" ,$(".nav").height());
    } else {

     $(".nav").css({
      "position": "static"
     });
      $(".banner").css("margin-top" ,0);
      $(".banner2").css("margin-top" ,0);
      $(".banner3").css("margin-top" ,0);
    }
  });

});



