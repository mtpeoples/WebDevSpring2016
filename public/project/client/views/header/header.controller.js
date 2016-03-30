(function() {
  angular
      .module("EventTrackerApp")
      .controller("HeaderController", HeaderController);

  function HeaderController($scope, $rootScope, $location) {
    $scope.logout = function() {
      $rootScope.user = null;
      $location.path("/browse");
    }
  }
})();
