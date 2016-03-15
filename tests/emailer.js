'use strict';
var assert = require('assert');
var TemplateService = require('../templates/templates.js');
var Message = require('../message.js');
var EmailSender = require('../transports/email/emailer.js');

describe('EmailSender', function() {
    it('test type:', function () {
        var es = new EmailSender();
        assert.equal(es.type, 'email');
    });
});