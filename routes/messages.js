
//http://localhost:4000/api/v1/messages
const {Router} = require('express')
const router = Router()
const{rootMessages,
     hiMessages, 
     byeMessages,
     postMessage,
     putMessage,
     deleteMessage
    } = require('../controllers/messages')
    router.get('/',rootMessages ) //end point
    router.get('/hi/:name',hiMessages) //end point
    router.get('/bye',byeMessages) //end point
    router.post('/', postMessage)
    router.put('/', putMessage)
    router.delete('/', deleteMessage)
    module.exports = router
