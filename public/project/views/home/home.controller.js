(function() {
  angular
      .module("EventTrackerApp")
      .controller("HomeController", HomeController);

  function HomeController($scope, $rootScope, EventService) {
    $rootScope.state = "home";

    EventService.getEvents(function(events) {
      $scope.events = events;
    });

    $scope.search = "";

    $scope.searchVisible = false;

    $scope.toggleSearch = function() {
      $scope.searchVisible = !$scope.searchVisible;
      $scope.search = "";
    }
  }
})();