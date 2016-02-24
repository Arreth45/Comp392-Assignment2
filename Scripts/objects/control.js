/// <reference path="../../typings/tsd.d.ts"/>
// Jake Parnell
// Comp392 - Assignment 1
// Last Modified by: Jake Parnell
// Date Last Modified Jan 28th 2016
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++ 
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(target) {
            this.target = target;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map