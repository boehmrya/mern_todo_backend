const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema({
  name: String,
  bio: String,
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
});

module.exports = mongoose.model('Person', Person);
