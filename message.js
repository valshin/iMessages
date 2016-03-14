var MSG_TYPES = {
    registration_confirm : true,
    registration_success : true,
    password_change : true,
    new_vacancy : true
};

var Message = function(msgStr){
    this.user = undefined;
    this.type = undefined;
    this.lang = undefined;
    this.sendAt = undefined;
    msgStr && this.fill(msgStr);
};

Message.prototype.fill = function(msgStr){
    var msg = JSON.parse(msgStr);
    this.user = msg.user;
    this.type = msg.type;
    this.lang = msg.lang;
    this.sendAt = msg.sendAt;
};

module.exports = Message;
