
var functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp();

const plantProfile = require('./apis/plantProfile');
const myGarden = require('./apis/myGarden');
const doctor = require ('./apis/doctor');
const userProfile = require ('./apis/userProfile');


module.exports = { 
    'getPlantProfile': functions.https.onRequest(plantProfile.get),
    'searchPlantProfile': functions.https.onRequest(plantProfile.search),
    'getMyGarden': functions.https.onRequest(myGarden.get),
    'searchMyGarden': functions.https.onRequest(myGarden.search),
    'getdoctor' : functions.https.onRequest(doctor.get),
    'searchDoctor': functions.https.onRequest(doctor.search),
    'getUserProfile': functions.https.onRequest(userProfile.get),
    'searchUserProfile': functions.https.onRequest(userProfile.search)
};