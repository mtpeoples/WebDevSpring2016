(function() {
  angular
      .module("EventTrackerApp")
      .controller("ManageController", ManageController);

  function ManageController($scope, EventService, $location, $uibModal) {
    if(!$scope.user) {
      $location.path('/login');
    }

    EventService.getEventsByUser($scope.user._id, function(events) {
      $scope.events = events;
    });

    $scope.deleteEvent = function(event) {

      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'views/modals/deleteEvent/deleteEvent.html',
        controller: 'DeleteEventController',
        size: "sm",

      });

      modalInstance.result.then(function() {
        EventService.deleteEvent(event._id, function() {
          EventService.getEventsByUser($scope.user._id, function(events) {
            $scope.events = events;
          });
        });
      }, function () {
        console.log("Didn't delete")
      });
    };

    $scope.editEvent = function(event) {
      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'views/modals/editEvent/createEvent.html',
        controller: 'EditEventController',
        size: "lg",
        resolve: {
          event: function() {
            return event;
          }
        }
      });

      modalInstance.result.then(function(updatedEvent) {
        EventService.updateEvent(event._id, updatedEvent, function(event) {
          EventService.getEventsByUser($scope.user._id, function(events) {
            $scope.events = events;
          });
        });
      }, function () {
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
        EventService.createEvent(createdEvent, function() {
          EventService.getEventsByUser($scope.user._id, function(events) {
            $scope.events = events;
          });
        });
      }, function () {
        console.log("Cancel create")
      });
    };
  }
})();
