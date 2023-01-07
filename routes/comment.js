import express from 'express'

import { createComment,getComments,deleteComment } from '../controllers/comment.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();


// create product
router.post('/:id',createComment)
// get comments
router.get('/:id', getComments)

router.delete('/:id',deleteComment)


export default router
