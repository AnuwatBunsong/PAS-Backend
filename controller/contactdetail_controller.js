import { ContactDetailService } from "../services/contactdetail_service.js";

export const ContactDetailController = {
  create: async (req, reply) => {
    try {
      const newContactDetail = await ContactDetailService.create(req.body);
      reply.code(201).send(newContactDetail);
    } catch (error) {
      console.log("🚀 create contact detail error:", error);
      reply
        .code(500)
        .send({ message: "Error occurred while creating the contact detail" });
    }
  },

  getAll: async (req, reply) => {
    try {
      const contactDetails = await ContactDetailService.getAll(req.query);
      reply.send(contactDetails);
    } catch (error) {
      console.log("🚀 get contact details error:", error);
      reply
        .code(500)
        .send({ message: "Error occurred while fetching the contact details" });
    }
  },

  getById: async (req, reply) => {
    try {
      const { id } = req.params;
      const contactDetail = await ContactDetailService.getById(id);
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
  },

  update: async (req, reply) => {
    try {
      const updated = await ContactDetailService.update(req.id, req.body);
      if (!updated) {
        reply.code(404).send({ message: "Contact detail not found" });
        return;
      }
      reply.send(updated);
    } catch (error) {
      console.log("🚀 update contact detail error:", error);
      reply
        .code(500)
        .send({ message: "Error occurred while updating the contact detail" });
    }
  },

  delete: async (req, reply) => {
    try {
      const deleted = await ContactDetailService.delete(req.params.id);
      if (!deleted) {
        reply.code(404).send({ message: "Contact detail not found" });
        return;
      }
      reply.send({ message: "Contact detail deleted successfully" });
    } catch (error) {
      console.error(`Error deleting contact detail: ${error.message}`);
      reply.code(500).send({ message: "Internal server error" });
    }
  },

  getAllInSameDeptAndMinistry: async (req, reply) => {
    try {
      const { id, ministryId } = req.params;
      const contactDetails =
        await ContactDetailService.getAllInSameDeptAndMinistry(id, ministryId);
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
  },

  getAllForUser: async (req, reply) => {
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
  },

  createMany: async (req, reply) => {
    try {
      const mapping = req.body.data.map((val) => ({
        ...val,
        department_id: Number(val.department_id),
        ministry_id: Number(val.ministry_id),
      }));
      console.log(
        "🚀 ~ file: contactdetail_controller.js:113 ~ mapping ~ mapping:",
        mapping[0]
      );

      const newContactDetails = await ContactDetailService.createMany(mapping);
      reply.code(201).send(newContactDetails);
    } catch (error) {
      console.log("🚀 create contact details error:", error);
      reply
        .code(500)
        .send({ message: "Error occurred while creating the contact details" });
    }
  },
};
