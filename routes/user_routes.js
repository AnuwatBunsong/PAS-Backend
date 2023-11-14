import { UserController } from "../controller/user_controller.js";

export const userRoutes = (fastify, options, done) => {
  fastify.post("/users", UserController.create);
  fastify.get("/users", UserController.getAll);
  fastify.get("/users/:id", UserController.getById);
  fastify.put("/users/:id", UserController.update);
  fastify.post("/users/auth", UserController.authUser);
  done();
};
