'use strict';
var config = require('../../../conf.js'),
    utils = require('../../../utils/utils.js'),
    TemplateInterface = require('../templateInterface.js');


var SimpleTemplateService = function () {
};
utils.extend(SimpleTemplateService, TemplateInterface);

SimpleTemplateService.prototype.TEMPLATES = {
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
SimpleTemplateService.prototype.setMessage = function (msg) {

};

/**
 * @param {String} type
 * @param {String} locale
 * @returns {String}
 */
SimpleTemplateService.prototype.getMessage = function (type, locale) {
    if (this.TEMPLATES[type] && this.TEMPLATES[type][locale]) {
        return this.TEMPLATES[type][locale];
    }
    else if (this.TEMPLATES[type]){
        return this.TEMPLATES[type][config.defaultLocale];
    }
    else if (this.TEMPLATES.default_message[locale]) {
        return this.TEMPLATES.default_message[locale];
    }
    else {
        return this.TEMPLATES.default_message[config.defaultLocale];
    }
};

module.exports = SimpleTemplateService;