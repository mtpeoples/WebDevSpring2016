module.exports = function(app, db, mongoose) {

  var userModel = require("./models/user.model.server.js")();
  var userService = require("./services/user.service.server.js")(app, userModel);

  var eventModel = require("./models/event.model.server.js")();
  var eventService = require("./services/event.service.server.js")(app, eventModel);
}