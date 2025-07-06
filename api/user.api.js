import express from 'express'
import { emailVerify, signin, signup } from "../services/user.service.js"
import { uservalidation } from '../middleware/validation/user.validation.js'

const router = express.Router()
router.post('/signup/:id',uservalidation,signup)
router.post('/signin',signin)
router.get('/verify/:token',emailVerify)

export default router