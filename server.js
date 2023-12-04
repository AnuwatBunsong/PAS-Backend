import Fastify from "fastify";
import routes from "./routes/index.js";
import cors from "@fastify/cors";
const fastify = Fastify({ logger: true });

fastify.register(cors, { origin: "*" });

fastify.register(routes.ministryRoutes, { prefix: "/api" });
fastify.register(routes.departmentRoutes, { prefix: "/api" });
fastify.register(routes.contactDetailRoutes, { prefix: "/api" });
fastify.register(routes.userRoutes, { prefix: "/api" });
fastify.register(routes.organizationRoutes, { prefix: "/api" });

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });
