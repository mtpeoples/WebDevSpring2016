(function(){
  angular
      .module("FormBuilderApp")
      .controller("LoginController", LoginController);

  function LoginController($scope, $rootScope, UserService, $location) {
    $scope.form = {
      username: "",
      password: "",
    }

    $scope.login = function() {
      UserService.findUserByCredentials($scope.form.username, $scope.form.password, function(user) {
        if(user) {
          $rootScope.user = user;
          $location.path("/profile");
        }
      });
    }
  }
})();