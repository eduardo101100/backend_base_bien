const { request, response } = require("express");
const pool = require("../db/connection")
const modelojuego = require("../models/asesinos");


const getUsers = async (req = request, res = response) =>{
    //estructura basica de cualquier endpoint al conectar en su BD
    
    let conn;
    //control de exepciones
    try {
        conn = await pool.getConnection()
        //esta es la consulta mas basica, se pueden hacer mas complejas
        const users = await conn.query(modelojuego.quieryGetUsers, (error) => {throw new Error(error) })
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
        const [user] = await conn.query(modelojuego.quieryGetUsersByeID, [id], (error) => {throw new Error(error) })
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
        const {affectedRows} = await conn.query(modelojuego.quieryDeleteUsersByeID, [id], (error) => {throw new Error(error) })
        
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
        Enemigos,
        Armas,
        Armaduras,
        Nivel,
        Nivel_Recomendado,
        Activo
       
    } = req.body

    if (
        !Enemigos||
        !Armas||
        !Armaduras||
        !Nivel||
        !Nivel_Recomendado||
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
       const user = await conn.query(modelojuego.quieryUsersExists,[Enemigos])
       
        if(!user){
            res.status(403).json({msg: `El personaje ${Enemigos} ya se encuentra registrado`})
            return
        }
             //esta es la consulta mas basica, se pueden hacer mas complejas EN ESTA SE ACTUALIZARA EL USUARIO
        const {affectedRows} = await conn.query(modelojuego.quieryAddUser, [
            Enemigos,
            Armas,
            Armaduras,
            Nivel,
            Nivel_Recomendado,
            Activo
        ], (error) => {throw new Error(error)})
            //'${Genero || ''}',
        //siempre validar que no se obtuvieron resultados
       
        if (affectedRows === 0) {
            res.status(404).json({msg:`no se pudo agregar el registro del usuario ${Enemigos}`})
            return
        }
        res.json({msg: `El usuario ${Enemigos} se agrego correctamente.`})
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
        Enemigos,
        Armas,
        Armaduras,
        Nivel,
        Nivel_Recomendado

    } = req.body

    if (
        !Enemigos||
        !Armas||
        !Armaduras||
        !Nivel||
        !Nivel_Recomendado   
    ){
        res.status(400).json({msg:"Falta informacion del personaje"})
        return
    }

    let conn;
    //control de exepciones
    try {
        conn = await pool.getConnection()

        //tarea aqui que el usuario no se duplique
       const [user] = await conn.query(modelojuego.quieryGetUsersInfo,[Enemigos])

       if (!user){
        res.status(403).json({msg: `El usuario ${Enemigos} no se encuentra registrado`})
       }
        //esta es la consulta mas basica, se pueden hacer mas complejas EN ESTA SE ACTUALIZARA EL USUARIO
        //arreglar esta
        const {affectedRows} = await conn.query(modelojuego.quieryUpdateByeUsuario,[
            Armas|| user.Armas,
            Armaduras|| user.Armaduras,
            Nivel|| user.Nivel,
            Nivel_Recomendado|| user.Nivel_Recomendado,
            Enemigos,
            ]
            , (error) => {throw new Error(error) })
            //'${Genero || ''}',
        //siempre validar que no se obtuvieron resultados
        if (affectedRows === 0) {
            res.status(404).json({msg:`no se pudo actualizar el registro del personaje ${Enemigos}`})
            return
        }
        res.json({msg: `El personaje ${Enemigos} se actualizo correctamente.`})
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

module.exports = {getUsers, getUserByID, deleteUserByID, addUser, updateUserByUsuario}