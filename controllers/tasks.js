const Task = require('../models/Task.js');
const asyncWrapper = require('../middleware/async.js');
const { createCustomError } = require('../errors/custom-error.js');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
    const {id:taskID} = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) return next(createCustomError(`Task with ID ${taskID} doesn't exist`, 404));
    return res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true, runValidators: true
    });

    if (!task) return next(createCustomError(`Task with ID ${taskID} doesn't exist`, 404));

    return res.status(200).json({ task });
});

const deleteSingleTask = asyncWrapper(async (req, res, next) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) return next(createCustomError(`Task with ID ${taskID} doesn't exist`, 404));

    return res.status(200).json({ task });
});

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteSingleTask
}