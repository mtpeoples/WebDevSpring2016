(function(){
  angular
      .module("FormBuilderApp")
      .factory("UserService", UserService);

  function UserService() {
    var users = [
      {        "_id":123, "firstName":"Alice",            "lastName":"Wonderland",
        "username":"alice",  "password":"alice",   "roles": ["student"]                },
      {        "_id":234, "firstName":"Bob",              "lastName":"Hope",
        "username":"bob",    "password":"bob",     "roles": ["admin"]                },
      {        "_id":345, "firstName":"Charlie",          "lastName":"Brown",
        "username":"charlie","password":"charlie", "roles": ["faculty"]                },
      {        "_id":456, "firstName":"Dan",              "lastName":"Craig",
        "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
      {        "_id":567, "firstName":"Edward",           "lastName":"Norton",
        "username":"ed",     "password":"ed",      "roles": ["student"]                }
    ]


    var service = {
      findUserByCredentials : findUserByCredentials,
      findAllUsers : findAllUsers,
      createUser: createUser,
      deleteUserById: deleteUserById,
      updateUser: updateUser
    };

    return service;

    function findUserByCredentials(username, password, callback) {
     for (var i = 0; i < users.length; i++) {
       if (username == users[i].username && password == users[i].password) {
         return callback(users[i]);
       }
     }
      return callback(null);
    }

    function findAllUsers(callback) {
      return callback(users);
    }

    function createUser(user, callback) {
      user._id = (new Date).getTime();
      users.push(user);
      callback(user);
    }

    function deleteUserById(id, callback) {
      for (var i = 0; i < users.length; i++) {
        if (id == users[i]._id) {
          users.splice(i, i+1);
          return callback(users);
        }
      }
    }

    function updateUser(id, user, callback) {
      for (var i = 0; i < users.length; i++) {
        if (id == users[i]._id) {
          users[i].firstName = user.firstName;
          users[i].lastName = user.lastName;
          users[i].password = user.password;
          users[i].username = user.username;
          return callback(users[i]);
        }
      }
    }

  }
})();
