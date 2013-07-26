function draw_pix(x, y, ctx, rad, color) {
	ctx.fillStyle=color;
	ctx.fillRect(x * rad, y * rad, rad, rad);
}
function choose_color() {
	var randnum = Math.floor(Math.random() * 1000);
	if (randnum > 998) return "gold";
	else if (randnum > 900)return "red";
	else if (randnum > 800)return "blue";
	else if (randnum > 700) return "green";
	else if (randnum > 660) return "black";
	else if (randnum > 600) return "grey";
	else return "white";
}
var canv = document.getElementById("myCanvas");
var CANV_WIDTH = canv.getAttribute("width");
var CANV_HEIGHT = canv.getAttribute("height");
var ctx = canv.getContext("2d");
var SCALE = 20;
var color = choose_color();
for (var i=0; i <= CANV_WIDTH; ++i) {
	for (var j=0; j <= CANV_HEIGHT; ++j) {
		draw_pix(i, j, ctx, SCALE, color);
		color=choose_color();
	}
}
