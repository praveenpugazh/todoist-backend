import express from 'express'
import {
  registerUser,
  loginUser,
  getUser
} from '../controllers/userController.js'
import { validateToken } from '../middlewares/validateTokenHandler.js'

const router = express.Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/', validateToken, getUser)

export default router

