module.exports = function(app, model) {

	app.get("/api/project/event", function(req, res) {
		var events = model.getEvents();
		return res.json(events);
	});

	app.post("/api/project/event", function(req, res) {
		var newEvent = req.body;
		newEvent = model.createEvent(newEvent);
		res.json(newEvent);
	});

	app.put("/api/project/event/:id", function(req, res) {
		var id = req.params.id;
		var event = req.body;
		event = model.updateEvent(id, event);
		res.json(event);
	});

	app.get("/api/project/user/:id/event", function(req, res) {
		var userId = req.params.id;
		events = model.getEventsByUser(userId);
		res.json(events);
	});

	app.delete("/api/project/event/:id", function(req, res) {
		var id = req.params.id;
		model.deleteEvent(id);
		res.send(200);
	});
}