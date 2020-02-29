const path = require('path');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const app = express();
app.use(express.json());

// const PORT = process.env.PORT || 5000;
// const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://marby123:marby123@cluster0-itdny.mongodb.net/spotzoo1";
// const MONGODB_DATABASE = 'spotzoo1';


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



/////////////////////////////////////////////
// Boilerplate, no need to touch what's below

/////////////////////////////////////////////
// Logger & configuration
function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
  }
  app.use(logger);
  /////////////////////////////////////////////
  
  
  // For production, handle any requests that don't match the ones above
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  // Wild-card, so handle everything else
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  
  
  // Set up configuration variables
  if (!process.env.MONGODB_URI) {
    console.log('- Error - Must specify the following env variables:');
    console.log("MONGODB_URI='mongodb://someUser:somePW@site.com:1234/someDB'");
    console.log('- (See README.md)');
    process.exit(1);
  }
  const MONGODB_URL = process.env.MONGODB_URI;
  const splitUrl = MONGODB_URL.split('/');
  const mongoDbDatabaseName = splitUrl[splitUrl.length - 1];
  
  let db;
  // First connect to MongoDB, then start HTTP server
  MongoClient.connect(MONGODB_URL, {useNewUrlParser: true}, (err, client) => {
    if (err) throw err;
    console.log("--MongoDB connection successful");
    db = client.db(mongoDbDatabaseName);
  
    // Start the server
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`
        *********************************************
        * Insecure prototyping backend is running!  *
        * Only use for prototyping                  *
        * Backend server up at ${PORT}              *
        *********************************************
      `);
    })
  });