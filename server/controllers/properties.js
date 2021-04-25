module.exports={

    insertUser:"insert into  user_1 (username,email,contraseña,genero,admin,edad) values($1,$2,$3,$4,false,$5) returning *",
    login:"select * from user_1 where email=$1",
    update:"update users  set informacion=$1 where email=$2",

    insertMenu:"insert into menu (titulo,parent_menu) values ($1,$2) returning *",

    select_all_menu:"select * from menu",
    
     delete_menu:"delete from meno where id_menu=$1",
     insertForm:"insert into formulario (title,descripcion,id_menu) values ($1,$2,$3)",

     selectForm:"select  * from formulario where id_formulario=$1",

     deleteForm:"delete from formulario where id_formulario=$1"

    }