import { MinistryService } from "../services/ministry_service.js";

const createMinistryController = async (req, reply) => {
  try {
    const newMinistry = await MinistryService.createMinistry(req.body);
    reply.code(201).send(newMinistry);
  } catch (error) {
    console.log("🚀 create ministry error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while creating the ministry" });
  }
};
const getAllMinistriesController = async (req, reply) => {
  try {
    const getAllMinistry = await MinistryService.getAllMinistries();
    reply.send(getAllMinistry);
  } catch (error) {
    console.log("🚀 get ministries error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while fetching the ministries" });
  }
};

const getMinistryByIdController = async (req, reply) => {
  try {
    const { id } = req.params;
    const ministry = await MinistryService.getMinistryById(id);
    if (!ministry) {
      reply.code(404).send({ message: "Ministry not found" });
      return;
    }
    reply.send(ministry);
  } catch (error) {
    console.log("🚀 get ministry by id error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while fetching the ministry by id" });
  }
};

const updateMinistryController = async (req, reply) => {
  try {
    const updatedMinistry = await MinistryService.updateMinistry(
      req.id,
      req.body
    );
    if (!updatedMinistry) {
      reply.code(404).send({ message: "Ministry not found" });
      return;
    }
    reply.send(updatedMinistry);
  } catch (error) {
    console.log("🚀 update ministry error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while updating the ministry" });
  }
};
const deleteMinistryController = async (req, reply) => {
  try {
    const deletedMinistry = await MinistryService.deleteMinistry(req.params.id);
    if (!deletedMinistry) {
      reply.code(404).send({ message: "Ministry not found" });
      return;
    }
    reply.send({ message: "Ministry deleted successfully" });
  } catch (error) {
    console.error(`Error deleting ministry: ${error.message}`);
    reply.code(500).send({ message: "Internal server error" });
  }
};
export default {
  createMinistryController,
  getAllMinistriesController,
  getMinistryByIdController,
  updateMinistryController,
  deleteMinistryController,
};
