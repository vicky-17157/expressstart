var express = require('express');
var app = express();
app.get('/', (req,res) =>{
    res.send("task1");
}
)

var server = app.listen(4500,() =>{
    var host = server.address().host
    var port= server.address().port
    console.log("this app listening at http://%s:$s",host,port);
}
)