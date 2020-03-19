const db = require('../models');

module.exports = {

  create: function(req, res) {
    db.Book.create(req.body)
      .then(bookItem => res.json(bookItem))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(bookItem => res.json(bookItem))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(bookItem => res.json(bookItem))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(bookItem => dbBook.remove())
      .then(bookItem => res.json(bookItem))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(bookItem => res.json(bookItem))
      .catch(err => res.status(422).json(err));
  }
};
