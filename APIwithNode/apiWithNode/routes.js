const userControoler = require("./controllers/userController")

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: userControoler.listUsers
  },
  {
    endpoint: "/users/:id",
    method: "GET",
    handler: userControoler.getUserById
  },
  {
    endpoint: "/users",
    method: "POST",
    handler: userControoler.createUser
  },
  {
    endpoint: "/users/:id",
    method: "PUT",
    handler: userControoler.updateUser
  },
  {
    endpoint: "/users/:id",
    method: "DELETE",
    handler: userControoler.deleteUser
  }
]