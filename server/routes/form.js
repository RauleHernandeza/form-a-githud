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
            console.log(info.preguntas.length)
            
         for(i=0;i<info.preguntas.length;i++){
             j=rest.id_forrmulario;
             console.log(j);
             info.preguntas[i]={...info.preguntas[i],id_formulario:j}
             console.log(rest)
             console.log("---------------------------------------------------------------------------------  ")
             console.log(info.preguntas[i])
             preguntas.createpregunta(info.preguntas[i]).then((res)=>{
                 console.log(resp.rows[0])
             }).catch(err=>{

                console.log(err)
             })
         }

res.send({status:200,body:rest})
     }).catch(err=>{
              console.log(err)
        res.send({status:400,body:err});

     })    

})

app.post('/select',function(req,res){

    let info=req.body;
    console.log(info)
  form.selectForm(info)
.then(respt=>{


    let resp=respt.rows;
preguntas.selectpregunta().then(resm=>{
    let rest=resm.rows;
   let j;
       for(i=0;i<resp.length;i++){
      j=rest.filter(pregunta=>pregunta.id_forrmulario == resp[i].id_forrmulario)
      console.log(j)
        resp[i]={...resp[i],preguntas:j}

       }

res.send({status:200,body:resp});

})


    
                 


}).catch(err=>{
 console.log(err)
    res.send({status:400,body:err});
})

})

app.post('/delete',function(req,res){


    let info=req.body;
    console.log(info)
    preguntas.deletepregunta(info).then(rest=>{

   
  form.deleteForm(info)
.then(respt=>{





    res.send({status:200});
                 


}).catch(err=>{
console.log(err)
    res.send({status:400,body:err});
})
 }).catch(err=>{
        console.log(err)
        
    res.send({status:400,body:err});
    })
})
module.exports=app;