const express = require('express');
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')
const mongoose = require('mongoose')

const app = express();
//Connect DB
 mongoose.connect('mongodb://127.0.0.1/smartedu-db');

//TEMPLATE ENGINE
app.set("view engine", "ejs")

//Middlewares
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))

//Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);



const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
