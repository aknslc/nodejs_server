import express from 'express'
import {
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct
} from '../controllers/product.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

// get Products
router.get('/', getProducts);
// get Product
router.get('/:id', getProduct);
// create Product
router.post('/',verifyAdmin, createProduct)
// update Product
router.put('/:id',verifyAdmin, updateProduct);
// delete Product
router.delete('/:id', verifyAdmin,deleteProduct);


export default router;