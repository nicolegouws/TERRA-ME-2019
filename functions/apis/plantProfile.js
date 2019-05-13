var admin = require("firebase-admin");
// Get the database for our logins
var db = admin.database();
var ref = db.ref("plantProfile");

const get = (req, res) => {
    ref.orderByChild("name")
    .on("value", (data) => {
      res.send(data.val());
    });
};

const search = (req, res) => {
    const search = req.body.search;
    ref.orderByChild("name").equalTo(search).on("value", (data) => {
        res.send(data.val());
  });
};

module.exports = {
    get : get,
    search : search
} 

