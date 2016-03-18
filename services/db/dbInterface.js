var DbInterface = function(type){
    this.type = type;
};
DbInterface.prototype.add = function(){
};
DbInterface.prototype.getMessages = function(){
};
DbInterface.prototype.deleteMessages = function(){
};
module.exports = DbInterface;