module.exports = function(app, db) {
  var users = [
    {
      "_id": 123, "firstName": "Alice", "lastName": "Wonderland",
      "username": "alice", "password": "alice"
    },
    {
      "_id": 234, "firstName": "Bob", "lastName": "Hope",
      "username": "bob", "password": "bob"
    },
    {
      "_id": 345, "firstName": "Charlie", "lastName": "Brown",
      "username": "charlie", "password": "charlie"
    },
    {
      "_id": 456, "firstName": "Dan", "lastName": "Craig",
      "username": "dan", "password": "dan"
    },
    {
      "_id": 567, "firstName": "Edward", "lastName": "Norton",
      "username": "ed", "password": "ed"
    }
  ]

  var service = {
    findUserByCredentials: findUserByCredentials,
    findAll: findAll,
    create: createUser,
    delete: deleteUserById,
    update: updateUser,
    findById: findById
  };

  return service;

  function findUserByCredentials(username, password) {
    for (var i = 0; i < users.length; i++) {
      if (username == users[i].username || password == users[i].password) {
        return users[i];
      }
    }
    return null;
  }

  function findAll() {
    return users;
  }

  function createUser(user) {
    users.push(user);
    return users;
  }

  function deleteUserById(id) {
    for (var i = 0; i < users.length; i++) {
      if (id == users[i]._id) {
        users.splice(i, i + 1);
        return users;
      }
    }
  }

  function updateUser(id, user) {
    for (var i = 0; i < users.length; i++) {
      if (id == users[i]._id) {
        users[i] = user;
        return users;
      }
    }
  }

  function findById(id) {
    for (var i = 0; i < users.length; i++) {
      if (id == users[i]._id) {
        return users[i];
      }
    }
  }
}