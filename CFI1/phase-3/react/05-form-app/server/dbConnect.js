import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://fawaz_db_user:NqBKHtlejf7TWIBI@cluster0.je7dxoa.mongodb.net/contact-form');
        console.log('Connected to MongoDB 🌍');
    } catch (error) {
        console.log(error);
    }
}

connectDB();

export default connectDB;