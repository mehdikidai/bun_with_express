import { describe, it, expect } from "bun:test";
import request from "supertest";
import app from "../app";

describe("Users API", () => {

  it("GET /users → should return all users", async () => {
    const res = await request(app).get("/users");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /users/:id → should return user by id", async () => {
    const res = await request(app).get("/users/1");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  it("GET /users/:id → should return 404 if user not found", async () => {
    const res = await request(app).get("/users/99999999");

    expect(res.status).toBe(404);
  });

});
