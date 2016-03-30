(function() {
  angular
      .module("EventTrackerApp")
      .controller("DeleteEventController", DeleteEventController);

  function DeleteEventController($scope, $uibModalInstance) {
    $scope.confirm = function() {
      $uibModalInstance.close();
    }

    $scope.cancel = function() {
      $uibModalInstance.dismiss();
    }
  }
})();

