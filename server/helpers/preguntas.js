const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createpregunta= async (info)=>{
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    console.log(info)
    client.connect()
    
var h=await  client.query(prop.insertPregunta,[info.title,info.input,info.id_formulario]);
client.end(); 
return h;
     

}
module.exports.selectpregunta= async ()=>{
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    
    client.connect()
    
var h=await  client.query(prop.selectPregunta,[]);
client.end(); 
return h;
     

}
module.exports.deletepregunta= async (info)=>{
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    console.log(info)
    client.connect()
    
var h=await  client.query(prop.deletepregunta,[info.id_forrmulario]);
client.end(); 
return h;
     

}