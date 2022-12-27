import mongoose from 'mongoose'

const { Schema } = mongoose;


const OrderSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    address: {
        type: String,
        required: true,
    },
    items: [
        // {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Product',
        // },
    ]

}, { timestamps: true })


export default mongoose.model("Order", OrderSchema);
