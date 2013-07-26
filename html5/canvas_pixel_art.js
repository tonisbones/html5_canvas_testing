function draw_pix(x, y, ctx, rad, color) {
	ctx.fillStyle=color;
	ctx.fillRect(x * rad, y * rad, rad, rad);
}

var canv = document.getElementById("myCanvas");
var CANV_WIDTH = canv.getAttribute("width");
var CANV_HEIGHT = canv.getAttribute("height");
var ctx = canv.getContext("2d");
var SCALE = 20;