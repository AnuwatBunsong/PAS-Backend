import Fastify from "fastify";
import routes from "./routes/index.js";
import cors from "@fastify/cors";
const fastify = Fastify({ logger: true });

fastify.register(cors, { origin: "*" });

fastify.register(routes.ministryRoutes, { prefix: "/api" });
fastify.register(routes.departmentRoutes, { prefix: "/api" });
fastify.register(routes.contactDetailRoutes, { prefix: "/api" });
fastify.register(routes.userRoutes, { prefix: "/api" });

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log(`Server running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

export default {
  fastify,
};
