import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../Controllers/userController.js'

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const userRoute = express.Router()

//Update user
userRoute.put('/:id', verifyUser, updateUser)

//Delete user
userRoute.delete('/:id', verifyUser, deleteUser)

//Get single user
userRoute.get('/:id', verifyUser, getSingleUser)

//Get all user
userRoute.get('/', verifyAdmin, getAllUser)


export default userRoute;