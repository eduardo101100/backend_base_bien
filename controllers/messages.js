const { request, response } = require("express");

const rootMessages = (req=request, res=response) => {
    const {texto1,texto2} = req.query
    /*if (!texto1 || !texto2){
        res.status(400).json({
            msg: "no se han enviado los parametros necesarios"
        })
    }*/
    if(!texto1){
        res.status(400).json({msg:"falta el parametro 'texto1'"})
    }
    if(!texto2){
        res.status(400).json({msg:"falta el parametro 'texto2'"})
    }
    res.status(200).json({msg:texto1 + ' ' + texto2})
}
const hiMessages =  (req=request, res=response) => {
    const {name} = req.params
     res.json({msg:'Hola'+ ''+ name});
     
}
const byeMessages = (req=request, res=response) => {
    res.status(404).json ({msg:'Adios mundo'})
}
const postMessage = (req=request, res=response) => {
    const{no_control, nombre} = req.body
    console.log({no_control, nombre})
    res.status(200).json ({
        msg: `numero de control = ${no_control}, nombre = ${nombre}`
    })
}
const putMessage = (req=request, res=response) => {
    res.status(410).json ({msg:'Mensaje put'});
}
const deleteMessage = (req=request, res=response) => {
    res.status(408).json ({msg:'Mensaje delete'});
}

module.exports = {rootMessages, 
    hiMessages, 
    byeMessages, 
    postMessage,
    deleteMessage,
    putMessage
};