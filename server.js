'use strict';

const express = require('express');
const mongodb = require('mongodb');
const app = express();
const bodyParser = require("body-parser");
var DbService = require('./SceneRepository');

// TODO: move to config, create for staging, test and prod
const url = 'mongodb://localhost:27017';

app.use('/', express.static('dist/FrontSPA'))
app.use(bodyParser.json({ limit: '50mb' }));

app.post('/api/save', (req, res) => {
    DbService.saveScene(req.body.data, (_) => res.send());
});

app.get('/api', function (req, res) {
    DbService.getScene((jsonModelString) => res.json({ data: jsonModelString }));
})

app.listen(3000, () => console.log('Listening on port 3000'));
