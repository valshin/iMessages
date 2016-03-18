'use strict';
var assert = require('assert');
var TemplateService = require('../services/templates/simple/simpleTemplateService.js');
var Message = require('../entities/message.js');
TemplateService.prototype.TEMPLATES = {
    default_message: {
        ru: 'Дефолтный_месседж',
        en: 'Default message'
    },
    registration_confirm: {
        ru: 'Регистрация_подтверждена',
        uk: 'Регистрація підтверджена'
    },
    registration_success: {
        ru: 'Регистрация_успешна'
    },
    password_change: {
        ru: 'Пароль_изменен'
    },
    new_vacancy: {
        ru: 'new_vacancy'
    }
}

describe('TemplateService', function() {
    it('test 2 args:', function () {
        var ts = new TemplateService();
        var msg = new Message();
        msg.type('registration_confirm');
        msg.locale('uk');
        assert.equal(ts.getMessage(msg.type(), msg.locale()), 'Регистрація підтверджена');
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