import contactDetailController  from "../controller/contactdetail_controller.js";

export const contactDetailRoutes = (fastify, options, done) => {
  fastify.post(
    "/contactdetails",
    contactDetailController.createContactDetailController
  );
  fastify.get(
    "/contactdetails",
    contactDetailController.getAllContactDetailsController
  );
  fastify.get(
    "/contactdetails/:id",
    contactDetailController.getContactDetailByIdController
  );
  fastify.put(
    "/contactdetails/:id",
    contactDetailController.updateContactDetailController
  );
  fastify.delete(
    "/contactdetails/:id",
    contactDetailController.deleteContactDetailController
  );

  done();
};
