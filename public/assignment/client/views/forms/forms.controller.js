(function() {
  angular
      .module("FormBuilderApp")
      .controller("FormController", FormController);

  function FormController($scope, $rootScope, FormService) {
    $rootScope.state = "forms";

    $scope.forms = [];

    FormService.findAllFormsForUser($rootScope.user._id, function(forms) {
      $scope.forms = forms
    });

    $scope.form = {}

    $scope.addForm = function() {
      FormService.createFormForUser($rootScope.user._id, $scope.form, function(form) {
        $scope.forms.push(form);
      })
    }

    $scope.updateForm = function() {
      FormService.updateFormById($scope.form._id, $scope.form, function(form) {
        FormService.findAllFormsForUser($rootScope.user._id, function(forms) {
          $scope.forms = forms;
        });
      });
    }

    $scope.deleteForm = function(form) {
      FormService.deleteFormById(form._id, function(forms) {
        FormService.findAllFormsForUser($rootScope.user._id, function(forms) {
          $scope.forms = forms;
        });
      });
    }

    $scope.selectForm = function(form) {
      $scope.form = form;
    }

  }
})();