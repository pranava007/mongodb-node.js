const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const exhbs = require("express-handlebars")
const dbo = require('./db')

app.engine('hbs',exhbs.engine({layoutsDir:'views/',defaultLayout:'main',extname:'hbs'}))
app.set('view engine','hbs')
app.set('views','views')


app.get('/', async (req,res,next)=>{

    let databas = await dbo.getDatebase();
    const collection = databas.collection('books')
    const cursor = collection.find({})
    let employees = cursor.toArray();
    let message = ''
    res.render('main',{message,employees})
})

app.listen(3030,()=>{
console.log("runing");
})