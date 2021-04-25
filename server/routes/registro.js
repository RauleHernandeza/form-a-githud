const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express.Router();
const user=require('../helpers/user');


app.post('/', function (req, res) {

    let info=req.body;
    console.log(info);
    
    info.contraseña=bcrypt.hashSync(info.contraseña,10);
    console.log(info.contraseña)
    user.createUser(info).then(resp=>{
     let respt=resp.rows;

     res.send({status:200,body:respt});
      



    }).catch(err=>{
console.log("error "+err)
      res.send({status:408,body:err});
    })


});


app.get('/',function(req,res){
    console.log("hola")
    res.send(200);
    
    })



module.exports=app;