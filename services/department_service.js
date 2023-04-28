import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const DepartmentService = {
    createDepartment: async (data) => {
      try {
        return await prisma.department.create({ data });
      } catch (error) {
        console.error("Error creating department:", error);
        throw error;
      }
    },
    getAllDepartments: async () => {
      try {
        return await prisma.department.findMany();
      } catch (error) {
        console.error("Error fetching departments:", error);
        throw error;
      }
    },
    getDepartmentById: async (id) => {
      try {
        return await prisma.department.findUnique({ where: { id } });
      } catch (error) {
        console.error(`Error fetching department with ID ${id}:`, error);
        throw error;
      }
    },
    updateDepartment: async (id, data) => {
      try {
        return await prisma.department.update({ where: { id }, data });
      } catch (error) {
        console.error(`Error updating department with ID ${id}:`, error);
        throw error;
      }
    },
    deleteDepartment: async (id) => {
      try {
        return await prisma.department.delete({ where: { id } });
      } catch (error) {
        console.error(`Error deleting department with ID ${id}:`, error);
        throw error;
      }
    },
  };
  