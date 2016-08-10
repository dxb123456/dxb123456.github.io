/*
* @Author: Administrator
* @Date:   2016-04-06 15:35:02
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-13 09:48:47
*/

'use strict';
$(function () {

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