(function(){
  angular
      .module("FormBuilderApp")
      .controller("HomeController", HomeController);

  function HomeController($scope, $rootScope) {
    $rootScope.state = "home";
  }
})();