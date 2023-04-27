const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
// const bodyparser = require("body-parser");
const dotenv = require('dotenv');
// add route.js to call routes
const route = require("./server/routes/route");

// HTTP request logger middleware for my application that help me a lot to check status code of res
const morgan = require('morgan');

// set connectDb
const connectDB = require('./server/database/connection');

// set env path
dotenv.config({ path : 'config.env'});
// mongoose connect
connectDB();

// dev to show result if succes its show green & when response is not 200 red
app.use(morgan('dev'));

// set path
const path = require("path");

// pass request to body parser 
app.use(bodyParser.urlencoded({ extended: true }));

//set ejs
app.set("view engine", "ejs");

// routers
app.use('/',route);

// load assests
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/image", express.static(path.resolve(__dirname, "assets/image")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));


app.listen(port);
console.log("server is run");