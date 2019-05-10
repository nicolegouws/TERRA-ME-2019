var admin = require("firebase-admin");
var db = admin.database();
var ref = db.ref("doctor");

const get = (req, res) => {
    ref.orderByChild("_symptom")
    .on("value", (data) => {
      res.send(data.val());
    });
};

const search = (req, res) => {
    const search = req.body.search;
    ref.orderByChild("cause").equalTo(search).on("value", (data) => {
    res.send(data.val());
  });
};

module.exports = {
    get : getFn,
    search : searchFn
}