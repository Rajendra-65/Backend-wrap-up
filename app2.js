const express = require('express')

const app = express()
const dbconnection  = require('./config/db')
const morgan = require('morgan')
const userModel = require('./models/user')

app.set('view engine','ejs')

app.use(morgan('dev'))

// Builtin middleware for form control

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.static("public"))


app.get('/',(req,res)=>{
    res.render('form')
})

// app.get('/get-form-data',(req,res)=>{
//     console.log(req.query)
//     res.send('data received')
// })

app.post('/get-form-data',async(req,res)=>{
    console.log(req.body)
    const{username,email,password} = req.body
    const newUser = await userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send(newUser)
})

app.get('/update-user',async (req,res)=>{
    await userModel.findOneAndUpdate({
        username:'a'
    },{
        email:'c@c.com'
    })
    res.send('user updated...')
})

app.get('/delete-user',async(req,res)=>{
    await userModel.findOneAndDelete({
        username:'a'
    })
    res.send('user deleted..')
})

app.get('/get-users',(req,res)=>{
    userModel.findOne({
        username:"c"
    }).then((users)=>{
        res.send(users)
    })
})

app.get('/register',  (req,res)=>{
    res.render('register')
})

app.post('/register',(req,res)=>{
    console.log(req.body)
    res.send('data received..')
})

app.listen(3000)