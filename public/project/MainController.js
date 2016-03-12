(function() {
  'use strict'
  angular
        .module("EventTrackerApp")
        .controller("MainController", MainController);

  function MainController($scope, $location) {
    $scope.location = $location;
  }
})();