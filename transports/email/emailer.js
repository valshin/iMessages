var nodemailer = require("../../node_modules/nodemailer/lib/nodemailer.js"),
    config = require('./config.js'),
    Sender = require('../sender.js'),
    TemplateService = require('../../templates/templates.js');

var EmailSender = function(){
    Sender.call(this, 'email');
    this.smtpTransport = nodemailer.createTransport("SMTP", config);
    this.templateService = new TemplateService();
};
EmailSender.prototype = Object.create(Sender.prototype);
EmailSender.prototype.constructor = EmailSender;

/**
 * @param {Message} msg
 */
EmailSender.prototype.render = function(msg){
    msg.text = this.templateService.getMessage(msg);
};

EmailSender.prototype.package = function(){

};

module.exports = EmailSender;

