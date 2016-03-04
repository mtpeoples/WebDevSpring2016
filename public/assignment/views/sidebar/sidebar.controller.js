(function() {
  angular
      .module("FormBuilderApp")
      .controller("SidebarController", SidebarController);

  function SidebarController($scope) {

    $scope.active = $scope.location.$$url == "/home";
  }
})();