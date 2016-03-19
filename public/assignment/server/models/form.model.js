module.exports = function(db) {

  var forms = [
    {
      "_id": "000", "title": "Contacts", "userId": 123,
      "fields": [
        {"_id": "111", "label": "First Name", "type": "TEXT", "placeholder": "First Name"},
        {"_id": "222", "label": "Last Name", "type": "TEXT", "placeholder": "Last Name"},
        {"_id": "333", "label": "Address", "type": "TEXT", "placeholder": "Address"},
        {
          "_id": "444", "label": "State", "type": "OPTIONS", "options": [
          {"label": "Massachussetts", "value": "MA"},
          {"label": "New Hampshire", "value": "NH"},
        ]
        },
        {"_id": "555", "label": "ZIP", "type": "TEXT", "placeholder": "ZIP"}
      ]
    },
    {
      "_id": "010", "title": "ToDo", "userId": 234,
      "fields": [
        {"_id": "777", "label": "Title", "type": "TEXT", "placeholder": "Title"},
        {"_id": "888", "label": "Description", "type": "TEXTAREA", "placeholder": "Title"},
        {"_id": "999", "label": "Due Date", "type": "DATE"},
      ]
    }
  ]

  var service = {
    create: createFormForUser,
    findAll: findAllForms,
    findAllForUser: findAllFormsForUser,
    delete: deleteFormById,
    update: updateFormById,
    findById: findById,
    findFormByTitle: findFormByTitle,
    getFormFields: getFormFields,
    getFormFieldsById: getFormFieldsById,
    deleteFormFieldById: deleteFormFieldById,
    createFormField: createFormField,
    updateFormFieldById: updateFormFieldById
  };

  return service;

  function createFormForUser(form) {
    forms.push(form);
    return form;
  }

  function findAllForms() {
    return forms;
  }

  function findAllFormsForUser(userId) {
    var foundForms = [];

    for (var i = 0; i < forms.length; i++) {
      if (forms[i].userId == userId) {
        foundForms.push(forms[i]);
      }
    }

    return foundForms;
  }

  function deleteFormById(formId) {
    for (var i = 0; i < forms.length; i++) {
      if (forms[i]._id == formId) {
        forms.splice(i, 1);
        return;
      }
    }
  }

  function updateFormById(formId, newForm) {
    for (var i = 0; i < forms.length; i++) {
      if (forms[i]._id == formId) {
        forms[i] = newForm;
        return newForm;
      }
    }
  }

  function findById(formId) {
    for (var i = 0; i < forms.length; i++) {
      if (forms[i]._id == formId) {
        return forms[i];
      }
    }
  }

  function findFormByTitle(title) {
    for (var i = 0; i < forms.length; i++) {
      if (forms[i].title == title) {
        return forms[i].fields
      }
    }
  }

  function getFormFields(formId) {
    for (var i = 0; i < forms.length; i++) {
      if (forms[i]._id == formId) {
        return forms[i].fields
      }
    }
  }

  function getFormFieldsById(formId, fieldId) {
    for (var i = 0; i < forms.length; i++) {
      if (forms[i]._id == formId) {
        var form = forms[i];
        for (var j = 0; j < form.fields.length; j++) {
          if (form.fields[j] == fieldId) {
            return form.fields[j];
          }
        }
      }
    }
  }

  function deleteFormFieldById(formId, fieldId) {
    for (var i = 0; i < forms.length; i++) {
      if (forms[i]._id == formId) {
        var form = forms[i];
        for (var j = 0; j < form.fields.length; j++) {
          if (form.fields[j]._id == fieldId) {
            form.fields.splice(j, 1);
            return;
          }
        }
      }
    }
  }

  function createFormField(formId, form) {
    for (var i = 0; i < forms.length; i++) {
      if (forms[i]._id == formId) {
        forms[i].fields.push(form);
        return forms[i].fields;
      }
    }
  }

  function updateFormFieldById(formId, fieldId, field) {
    for (var i = 0; i < forms.length; i++) {
      if (forms[i]._id == formId) {
        var form = forms[i];
        for (var j = 0; j < form.fields.length; j++) {
          if (form.fields[j]._id == fieldId) {
            form.fields[j] = field;
            return;
          }
        }
      }
    }
  }
}