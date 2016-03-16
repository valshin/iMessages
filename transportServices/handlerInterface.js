var HandlerInterface = function(type){
    this.type = type;
};

/**
 * @param {Message} msg
 * @returns {Message}
 */
HandlerInterface.prototype.render = function(msg){

};

/**
 * @param {Message} msg
 * @returns {Message}
 */
HandlerInterface.prototype.package = function(msg){

};

/**
 * @param {Message} msg
 * @returns {Message}
 */
HandlerInterface.prototype.send = function(msg){

};

module.exports = HandlerInterface;