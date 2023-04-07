require('dotenv').config()
const express = require('express');
const propertyRoutes = require('./routes/properties')
const mongoose = require('mongoose')
//express app 

const app = express();

//Middlewares
app.use(express.json()); //parses the http request's body/data to the 'req' object like body-parser

app.use((req, res, next) => {
    console.log(req.path, req.method); //Middleware for logging the requests to console our server
    next()                              //This middle ware will run everytime before getting to the requested route coz of 'next' function
})

//Routes
app.use('/api/properties', propertyRoutes); //when user hits this sub-route, these routes will be executed 

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listern for requests only after connection
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB Listening on port", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })