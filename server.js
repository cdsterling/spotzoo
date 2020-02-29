// const express = require('express');

// const app = express();

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {name : 'costco', latitude: 37.671340942,longitude : -122.085540771},
//     {name : 'southland', latitude: 37.652370453, longitude: -122.103828430 },
//     {name : 'bart', latitude: 37.6698, longitude: -122.0870 },
//   ];

//   res.json(customers);
// });

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
const ObjectId = require('mongodb').ObjectId;

const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_DATABASE = 'spotzoo1';


app.get('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  console.log("method app.GET is invoked, collectionName:", collectionName);


  const query = request.query || {};
  db.collection(collectionName)
    .find(query)
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    });
});

app.post('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const data = request.body;
  console.log("method app.POST is invoked, data:", data);


  db.collection(collectionName)
    .insertOne(data, (err, results) => {
      if (err) throw err;

      response.json({
        'success': true,
        'results': results,
      });
    });
});

app.delete('/api/mongodb/:collectionName/', (request, response) => {
  
  const collectionName = request.params.collectionName;
  const query = request.query;
  console.log("method app.DELETE is invoked, query:", query)

  // Due to a requirement of MongoDB, whenever we query based on _id field, we
  // have to do it like this using ObjectId
  if (query._id) {
    query._id = ObjectId(query._id);
  }

  db.collection(collectionName)
    .deleteOne(query, (err, results) => {
      if (err) throw err;

      // If we deleted exactly 1, then success, otherwise failure
      if (results.result.n === 1) {
        response.json({
          success: true,
        });
      } else {
        response.json({
          success: false,
        });
      }
    })
});



function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);

let db;

MongoClient.connect(MONGODB_URL, (err, client) => {
  if (err) throw err;
  console.log("--MongoDB connection successful");
  db = client.db(MONGODB_DATABASE);

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    console.log(`Mongo Url ${MONGODB_URL}`)
  })
});