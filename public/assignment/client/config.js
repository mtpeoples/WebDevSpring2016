(function() {
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
          templateUrl: "views/forms/forms.view.html",
          controller: "FormController"
        })
        .when("/form-fields/:formId/fields" , {
          templateUrl: "views/forms/form-fields.view.html",
          controller: "FormFieldsController"
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
        .otherwise({
          redirectTo: "/home"
        });
  }
})();
