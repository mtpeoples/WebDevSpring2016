module.exports = function(app, model, db) {

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
    var fields = model.deleteFormFieldById(formId, fieldId);
    return res.json(fields);
  });

  app.post('/api/assignment/form/:formId/field', function(req, res) {
    var formId = req.params.formId;
    var newForm = req.body;
    var fields = model.createFormField(formId, newForm);
    return res.json(fields);
  });

  app.put('/api/assignment/form/:formId/field/:fieldId', function(req, res) {
    var formId = req.params.formId;
    var fieldId = req.params.fieldId;
    var updatedField = req.body;
    var fields = model.updateFormFieldById(formId, fieldId, updatedField);
    return res.json(fields);
  });
}