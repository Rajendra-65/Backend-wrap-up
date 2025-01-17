const express = require('express');
const morgan = require('morgan')
const app  = express()
// External Middleware.
app.use(morgan('dev'))

// for rendering html
app.set('view engine','ejs') 
// Custom middleware
app.get('/',(req,res,next)=>{
    const a = 5 
    const b = 10
    console.log(a+b)
    next()
},(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.send('This is about page..')
})

app.get('/profile',(req,res)=>{
    res.send("Profile Page..")
})

app.listen(3000)