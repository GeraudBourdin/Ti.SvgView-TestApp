var o = {
    createSvgView: function(opts) {
        var m = require("com.geraudbourdin.svgview");
        return m.createView(opts);
    }
};

module.exports = o;

Alloy.Globals.uiModules = o;