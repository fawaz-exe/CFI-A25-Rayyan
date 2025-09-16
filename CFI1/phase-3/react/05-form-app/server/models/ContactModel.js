import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    firstVisit: {
        type: String
    }
})

//                                 Name of Model, Schema,    Name of the collection
const contactModel = mongoose.model('ContactForm', contactSchema,'feedback');

export default contactModel;