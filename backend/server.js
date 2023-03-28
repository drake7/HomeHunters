const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const Property = require('./schemas.js');


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

//   app.post('/property', (req, res) => {
//     MongoClient.connect(uri, function(err, client) {
//       if (err) {
//         console.log(err);
//         res.status(500).send('Error connecting to database');
//       }

//       const db = client.db('homehunter_db');
//       const properties = db.collection('properties');

//       properties.insertOne({
//         address: "123 Main St",
//         city: "Anytown",
//         state: "CA",
//         zip: "12345"
//       }, function(err, result) {
//         if (err) {
//             console.log(err);
//             res.status(500).send('Error retrieving properties from database');
//         } else {
//             res.send(result);
//         }
//       });
//       client.close();
//     }) // end of mongo client
    
//   })


app.post('/property', function(req, res) {
const property = new Property({
    property_id: req.body.property_id,
    category: req.body.category,
    bed: req.body.bed,
    bath: req.body.bath,
    address: {
    city: req.body.address.city,
    street: req.body.address.street,
    zipcode: req.body.address.zipcode,
    },
    furnishing: req.body.furnishing,
    carpet_area_sqm: req.body.carpet_area_sqm,
    move_in_date: new Date(req.body.move_in_date),
    tags: req.body.tags,
    landlord_user_id: req.body.landlord_user_id,
    lease_terms: req.body.lease_terms,
    imgs: req.body.imgs,
    feature_img: req.body.feature_img,
    rent_price: req.body.rent_price,
});

// Save the property to the database
property.save(function(err) {
    if (err) throw err;
    res.send('Property created!');
});
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
