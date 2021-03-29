
// TODO get _id from session
const getScene = (clientId, dbService, callback) => {
    dbService.getScene(clientId, (arr) => {
        let jsonModel = arr.length ? arr[0].geoData : null;
        callback(jsonModel);
    });
}

// TODO get _id from session
const saveScene = (clientId, dbService, data, callback) => {
    dbService.saveScene(clientId, data, (result) => callback(result));
}

module.exports = {
    get: getScene,
    save: saveScene
}