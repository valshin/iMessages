var DbInterface = function(type){
    this.type = type;
};
DbInterface.prototype.create = function(){
};
DbInterface.prototype.get = function(){
};
DbInterface.prototype.update = function(){
};
DbInterface.prototype.delete = function(){
};
module.exports = DbInterface;