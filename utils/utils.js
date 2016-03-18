'use strict';

/**
 * @param {Object} obj
 * @param {function} callback
 */
var forEach = function(obj, callback){
    for (var i in obj){
        if (obj.hasOwnProperty(i)){
            callback(obj[i], i);
        }
    }
};

module.exports = {
    extend: function (Child, Parent) {
        var F = function () {
        };
        F.prototype = Parent.prototype;
        var f = new F();

        for (var prop in Child.prototype) f[prop] = Child.prototype[prop];
        Child.prototype = f;
        Child.prototype[Parent.prototype.__class_name] = Parent.prototype;
    },
    now: function() {
        return new Date().getTime();
    },

    forEach: forEach,
    toJson: function(obj){
        var out = {};
        forEach(obj, function(value, field){
            out[field] = value;
        });
        return JSON.stringify(out);
    }
};
