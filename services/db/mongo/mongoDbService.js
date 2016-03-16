var config = require('../../conf.js'),
    DbInterface = require('../dbInterface.js'),
    utils = require('../../utils/utils.js'),
    MongoClient = require('mongodb').MongoClient;

var Mongo = function(){
    DbInterface.call(this, 'Mongo');
};
utils.extend(Mongo, DbInterface);

Mongo.prototype.create = function(){

};

module.exports = Mongo;