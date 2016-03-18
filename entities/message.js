var utils = require('../utils/utils.js'),
    /**
     * @type {logger}
     */
    logger = require('../utils/logger.js')('Message');

var Message = function(msgStr){
    this._user = undefined;
    this._type = undefined;
    this._locale = undefined;
    this._sendAt = undefined;
    this._layout = undefined;
    this._transport = undefined;
    msgStr && this.fromJson(msgStr);
};

Message.prototype.user = function(value){
    if (value === undefined){
        return this._user;
    }
    return this._user = value;
};

Message.prototype.type = function(value){
    if (value === undefined){
        return this._type;
    }
    return this._type = value;
};

Message.prototype.locale = function(value){
    if (value === undefined){
        return this._locale;
    }
    return this._locale = value;
};

Message.prototype.sendAt = function(value){
    if (value === undefined){
        return this._sendAt;
    }
    return this._sendAt = value;
};

Message.prototype.layout = function(value){
    if (value === undefined){
        return this._layout;
    }
    return this._layout = value;
};

Message.prototype.transport = function(value){
    if (value === undefined){
        return this._transport;
    }
    return this._transport = value;
};

Message.prototype.toJson = function(){
    return utils.toJson(this);
};

/**
 *
 * @param {String} value
 */
Message.prototype.fromJson = function(value){
    var inMsg =  JSON.parse(value);
    utils.forEach(inMsg, function(value, field){
        try {
            this[field.replace('_', '')](value);
        } catch (e) {
            logger.error('Unknown message field: ' + field);
        }
    })
};

module.exports = Message;
