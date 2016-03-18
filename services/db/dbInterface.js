var DbInterface = function(type){
    this.type = type;
};
DbInterface.prototype.addMessage = function(){
};
DbInterface.prototype.getMessages = function(){
};
DbInterface.prototype.deleteMessages = function(){
};
module.exports = DbInterface;