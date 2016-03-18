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
 * @type {Object.<String, HandlerProto>}
 */
var handlers = {};

/**
 * @param {String} transportType
 * @returns {HandlerProto}
 */
var getMsgHandler = function (transportType) {
    if (!handlers[type]) {
        try {
            handlers[type] = new require('./services/transport/' + conf.services.transports[transportType])();
        } catch (e) {
            logger.error(e.message);
            return null;
        }
    }
    return handlers[transportType];
};

iRabbit.subscribeTopic('exchange.topic', 'notify').then(function (result) {
        iRabbit.on(result.eventName + ':message', function (incMsg) {
            var msg = new Message(incMsg);
            var transportType = '';
            var handler = getMsgHandler(transportType);
            if (handler){
                handler.render(msg).package(msg);
                handler.send(msg);
                console.log(result.eventName + ':message event: ', incMsg.message);
            }
        });
    })
    .catch(function (err) {
        console.log('THE_ERROR', err.stack);
    });