import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const OrganizationService = {
  create: async (data) => {
    try {
      const newOrganization = await prisma.organization.create({ data });
      return newOrganization;
    } catch (error) {
      console.error("Error creating organization:", error);
      throw error;
    }
  },
  getAll: async () => {
    try {
      const organizations = await prisma.organization.findMany();
      return organizations;
    } catch (error) {
      console.error("Error fetching organizations:", error);
      throw error;
    }
  },
  getById: async (id) => {
    try {
      const organization = await prisma.organization.findUnique({
        where: { id: Number(id) },
      });
      return organization;
    } catch (error) {
      console.error(`Error fetching organization with ID ${id}:`, error);
      throw error;
    }
  },
  update: async (id, data) => {
    try {
      const updatedOrganization = await prisma.organization.update({
        where: { id: Number(id) },
        data,
      });
      return updatedOrganization;
    } catch (error) {
      console.error(`Error updating organization with ID ${id}:`, error);
    }
  },
};
