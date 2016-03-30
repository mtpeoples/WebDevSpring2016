module.exports = function(db) {

  var events = [
    {
      _id: "1234",
      user: "123",
      title: "Career Fair",
      image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
      description: "Join us in Curry for a career fair to get a head start on co-op and job hunting.",
      location: "Curry Student Center",
      time: 1457742958,
      tags: [ "educational", "school-hosted", "career" ]
    }, {
      _id: "4567",
      user: "123",
      title: "JSA general meeting",
      image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
      description: "Come to our general meeting, there will be free pizza",
      location: "Shillman 315",
      time: 1457743154,
      tags: ["student-org", "food"]
    }, {
      _id: "789",
      user: "00101",
      title: "Guest speaker",
      image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
      description: "Listen to Bob talk about nothing, there will be free pizza",
      location: "Shillman 315",
      time: 1467743154,
      tags: [ "educational", "food" ]
    }, {
      _id: "000",
      user: "66742",
      title: "Listen to Joe",
      image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
      description: "Student org has invited Joe to speak at Northeastern, it'll be great.",
      location: "Shillman 315",
      time: 1426127141000,
      tags: [ "student-org", "career" ]
    }, {
      _id: "000",
      user: "66742",
      title: "Listen to Joe",
      image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
      description: "Student org has invited Joe to speak at Northeastern, it'll be great.",
      location: "Shillman 315",
      time: 1426127141000,
      tags: [ "student-org", "career" ]
    }, {
      _id: "000",
      user: "66742",
      title: "Listen to Joe",
      image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
      description: "Student org has invited Joe to speak at Northeastern, it'll be great.",
      location: "Shillman 315",
      time: 1426127141000,
      tags: [ "student-org", "career" ]
    }, {
      _id: "000",
      user: "66742",
      title: "Listen to Joe",
      image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
      description: "Student org has invited Joe to speak at Northeastern, it'll be great.",
      location: "Shillman 315",
      time: 1426127141000,
      tags: [ "student-org", "career" ]
    }, {
      _id: "000",
      user: "66742",
      title: "Listen to Joe",
      image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
      description: "Student org has invited Joe to speak at Northeastern, it'll be great.",
      location: "Shillman 315",
      time: 1426127141000,
      tags: [ "student-org", "career" ]
    }, {
      _id: "000",
      user: "66742",
      title: "Listen to Joe",
      image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
      description: "Student org has invited Joe to speak at Northeastern, it'll be great.",
      location: "Shillman 315",
      time: 1426127141000,
      tags: [ "student-org", "career" ]
    }, {
      _id: "000",
      user: "66742",
      title: "Listen to Joe",
      image: "http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png",
      description: "Student org has invited Joe to speak at Northeastern, it'll be great.",
      location: "Shillman 315",
      time: 1457740154,
      tags: [ "student-org", "career" ]
    }
  ]


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
    events.push(event);
    return event;
  }

  function updateEvent(id, event) {
    for(var i = 0; i < events.length; i++) {
      if(events[i]._id == id) {
        events[i] = event;
        return event;
      }
      else return null;
    }
  }

  function getEvents() {
    return events;
  }

  function getEventsByUser(userId) {
    var matchingEvents = [];

    for(var i=0; i < events.length; i++) {
      if(events[i].user == userId) {
        matchingEvents.push(events[i]);
      }
    }

    return matchingEvents;
  }

  function deleteEvent(id) {
    for(var i=0; i < events.length; i++) {
      if(events[i]._id == id) {
        events.splice(i, 1);
      }
    }
    return;
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

