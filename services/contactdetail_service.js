import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const ContactDetailService = {
  createContactDetail: async (data) => {
    try {
      return await prisma.contactDetail.create({ data });
    } catch (error) {
      console.error("Error creating contact detail:", error);
      throw error;
    }
  },
  getAllContactDetails: async () => {
    try {
      return await prisma.contactDetail.findMany({
        orderBy: {
          id: "desc",
        },
        include: {
          ministry: true,
          department: true,
        },
      });
    } catch (error) {
      console.error("Error fetching contact details:", error);
      throw error;
    }
  },
  getContactDetailById: async (id) => {
    try {
      return await prisma.contactDetail.findUnique({
        where: { id: Number(id) },
      });
    } catch (error) {
      console.error(`Error fetching contact detail with ID ${id}:`, error);
      throw error;
    }
  },
  updateContactDetail: async (id, data) => {
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
  deleteContactDetail: async (id) => {
    try {
      return await prisma.contactDetail.delete({ where: { id: Number(id) } });
    } catch (error) {
      console.error(`Error deleting contact detail with ID ${id}:`, error);
      throw error;
    }
  },
  getAllContactDetailsInSameDeptAndMinistry: async (id, ministryId) => {
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
      const user = await prisma.user.findFirst({
        where: { id: Number(id) },
        include: {
          ministry: true,
          Department: true,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }
      return await prisma.contactDetail.findMany({
        where: {
          AND: [
            {
              ministry_id: Number(user.ministry_id),
            },
          ],
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
      console.error("Error fetching contact details for user:", error);
      throw error;
    }
  },
};
