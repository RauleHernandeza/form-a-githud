const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createpregunta= async (info)=>{
    const client = new Client(prop.con)
    console.log({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    
var h=await  client.query(prop.insertPregunta,[info.title,info.input,info.id_forrmulario]);
client.end(); 
return h;
     

}