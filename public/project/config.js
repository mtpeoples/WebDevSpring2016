(function() {
  angular
      .module("EventTrackerApp")
      .config(Configure);

  function Configure($routeProvider) {
    $routeProvider
        .when("/home",{
          templateUrl: "views/home/home.view.html",
          controller: 'HomeController'
        })
        .when("/login" , {
          templateUrl: "views/users/login.view.html",
          controller: "LoginController"
        })
        .when("/register" , {
          templateUrl: "views/users/register.view.html",
          controller: "RegisterController"
        })
        .when("/profile", {
          templateUrl: "views/users/profile.view.html",
          controller: "ProfileController"
        })
        .when("/manage", {
          templateUrl: "views/events/manage.view.html",
          controller: "ManageController"
        })
        .otherwise({
          redirectTo: "/home"
        });
  }
})();
