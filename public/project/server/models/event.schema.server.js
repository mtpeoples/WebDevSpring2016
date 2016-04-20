module.exports = function(mongoose) {
  var EventSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    title: String,
    image: String,
    description: String,
    location: String,
    time: {type: Date, default: Date.now},
    tags: [String]
  }, { collection: 'event' });
  return EventSchema;
}