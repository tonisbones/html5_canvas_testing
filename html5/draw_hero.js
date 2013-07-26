function draw_pix(x, y, ctx, rad, color) {
	ctx.fillStyle=color;
	ctx.fillRect(x * rad, y * rad, rad, rad);
}
function draw_grid(ctx, rad, xbound, ybound) {
	for (var i=0; i <= xbound; i+=5) {
		for (var j=0; j <= ybound; j+=5) {
			draw_pix(i, j, ctx, rad, "black");
		}
	}
}
var canv = document.getElementById("myCanvas");
var CANV_WIDTH = canv.getAttribute("width");
var CANV_HEIGHT = canv.getAttribute("height");
var ctx = canv.getContext("2d");
var SCALE = 10;
var pixels = {
	"black": [[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]
		
		],
	"red": [[1, 0], [2, 0]
		
		],
	"blue": [[2,2],[2,4]
		
		],
	"green": [[3,3],[5,7]
		
		]
};
draw_grid(ctx, SCALE, CANV_WIDTH, CANV_HEIGHT);
for (color in pixels) {
	var map_entry = pixels[color];
	for (entry in map_entry) {
		var args = map_entry[entry];
		draw_pix(args[1], args[0], ctx, SCALE, color);
	}
	/*
	var inner = pixels[e];
	draw_pix(inner[0], inner[1], ctx, 10, inner[2]);
	*/
}

