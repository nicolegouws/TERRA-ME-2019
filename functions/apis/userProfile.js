var admin = require("firebase-admin");
const db = admin.database();
const ref = db.ref("userProfile");

const get = (req, res) => {
    ref.orderByChild("_name")
    .on("value", (data) => {
      res.send(data.val());
    });
};

const search = (req, res) => {
    const search = req.body.search;
    ref.orderByChild("status").equalTo(search).on("value", (data) => {
    res.send(data.val());
  });
};

module.exports = {
    get : getFn,
    search : searchFn
}