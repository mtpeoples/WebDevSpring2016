(function() {
  angular
      .module("EventTrackerApp")
      .factory("EventService", EventService);

  function EventService($http) {

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
      return $http.post("/api/project/event", event);
    }

    function updateEvent(id, event) {
      return $http.put("/api/project/event/" + id, event)
    }

    function getEvents() {
      return $http.get("/api/project/event");
    }

    function getEventsByUser(userId) {
      return $http.get("/api/project/user/" + userId + "/event");
    }

    function deleteEvent(id) {
      return $http.delete("/api/project/event/" + id);
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
})();

