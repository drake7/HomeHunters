
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri = "mongodb+srv://homehunter:csis@cluster0.hcs7q1d.mongodb.net/test";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// // import routes
// const bookRouter = require('./routes/books');

// // adding /books to before all routes
// app.use('/books', bookRouter);

app.get('/properties', (req, res) => {
    MongoClient.connect(uri, function(err, client) {
      if (err) {
        console.log(err);
        res.status(500).send('Error connecting to database');
      }
      const db = client.db('homehunter_db');
      const properties = db.collection('properties');
      properties.find().toArray(function(err, results) {
        if (err) {
          console.log(err);
          res.status(500).send('Error retrieving properties from database');
        }
        res.send(results);
        client.close();
      });
    });
  });


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
