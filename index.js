const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./models/user')
const UserFeedback = require('./models/UserFeedback')

const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect('mongodb+srv://swamitechnotidetech:YRNQWvp20giJWZnk@cluster0.i98xi.mongodb.net/RegisterData?retryWrites=true&w=majority&appName=Cluster0')


app.post('/signin',(req, res) => {
    const {email, password} =  req.body
    userModel.findOne({email : email})
    .then((user)=>{
            if(user){
                if(user.password === password){
                    res.json('Success')
                }
                else{
                    res.json('The password is incorrect')
                }
            }
            else{
                res.json('No user found!')
            }
    })
})

app.post('/signup',(req,res) => {
    userModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err))
})


app.post('/feedback',(req, res)=>{
    UserFeedback.create(req.body)
    .then(fb => res.json(fb))
    .catch(err => res.json(err))
})

app.get('/feedback',(req, res) => {
    res.json({ message: 'Feedback retrieved successfully', feedback: [/* feedback data */] })
})

app.listen(8000, () => console.log('Server is running...')
)
