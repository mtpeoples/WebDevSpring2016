(function(){
  angular
      .module("FormBuilderApp")
      .config(Configure);

  function Configure($routeProvider) {
    $routeProvider
        .when("/home",{
          templateUrl: "views/home/home.view.html",
          controller: 'HomeController'
        })
        .when("/admin" , {
          templateUrl: "views/admin/admin.view.html"
        })
        .when("/forms" , {
          templateUrl: "views/forms/forms.view.html"
        })
        .when("/form-fields" , {
          templateUrl: "views/forms/forms-fields.view.html"
        })
        .when("/login" , {
          templateUrl: "views/users/login.view.html"
        })
        .when("/register" , {
          templateUrl: "views/users/register.view.html"
        })
        .when("/login" , {
          templateUrl: "views/login/login.view.html"
        })
        .otherwise({
          redirectTo: "/home"
        });
  }
})();
