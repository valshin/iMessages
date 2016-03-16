'use strict';
var config = require('../../conf.js'),
    utils = require('../../utils/utils.js'),
    TemplateInterface = require('../templateInterface.js');


var SimpleTemplates = function () {
    TemplateInterface.call('SimpleTemplates');
};
utils.extend(SimpleTemplates, TemplateInterface);

SimpleTemplates.prototype.TEMPLATES = {
    default_message: {
        ru: 'Дефолтный месседж'
    },
    registration_confirm: {
        ru: 'Регистрация подтверждена'
    },
    registration_success: {
        ru: 'Регистрация успешна'
    },
    password_change: {
        ru: 'Пароль изменен'
    },
    new_vacancy: {
        ru: 'new_vacancy'
    }
};
/**
 * @param {Message} msg
 */
SimpleTemplates.prototype.getMessage = function (msg) {
    if (this.TEMPLATES[msg.type] && this.TEMPLATES[msg.type][msg.locale]) {
        return this.TEMPLATES[msg.type][msg.locale];
    }
    else if (this.TEMPLATES[msg.type]){
        return this.TEMPLATES[msg.type][config.defaultLocale];
    }
    else if (this.TEMPLATES.default_message[msg.locale]) {
        return this.TEMPLATES.default_message[msg.locale];
    }
    else {
        return this.TEMPLATES.default_message[config.defaultLocale];
    }
};

module.exports = SimpleTemplates;