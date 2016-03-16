"use strict";

var conf = require('./conf.js'),
    /**
     *
     * @type {iRabbit}
     */
    iRabbit = require('./node_modules/iRabbit/iRabbit.js')(conf.iRabbit),
    /**
     * @type {Message}
     */
    Message = require('./entities/message.js'),
    /**
     * @type {logger}
     */
    logger = require('./utils/logger.js')('buffer');

/**
 * @type {Object.<String, HandlerInterface>}
 */
var handlers = {};

/**
 * @param {String} type
 * @returns {HandlerInterface}
 */
var getMsgHandler = function (type) {
    if (!handlers[type]) {
        try {
            handlers[type] = new require('./transportServices/' + conf.services.transports[type])();
        } catch (e) {
            logger.error(e.message);
            return null;
        }
    }
    return handlers[type];
};

iRabbit.subscribeTopic('exchange.topic', 'notify').then(function (result) {
        iRabbit.on(result.eventName + ':message', function (incMsg) {
            var msg = new Message(incMsg);
            var handler = getMsgHandler(msg.type);
            msg = handler.render().package();
            handler.send(msg);
            console.log(result.eventName + ':message event: ', incMsg.message);
        });
    })
    .catch(function (err) {
        console.log('THE_ERROR', err.stack);
    });