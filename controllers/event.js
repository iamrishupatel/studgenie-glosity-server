const Event = require("../models/event");

exports.getAllEvents = async (req, res) => {
  Event.find()
    .sort("date")
    .exec((err, docs) => {
      if (err) {
        return res.status(404).json(err);
      }
      return res.status(200).json(docs);
    });
};

exports.createEvent = (req, res) => {
  Event.create(req.body, (err, doc) => {
    if (err) {
      return res.status(400).json(err.message);
    }
    return res.status(200).json(doc);
  });
};
