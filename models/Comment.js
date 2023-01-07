import mongoose from 'mongoose'



const CommentSchema = new mongoose.Schema({
    comment: String,
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }


}, { timestamps: true })


export default mongoose.model("Comment", CommentSchema);
