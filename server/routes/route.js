const express = require("express");
const route = express.Router();
//call render
const services = require("../services/render");
// call controller
const controller = require("../controller/controller");
// set route to index home
route.get("/",services.homeRoutes);
// set route to add_user
route.get("/add-user", services.add_user);

// set route to update
route.get("/update-user", services.update_user);

// create API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);



module.exports = route;