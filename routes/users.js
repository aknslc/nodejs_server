import express from 'express'
import {
    getUsers,
    getUser,
    updateUser,
    deleteUser
} from '../controllers/user.js';
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js'
const router = express.Router();

// get users
router.get('/',getUsers);
// get user
router.get('/:id',getUser);
// update user
router.put('/:id',updateUser);
// delete user
router.delete('/:id',deleteUser);


export default router;