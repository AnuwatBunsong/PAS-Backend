import { ContactDetailController } from "../controller/contactdetail_controller.js";

export const contactDetailRoutes = (fastify, options, done) => {
  fastify.post("/contactdetails", ContactDetailController.create);
  fastify.get("/contactdetails", ContactDetailController.getAll);
  fastify.get("/contactdetails/:id", ContactDetailController.getById);
  fastify.put("/contactdetails/:id", ContactDetailController.update);
  fastify.delete("/contactdetails/:id", ContactDetailController.delete);
  fastify.get(
    "/contactdetails/:id/:ministryId/",
    ContactDetailController.getAllInSameDeptAndMinistry
  );
  fastify.get(
    "/contactdetails/user/:id",
    ContactDetailController.getAllForUser
  );
  fastify.post("/contactdetails/many", ContactDetailController.createMany);

  done();
};
