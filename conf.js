module.exports = {
    defaultLocale: 'ru',
    iRabbit: {
        connection: {
            url: 'amqp://guest:guest@localhost:5672'
        }
    },
    db: {
        mongo:{
            url: 'mongodb://localhost:27017/iMessagesBuffer'
        },
        checkInterval1: 30000,
        checkInterval2: 5000
    },
    messages: {
        types: {
            registration_confirm : true,
            registration_success : true,
            password_change : true,
            new_vacancy : true
        }
    },
    services: {
        templateService: 'simple/simpleTemplateService.js',
        dbService: 'mongo/mongoDbService.js',
        transports: {
            email: {
                handler: 'email/emailHandlerTransportService.js',
                sender: 'email/emailSenderTransportService.js'
            }
        },
        userData:{

        }
    },
    logging : {
        level: 'debug',
        //loggerConf: {}
    }
};