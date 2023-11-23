import { OrganizationService } from "../services/organization_services.js";

export const OrganizationController = {
  create: async (req, reply) => {
    try {
      const newOrganization = await OrganizationService.create(req.body);
      reply.code(201).send(newOrganization);
    } catch (error) {
      console.log("🚀 create organization error:", error);
      reply
        .code(500)
        .send({ message: "Error occurred while creating the organization" });
    }
  },
  getAll: async (req, reply) => {
    try {
      const organizations = await OrganizationService.getAll();
      reply.send(organizations);
    } catch (error) {
      console.log("🚀 get organizations error:", error);
      reply
        .code(500)
        .send({ message: "Error occurred while fetching the organizations" });
    }
  },
  getById: async (id) => {
    try {
      const organization = await OrganizationService.getById(id);
      return organization;
    } catch (error) {
      console.log("🚀 get organization by id error:", error);
      throw error;
    }
  },
  update: async (id, data) => {
    try {
      const updatedOrganization = await OrganizationService.update(id, data);
      return updatedOrganization;
    } catch (error) {
      console.log("🚀 update organization error:", error);
      throw error;
    }
  },

  createMany: async (req, reply) => {
    try {
      const newOrganizations = await OrganizationService.createMany(req.body);
      reply.code(201).send(newOrganizations);
    } catch (error) {
      console.log("🚀 create organizations error:", error);
      reply
        .code(500)
        .send({ message: "Error occurred while creating the organizations" });
    }
  },
};
