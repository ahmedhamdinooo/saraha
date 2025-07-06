import express from 'express'
import { addmessage, getmsgs } from '../services/message.service.js'
import { auth } from '../middleware/authentication/auth.js'


const router = express.Router()
router.post("/",addmessage)
router.get("/",auth,getmsgs)

export default router