module.exports = function(app, model, db) {

  var guid = require('guid');

  app.get('/api/assignment/form/:formId/field', function(req, res) {
    var formId = req.params.formId;
    var fields = model.getFormFields(formId);
    return res.json(fields);
  });

  app.get('/api/assignment/form/:formId/field/:fieldId', function(req, res) {
    var formId = req.params.formId;
    var fieldId = req.params.fieldId;
    var field = model.getFormFieldsById(formId, fieldId);
    return res.json(field);
  });

  app.delete('/api/assignment/form/:formId/field/:fieldId', function(req, res) {
    var formId = req.params.formId;
    var fieldId = req.params.fieldId;
    model.deleteFormFieldById(formId, fieldId);
    return res.send(200);
  });

  app.post('/api/assignment/form/:formId/field', function(req, res) {
    var formId = req.params.formId;
    var newField = req.body;
    newField._id = guid.raw();
    model.createFormField(formId, newField);
    return res.send(200);
  });

  app.put('/api/assignment/form/:formId/field/:fieldId', function(req, res) {
    var formId = req.params.formId;
    var fieldId = req.params.fieldId;
    var updatedField = req.body;
    model.updateFormFieldById(formId, fieldId, updatedField);
    return res.send(200);
  });
}