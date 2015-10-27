function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listView";
    this.args = arguments[0] || {};
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
    $.__views.listView = Ti.UI.createWindow({
        title: "Demo: SVG + ListView",
        id: "listView"
    });
    $.__views.listView && $.addTopLevelView($.__views.listView);
    var __alloyId1 = {};
    var __alloyId4 = [];
    var __alloyId6 = {
        type: "Alloy.Globals.uiModules.SvgView",
        bindId: "svgImage",
        properties: {
            bindId: "svgImage"
        }
    };
    __alloyId4.push(__alloyId6);
    var __alloyId3 = {
        properties: {
            name: "customTemplate"
        },
        childTemplates: __alloyId4
    };
    __alloyId1["customTemplate"] = __alloyId3;
    var __alloyId9 = [];
    $.__views.__alloyId10 = {
        svgImage: {
            image: "/1.svg"
        },
        properties: {
            id: "__alloyId10"
        }
    };
    __alloyId9.push($.__views.__alloyId10);
    $.__views.__alloyId11 = {
        svgImage: {
            image: "/2.svg"
        },
        properties: {
            id: "__alloyId11"
        }
    };
    __alloyId9.push($.__views.__alloyId11);
    $.__views.__alloyId12 = {
        svgImage: {
            image: "/3.svg"
        },
        properties: {
            id: "__alloyId12"
        }
    };
    __alloyId9.push($.__views.__alloyId12);
    $.__views.__alloyId7 = Ti.UI.createListSection({
        id: "__alloyId7"
    });
    $.__views.__alloyId7.items = __alloyId9;
    var __alloyId13 = [];
    __alloyId13.push($.__views.__alloyId7);
    $.__views.__alloyId0 = Ti.UI.createListView({
        sections: __alloyId13,
        templates: __alloyId1,
        defaultItemTemplate: "customTemplate",
        id: "__alloyId0"
    });
    $.__views.listView.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var o = {
        createSvgView: function(opts) {
            var m = require("com.geraudbourdin.svgview");
            return m.createView(opts);
        }
    };
    module.exports = o;
    Alloy.Globals.uiModules = o;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;