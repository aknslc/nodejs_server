import express from 'express'
import {
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder,
    createOrder
} from '../controllers/order.js';
const router = express.Router();

import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

// get Orders
router.get('/', getOrders);
// get Order
router.get('/:id', getOrder);
// create Order
router.post('/', createOrder)
// update Order
router.put('/:id', updateOrder);
// delete Order
router.delete('/:id', deleteOrder);


export default router;