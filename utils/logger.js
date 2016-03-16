'use strict';

var conf = require('../conf.js'),
    log4js = require('log4js');

var defaultConfig = {
    appenders: [{type: "console"}],
    replaceConsole: true
};

log4js.configure(conf.logging.loggerConf || defaultConfig);
/**
 * @param {String} loggerName
 * @returns {Logger}
 */
var getLogger = function(loggerName) {
    var logger = log4js.getLogger(loggerName);
    logger.setLevel(conf.logging.level);
    return logger;
};
module.exports = getLogger;