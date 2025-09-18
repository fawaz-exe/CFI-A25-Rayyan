import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://khan182007_db_user:eAvkI4Zb0xyjSU7e@cluster0.jbn12bb.mongodb.net/contact-form');
        console.log('Connected to MongoDB 🌍');
    } catch (error) {
        console.log(error);
    }
}

connectDB();

export default connectDB;