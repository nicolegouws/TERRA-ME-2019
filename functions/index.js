var functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp();

const doctor = require ('.apis/doctor');
const userProfile = require ('.apis/userProfile');

module.exports = {
    getdoctor: functions.https.onRequest(doctor.get),
    searchdoctor: functions.https.onRequest(doctor.search),
    getUserProfile: functions.https.onRequest(userProfile.get),
    searchuserProfile: functions.https.onRequest(userProfile.search)
};