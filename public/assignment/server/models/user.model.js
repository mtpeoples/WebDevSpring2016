var q = require('q');

module.exports = function(db, mongoose) {
  var UserSchema = require("./user.schema.server.js")(mongoose);
  // var UserModel = mongoose.model('User', UserSchema);

  var api = {
    findUserByCredentials: findUserByCredentials,
    findAll: findAll,
    create: createUser,
    delete: deleteUserById,
    update: updateUser,
    findById: findById
  };

  return api;

  function findUserByCredentials(username, password) {
    var deferred = q.defer();
    UserModel.findOne({ username: username, password: password }, function(err, user) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(user);
    });
    return deferred.promise;
  }

  function findAll() {
    var deferred = q.defer();
    UserModel.find(function(err, users) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(users);
    });
    return deferred.promise;
  }

  function createUser(user) {
    var deferred = q.defer();
    UserModel.create(user, function(err, doc) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(doc);
    });
    return deferred.promise;
  }

  function deleteUserById(id) {
    var deferred = q.defer();
    UserModel.findByIdAndRemove(id, function(err) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve();
    });
    return deferred.promise;
  }


  function updateUser(id, user) {
    var deferred = q.defer();
    UserModel.findByIdAndUpdate(id, user, function(err, doc) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(doc);
    });
    return deferred.promise;
  }

  function findById(id) {
    var deferred = q.defer();
    UserModel.findById(id, function(err, user) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(user);
    });
    return deferred.promise;
  }
}
