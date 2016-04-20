var q = require('q');

module.exports = function(db, mongoose) {
  var EventSchema = require('./event.schema.server.js')(mongoose);
  var EventModel = mongoose.model('Event', EventSchema);

  var service = {
    createEvent: createEvent,
    updateEvent: updateEvent,
    getEvents: getEvents,
    getEventsByUser: getEventsByUser,
    deleteEvent: deleteEvent
      //getEventsByTags: getEventsByTags
  };

  return service;

  function createEvent(event) {
    var deferred = q.defer();
    EventModel.create(event, function(err, doc) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(event);
    });
    return deferred.promise;
  }

  function updateEvent(id, event) {
    var deferred = q.defer();
    EventModel.findByIdAndUpdate(id, event, function(err, doc) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(event);
    });
    return deferred.promise;
  }

  function getEvents() {
    var deferred = q.defer();
    EventModel.find(function(err, events) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(events);
    });
    return deferred.promise;
  }

  function getEventsByUser(userId) {
    var deferred = q.defer();
    EventModel.find({ user: userId }, function(err, events) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(events);
    });
    return deferred.promise;
  }

  function deleteEvent(id) {
    var deferred = q.defer();
    EventModel.findByIdAndRemove(id, function(err) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve();
    });
    return deferred.promise;
  }

  //function getEventsByTags(tags) {
  //  var matchingEvents = [];
  //  for(var i=0; i < tags.length; i++) {
  //    for(var j=0; j < events.length; j++) {
  //      var index = events[j].tags.indexOf(tags[i]);
  //      if(index !== -1) {
  //        matchingEvents.push
  //      }
  //    }
  //  }
  //}

}
