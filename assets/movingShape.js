//document.getElementById('p');
console.log("HELLO");

//canvas context function
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

//var res_canvas = document.getElementById('canvas');
//var width = res_canvas.width;
//var height = res_canvas.height;

class shape{
	constructor(){}
	
	x=200;
	y=200;
	speed = 200;
	direction = 1;
	
	rectangle(){
		ctx.beginPath();
		ctx.rect(x,y,200, 100);
		ctx.fillStyle="#ffffff";
		ctx.fill();
	};
	square(){
		ctx.beginPath();
		ctx.rect(x,y,100, 100);
		ctx.fillStyle="#ffffff";
		ctx.fill();
	};
	circle(){
		ctx.beginPath();
		ctx.arc(x,y,0, 0, 2*Math.PI);
		ctx.fillStyle="#ffffff";
		ctx.fill();
	};
	reserved(){};
	
		
//teleport on collision with wall
	collisionCheck(){
		if (x > 900) x = -300;
		else if (x < -300) x = 900;
		else if (y > 900) y = -300;
		else if (y < -300) y = 900;	
	}

//direction 1,2,3,4 for r,l,u,d
	move(){
		if(direction==1) x += (speed*dtime);
		else if(direction==2) x -= (speed*dtime);
		else if(direction==3) y -= (speed*dtime);
		else if(direction==4) y += (speed*dtime);
	}

};

let right = document.getElementById("right");
let left = document.getElementById("left");
let up = document.getElementById("up");
let down = document.getElementById("down");
let move = document.getElementById("move");
let stop = document.getElementById("stop");
let btn_getdirection = document.getElementById("drct");

btn_getdirection.onclick = function (){
document.getElementById("text").innerHTML = direction;
}

right.onmousedown = function() {direction = 1;}
//right.onmouseup = function() {direction = 0;}
left.onmousedown = function() {direction = 2;}
//left.onmouseup = function() {direction = 0;}
up.onmousedown = function() {direction = 3;}
//up.onmouseup = function() {direction = 0;}
down.onmousedown = function() {direction = 4;}
//down.onmouseup = function() {direction  = 0;}
move.onmousedown = function() {speed= 200;}
stop.onmousedown = function() {speed = 0;}


class fps{
//fps calculate	
	fps = 0;
	t = performance.now();
	dtime = (performance.now() - t) / 1000;
	fps = Math.round(1 / dtime);
	//console.log(dtime);

	ctx.font = "16px Arial";
	ctx.fillStyle = '#ffffff';
	ctx.fillText("FPS: "+fps,10,20);
}

function draw(){
//clear canvas
	ctx.clearRect(0,0,800,800);
	fps();
	
	window.requestAnimationFrame(draw);;
}
//setInterval(draw,100);
draw();


function getdtime(){
var t = Date.now();
document.getElementById("fps").innerHTML = (Date.now()-t)/10;
}
function gettime(){
document.getElementById("fps").innerHTML = Date.now();
}
function getotime(){
var t = performance.now();
document.getElementById("fps").innerHTML = t;
}



/*
window.onload = function(){
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

//var res_canvas = document.getElementById('canvas');
//var width = res_canvas.width;
//var height = res_canvas.height;

class shape{
	constructor(){}
	
	x=200;
	y=200;
	speed = 200;
	direction = 1;
	
	rectangle(){
		ctx.beginPath();
		ctx.rect(x,y,200, 100);
		ctx.fillStyle="#ffffff";
		ctx.fill();
	};
	square(){
		ctx.beginPath();
		ctx.rect(x,y,100, 100);
		ctx.fillStyle="#ffffff";
		ctx.fill();
	};
	circle(){
		ctx.beginPath();
		ctx.arc(x,y,0, 0, 2*Math.PI);
		ctx.fillStyle="#ffffff";
		ctx.fill();
	};
	reserved(){};
	
};


var fps = 0;
var t = 0;
var dtime;


let right = document.getElementById("right");
let left = document.getElementById("left");
let up = document.getElementById("up");
let down = document.getElementById("down");
let move = document.getElementById("move");
let stop = document.getElementById("stop");
let btn_getdirection = document.getElementById("drct");

btn_getdirection.onclick = function (){
document.getElementById("text").innerHTML = direction;
}

right.onmousedown = function() {direction = 1;}
//right.onmouseup = function() {direction = 0;}
left.onmousedown = function() {direction = 2;}
//left.onmouseup = function() {direction = 0;}
up.onmousedown = function() {direction = 3;}
//up.onmouseup = function() {direction = 0;}
down.onmousedown = function() {direction = 4;}
//down.onmouseup = function() {direction  = 0;}
move.onmousedown = function() {speed= 200;}
stop.onmousedown = function() {speed = 0;}

function draw(){
//clear canvas
	ctx.clearRect(0,0,800,800);
//fps calculate	
	dtime = (performance.now() - t) / 1000;
	t = performance.now();
	fps = Math.round(1 / dtime);
	//console.log(dtime);
//fps text
	ctx.font = "16px Arial";
	ctx.fillStyle = '#ffffff';
	ctx.fillText("FPS: "+fps,10,20);
	
//rectangle	
	ctx.beginPath();
	ctx.rect(x,y,100, 100);
	ctx.fillStyle="#ffffff";
	ctx.fill();
	
//teleport on collision with wall
	if (x > 900) x = -300;
	else if (x < -300) x = 900;
	else if (y > 900) y = -300;
	else if (y < -300) y = 900;
	
//direction 1,2,3,4 for r,l,u,d
	if(direction==1) x += (speed*dtime);
	else if(direction==2) x -= (speed*dtime);
	else if(direction==3) y -= (speed*dtime);
	else if(direction==4) y += (speed*dtime);
	
	window.requestAnimationFrame(draw);;
}
//setInterval(draw,100);
draw();
};

function getdtime(){
var t = Date.now();
document.getElementById("fps").innerHTML = (Date.now()-t)/10;
}
function gettime(){
document.getElementById("fps").innerHTML = Date.now();
}
function getotime(){
var t = performance.now();
document.getElementById("fps").innerHTML = t;
}

*/