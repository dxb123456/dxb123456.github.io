/*
* @Author: Administrator
* @Date:   2016-04-08 09:09:52
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-08 09:11:01
*/

'use strict';
$(function(){
  $(".cont-left").hover(function(){
          $(".content").css("background","url('../images/welcome/bg-m1.jpg')");
          $(".content").css("background-size","100% 100%");
        },function(){
          $(".content").css("background","url('../images/welcome/bg.png')");
          $(".content").css("background-size","100% 100%");
        });
        $(".cont-right").hover(function(){
          $(".content").css("background","url('../images/welcome/bg-m2.jpg')");
          $(".content").css("background-size","100% 100%");
        },function(){
          $(".content").css("background","url('../images/welcome/bg.png')");
          $(".content").css("background-size","100% 100%");
        });
});