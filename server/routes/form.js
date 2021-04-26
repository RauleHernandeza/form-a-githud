const express = require('express');
var preguntas=require('../helpers/preguntas')
var form=require('../helpers/form');
const app = express();

app.post('/create', function (req, res) {
    let info=req.body;
    console.log(info.preguntas)
  
     form.createForm(info).then(resp=>{
         let rest=resp.rows[0];
            let j=-1;
         for(i=0;i<info.preguntas.lenght;i++){
             j=rest.id_formulario;
             info.preguntas[i]={...info.preguntas[i],id_formulario:j}
             console.log()
             preguntas.createpregunta(info.preguntas[i]).then((res)=>{
                 console.log(resp.rows[0])
             })
         }

res.send({status:200,body:rest})
     }).catch(err=>{
res.send({status:400,body:err});

     })    

})

app.post('/select',function(req,res){

    let info=req.body;
    console.log(info)
  form.selectForm(info)
.then(respt=>{


    let resp=respt.rows;



    res.send({status:200,body:resp});
                 


}).catch(err=>{

    res.send({status:400,body:err});
})

})

app.delete('/delete',function(req,res){


    let info=req.body;
    console.log(info)
  form.deleteForm(info)
.then(respt=>{


    let resp=respt.rows;



    res.send({status:200,body:resp});
                 


}).catch(err=>{

    res.send({status:400,body:err});
})

})
module.exports=app;