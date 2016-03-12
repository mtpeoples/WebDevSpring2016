(function() {
  angular
      .module("EventTrackerApp")
      .controller("RegisterController", RegisterController);

  function RegisterController($scope, $rootScope, UserService, $location) {
    $scope.form = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      verifyPassword: "",
      roles: []
    }

    $scope.register = function() {
      UserService.createUser($scope.form, function(user) {
        $rootScope.user = user;
        $location.path("/profile");
      });
    }
  }
})();