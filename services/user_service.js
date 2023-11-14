import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const UserService = {
  create: async (data) => {
    try {
      const checkUser = await prisma.user.findFirst({
        where: { username: data.username },
      });

      if (checkUser) {
        throw new Error("User already exists");
      }

      const user = await prisma.user.create({ data });
      if (!user) {
        throw new Error("User not created");
      }

      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
  getAll: async () => {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },
  getById: async (id) => {
    try {
      const user = await prisma.user.findFirst({
        where: { id: Number(id) },
      });
      return user;
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
      throw error;
    }
  },
  update: async (id, data) => {
    try {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data,
      });
      return updatedUser;
    } catch (error) {
      console.error(`Error updating user with ID ${id}:`, error);
    }
  },
  authUser: async (username, password) => {
    try {
      const user = await prisma.user.findFirst({
        where: { username: username, password: password },
      });
      return user;
    } catch (error) {
      console.error(`Error authenticating user:`, error);
      throw error;
    }
  },
};
