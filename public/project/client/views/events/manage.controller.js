(function() {
  angular
    .module("EventTrackerApp")
    .controller("ManageController", ManageController);

  function ManageController($scope, EventService, $location, $uibModal, $rootScope) {
    if (!$scope.user) {
      $location.path('/login');
    }

    EventService.getEventsByUser($scope.user._id)
      .then(function(response) {
        $scope.events = response.data;
      });

    $scope.deleteEvent = function(event) {

      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'views/modals/deleteEvent/deleteEvent.html',
        controller: 'DeleteEventController',
        size: "sm",

      });

      modalInstance.result.then(function() {
        EventService.deleteEvent(event._id)
          .then(function(response) {
            EventService.getEventsByUser($scope.user._id)
              .then(function(response) {
                $scope.events = response.data;
              });
          });
      }, function() {
        console.log("Didn't delete")
      });
    };

    $scope.editEvent = function(event) {
      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'views/modals/editEvent/editEvent.html',
        controller: 'EditEventController',
        size: "lg",
        resolve: {
          event: function() {
            return event;
          }
        }
      });

      modalInstance.result.then(function(updatedEvent) {
        EventService.updateEvent(event._id, updatedEvent)
          .then(function(response) {
            EventService.getEventsByUser($scope.user._id)
              .then(function(response) {
                $scope.events = response.data;
              });
          });
      }, function() {
        console.log("Cancel edit")
      });
    };

    $scope.createEvent = function() {
      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'views/modals/createEvent/createEvent.html',
        controller: 'CreateEventController',
        size: "lg",
        resolve: {
          event: function() {
            return event;
          }
        }
      });

      modalInstance.result.then(function(createdEvent) {
        createdEvent.user = $rootScope.user._id;
        createdEvent.image = "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png";
        EventService.createEvent(createdEvent)
          .then(function(response) {
            EventService.getEventsByUser($scope.user._id)
              .then(function(response) {
                $scope.events = response.data;
              });
          });
      }, function() {
        console.log("Cancel create")
      });
    };
  }
})();
