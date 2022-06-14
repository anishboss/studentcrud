const express = require('express');
const app = express();
const route = require('./routes/web');
const connectDb = require('./db/connectDb');
const DATABASE_URL = "mongodb://localhost:27017/;"



app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs');
connectDb(DATABASE_URL);


app.use(route);

app.listen(8000,()=>{
    console.log('server started');
});