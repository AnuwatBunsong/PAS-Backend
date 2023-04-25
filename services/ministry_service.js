import { prisma } from "../prismaClient";

export const MinistryService = {
    create: async (data) => {
      return await prisma.ministry.create({ data });
    },
  
    findAll: async () => {
      return await prisma.ministry.findMany();
    },
  
    findById: async (id) => {
      return await prisma.ministry.findUnique({ where: { id } });
    },
  
    update: async (id, data) => {
      return await prisma.ministry.update({ where: { id }, data });
    },
  
    delete: async (id) => {
      return await prisma.ministry.delete({ where: { id } });
    },
  };