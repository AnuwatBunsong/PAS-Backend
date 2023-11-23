import { OrganizationController } from "../controller/organization_controller.js";

export const organizationRoutes = (fastify, options, done) => {
  fastify.post("/organizations", OrganizationController.create);
  fastify.get("/organizations", OrganizationController.getAll);
  fastify.get("/organizations/:id", OrganizationController.getById);
  fastify.put("/organizations/:id", OrganizationController.update);

  done();
};
