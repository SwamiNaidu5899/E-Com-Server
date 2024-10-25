const mongoose = require('mongoose')

const {Schema} = mongoose

const Feedback = new Schema({
    rating : {
        type : Number,
        required : true
    },
    review : {
        type : String,
    }
})

const UserFeedback = mongoose.model('feedbacks',Feedback)

module.exports = UserFeedback