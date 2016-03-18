var config = require('../../../conf.js'),
    DbInterface = require('../dbInterface.js'),
    utils = require('../../../utils/utils.js'),
    MongoClient = require('mongodb').MongoClient;

var MongoDbService = function(){
    DbInterface.call(this, 'Mongo');
};
utils.extend(MongoDbService, DbInterface);

MongoDbService.prototype.create = function(){

};

module.exports = MongoDbService;