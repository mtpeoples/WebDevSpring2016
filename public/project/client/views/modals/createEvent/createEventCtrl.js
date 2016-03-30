(function() {
  angular
      .module("EventTrackerApp")
      .controller("CreateEventController", CreateEventController);

  function CreateEventController($scope, $uibModalInstance) {
    $scope.confirm = function() {
      $uibModalInstance.close();
    }

    $scope.cancel = function() {
      $uibModalInstance.dismiss();
    }
  }
})();
