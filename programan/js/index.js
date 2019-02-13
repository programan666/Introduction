$(document).ready(function(){
	startOnePage({
		frame: "#view",
		container: "#frame",
		sections: ".op-section",
		radio: "#radio",
		radioOn: "#radioOn",
		speed: 500,
		easing: "swing"
	});
	var $box = $('.box');
    $('.metro li').each(function () {
        var color = $(this).css('backgroundColor');
        var content = $(this).html();
        $(this).click(function () {
            $box.css('backgroundColor', color);
            $box.addClass('open');
        //    $box.find('p').html(content);
        });
        $('.close').click(function () {
            $box.removeClass('open');
            $box.css('backgroundColor', 'transparent');
        });
    });
    $('.htmleaf-containers').starfield({
	    starDensity: 2.0,
	    mouseScale: 0.5,
	    seedMovement: true
	});
});
"use strict";
var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  w = canvas.width = window.innerWidth,
  h = canvas.height = window.innerHeight,
    
  hue = 217,
  stars = [],
  count = 0,
  maxStars = 1400;

// Thanks @jackrugile for the performance tip! http://codepen.io/jackrugile/pen/BjBGoM
// Cache gradient
var canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
var half = canvas2.width/2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

// End cache

function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }
  
  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Star = function() {

  this.orbitRadius = random(w / 2 - 50);
  this.radius = random(100, this.orbitRadius) / 10;
  this.orbitX = w / 2;
  this.orbitY = h / 2;
  this.timePassed = random(0, maxStars);
  this.speed = random(this.orbitRadius) / 100000;
  this.alpha = random(2, 10) / 10;

  count++;
  stars[count] = this;
}

Star.prototype.draw = function() {
  var x = Math.sin(this.timePassed + 1) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius/2 + this.orbitY,
      twinkle = random(10);

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
  }

  ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
  this.timePassed += this.speed;
}

for (var i = 0; i < maxStars; i++) {
  new Star();
}

function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
    ctx.fillRect(0, 0, w, h)
  
  ctx.globalCompositeOperation = 'lighter';
  for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw();
  };  
  
  window.requestAnimationFrame(animation);
}

animation();

function win8height(){
	var win8width = $('.metro li').width();
	var win8height = win8width;
	$('.metro li').height(win8height);
}
win8height();

function showMessege(index){
	if(index==1){
		$('#lianxi').html("GitHub:programan666");
		$('#messageBox').css("background","#3B5A99");
	}
	if(index==2){
		$('#lianxi').html("Skype:programanQF");
		$('#messageBox').css('background', "#2AA8E0");
	}
	if(index==3){
		window.open("http://www.programan.cn/Boke");
	}
	if(index==4){
		$('#lianxi').html("电话：18340857018");
		$('#messageBox').css('background', "#CC2129");
	}
	if(index==5){
		$('#lianxi').html("微信：18340857018");
		$('#messageBox').css('background', "#137BB6");
	}
	if(index==6){
		$('#lianxi').html("QQ：3082623900");
		$('#messageBox').css('background', "#CA312D");
	}
	if(index==7){
		$('#lianxi').html("邮箱：3082623900@qq.com");
		$('#messageBox').css('background', "#DE4A38");
	}
}

function showXiangmu(index){
	if(index==1){
		$('#igaia').addClass("display-block");
		$('#loveTrip').removeClass("display-block");
		$('#boke').removeClass("display-block");
		$('#douZhanShen').removeClass("display-block");
		$('#keShiHua').removeClass("display-block");
		$('#geRen').removeClass("display-block");
		$('#others').removeClass("display-block");
	}
	if(index==2){
		$('#igaia').removeClass("display-block");
		$('#loveTrip').addClass("display-block");
		$('#boke').removeClass("display-block");
		$('#douZhanShen').removeClass("display-block");
		$('#keShiHua').removeClass("display-block");
		$('#geRen').removeClass("display-block");
		$('#others').removeClass("display-block");
	}
	if(index==3){
		$('#igaia').removeClass("display-block");
		$('#loveTrip').removeClass("display-block");
		$('#boke').addClass("display-block");
		$('#douZhanShen').removeClass("display-block");
		$('#keShiHua').removeClass("display-block");
		$('#geRen').removeClass("display-block");
		$('#others').removeClass("display-block");
	}
	if(index==4){
		$('#igaia').removeClass("display-block");
		$('#loveTrip').removeClass("display-block");
		$('#boke').removeClass("display-block");
		$('#douZhanShen').addClass("display-block");
		$('#keShiHua').removeClass("display-block");
		$('#geRen').removeClass("display-block");
		$('#others').removeClass("display-block");
	}
	if(index==5){
		$('#igaia').removeClass("display-block");
		$('#loveTrip').removeClass("display-block");
		$('#boke').removeClass("display-block");
		$('#douZhanShen').removeClass("display-block");
		$('#keShiHua').addClass("display-block");
		$('#geRen').removeClass("display-block");
		$('#others').removeClass("display-block");
	}
	if(index==6){
		$('#igaia').removeClass("display-block");
		$('#loveTrip').removeClass("display-block");
		$('#boke').removeClass("display-block");
		$('#douZhanShen').removeClass("display-block");
		$('#keShiHua').removeClass("display-block");
		$('#geRen').addClass("display-block");
		$('#others').removeClass("display-block");
	}
	if(index==7){
		$('#igaia').removeClass("display-block");
		$('#loveTrip').removeClass("display-block");
		$('#boke').removeClass("display-block");
		$('#douZhanShen').removeClass("display-block");
		$('#keShiHua').removeClass("display-block");
		$('#geRen').removeClass("display-block");
		$('#others').addClass("display-block");
	}
}

function getimg(index){
	var a = index.cloneNode();
	$('#imgBox').html(a);
}
