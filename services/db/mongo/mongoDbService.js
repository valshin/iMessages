var config = require('../../../conf.js'),
    DbInterface = require('../dbInterface.js'),
    utils = require('../../../utils/utils.js'),
    MongoClient = require('mongodb').MongoClient;

var MongoDbService = function(){
};
utils.extend(MongoDbService, DbInterface);

MongoDbService.prototype.addMessage = function(){
};
MongoDbService.prototype.getMessages = function(){
};
MongoDbService.prototype.deleteMessages = function(){
};

module.exports = MongoDbService;