(function() {
  'use strict'
  angular
      .module("DataModelApp")
      .controller("UserController", UserController);

  function UserController($scope, $location) {
    $scope.users = [
      { _id: 123,
        firstName: "Alice",
        lastName: "Wonderland",
        username: "alice",
        password: "alice",
      },
      { _id: 234,
        firstName: "Bob",
        lastName: "Hope",
        username: "bob",
        password: "bob"
      },
      { _id: 345,
        firstName: "Charlie",
        lastName: "Brown",
        username: "charlie",
        password: "charlie"
      },
      { _id: 456,
        firstName: "Dan",
        lastName: "Craig",
        username: "dan",
        password: "dan"
      },
      { "_id": 567,
        firstName: "Edward",
        lastName: "Norton",
        username: "ed",
        password: "ed"
      }
    ]
    $scope.form = {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    }

    $scope.selected = -1;

    $scope.create = function() {
      $scope.users.push($scope.form);
      $scope.form = {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
      }
    }

    $scope.delete = function(user) {
      var index = $scope.users.indexOf(user);

      if(index !== -1) {
        $scope.users.splice(index, 1);
      }
    }

    $scope.select = function(index) {
      $scope.selected = index;
      $scope.form = Object.create($scope.users[index]);
    }

    $scope.update = function() {
      $scope.users[$scope.selected] = $scope.form;
    }
  }
})();
