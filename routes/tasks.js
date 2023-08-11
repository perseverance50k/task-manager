const express = require('express');
const router = express.Router();

const { getAllTasks,
        getSingleTask,
        createTask,
        updateTask,
        deleteSingleTask } = require('../controllers/tasks.js');

// There are two options how we can set up routes
// Option 1: add all the controllers one by one
//
// router.get('/', getTasks);
// router.post('/', createTask);
// router.put('/:id', updateTask);
// router.delete('/:id', deleteTask);
// ...
//
// Option 2: chain the controllers for different HTTP requests together
//
// router.route('/').get(getTasks).post(createTask);
// router.route('/:id').put(updateTask).delete(deleteTask);

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteSingleTask);

module.exports = router;