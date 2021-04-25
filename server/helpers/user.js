const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createUser= async (info)=>{
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    console.log(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    
var h=await  client.query(prop.insertUser,[info.username,info.email,info.contraseña,info.genero,info.edad]);
client.end(); 
return h;
     

}
module.exports.login= async (info)=>{
    console.log(prop.con)
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    client.connect()
   
       var h=await client.query(prop.login,[info.email])
       client.end();
return h;

}
module.exports.update= async (info)=>{
    const client = new Client(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    var h=await  client.query(prop.updateUser,[info.username,info.email,info.genero,info.edad])
client.end();
   return h
     

}
module.exports.select= async (info)=>{
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    

   var h= await  client.query(prop.select,[info.email])
    client.end(); 
return h
}