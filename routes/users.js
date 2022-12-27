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
router.get('/', verifyAdmin, getUsers);
// get user
router.get('/:id', verifyUser, getUser);
// update user
router.put('/:id', verifyUser, updateUser);
// delete user
router.delete('/:id', verifyUser, deleteUser);


export default router;