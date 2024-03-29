
const express = require('express');
const propertyRoutes = require('./routes/properties')
const userRoutes = require('./routes/users')
const mongoose = require('mongoose')
const cors = require('cors');
//express app 

const app = express();

//Middlewares
app.use(express.json()); //parses the http request's body/data to the 'req' object like body-parser
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method); //Middleware for logging the requests to console our server
    next()                              //This middle ware will run everytime before getting to the requested route coz of 'next' function
})

//Routes
app.use('/api/properties', propertyRoutes); //when user hits this sub-route, these routes will be executed 
app.use('/api/users', userRoutes);

//connect to db
mongoose.connect("mongodb+srv://amanmishra786:AmanKumar786@homehunters.cnokqka.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        //listern for requests only after connection
        app.listen(4000, () => {
            console.log("Connected to DB Listening on port", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })

