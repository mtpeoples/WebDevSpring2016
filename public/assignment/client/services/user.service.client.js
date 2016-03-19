(function() {
  angular
      .module("FormBuilderApp")
      .factory("UserService", UserService);

  function UserService($http) {

    var service = {
      findUserByCredentials : findUserByCredentials,
      findAllUsers : findAllUsers,
      createUser: createUser,
      deleteUserById: deleteUserById,
      updateUser: updateUser,
      findUserByUsername: findUserByUsername
    };

    return service;

    function findUserByCredentials(username, password) {
     return $http.get("/api/assignment/user?username=" + username + "&password=" + password);
    }

    function findAllUsers() {
      return $http.get("/api/assignment/user");
    }

    function createUser(user) {
      user._id = (new Date).getTime();
      return $http.post("/api/assignment/user", user);
    }

    function deleteUserById(id) {
      return $http.delete("/api/assignment/user/" + id);
    }

    function updateUser(id, user) {
      return $http.put("/api/assignment/user/" + id, user);
    }

    function findUserByUsername(username) {
      return $http.get("api/assignment/user?username=" + username);
    }

  }
})();
