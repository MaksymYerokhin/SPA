'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const sceneRepository = require('./SceneRepository');
const dbService = require('./DbService');
const clientId = 1;

// TODO: move to config, create for staging, test and prod
const url = 'mongodb://localhost:27017';

app.use('/', express.static('dist/FrontSPA'))
app.use(bodyParser.json({ limit: '50mb' }));

app.post('/api/scene', (req, res) => {
    sceneRepository.save(clientId, dbService, req.body.data, (_) => res.send());
});

app.get('/api/scene', function (req, res) {
    sceneRepository.get(clientId, dbService, (jsonModel) => res.json({ data: jsonModel }));
})

app.listen(3000, () => console.log('Listening on port 3000'));
