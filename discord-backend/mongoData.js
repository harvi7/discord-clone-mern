const mongoose = require('mongoose')

const dicordSchema = mongoose.Schema({
    channelName: String,
    conversation: [
        {
            message: String,
            timestamp: String,
            user: {
                displayName: String,
                email: String,
                photo: String,
                uid: String
            }
        }
    ]
})

module.exports =  mongoose.model('conversations', dicordSchema)