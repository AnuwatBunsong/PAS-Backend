import { ContactDetailService } from "../services/contactdetail_service.js";

const createContactDetailController = async (req, reply) => {
  try {
    const newContactDetail = await ContactDetailService.createContactDetail(
      req.body
    );
    reply.code(201).send(newContactDetail);
  } catch (error) {
    console.log("🚀 create contact detail error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while creating the contact detail" });
  }
};

const getAllContactDetailsController = async (req, reply) => {
  try {
    const getAllContactDetail =
      await ContactDetailService.getAllContactDetails();
    reply.send(getAllContactDetail);
  } catch (error) {
    console.log("🚀 get contact details error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while fetching the contact details" });
  }
};

const getContactDetailByIdController = async (req, reply) => {
  try {
    const { id } = req.params;
    const contactDetail = await ContactDetailService.getContactDetailById(id);
    if (!contactDetail) {
      reply.code(404).send({ message: "Contact detail not found" });
      return;
    }
    reply.send(contactDetail);
  } catch (error) {
    console.log("🚀 get contact detail by id error:", error);
    reply.code(500).send({
      message: "Error occurred while fetching the contact detail by id",
    });
  }
};

const updateContactDetailController = async (req, reply) => {
  try {
    const updatedContactDetail = await ContactDetailService.updateContactDetail(
      req.id,
      req.body
    );
    if (!updatedContactDetail) {
      reply.code(404).send({ message: "Contact detail not found" });
      return;
    }
    reply.send(updatedContactDetail);
  } catch (error) {
    console.log("🚀 update contact detail error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while updating the contact detail" });
  }
};

const deleteContactDetailController = async (req, reply) => {
  try {
    const deletedContactDetail = await ContactDetailService.deleteContactDetail(
      req.params.id
    );
    if (!deletedContactDetail) {
      reply.code(404).send({ message: "Contact detail not found" });
      return;
    }
    reply.send({ message: "Contact detail deleted successfully" });
  } catch (error) {
    console.error(`Error deleting contact detail: ${error.message}`);
    reply.code(500).send({ message: "Internal server error" });
  }
};

const getAllContactDetailsInSameDeptAndMinistryController = async (
  req,
  reply
) => {
  try {
    const { id, ministryId } = req.params;
    const contactDetails =
      await ContactDetailService.getAllContactDetailsInSameDeptAndMinistry(
        id,
        ministryId
      );
    if (!contactDetails) {
      reply.code(404).send({ message: "Contact details not found" });
      return;
    }
    reply.send(contactDetails);
  } catch (error) {
    console.log("🚀 get contact details error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while fetching the contact details" });
  }
};

const getAllForUser = async (req, reply) => {
  try {
    const { id } = req.params;
    const contactDetails = await ContactDetailService.getAllForUser(id);
    reply.send(contactDetails);
  } catch (error) {
    console.log("🚀 get contact details error:", error);
    reply
      .code(500)
      .send({ message: "Error occurred while fetching the contact details" });
  }
};

export default {
  createContactDetailController,
  getAllContactDetailsController,
  getContactDetailByIdController,
  updateContactDetailController,
  deleteContactDetailController,
  getAllContactDetailsInSameDeptAndMinistryController,
  getAllForUser,
};
