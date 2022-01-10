const Notice = require("../models/notice");

exports.getAllNotice = (req, res) => {
  Notice.find()
    .sort("-createdAt")
    .exec((err, docs) => {
      if (err) {
        console.log(err);
        return res.status(404).json(err.message);
      }
      return res.status(200).json(docs);
    });
};

exports.createNotice = (req, res) => {
  Notice.create(req.body, (err, doc) => {
    if (err) {
      return res.status(400).json(err.message);
    }
    return res.status(200).json(doc);
  });
};
