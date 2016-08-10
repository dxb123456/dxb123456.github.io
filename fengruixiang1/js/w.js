/*
* @Author: Administrator
* @Date:   2016-04-07 23:01:56
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-08 09:09:29
*/

'use strict';
$(function(){
  $(".cont-left").hover(function(){
          $(".content").css("background","url('../images/welcome/bg-1.png')");
          $(".content").css("background-size","100% 100%");
        },function(){
          $(".content").css("background","url('../images/welcome/bg.png')");
          $(".content").css("background-size","100% 100%");
        });
        $(".cont-right").hover(function(){
          $(".content").css("background","url('../images/welcome/bg-2.png')");
          $(".content").css("background-size","100% 100%");
        },function(){
          $(".content").css("background","url('../images/welcome/bg.png')");
          $(".content").css("background-size","100% 100%");
        });
});