(function() {
  angular
      .module("DataModelApp")
      .config(Configure);

  function Configure($routeProvider) {
    $routeProvider
        .when("/user", {
          templateUrl: "views/user/user.view.html",
          controller: 'UserController'
        })
        .when("/event", {
          templateUrl: "views/event/event.view.html",
          controller: 'EventController'
        })
        .otherwise({
          redirectTo: "/user"
        });
  }
})();
