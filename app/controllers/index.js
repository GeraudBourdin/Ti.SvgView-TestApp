
var svgView = require('com.geraudbourdin.svgview');
var svg = svgView.createView({
	image: "3.svg",
	width: '350',
	height: '350',
	top: 0,
	left: 0,
	backgroundColor:'pink'
});

$.container.add(svg);
//svg.setImage("pieChart.svg");

function changeSvg(e){
	var image = getRandomInt(1, 17) + '.svg';
	Ti.API.info('Image loaded :' + image);
	svg.setImage(image);
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
$.container.open();


