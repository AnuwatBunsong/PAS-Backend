import { DepartmentService } from "../services/department_service.js";

const createDepartmentController = async (req, reply) => {
  try {
    const newDepartment = await DepartmentService.createDepartment(req.body);
    reply.code(201).send(newDepartment);
  } catch (error) {
    console.log("🚀 create department error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while creating the department" });
  }
};

const getAllDepartmentsController = async (req, reply) => {
  try {
    const getAllDepartment = await DepartmentService.getAllDepartments();
    reply.send(getAllDepartment);
  } catch (error) {
    console.log("🚀 get departments error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while fetching the departments" });
  }
};

const getDepartmentByIdController = async (req, reply) => {
  try {
    const { id } = req.params;
    const department = await DepartmentService.getDepartmentById(id);
    if (!department) {
      reply.code(404).send({ message: "Department not found" });
      return;
    }
    reply.send(department);
  } catch (error) {
    console.log("🚀 get department by id error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while fetching the department by id" });
  }
};

const updateDepartmentController = async (req, reply) => {
  try {
    const updatedDepartment = await DepartmentService.updateDepartment(
      req.id,
      req.body
    );
    if (!updatedDepartment) {
      reply.code(404).send({ message: "Department not found" });
      return;
    }
    reply.send(updatedDepartment);
  } catch (error) {
    console.log("🚀 update department error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while updating the department" });
  }
};

const deleteDepartmentController = async (req, reply) => {
  try {
    const deletedDepartment = await DepartmentService.deleteDepartment(req.params.id);
    if (!deletedDepartment) {
      reply.code(404).send({ message: "Department not found" });
      return;
    }
    reply.send({ message: "Department deleted successfully" });
  } catch (error) {
    console.error(`Error deleting department: ${error.message}`);
    reply.code(500).send({ message: "Internal server error" });
  }
};

export default {
  createDepartmentController,
  getAllDepartmentsController,
  getDepartmentByIdController,
  updateDepartmentController,
  deleteDepartmentController,
};
