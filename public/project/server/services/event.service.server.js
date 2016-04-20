module.exports = function(app, model) {

  app.get("/api/project/event", function(req, res) {
    model.getEvents().then(function(events) {
      res.json(events);
    }, function(err) {
      res.status(400).send(err);
    });
  });

  app.post("/api/project/event", function(req, res) {
    var newEvent = req.body;
    model.createEvent(newEvent).then(function(event) {
      res.json(event);
    }, function(err) {
      res.status(400).send(err);
    });
  });

  app.put("/api/project/event/:id", function(req, res) {
    var id = req.params.id;
    var event = req.body;
    model.updateEvent(id, event).then(function(event) {
      res.json(event);
    }, function(err) {
      res.status(400).send(err);
    })
  });

  app.get("/api/project/user/:id/event", function(req, res) {
    var userId = req.params.id;
    model.getEventsByUser(userId).then(function(events) {
    	res.json(events);
    }, function(err) {
    	res.status(400).send(err);
    });
  });

  app.delete("/api/project/event/:id", function(req, res) {
    var id = req.params.id;
    model.deleteEvent(id).then(function() {
    	res.send(200);
    }, function(err) {
    	res.status(400).send(err);
    });
  });
}
