var nodemailer = require("nodemailer"),
    config = require('../../../conf.js'),
    utils = require('../../../utils/utils.js'),
    SenderInterface = require('../senderInterface.js'),
    TemplateService = require('../../templateServices/' + config.services.templateService);

var EmailSender = function(){
    this.smtpTransport = nodemailer.createTransport("SMTP", config);
    this.templateService = new TemplateService();
};
utils.extend(EmailSender, SenderInterface);

/**
 * @param {Message} msg
 */
EmailSender.prototype.render = function(msg){
    msg.text = this.templateService.getMessage(msg);
};

EmailSender.prototype.package = function(){

};

module.exports = EmailSender;
