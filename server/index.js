const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 3001,
  app = express(),
  massive = require('massive'),
  ctrl = require('./controllers/ctrl');
require('dotenv').config();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(console.log);

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname));

app.get('/api/animals', ctrl.getAnimals);
app.put('/api/animals/:type', ctrl.updateAnimal);
app.post('/api/animals', ctrl.postAnimal);
app.listen(port, () => {
  console.log('Server listening on port', port);
});
