import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const ContactDetailService = {
  create: async (data) => {
    try {
      return await prisma.contactDetail.create({ data });
    } catch (error) {
      console.error("Error creating contact detail:", error);
      throw error;
    }
  },
  getAll: async (query) => {
    try {
      const where = {};

      if (query.department) {
        where.department = {
          name: { contains: query.department, mode: "insensitive" },
        };
      }

      return await prisma.contactDetail.findMany({
        where: where,
        orderBy: {
          id: "desc",
        },
        include: {
          Ministry: true,
          department: true,
        },
      });
    } catch (error) {
      console.error("Error fetching contact details:", error);
      throw error;
    }
  },
  getById: async (id) => {
    try {
      return await prisma.contactDetail.findUnique({
        where: { id: Number(id) },
        // include: {
        //   Ministry: true,
        //   Department: true,
        // },
      });
    } catch (error) {
      console.error(`Error fetching contact detail with ID ${id}:`, error);
      throw error;
    }
  },
  update: async (id, data) => {
    try {
      return await prisma.contactDetail.update({
        where: { id: Number(id) },
        data,
      });
    } catch (error) {
      console.error(`Error updating contact detail with ID ${id}:`, error);
      throw error;
    }
  },
  delete: async (id) => {
    try {
      return await prisma.contactDetail.delete({ where: { id: Number(id) } });
    } catch (error) {
      console.error(`Error deleting contact detail with ID ${id}:`, error);
      throw error;
    }
  },
  getAllInSameDeptAndMinistry: async (id, ministryId) => {
    try {
      return await prisma.contactDetail.findMany({
        where: {
          id: id,
          ministry_id: Number(ministryId),
        },
        include: {
          ministry: true,
          department: true,
        },
        orderBy: {
          id: "desc",
        },
      });
    } catch (error) {
      console.error("Error fetching contact details:", error);
      throw error;
    }
  },

  getAllForUser: async (id) => {
    try {
      console.log(
        "🚀 ~ file: contactdetail_service.js:93 ~ getAllForUser: ~ id:",
        id
      );
      const user = await prisma.user.findFirst({
        where: { id: Number(id) },
        include: {
          Ministry: true,
          Department: true,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return await prisma.contactDetail.findMany({
        where: { ministry_id: Number(user.ministry_id) },
        include: {
          Ministry: true,
          department: true,
        },
        orderBy: {
          id: "asc",
        },
      });
    } catch (error) {
      console.error("Error fetching contact details for user:", error);
      throw error;
    }
  },

  createMany: async (data) => {
    try {
      console.log(
        "🚀 ~ file: contactdetail_service.js:125 ~ createMany: ~ data:",
        data[0]
      );
      return await prisma.contactDetail.createMany({
        data: data,
        skipDuplicates: true,
      });
    } catch (error) {
      console.error("Error creating contact detail:", error);
      throw error;
    }
  },

  saeach: async (req, res) => {
    const { department } = req.query;
    try {
      let results;
      // switch (category) {
      //   case 'department':
      //     results = await prisma.contactDetail.findMany({
      //       where: { department: { name: { contains: query } } },
      //     });
      //     break;
      //   case 'name':
      //     results = await prisma.contactDetail.findMany({
      //       where: { name: { contains: query } },
      //     });
      //     break;
      //   case 'position':
      //     results = await prisma.contactDetail.findMany({
      //       where: { position: { contains: query } },
      //     });
      //     break;
      //   default:
      //     return res.status(400).send('Invalid search category');
      // }
      res.json(results);
    } catch (error) {
      res.status(500).send("Server error");
    }
  },
};
