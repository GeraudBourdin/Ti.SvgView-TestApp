
var svgView = require('com.geraudbourdin.svgview');


var svg = svgView.createView({
	image: "0.svg",
	width: '350',
	height: '350',
	top: 0,
	left: 0,
	backgroundColor:'pink'
});

$.container.add(svg);

var svgInt = 0;
function changeSvg(e){
	if(svgInt==20){
		svgInt = 0;
	}else{
		svgInt++;
	}
	var image = svgInt + '.svg';
	Ti.API.info('Image loaded :' + image);
	svg.setImage(image);
};
$.container.open();

function openListView(e){
	var listviewWindow=Alloy.createController('listView').getView();
	listviewWindow.open(); 
}
