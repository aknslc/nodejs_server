import express from 'express'
import mongoose from 'mongoose';
import env from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import helmet from 'helmet';
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
        await mongoose.connect("mongodb+srv://aknselc:1234@cluster0.3dxdjdr.mongodb.net/e-commerce?retryWrites=true&w=majority", 
        { useNewUrlParser: true }
        )
    } catch (err) {
        throw err
    }
}
app.use(cors({
    // origin:"https://test-client-three.vercel.app",
    // credentials:true
}));
app.use(helmet())
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/comments', commentRoute)
app.use('/api/orders', orderRoute)



app.listen(port, ()=>{
    connect();
    console.log(`server started on ${port} port`)
})