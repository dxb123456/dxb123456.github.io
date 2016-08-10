/**
 * Created by fullrich_UI on 2015/6/16 0016.
 * js about image player
 */

var u = document.getElementById("nums");
var num = u.getElementsByTagName("li");
var obj = document.getElementById("images")

var curNum = 0;
var time = 8000;
var arr = Array();

arr[0] = "../images/index/banner_0.png";
arr[1] = "../images/index/banner_1.png";
arr[2] = "../images/index/banner_2.png";
arr[3] = "../images/index/banner_3.png";
num[curNum].className="active";

setInterval(changeImg,time);

function changeImg(){
	if(curNum == arr.length-1){
		curNum=0;
	}
	else{
		curNum++;
	}
	for(var i=0; i<num.length; i++){
		num[i].className = "normal";
	}
	obj.src = arr[curNum];
	num[curNum].className = "active";
}

//get image by click ing number
for(var i=0; i<num.length; i++){
	num[i].onclick = function(){
		var t = this.getAttribute("value");
		obj.src = arr[t-1];
/*		obj.fadeToggle(1000);
		obj.fadeTo("show",0.5);*/
		for(var i=0; i<num.length; i++){
				num[i].className="normal";
		}
		this.className="active";
		curNum = t-1;
	};
}
// $(function(){
// 	 /*左侧按钮*/

// 	             $imgUl1 = $('#img').children("ul"),
//                 $imgLi1 = $imgUl.children("li"),
//                 width1 = $imgLi.width(),
//                 left1 = parseFloat($imgUl.css("left")),

//             $('.leftgo').click(function(){
//                 var curnum = 0;
//                 $('#img ol li').each(function(flag){
//                     if($(this).hasClass('cur')){
//                         curnum = flag;
//                     }
//                 });
//                 $('#img ol li').eq(curnum).removeClass('cur');
//                 if(curnum == 0){
//                     curnum = $('#img ol li').length-1;
//                 }
//                 else{
//                     curnum = curnum - 1;
//                 }
//                 $('#img ol li').eq(curnum).addClass('cur');
//                 var dif = 1;
//                     left1 = -dif*width1;
//                     $imgUl1.stop().animate({left:left},speed,function(){
//                         $imgUl1.css("left",0);
//                         $imgUl1.children("li:lt("+dif+")").appendTo($imgUl1);
//                     });



//             });

//             /*右侧按钮*/
//             $('.rightGo').click(function(){
//                 var curnum = 0;
//                 $('.btnList li').each(function(flag){
//                     if($(this).hasClass('cur')){
//                         curnum = flag;
//                     }
//                 });
//                 $('.btnList li').eq(curnum).removeClass('cur');
//                 if(curnum == $('.btnList li').length-1){
//                     curnum = 0;
//                 }
//                 else{
//                     curnum = curnum + 1;
//                 }
//                 $('.btnList li').eq(curnum).addClass('cur');
//                 var dif = 1;
//                     left = -dif*width;
//                     $imgUl.stop().animate({left:left},speed,function(){
//                         $imgUl.css("left",0);
//                         $imgUl.children("li:lt("+dif+")").appendTo($imgUl);
//                     });


//             });

// });