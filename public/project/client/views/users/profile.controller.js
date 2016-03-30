(function() {
  angular
    .module("EventTrackerApp")
    .controller("ProfileController", ProfileController);

  function ProfileController($scope, $rootScope, UserService) {

    $rootScope.state = "profile";

    $scope.form = {
      firstName: $rootScope.user.firstName,
      lastName: $rootScope.user.lastName,
      username: $rootScope.user.username,
      password: $rootScope.user.password
    }

    $scope.update = function() {
      UserService.updateUser($rootScope.user._id, $scope.form)
        .then(function(response) {
          var user = response.data;
          $rootScope.user = user;
          $scope.form.firstName = user.firstName;
          $scope.form.lastName = user.lastName;
          $scope.form.username = user.username;
          $scope.form.password = user.password;
        });
    }
  }
})();
