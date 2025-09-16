// const express = require('express'); ES5 old syntax common js syntax
import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';

// Database Connection
import './dbConnect.js';

// Models
import contactModel from './models/ContactModel.js';



const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.get('/', (req,res)=>{
    res.send("Hello!");
})

app.get('/contact', (req,res)=>{
    res.json({status: 'Visited Localhost'});
});

app.post('/contact', async (req,res)=>{
    try {
        console.log(req.body);

        // File DB Ops
        // let fileData = await fs.readFile('data.json');
        // fileData = JSON.parse(fileData);
        // const found = fileData.find((ele)=> ele.email == req.body.email);
        // if(found){
        //     return res.status(400).json({error: "Email address already exists."});
        // }
        // fileData.push(req.body);
        // await fs.writeFile('data.json', JSON.stringify(fileData));

        // @MongoDB

        const formData = new contactModel(req.body);
        console.log(formData);
        await formData.save();





        res.json({status: 'Data sent'});
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT} ✅`);
})