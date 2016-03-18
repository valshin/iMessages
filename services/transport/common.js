/**
 * @param {Message} msg
 * @returns {string}
 */
setTransportType = function(msg){
    msg.transport = 'eamil';
};

module.exports= getTransportType;