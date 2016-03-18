// passing app from require since this
// is already running in a server
module.exports = function(app, model, db) {

  app.post('/api/assignment/user', function(req, res) {
    var newUser = req.body;
    var updatedUsers = model.create(newUser);
    res.json(updatedUsers);
  });

  app.get('/api/assignment/user', function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    if (username || password) {
      var user = model.findUserByCredentials(username, password);
      res.json(user);
    }
    var users = model.findAll();
    res.json(users);
  });

  app.get('/api/assignment/user/:id', function(req, res) {
    var id = req.params.id;
    var user = model.findById(id);
    res.json(user);
  });

  app.get('/api/assignment/user?username=username', function(req, res) {
    var users = model.findAll();
    res.json(users);
  });

  app.put('/api/assignment/user/:id', function(req, res) {
    var id = req.params.id;
    var updatedUser = req.body;
    var updatedUsers = model.update(id, updatedUser);
    res.json(updatedUsers);
  });

  app.delete('/api/assignment/user/:id', function(req, res) {
    var id = req.params.id;
    var updatedUsers = model.delete(id);
    res.json(updatedUsers);
  });
}