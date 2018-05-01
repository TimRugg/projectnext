const db = require("../models");

// Defining methods for the dailyActionsController
module.exports = {
  findById: function(req, res) {
    db.DailyActions
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.DailyActions
      .update(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
