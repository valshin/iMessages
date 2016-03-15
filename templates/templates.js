'use strict';
var config = require('../conf.js');

var TemplateService = function () {
};

TemplateService.prototype.TEMPLATES = {
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
TemplateService.prototype.getMessage = function (msg) {
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

module.exports = TemplateService;