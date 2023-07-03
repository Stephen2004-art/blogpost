import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import userAuth from './routes/auth/userAuth.js'
import adminAuth from './routes/auth/adminAuth.js'
import storyRoutes from './routes/storyRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

const app = express();
const PORT = 5001;
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('uploads'));


const mongoUri = 'mongodb+srv://muthuostephen04:2NObGZtbyvSXCreT@cluster0.dj4cuye.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri)
    .then(()=>console.log('MongoDb is connected'))
    .catch((error)=>console.log(error))


app.use('/', userAuth)
app.use('/admin', adminAuth)
app.use('/stories', storyRoutes)
app.use('/category', categoryRoutes)



app.listen(PORT, ()=>{
    console.log('Server is listening on PORT:'+PORT)
});

