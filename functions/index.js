var functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp();

const plantProfile = require('./apis/plantProfile');
const myGarden = require('./apis/myGarden');

module.exports = { 
    'getPlantProfile': functions.https.onRequest(plantProfile.get),
    'searchPlantProfile': functions.https.onRequest(plantProfile.search),
    'getMyGarden': functions.https.onRequest(myGarden.get),
    'searchMyGarden': functions.https.onRequest(myGarden.search)
};
