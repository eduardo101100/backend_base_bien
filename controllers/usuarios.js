const { request, response } = require("express");
const pool = require("../db/connection")
const bcryptjs= require("bcryptjs");
const {modeloUsuarios, updateUsuario} = require("../models/usuarios");
const getUsers = async (req = request, res = response) =>{
    //estructura basica de cualquier endpoint al conectar en su BD
    
    let conn;
    //control de exepciones
    try {
        conn = await pool.getConnection()
        //esta es la consulta mas basica, se pueden hacer mas complejas
        const users = await conn.query(modeloUsuarios.quieryGetUsers, (error) => {throw new Error(error) })
        //siempre validar que no se obtuvieron resultados
        if (!users) {
            res.status(404).json({msg:"no se encontraron registros"})
            return
        }
        res.json({users})
        //lo del cath y final siempre sera lo mismo
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getUserByID = async (req = request, res = response) =>{
    //estructura basica de cualquier endpoint al conectar en su BD este indica el numero estatico
    const {id} = req.params

    let conn;
    //control de exepciones
    try {
        conn = await pool.getConnection()
        //esta es la consulta mas basica, se pueden hacer mas complejas
        const [user] = await conn.query(modeloUsuarios.quieryGetUsersByeID, [id], (error) => {throw new Error(error) })
        //siempre validar que no se obtuvieron resultados
        if (!user) {
            res.status(404).json({msg:`no se encontro registro con el id ${id}`})
            return
        }
        res.json({user})
        //lo del cath y final siempre sera lo mismo
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deleteUserByID = async (req = request, res = response) =>{
    //estructura basica de cualquier endpoint al conectar en su BD este indica el numero estatico
    const {id} = req.query

    let conn;
    //control de exepciones
    try {
        conn = await pool.getConnection()
        //esta es la consulta mas basica, se pueden hacer mas complejas EN ESTA SE ACTUALIZARA EL USUARIO
        const {affectedRows} = await conn.query(modeloUsuarios.quieryDeleteUsersByeID, [id], (error) => {throw new Error(error) })
        
        //siempre validar que no se obtuvieron resultados
        if (affectedRows === 0) {
            res.status(404).json({msg:`no se pudo eliminar el registro con el id ${id}`})
            return
        }
        res.json({msg: `El usuario con id ${id} se elimino correctamente.`})
        //lo del cath y final siempre sera lo mismo
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addUser = async (req = request, res = response) =>{
    //estructura basica de cualquier endpoint al conectar en su BD este indica el numero estatico
    const{
        Usuario,
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrase??a,
        Fecha_nacimiento = '1900-01-01',
        Activo
       
    } = req.body

    if (
        !Usuario||
        !Nombre||
        !Apellidos||
        !Edad||

        !Contrase??a||

        !Activo
       
    ){
        res.status(400).json({msg:"Falta informacion del usuario"})
        return
    }
  
    let conn;
    //control de exepciones
    try {
        conn = await pool.getConnection()
        
        //tarea aqui que el usuario no se duplique
       const [user] = await conn.query(modeloUsuarios.quieryUsersExists,[Usuario],)
       
        if(!user){
            res.status(403).json({msg: `El Usuario ${Usuario} ya se encuentra registrado`})
            return
        }
  
       
       const salt = bcryptjs.genSaltSync()
       const Contrase??aCifrada = bcryptjs.hashSync(Contrase??a,salt)

       
        //esta es la consulta mas basica, se pueden hacer mas complejas EN ESTA SE ACTUALIZARA EL USUARIO
        const {affectedRows} = await conn.query(modeloUsuarios.quieryAddUser, [
            Usuario,
            Nombre,
            Apellidos,
            Edad,
            Genero || '',
            Contrase??aCifrada,
            Fecha_nacimiento, 
            Activo
        ], (error) => {throw new Error(error)})
            //'${Genero || ''}',
        //siempre validar que no se obtuvieron resultados
       
        if (affectedRows === 0) {
            res.status(404).json({msg:`no se pudo agregar el registro del usuario ${Usuario}`})
            return
        }
        res.json({msg: `El usuario ${Usuario} se agrego correctamente.`})
        //lo del cath y final siempre sera lo mismo
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
        conn.end()
        }
    }
}

const updateUserByUsuario = async (req = request, res = response) =>{
    //estructura basica de cualquier endpoint al conectar en su BD este indica el numero estatico
    const {
        Usuario,
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrase??a,
        Fecha_nacimiento = "1900-01-01"
        
       
    } = req.body

    if (
        !Usuario||
        !Nombre||
        !Apellidos||
        !Genero||
        !Edad||
        !Contrase??a   
    ){
        res.status(400).json({msg:"Falta informacion del usuario"})
        return
    }

    let conn;
    //control de exepciones
    try {
        conn = await pool.getConnection()

        //tarea aqui que el usuario no se duplique
       const [user] = await conn.query(modeloUsuarios.quieryGetUsersInfo,[Usuario])

       if (!user){
        res.status(403).json({msg: `El usuario ${Usuario} no se encuentra registrado`})
       }
        //esta es la consulta mas basica, se pueden hacer mas complejas EN ESTA SE ACTUALIZARA EL USUARIO
        //arreglar esta
        const {affectedRows} = await conn.query(updateUsuario(
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Fecha_nacimiento,
        Usuario              
        ),(error) => {throw new Error(error) })
            //'${Genero || ''}',
        //siempre validar que no se obtuvieron resultados
        if (affectedRows === 0) {
            res.status(404).json({msg:`no se pudo actualizar el registro del usuario ${Usuario}`})
            return
        }
        res.json({msg: `El usuario ${Usuario} se actualizo correctamente.`})
        //lo del cath y final siempre sera lo mismo
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const singIn = async (req = request, res = response) =>{
    //estructura basica de cualquier endpoint al conectar en su BD este indica el numero estatico
    const {
        Usuario,
        Contrase??a
    } = req.body

    if (
        !Usuario||
        !Contrase??a
    ){
        res.status(400).json({msg:"Falta informacion del usuario"})
        return
    }

    let conn;
    //control de exepciones
    try {
        conn = await pool.getConnection()

        //tarea aqui que el usuario no se duplique
       const [user] = await conn.query(modeloUsuarios.quierySinin,[Usuario], (error) => {if(error) throw error})

       if (!user || user.Activo === 'N'){
        let code = !user? 1 : 2
        res.status(405).json({msg: `El usuario o la contrase??a son incorrectos`, errorCode: code})
        return
       }
       const accesoValido = bcryptjs.compareSync(Contrase??a, user.Contrase??a)
       if (!accesoValido){
        
            res.status(403).json({msg: `El usuario o la contrase??a son incorrectos`, errorCode: "3"})
            return
           
       }
        res.json({msg: `El usuario ${Usuario} ha iniciado secion`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const changePassword = async (req = request, res = response) => {
    const {
        Usuario, 
        Contrase??a, 
        nuevaContrase??a
    } = req.body

    if(
    !Contrase??a || 
    !nuevaContrase??a || 
    !Usuario){
        res.status(400).json({msg: "Faltan Datos."})
    }

    let conn;
    try {
        conn = await pool.getConnection()

        const [pass] = await conn.query(`SELECT Contrase??a, Usuario FROM Usuarios WHERE Usuario = '${Usuario}'`, (error) => {if(error) throw error})
        if(!pass){
            res.status(403).json({msg:"Datos Invalidos"})
            return
        }
        const passValid = bcryptjs.compareSync(Contrase??a, pass.Contrase??a)
        const salt = bcryptjs.genSaltSync()
        const contrase??aCifrada = bcryptjs.hashSync(nuevaContrase??a, salt)

        if(!passValid){
            res.status(403).json({msg:"La contrase??a que se ingres?? no son v??lidos."})
            return
        }

        const updpass = await conn.query(`UPDATE Usuarios SET Contrase??a = '${contrase??aCifrada}' WHERE Usuario = '${Usuario}'`, (error) => {if(error) throw error})
        res.json({msg:`La contrase??a se ha cambiado correctamente.`})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    } finally {
        if (conn) conn.end()//Termina la conexi??n 
    }
}

module.exports = {getUsers, getUserByID, deleteUserByID, addUser, updateUserByUsuario, singIn,changePassword}