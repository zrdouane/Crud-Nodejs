## CRUD project using Express and Mongoose Atlas

This is a CRUD project created using the Express framework and MongoDB Atlas for database management. The purpose of this project is to provide a basic template for creating web applications that require CRUD (Create, Read, Update, Delete) functionality.

### Project Requirements

To run this project, you will need the following installed on your machine:

- Node.js
- NPM (Node Package Manager)
- MongoDB Atlas account
- Express framework
- Mongoose Atlas || MongoDb

### Installation

To install this project, follow these steps:

1. Clone this repository using Git or download the zip file and extract it to a directory on your machine.
2. Navigate to the project directory using your terminal or command prompt.
3. Run `npm install` to install all the required dependencies.
4. Type `npm test` to run the project 

### Configuration

To configure this project for your MongoDB Atlas account, follow these steps:

1. Create a new database in MongoDB Atlas.
2. Create a new collection in the database.
3. Click on the "Connect" button in the Atlas dashboard and select "Connect your application".
4. Copy the connection string and replace `<password>` with your MongoDB Atlas account password.
5. Open the `.env` file and replace `<connection string>` with your MongoDB Atlas connection string.
6. Replace `<database name>` with the name of the database you created earlier.

### Running the Project

To run the project, follow these steps:

1. Navigate to the project directory using your terminal or command prompt.
2. Run `npm test` to start the server.
3. Open your browser and go to `http://localhost:3000`.

### Usage

This project provides the following endpoints:

- POST `/api/users`: adds a new document to the collection.
- GET `/api/users`: Returns a list of all Users in the collection && can return a single user with specified Id.
- PUT `/api/users/:id`: Update a User with the specified ID.
- DELETE `/api/users/:id`: Delete a User with the specified ID.

To use these endpoints, you can use a tool like Postman or insomnia to make HTTP requests to the server and testing API's

### Contributing

Contributions to this project are welcome. If you would like to contribute, please fork the repository and create a pull request with your changes.