import express from 'express'
import dotenv from 'dotenv'
import Connection from './database/db.js';
import DefaultData from './default.js';

const app = express()

dotenv.config()

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME,PASSWORD);


DefaultData();


app.listen(()=>{
    console.log('Server is running on port 3000');
})

