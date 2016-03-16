var HandlerInterface = function(type){
    this.type = type;
};

/**
 * @param {Message} msg
 * @returns {HandlerInterface}
 */
HandlerInterface.prototype.render = function(msg){

};

/**
 * @param {Message} msg
 * @returns {HandlerInterface}
 */
HandlerInterface.prototype.package = function(msg){

};

/**
 * @param {Message} msg
 * @returns {HandlerInterface}
 */
HandlerInterface.prototype.send = function(msg){

};

module.exports = HandlerInterface;