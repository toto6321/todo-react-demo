var express = require('express');
var mongoose = require('mongoose');
var body-parser=require('body-parser');

var app = express();
var router = express.Router();
var port = process.env.API_PORT || 3001;

app.use(body-parser.urlencoded({extended:true}));
app.use(body-parser.json());

router.get('/',function(){
  res.json(message:'API initialized!');
});

app.use('/api',router);
app.listen(port,function(){
  console.log('program is running on port ${port}');
})
