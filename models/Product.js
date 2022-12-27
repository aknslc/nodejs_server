import mongoose from 'mongoose'
import { Schema } from 'mongoose';


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    category: {
        type: String,
        required: true,
    },

    rating: {
        type: Number
    },

    images: [],

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true
    },

    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],

    featured: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })


export default mongoose.model("Product", ProductSchema);
