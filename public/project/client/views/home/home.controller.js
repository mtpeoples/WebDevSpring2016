(function() {
  angular
      .module("EventTrackerApp")
      .controller("HomeController", HomeController);

  function HomeController($scope, $rootScope, EventService) {
    $rootScope.state = "home";

    EventService.getEvents()
      .then(function(response) {
        $scope.events = response.data;
      });

    $scope.search = "";

    $scope.searchVisible = false;

    $scope.toggleSearch = function() {
      $scope.searchVisible = !$scope.searchVisible;
      $scope.search = "";
    }
  }
})();