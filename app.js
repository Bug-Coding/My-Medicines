const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){

	res.sendfile(__dirname+"/login-page.html");

});


app.get("/", function(req,res){

var fullname=req.body.fullname;
var email=req.body.email;
var password=req.body.password;



})

app.listen(3000,function(){
	console.log("server is running on port 3000");

});
