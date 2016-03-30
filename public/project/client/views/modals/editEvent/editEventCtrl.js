(function() {
  angular
      .module("EventTrackerApp")
      .controller("EditEventController", EditEventController);

  function EditEventController($scope, $uibModalInstance) {
    $scope.confirm = function() {
      $uibModalInstance.close();
    }

    $scope.cancel = function() {
      $uibModalInstance.dismiss();
    }
  }
})();
