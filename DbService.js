const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const dbName = 'spa';
const url = 'mongodb://localhost:27017';
const collectionname = 'models';

// TODO get _id from session
const getScene = (clientId, callback) => {
    const client = new MongoClient(url);

    client.connect((_) => {
        const db = client.db(dbName),
            query = { _id: clientId },
            includeFields = { geoData: 1 },
            collection = db.collection(collectionname);

        collection.find(query, includeFields, (_, cursor) => {
            cursor.limit(1).toArray((err, arr) => {
                client.close();
                callback(arr);
            });
        });
    });
}

// TODO get _id from session
const saveScene = (clientId, data, callback) => {
    const client = new MongoClient(url);

    client.connect((_) => {
        const db = client.db(dbName),
            collection = db.collection(collectionname),
            query = { _id: clientId },
            update = { $set: { geoData: data } },
            options = { upsert: true };

        collection.updateOne(query, update, options, (_, result) => {
            client.close();
            callback(result);
        });
    });
}

module.exports = {
    getScene: getScene,
    saveScene: saveScene
}