const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createMenu= async (info)=>{
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    console.log(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    
var h=await  client.query(prop.insertMenu,[info.title,info.parent_menu]);
client.end(); 
return h;
     

}
module.exports.selectAllMenu= async ()=>{
 
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    client.connect()
   
       var h=await client.query(prop.select_all_menu,[])
       client.end();
return h;

}
module.exports.deleteMenu= async (info)=>{
    const client = new Client({connectionString:"postgres://esvlqmxr:ShL33mmvfoTZHNr7qRtY55xlkWKxvC8f@queenie.db.elephantsql.com:5432/esvlqmxr"})
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    var h=await  client.query(prop.delete_menu,[info.id_menu])
client.end();
   return h
     

}