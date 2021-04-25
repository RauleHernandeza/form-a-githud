const express = require('express');

var user=require('../helpers/user');
const app = express();
app.post('/', function (req, res) {
    let info=req.body;
    console.log(info)
  
     user.update(info).then(resp=>{
         let rest=resp.rows;


res.send({status:200,body:rest})
     }).catch(err=>{
res.send({status:400,body:err});

     })    

})



