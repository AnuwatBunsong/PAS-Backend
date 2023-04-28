import departmentController from "../controller/department_controller.js";

export const departmentRoutes = (fastify, options, done) => {
  fastify.post("/departments", departmentController.createDepartmentController);
  fastify.get("/departments", departmentController.getAllDepartmentsController);
  fastify.get(
    "/departments/:id",
    departmentController.getDepartmentByIdController
  );
  fastify.put(
    "/departments/:id",
    departmentController.updateDepartmentController
  );
  fastify.delete(
    "/departments/:id",
    departmentController.deleteDepartmentController
  );

  done();
};
