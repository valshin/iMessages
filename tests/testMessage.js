'use strict';

var assert = require('assert');
var Message = require('../entities/message.js');

describe('Message', function() {
    it('constructor:', function () {
        var json = '{"_user":"1234","_type":"default","_locale":"uk-UA","_sendAt":12345678,"_layout":{"a":1,"b":"2"},"_transport":"email"}';
        var msg = new Message();

    });
    it('test 2 args default:', function () {
        var ts = new TemplateService();
        var msg = new Message();
        assert.equal(ts.getMessage(msg.type(), msg.locale()), 'Дефолтный_месседж');
    });
    it('test no args:', function () {
        var ts = new TemplateService();
        var msg = new Message();
        assert.equal(ts.getMessage(), 'Дефолтный_месседж');
    });
    it('test only locale:', function () {
        var ts = new TemplateService();
        var msg = new Message();
        msg.locale('en');
        assert.equal(ts.getMessage(undefined, msg.locale()), 'Default message');
    })
});