const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters long']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// Schema defines the structure for the document (like a type, validations etc.)
// A Mongoose Model provides an interface to the DB

module.exports = mongoose.model('Task', TaskSchema);