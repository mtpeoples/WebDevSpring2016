(function() {
  angular
      .module("FormBuilderApp")
      .factory("FormService", FormService);

  function FormService() {

    var forms = [
      {"_id": "000", "title": "Contacts", "userId": 123},
      {"_id": "010", "title": "ToDo",     "userId": 123},
      {"_id": "020", "title": "CDs",      "userId": 234},
    ]

    var service = {
      createFormForUser: createFormForUser,
      findAllFormsForUser: findAllFormsForUser,
      deleteFormById: deleteFormById,
      updateFormById: updateFormById
    };

    return service;

    function createFormForUser(userId, form, callback) {
      form._id = (new Date).getTime();
      form.userId = userId;
      forms.push(form);
      return callback(form);
    }

    function findAllFormsForUser(userId, callback) {
      var foundForms = [];

      for(var i = 0; i < forms.length; i++) {
        if(forms[i].userId == userId) {
          foundForms.push(forms[i]);
        }
      }

      return callback(foundForms);
    }

    function deleteFormById(formId, callback) {
      for(var i = 0; i < forms.length; i++) {
        if(forms[i]._id == formId) {
          forms.splice(i, 1);
          return callback(forms);
        }
      }
    }

    function updateFormById(formId, newForm, callback) {
      for(var i = 0; i < forms.length; i++) {
        if(forms[i]._id == formId) {
          forms[i].title = newForm.title;
          return callback(forms[i]);
        }
      }
    }

  }
})();
