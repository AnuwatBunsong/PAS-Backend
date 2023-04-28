import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const MinistryService = {
  createMinistry: async (data) => {
    try {
      const newMinistry = await prisma.ministry.create({ data });
      return newMinistry;
    } catch (error) {
      console.error("Error creating ministry:", error);
      throw error;
    }
  },
  getAllMinistries: async () => {
    try {
      const ministries = await prisma.ministry.findMany();
      return ministries;
    } catch (error) {
      console.error("Error fetching ministries:", error);
      throw error;
    }
  },
  getMinistryById: async (id) => {
    try {
      const ministry = await prisma.ministry.findUnique({
        where: { id: Number(id) },
      });
      return ministry;
    } catch (error) {
      console.error(`Error fetching ministry with ID ${id}:`, error);
      throw error;
    }
  },
  updateMinistry: async (id, data) => {
    try {
      const updatedMinistry = await prisma.ministry.update({
        where: { id: Number(id) },
        data,
      });
      return updatedMinistry;
    } catch (error) {
      console.error(`Error updating ministry with ID ${id}:`, error);
      throw error;
    }
  },
  deleteMinistry: async (id) => {
    try {
      const deletedMinistry = await prisma.ministry.delete({
        where: { id: Number(id) },
      });
      return deletedMinistry;
    } catch (error) {
      console.error(`Error deleting ministry with ID ${id}:`, error);
      throw error;
    }
  },
};
