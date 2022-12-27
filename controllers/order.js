import Order from '../models/Order.js'

// get Orders
export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().sort('-createdAt')
        res.status(200).json(orders)
    } catch (err) {
        next(err)
    }
}

// get Order
export const getOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id)
        res.status(200).json(order)
    } catch (err) {
        next(err)
    }
}

// create Order

export const createOrder = async (req, res, next) => {
    try {

        const newOrder = await new Order({
            user: req.body.user._id,
            address: req.body.address,
            items: req.body.items
        })
        newOrder.save();
        res.status(200).json(newOrder)

    } catch (err) {
        next(err)
    }
}

// update Order
export const updateOrder = async (req, res, next) => {

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(updatedOrder)
    } catch (err) {
        next(err)
    }
}

// delete Order
export const deleteOrder = async (req, res, next) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted.");
    } catch (err) {
        next(err)
    }
}