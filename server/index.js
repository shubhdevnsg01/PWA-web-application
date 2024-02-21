import pkg from 'express';
import connection from './database/db.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import Route from './routes/routes.js';

const app=pkg();
const PORT=8000;

connection();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Route)
app.listen(PORT, ()=>console.log("Server is running "))