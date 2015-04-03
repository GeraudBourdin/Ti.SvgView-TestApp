function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function changeSvg() {
        var image = getRandomInt(1, 19) + ".svg";
        svg.setImage(image);
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "red",
        id: "container",
        layout: "vertical"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "change Svg file",
        top: "10",
        width: "200",
        height: "50"
    });
    $.__views.container.add($.__views.button);
    changeSvg ? $.__views.button.addEventListener("click", changeSvg) : __defers["$.__views.button!click!changeSvg"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var svgView = require("com.geraudbourdin.svgview");
    var svg = svgView.createView({
        image: "3.svg",
        width: "350",
        height: "350",
        top: 0,
        left: 0,
        backgroundColor: "pink"
    });
    $.container.add(svg);
    $.container.open();
    __defers["$.__views.button!click!changeSvg"] && $.__views.button.addEventListener("click", changeSvg);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;