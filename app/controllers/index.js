if (Ti.Platform.name == "android") {
	var svgView = require('com.geraudbourdin.svgview');
	var svg = svgView.createView({
		image: "android.svg",
		width: '350',
		height: '350',
		top: 0,
		left: 0,
		backgroundColor:'pink'
	});

	$.container.add(svg);
	//svg.setImage("pieChart.svg");
	
	function changeSvg(e){
		var image = (svg.getImage() == "pieChart.svg")?"android.svg":"pieChart.svg";
    	svg.setImage(image);
	};
}
$.container.open();


