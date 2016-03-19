// passing app from require since this
// is already running in a server
module.exports = function(app, model, db) {

  app.post('/api/assignment/user', function(req, res) {
    var newUser = req.body;
    var updatedUser = model.create(newUser);
    res.json(updatedUser);
  });

  app.get('/api/assignment/user', function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    if (username || password) {
      var user = model.findUserByCredentials(username, password);
      return res.json(user);
    }
    var users = model.findAll();
    return res.json(users);
  });

  app.get('/api/assignment/user/:id', function(req, res) {
    var id = req.params.id;
    var user = model.findById(id);
    return res.json(user);
  });

  app.put('/api/assignment/user/:id', function(req, res) {
    var id = req.params.id;
    var updatedUser = req.body;
    var updatedUser = model.update(id, updatedUser);
    return res.json(updatedUser);
  });

  app.delete('/api/assignment/user/:id', function(req, res) {
    var id = req.params.id;
    model.delete(id);
    return res.send(200);
  });
}