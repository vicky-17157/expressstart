var express = require('express');
var app = express();
var a1 = (req,res,next) =>{
    console.log("My first callback funtion");
    next()
}
var a2 = (req,res,next) =>{
    res.send("Hi bye!");
    next()
}
var a3 = (req,res,next) =>{
    console.log("The third part of the code");
    next()
}
var a4 = (req,res,next) =>{
    console.log("The part four code of the app");
    next()
}
app.get('/',[a1,a2,a3,a4])
app.post('/p1', (req,res) =>{
    res.send('Using post method');
}
)
app.listen(8000);


