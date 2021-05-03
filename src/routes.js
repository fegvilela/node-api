const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController");
const ProjectsController = require("./controllers/ProjectsController");

routes
  // users
  .get("/users", UserController.index)
  .get("/users/:id", UserController.show)
  .post("/users", UserController.create)
  .put("/users/:id", UserController.update)
  .delete("/users/:id", UserController.delete)
  // projects
  .get("/projects", ProjectsController.index)
  .post("/projects", ProjectsController.create);

module.exports = routes;
