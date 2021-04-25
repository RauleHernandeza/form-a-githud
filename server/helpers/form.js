const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createForm= async (info)=>{
    const client = new Client(prop.con)
    console.log(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    
var h=await  client.query(prop.insertForm,[info.title,info.descripcion,info.id_menu]);
client.end(); 
return h;
     

}
module.exports.selectForm= async (info)=>{
    console.log(prop.con)
    const client = new Client(prop.con)
    client.connect()
   
       var h=await client.query(prop.selectForm,[info.id_formulario])
       client.end();
return h;

}
module.exports.deleteForm= async (info)=>{
    const client = new Client(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    var h=await  client.query(prop.deleteForm,[info.id_formulario])
client.end();
   return h
     

}