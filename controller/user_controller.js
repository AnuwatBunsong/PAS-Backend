import { UserService } from "../services/user_service.js";

export const UserController = {
  create: async (req, reply) => {
    try {
      const newUser = await UserService.create(req.body);
      reply.code(201).send(newUser);
    } catch (error) {
      console.log("🚀 create user error:", error);
      reply
        .code(500)
        .send({ message: "Error occurred while creating the user" });
    }
  },
  getAll: async (req, reply) => {
    try {
      const users = await UserService.getAll();
      reply.send(users);
    } catch (error) {
      console.log("🚀 get users error:", error);
      reply
        .code(500)
        .send({ message: "Error occurred while fetching the users" });
    }
  },
  getById: async (req, reply) => {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);
      reply.send(user);
    } catch (error) {
      console.log("🚀 get user by id error:", error);
      throw error;
    }
  },
  update: async (id, data) => {
    try {
      const updatedUser = await UserService.update(id, data);
      return updatedUser;
    } catch (error) {
      console.log("🚀 update user error:", error);
      throw error;
    }
  },
  authUser: async (req, reply) => {
    try {
      const { username, password } = req.body;
      const user = await UserService.authUser(username, password);

      if (!user) {
        reply.code(401).send({ message: "User not found" });
      }

      reply.code(200).send(user);
    } catch (error) {}
  },
};
