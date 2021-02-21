const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema({
  title: String,
  description: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Todo' }],
  people: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

module.exports = mongoose.model('Project', Project);
