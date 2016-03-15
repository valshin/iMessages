"use strict";
var iRabbit = require('./node_modules/iRabbit/iRabbit.js'),
    conf = require('./conf.js'),
    Message = require('./message.js');

iRabbit.on('receive',function( incMsg ){
    console.log( 'receive event: ', incMsg.message );
});


iRabbit.subscribeTopic('exchange.topic', 'notify').then(function( result ){
    iRabbit.on(result.eventName+':message',function( incMsg ){
        var msg = new Message(incMsg);
        console.log( result.eventName+':message event: ', incMsg.message );
    });
})
.catch( function( err ){
    console.log('THE_ERROR', err.stack);
});