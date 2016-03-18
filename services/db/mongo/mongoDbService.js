var config = require('../../../conf.js'),
    DbInterface = require('../dbInterface.js'),
    utils = require('../../../utils/utils.js'),
    MongoClient = require('mongodb').MongoClient;

var MongoDbService = function(){
    DbInterface.call(this, 'Mongo');
};
utils.extend(MongoDbService, DbInterface);

MongoDbService.prototype.addMessage = function(){
};
MongoDbService.prototype.getMessages = function(){
};
MongoDbService.prototype.deleteMessages = function(){
};

module.exports = MongoDbService;