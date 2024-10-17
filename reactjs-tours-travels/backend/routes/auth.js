import express from 'express'
import { login, register } from '../Controllers/authController.js'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

const authRoute = express.Router()

authRoute.post('/register', register)
authRoute.post('/login', login)


export default authRoute;