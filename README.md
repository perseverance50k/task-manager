# Task Management App

This application provides the basic functionality of managing tasks. A user can create new tasks, edit them, and delete.

## Dependencies
- "dotenv" v.16.3.1
- "express" v.4.18.2
- "mongodb" v.5.7.0
- "mongoose" v.7.4.2
- "nodemon": v.3.0.1 (dev dependency)

## Installation

In terminal, go to the directory you want to import the project to. Type the next command:
```bash
git clone https://github.com/perseverance50k/task-manager.git
```

Open the project in your code editor and type the command provided below to install all the required dependencies:
```bash
npm install
```
Create the `.env` file in the root directory of the project and add the following property:
```bash
MONGO_CONNECTION_URL="mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@<YOUR_CLUSTER_NAME>.ba255fs.mongodb.net/?retryWrites=true&w=majority"
```

Note that you have to replace the `<YOUR_USERNAME>`, `YOUR_PASSWORD`, `<YOUR_CLUSTER_NAME>` with your actual data.

In order to learn how to get your MongoDB connection string, head over to [this guide](https://www.mongodb.com/docs/atlas/driver-connection/);

## Usage
Type the following command to start the application:
```bash
npm run start
```

Go to `http://localhost:3000/` and you will see something like this:


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)