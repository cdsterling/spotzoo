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


const MONGODB_URL = "mongodb+srv://marby123:marby123@cluster0-itdny.mongodb.net/spotzoo1";
const MONGODB_DATABASE = 'spotzoo1';


app.get('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;

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

  db.collection(collectionName)
    .insert(data, (err, results) => {
      if (err) throw err;

      response.json({
        'success': true,
        'results': results,
      });
    });
});

const PORT = 5000;

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
  })
});