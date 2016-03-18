var forms = [
  {
    "_id": "000", "title": "Contacts", "userId": 123,
    "fields": [
      {"_id": "111", "label": "First Name", "type": "TEXT", "placeholder": "First Name"},
      {"_id": "222", "label": "Last Name", "type": "TEXT", "placeholder": "Last Name"},
      {"_id": "333", "label": "Address", "type": "TEXT", "placeholder": "Address"},
      {"_id": "444", "label": "State", "type": "OPTIONS", "options": [
        {"label": "Massachussetts", "value": "MA"},
        {"label": "New Hampshire", "value": "NH"},
      ]},
      {"_id": "555", "label": "ZIP", "type": "TEXT", "placeholder": "ZIP"},
      {"_id": "666", "label": "Email", "type": "EMAIL", "placeholder": "Email"}
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
  findFormByTitle: findFormByTitle
};

function createFormForUser(form) {
  forms.push(form);
  return forms;
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
      return forms;
    }
  }
}

function updateFormById(formId, newForm) {
  for (var i = 0; i < forms.length; i++) {
    if (forms[i]._id == formId) {
      forms[i] = newForm;
      return forms;
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
      return forms[i]
    }
  }
}

module.exports = service;