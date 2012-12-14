var express = require('express');

var app = express();

app.get('/test',function(req,res){
    res.render('error.ejs',{message:"um, I really don't know"});
    //res.send('test1');
});



app.get('/test/:name',function(req,res){

    var name = "shit";
    if(req.params.name){
        name = req.params.name;
    }
    res.render('error.ejs',{message:"um, I really don't know",name:name});
    //res.send('test1');
});

app.get('/recipes',function(req,res){
    res.render('recipes.ejs');
});


app.get('/*',function(req,res){
   res.send('fallback page');
});


app.listen(3000);
console.log("start listening at localhost/3000");