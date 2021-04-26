const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createForm= async (info)=>{
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
       console.log({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    
var h=await  client.query(prop.insertForm,[info.title,info.descripcion,info.id_menu]);
client.end(); 
return h;
     

}
module.exports.selectForm= async (info)=>{
    console.log(prop.con)
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    client.connect()
   
       var h=await client.query(prop.selectForm,[])
       client.end();
return h;

}
module.exports.deleteForm= async (info)=>{
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    var h=await  client.query(prop.deleteForm,[info.id_forrmulario])
client.end();
   return h
     

}