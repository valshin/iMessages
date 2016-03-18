var Message = function(msgStr){
    this._user = undefined;
    this._type = undefined;
    this._locale = undefined;
    this._sendAt = undefined;
    this._text = undefined;
    this._transport = undefined;
    msgStr && this.fill(msgStr);
};

Message.prototype.fill = function(msgStr){
    var msg = JSON.parse(msgStr);
    this._user = msg.user;
    this._type = msg.type;
    this._locale = msg.locale;
    this._sendAt = msg.sendAt;
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

Message.prototype.text = function(value){
    if (value === undefined){
        return this._text;
    }
    return this._text = value;
};

Message.prototype.transport = function(value){
    if (value === undefined){
        return this._transport;
    }
    return this._transport = value;
};

module.exports = Message;
