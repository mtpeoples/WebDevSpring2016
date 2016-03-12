(function() {
  'use strict'
  angular
      .module("DataModelApp")
      .controller("EventController", EventController);

  function EventController($scope) {
    $scope.events = [
      {
        _id: "1234",
        user: "123",
        title: "Career Fair",
        image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
        description: "Join us in Curry for a career fair to get a head start on co-op and job hunting.",
        location: "Curry Student Center",
        time: 1457742958,
        tags: [ "educational", "school-hosted", "career" ]
      }, {
        _id: "4567",
        user: "123",
        title: "JSA general meeting",
        image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
        description: "Come to our general meeting, there will be free pizza",
        location: "Shillman 315",
        time: 1457743154,
        tags: ["student-org", "food"]
      }, {
        _id: "789",
        user: "00101",
        title: "Guest speaker",
        image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
        description: "Listen to Bob talk about nothing, there will be free pizza",
        location: "Shillman 315",
        time: 1467743154,
        tags: [ "educational", "food" ]
      }, {
        _id: "000",
        user: "66742",
        title: "Listen to Joe",
        image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
        description: "Student org has invited Joe to speak at Northeastern, it'll be great.",
        location: "Shillman 315",
        time: 1426127141000,
        tags: [ "student-org", "career" ]
      }
    ]
    $scope.form = {
      _id: "",
      user: "",
      title: "",
      image: "",
      description: "",
      location: "",
      time: 0,
      tags: []
    }

    $scope.selected = -1;

    $scope.create = function() {
      $scope.events.push($scope.form);
      $scope.form = {
        _id: "",
        user: "",
        title: "",
        image: "",
        description: "",
        location: "",
        time: 0,
        tags: []
      }
    }

    $scope.delete = function(event) {
      var index = $scope.users.indexOf(event);

      if(index !== -1) {
        $scope.users.splice(index, 1);
      }
    }

    $scope.select = function(index) {
      $scope.selected = index;
      $scope.form = Object.create($scope.events[index]);
    }

    $scope.update = function() {
      $scope.events[$scope.selected] = $scope.form;
    }
  }
})();
