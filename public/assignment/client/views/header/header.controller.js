(function() {
  angular
      .module("FormBuilderApp")
      .controller("HeaderController", HeaderController);

  function HeaderController($scope, $rootScope) {
    $scope.logout = function() {
      $rootScope.user = null;
    }
  }
})();
