import express from 'express'
import mongoose from 'mongoose';
import env from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRoute from './routes/users.js'
import productRoute from './routes/products.js'
import authRoute from './routes/auth.js'
import commentRoute from './routes/comment.js'
import orderRoute from './routes/orders.js'

env.config();
const app = express();
const port = 5000;

// db connection
const connect = async ()=>{
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_CODE)
    } catch (err) {
        throw err
    }
}

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/comments', commentRoute)
app.use('/api/orders', orderRoute)



app.listen(port, ()=>{
    connect();
    console.log(`server started on ${port} port`)
})