import Comment from "../models/Comment.js";
import Product from "../models/Product.js";

export const createComment = async (req, res, next) => {
    try {
        let newComment = new Comment({
            comment: req.body.comment,
            product_id: req.params.id,
            user_id: req.user?.id,
        });

        const commentData = await newComment.save();

        await Product.updateOne(
            { _id: req.params.id },
            {
                $push: { comments: commentData._id }
            }
        )

        res.status(200).json(newComment);
    } catch (err) {
        next(err);
    }
}


export const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ product_id: req.params.id }).sort('-createdAt');

        res.json(comments)
    } catch (err) {
        next(err)
    }
}
export const deleteComment = async (req, res, next) => {
    try {
        await Comment.findByIdAndDelete(req.params.id)

        res.status(200).json("Comment has been deleted.");
    } catch (err) {
        next(err)
    }
}
