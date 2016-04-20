(function() {
  angular
      .module("EventTrackerApp")
      .controller("CreateEventController", CreateEventController);

  function CreateEventController($scope, $uibModalInstance) {
    $scope.form = {
      title: "",
      location: "",
      description: "",
      date: ""
    }

    $scope.confirm = function() {
      $uibModalInstance.close($scope.form);
    }

    $scope.cancel = function() {
      console.log($scope.form)
      $uibModalInstance.dismiss();
    }
  }
})();
