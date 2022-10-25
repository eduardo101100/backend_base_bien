const {Router} = require("express")
const {getUsers, getUserByID, deleteUserByID, addUser} = require("../controllers/usuarios")
const router = Router()

//http://localhost:4000/api/v1/usuarios
//http://localhost:4000/api/v1/usuarios/id/2
//http://localhost:4000/api/v1/usuarios?id=1

//GET
router.get("/", getUsers)
//lo siguiente despues de //id es el identificador que esta declarado en controllers (la constante)
router.get("/id/:id", getUserByID)

//DELETE
router.delete("/", deleteUserByID)

//POST
router.post("/", addUser)

module.exports = router