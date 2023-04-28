import ministryController from "../controller/ministry_controller.js";

export const ministryRoutes = (fastify, options, done) => {
  fastify.post("/ministries", ministryController.createMinistryController);
  fastify.get("/ministries", ministryController.getAllMinistriesController);
  fastify.get("/ministries/:id", ministryController.getMinistryByIdController);
  fastify.put("/ministries/:id", ministryController.updateMinistryController);
  fastify.delete(
    "/ministries/:id",
    ministryController.deleteMinistryController
  );

  done();
};
