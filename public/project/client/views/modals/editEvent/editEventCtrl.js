(function() {
  angular
    .module("EventTrackerApp")
    .controller("EditEventController", EditEventController);

  function EditEventController($scope, $uibModalInstance, event) {

    $scope.form = {
      title: event.title,
      location: event.location,
      description: event.description,
      date: event.date
    }

    $scope.confirm = function() {
      $uibModalInstance.close($scope.form);
    }

    $scope.cancel = function() {
      $uibModalInstance.dismiss();
    }
  }
})();
