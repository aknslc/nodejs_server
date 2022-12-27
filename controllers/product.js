import Product from '../models/Product.js'


// get Products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort('-createdAt')
        res.status(200).json(products)
    } catch (err) {
        next(err)
    }
}

// get Product
export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (err) {
        next(err)
    }
}

// create Product

export const createProduct = async (req, res, next) => {
    try {

        const newProduct = await new Product(req.body)
        newProduct.save();
        res.status(200).json(newProduct)

    } catch (err) {
        next(err)
    }
}

// update Product
export const updateProduct = async (req, res, next) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(updatedProduct)
    } catch (err) {
        next(err)
    }


}

// delete Product
export const deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted.");
    } catch (err) {
        next(err)
    }
}