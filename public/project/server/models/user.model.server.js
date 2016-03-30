module.exports = function(db) {

  var users = [
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


  var service = {
    findUserByCredentials : findUserByCredentials,
    findAll : findAllUsers,
    create: createUser,
    delete: deleteUserById,
    update: updateUser
  };

  return service;

  function findUserByCredentials(username, password) {
    for (var i = 0; i < users.length; i++) {
      if (username == users[i].username && password == users[i].password) {
        return users[i];
      }
    }
    return null;
  }

  function findAllUsers() {
    return users;
  }

  function createUser(user) {
    user._id = (new Date).getTime();
    users.push(user);
    return user;
  }

  function deleteUserById(id) {
    for (var i = 0; i < users.length; i++) {
      if (id == users[i]._id) {
        users.splice(i, i+1);
        return;
      }
    }
  }

  function updateUser(id, user) {
    for (var i = 0; i < users.length; i++) {
      if (id == users[i]._id) {
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;
        users[i].password = user.password;
        users[i].username = user.username;
        return users[i];
      }
    }
  }
}