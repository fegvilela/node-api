const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController");
const ProjectsController = require("./controllers/ProjectsController");

routes
  // users
  .get("/users", UserController.index)
  .post("/users", UserController.create)
  .put("/users/:id", UserController.update)
  .delete("/users/:id", UserController.delete)
  // projects
  .get("/projects", ProjectsController.index);

module.exports = routes;
