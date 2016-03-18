'use strict';
var config = require('../../../conf.js'),
    utils = require('../../../utils/utils.js'),
    UserDataInterface = require('../userDataInterface.js');

var DummyUserDataService = function () {
};
utils.extend(DummyUserDataService, UserDataInterface);

/**
 * @param {String} userId
 * @returns {String}
 */
DummyUserDataService.prototype.getEmail = function(userId){
    return 'test@test.test';
};
/**
 * @param {String} userId
 * @returns {String}
 */
DummyUserDataService.prototype.getSocket = function(userId){
    return 'test_socket'
};
/**
 * @param {String} userId
 * @returns {Number}
 */
DummyUserDataService.prototype.getBalance = function(userId){
    return 777;
};
