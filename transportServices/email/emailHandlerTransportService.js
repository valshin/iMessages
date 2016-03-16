var config = require('../../conf.js'),
    utils = require('../../utils/utils.js'),
    HandlerInterface = require('../handlerInterface.js');

var EmailHandler = function(){
    HandlerInterface.call(this, 'EmailHandler');
};
utils.extend(EmailHandler, HandlerInterface);

module.exports = EmailHandler;
