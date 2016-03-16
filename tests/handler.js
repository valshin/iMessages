'use strict';
var assert = require('assert');
var TemplateService = require('./simple/templates.js');
var Message = require('../entities/message.js');
var EmailSender = require('./email/handler.js');

describe('EmailSender', function() {
    it('test type:', function () {
        var es = new EmailSender();
        assert.equal(es.type, 'EmailSender');
    });
});