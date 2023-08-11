const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect.js');
const notFound = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json()); // if don't use this, then we won't have that data in the req.body
app.use(express.static('./public'));
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
      await connectDB(process.env.MONGO_CONNECTION_URL);
      app.listen(PORT, () => {
          console.log(`Task Manager App is listening on port ${PORT}...`);
      });
  } catch (err) {
      console.log(err);
  }
};

start();