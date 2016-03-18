var config = require('../../../conf.js'),
    utils = require('../../../utils/utils.js'),
    HandlerInterface = require('../handlerProto.js'),
    TemplateService = require('../../templates/' + config.services.templateService),
    UserService = require('../../user/' + config.services.userData),
    DbService = require('../../db/' + config.services.dbService);

var EmailHandler = function(){
    this.templateService = new TemplateService();
    this.userService = new UserService();
    this.dbService = new DbService();
};
utils.extend(EmailHandler, HandlerInterface);
module.exports = EmailHandler;

/**
 * @param {Message} msg
 * @returns {EmailHandler}
 */
EmailHandler.prototype.render = function(msg){
    var layout = {
        from: config.services.transports.email.from,
        to: this.userService.getEmail(msg.user()),
        //TODO: where subject getting?
        subject: 'subject',
        text: this.templateService.getMessage(msg.type(), msg.locale())
    };
    msg.layout(layout);
    return this;
};

/**
 * @param {Message} msg
 * @returns {EmailHandler}
 */
EmailHandler.prototype.package = function(msg){
    /**
     * @type Array
     */
    var messages = this.dbService.getMessages(msg.sendAt());
    if (messages.length) {
        this.merge(msg, messages);
        this.dbService.deleteMessages(messages);
    }
    return this;
};

/**
 * @param {Message} msg
 * @returns {HandlerProto}
 */
EmailHandler.prototype.send = function(msg){
    this.render(msg);
    if (utils.now() <= msg.sendAt()){
        this.package(msg);
        this.sendToDb(msg);
    }
    this.sendToQueue(msg);
};

/**
 * @param {Message} msg
 * @param {Array<Message>} messages
 */
EmailHandler.prototype.merge = function(msg, messages){
    var text = [msg.layout().text];
    messages.forEach(function(eachMsg){
        text.push(eachMsg.layout().text);
    });
    msg.layout().text = text.join('\n');
};

EmailHandler.prototype.sendToDb = function(msg){
    this.dbService.addMessage(msg);
};

EmailHandler.prototype.sendToQueue = function(msg){
    //TODO: send to queue
};
