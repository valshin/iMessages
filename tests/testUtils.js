'use strict';
var utils = require('../utils/utils.js');
var assert = require('assert');

describe('Utils', function() {
    it('test extend:', function () {
        var A = function(){};
        var B = function(){};
        var C = function(){};
        utils.extend(B, A);
        var b = new B();
        assert(b instanceof A);
        assert(b instanceof B);
        assert(!(b instanceof C));
    });

    it('test now:', function () {
        assert(utils.now() > 0);
    });

    it('test forEach:', function () {
        var O = function(){};
        O.prototype.oo = {
            f: 6,
            g: 7
        };
        var o = new O();
        o.a = 1;
        o.b = 2;
        o.c = 3;
        o.d = 4;
        o.e = 5;
        var count = 0;
        utils.forEach(o, function(){
            count++;
        });
        assert.equal(count, 5);
        assert.equal(o.oo.f, 6);
        assert.equal(o.oo.g, 7);
    });

    it('test toJson:', function () {
        var O = function(){};
        O.prototype.oo = {
            f: 6,
            g: 7
        };
        O.prototype.toJson = function() {
            return utils.toJson(this);
        };
        var o = new O();
        o.a = 1;
        o.b = 2;
        o.c = 3;
        o.d = 4;
        o.e = 5;
        var s = utils.toJson(o);
        var o2 = JSON.parse(s);
        assert.equal('{"a":1,"b":2,"c":3,"d":4,"e":5}', s);
        assert.equal(o.a, o2.a);
        assert.equal(o.a, o2.a);
        assert.equal(o.a, o2.a);
        assert.equal(o.a, o2.a);
        assert.equal(o.a, o2.a);

        s = o.toJson();
        o2 = JSON.parse(s);
        assert.equal('{"a":1,"b":2,"c":3,"d":4,"e":5}', s);
        assert.equal(o.a, o2.a);
        assert.equal(o.a, o2.a);
        assert.equal(o.a, o2.a);
        assert.equal(o.a, o2.a);
        assert.equal(o.a, o2.a);
    });
});