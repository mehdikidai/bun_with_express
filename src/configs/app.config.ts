export default {
  PORT: Number(Bun.env.PORT) || 8080,
  HOST: "localhost",
  JWT_SECRET: process.env.JWT_SECRET as string,
};
