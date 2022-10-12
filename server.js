const express = require('express');
const menssagesRouter = require('./routes/messages')
const usuariosRouter = require('./routes/usuarios')
const cors = require("cors")

class Server {
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT
        this.paths = {
            messages: "/api/v1/messages",
            usuarios:"/api/v1/usuarios"
        }
        this.middlewares()
        this.routes()
    }

    routes() {
       /* this.app.get('/' , (req, res) => {
            res.send ('Hello word');
        
        }) //end point
    */
    this.app.use(this.paths.messages, menssagesRouter)
    this.app.use(this.paths.usuarios, usuariosRouter)
    }

middlewares(){
this.app.use(cors()) //permite solicitudes de origen cruzado
this.app.use(express.json())//habilita la lectura de contenido en formato JSON
}

    listen(){
        this.app.listen(this.PORT, () => {
            console.log('servidor corriendo en el puerto ', this.PORT);
        
        })
    }
}

module.exports = Server