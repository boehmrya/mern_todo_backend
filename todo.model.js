const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
    todo_description: String,
    todo_responsible: String,
    todo_priority: String,
    todo_completed: Boolean
});

/*
const Project = new Schema({
  title: String,
  description: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Todo' }],
  people: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

const Person = new Schema({
  name: String,
  bio: String,
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
});
*/

module.exports = mongoose.model('Todo', Todo);

/*
module.exports = mongoose.model('Project', Project);
module.exports = mongoose.model('Person', Person);
*/
