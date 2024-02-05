import pkg from 'express';
import connection from './database/db.js';
const app=pkg();
const PORT=8000;

connection();

app.listen(PORT, ()=>console.log("Server is running "))