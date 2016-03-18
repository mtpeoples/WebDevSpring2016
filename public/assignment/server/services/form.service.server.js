var guid = require('/node_modules/guid/guid.js');

module.exports = function(app, model, db) {

  app.get('/api/assignment/user/:userId/form', function(req, res) {
    var userId = req.params.userId;
    var forms = model.findAllForUser(userId);
    res.json(forms);
  });

  app.get('/api/assignment/form/:formId', function(req, res) {
    var formId = req.params.formId;
    var form = model.findById(formId);
    res.json(form);
  });

  app.delete('/api/assignment/form/:formId', function(req, res) {
    var formId = req.params.formId;
    var forms = model.delete(formId);
    res.json(forms);
  });

  app.post('/api/assignment/user/:userId/form', function(req, res) {
    var userId = req.params.userId;
    var newForm = req.body;
    newForm._id = guid.raw();
    var forms = model.create(newForm);
    res.json(forms);
  });

  app.put('/api/assignment/form/:formId', function(req, res) {
    var formId = req.params.formId;
    var updatedForm = req.body;
    var updatedForms = model.update(formId, updatedForm);
    res.json(updatedForms);
  });
}