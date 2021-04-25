const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createMenu= async (info)=>{
    const client = new Client(prop.con)
    console.log(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    
var h=await  client.query(prop.insertMenu,[info.titulo,info.parent_menu]);
client.end(); 
return h;
     

}
module.exports.selectAllMenu= async (info)=>{
    console.log(prop.con)
    const client = new Client(prop.con)
    client.connect()
   
       var h=await client.query(prop.select_all_menu,[])
       client.end();
return h;

}
module.exports.deleteMenu= async (info)=>{
    const client = new Client(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    var h=await  client.query(prop.delete_menu,[info.id_menu])
client.end();
   return h
     

}