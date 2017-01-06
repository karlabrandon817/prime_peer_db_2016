var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignments = new Schema({
    assignment_name: String,
    student_name: {
        type: String,
        unique: true
    },
    score: Number,
    date_completed: Date
});

// 1st param is the name of the collection
// 2nd param is the Schema defined above
// WARNING: mongoose will lowercase and pluralize collection name
var User = mongoose.model('assignments', assignments);

module.exports = User;
