module.exports = function(app, db, mongoose) {

  var userModel = require("./models/user.model.server.js")(db, mongoose);
  var userService = require("./services/user.service.server.js")(app, userModel);

  var eventModel = require("./models/event.model.server.js")(db, mongoose);
  var eventService = require("./services/event.service.server.js")(app, eventModel);
}