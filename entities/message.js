var Message = function(msgStr){
    this.user = undefined;
    this.type = undefined;
    this.locale = undefined;
    this.sendAt = undefined;
    this.text = undefined;
    msgStr && this.fill(msgStr);
};

Message.prototype.fill = function(msgStr){
    var msg = JSON.parse(msgStr);
    this.user = msg.user;
    this.type = msg.type;
    this.locale = msg.locale;
    this.sendAt = msg.sendAt;
};

module.exports = Message;
