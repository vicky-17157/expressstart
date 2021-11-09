var express = require('express');
var app = express();

app.get('/gd', (req,res) =>{
    res.send("welcome to express.js demo");
}
)
app.post('/pd', (req,res) =>{
    res.send("welcome to post demo")
}
)

var server = app.listen(3000,() =>{
    var host = server.address().host
    var port= server.address().port
    console.log("this app listening at http://%s:$s",host,port);
}
)