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
        template: 'simple/simpleTemplateService.js',
        dbService: 'mongo/mongoDbService.js',
        transports: {
            email: {
                handler: 'email/emailHandler.js',
                sender: 'email/emailSender.js',
                from: 'from@from.from',
                defaultService: 'gmail',
                services: {
                    gmail:{
                        name: 'Gmail',
                        type: 'SMTP',
                        login: '',
                        password: ''
                    }
                }
            }
        },
        userData: 'dummy/dummyUserDataService.js'
    },
    logging : {
        level: 'debug',
        //loggerConf: {}
    }
};