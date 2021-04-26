module.exports={

    insertUser:"insert into  user_1 (username,email,contrasena,genero,admin,edad) values($1,$2,$3,$4,false,$5) returning *",
    login:"select * from user_1 where email=$1",
    update:"update users  set informacion=$1 where email=$2",

    insertMenu:"insert into menu (titulo,parent_menu) values ($1,$2) returning *",

    select_all_menu:"select * from menu",
    
     delete_menu:"delete from menu where id_menu=$1",
     insertForm:"insert into formulario (title_form,description_form,id_menu) values ($1,$2,$3) returning *",

     selectForm:"select  * from formulario ",

     deleteForm:"delete from formulario inner join pregunta on (pregunta.id_formularuio = formulario.id_formulario and formulario.id_formulario= $1 )",
     insertPregunta:"insert into  pregunta (title,input,id_formulario) values ($1,$2,$3)"

    }