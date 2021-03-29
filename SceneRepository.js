const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const dbName = 'spa';
const url = 'mongodb://localhost:27017';
const collectionname = 'models';
const clientId = 1;

// TODO get _id from session
const getScene = (callback) => {
    const client = new MongoClient(url);

    client.connect((_) => {
        const db = client.db(dbName),
            query = { _id: clientId },
            includeFields = { geoData: 1 },
            collection = db.collection(collectionname);

        collection.find(query, includeFields, (_, cursor) => {
            cursor.limit(1).toArray((err, arr) => {
                let jsonModelString = arr.length ? arr[0].geoData : null;
                client.close();
                callback(jsonModelString);
            });
        });
    });
}

// TODO get _id from session
const saveScene = (data, callback) => {
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