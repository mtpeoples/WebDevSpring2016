(function() {
  angular
      .module("EventTrackerApp")
      .factory("UserService", UserService);

  function UserService($http) {

    var service = {
      findUserByCredentials : findUserByCredentials,
      findAllUsers : findAllUsers,
      createUser: createUser,
      deleteUserById: deleteUserById,
      updateUser: updateUser
    };

    return service;

    function findUserByCredentials(username, password) {
     return $http.get("/api/project/user?username=" + username + "&password=" + password);
    };

    function findAllUsers() {
      return $http.get("/api/project/user");
    };

    function createUser(user) {
      user._id = (new Date).getTime();
      return $http.post("/api/project/user", user);
    };

    function deleteUserById(id) {
      return $http.delete("/api/project/user/" + id);
    };

    function updateUser(id, user) {
      return $http.put("/api/project/user/" + id, user)    
    };
  }
})();
