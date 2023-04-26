import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const MinistryService = {
  createMinistry: async (data) => {
    try {
      return await prisma.ministry.create({ data });
    } catch (error) {
      console.error("Error creating ministry:", error);
      throw error;
    }
  },
  getAllMinistries: async () => {
    try {
      return await prisma.ministry.findMany();
    } catch (error) {
      console.error("Error fetching ministries:", error);
      throw error;
    }
  },
  getMinistryById: async (id) => {
    try {
      return await prisma.ministry.findUnique({ where: { id } });
    } catch (error) {
      console.error(`Error fetching ministry with ID ${id}:`, error);
      throw error;
    }
  },
  updateMinistry: async (id, data) => {
    try {
      return await prisma.ministry.update({ where: { id }, data });
    } catch (error) {
      console.error(`Error updating ministry with ID ${id}:`, error);
      throw error;
    }
  },
  deleteMinistry: async (id) => {
    try {
      return await prisma.ministry.delete({ where: { id } });
    } catch (error) {
      console.error(`Error deleting ministry with ID ${id}:`, error);
      throw error;
    }
  },
};