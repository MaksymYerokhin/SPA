'use strict';

const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb')
//const assert = require('assert');
const app = express();
const bodyParser = require("body-parser");
const dbName = 'spa';
const url = 'mongodb://localhost:27017';
const collectionname = 'models';

const MongoClient = mongodb.MongoClient;
var DbService = require('./SceneRepository')

app.use('/', express.static('dist/FrontSPA'))
app.use(bodyParser.json({ limit: '50mb' }));

app.post('/api/save', (req, res) => {
    DbService.saveScene(req.body.data, (result) => res.send());
});

app.get('/api', function (req, res) {
    DbService.getScene((jsonModelString) => res.json({ data: jsonModelString }));
})

app.listen(3000, () => console.log('Listening on port 3000'));
