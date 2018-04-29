const db = require("../models");

// Defining methods for the actionsController
module.exports = {
  findAll: function(req, res) {
    db.Action
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Action
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Action
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Action
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Action
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addAction: function(req, res) {
    db.Project
      .findOneAndUpdate(
                        { _id: req.params.id }, //condition-find the project
                        req.body
                        // { $push: req.body }, //update-append action id to project
                        // { $push: { actions: req.body._id } }, //update-append action id to project
                        )
.then(console.log("actionsController req.body"))
.then(console.log(req.body))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
