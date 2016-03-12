(function() {
  'use strict'
  angular
        .module("DataModelApp")
        .controller("MainController", MainController);

  function MainController($scope, $location) {
    $scope.location = $location;
  }
})();