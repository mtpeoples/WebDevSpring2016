// passing app from require since this
// is already running in a server
module.exports = function(app, model) {

  app.post('/api/assignment/user', function(req, res) {
    var newUser = req.body;
    model.create(newUser).then(function(doc) {
      res.json(newUser);
    }, function(err) {
      res.status(400).send(err);
    });
  });

  app.get('/api/assignment/user', function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    if (username || password) {
      model.findUserByCredentials(username, password).then(function(user) {
        res.json(user);
      }, function(err) {
        res.status(400).send(err);
      })
    }
    model.findAll().then(function(users) {
      res.json(users);
    }, function(err) {
      res.status(400).send(err);
    });
  });

  app.get('/api/assignment/user/:id', function(req, res) {
    var id = req.params.id;
    model.findById(id).then(function(user) {
      res.json(user);
    }, function(err) {
      res.status(400).send(err);
    });
  });

  app.put('/api/assignment/user/:id', function(req, res) {
    var id = req.params.id;
    var updatedUser = req.body;
    model.update(id, updatedUser).then(function(user) {
      console.log(user);
      res.json(updatedUser);
    }, function(err) {
      res.status(400).send(err);
    });
  });

  app.delete('/api/assignment/user/:id', function(req, res) {
    var id = req.params.id;
    model.delete(id).then(function() {
      res.status(200);
    }, function(err) {
      res.status(400).send(err);
    });
  });
}
