import { describe, it, expect } from "bun:test";
import request from "supertest";
import app from "../app";

describe("Login API", () => {

  it("POST /login → should return a token for valid credentials", async () => {
    const res = await request(app)
      .post("/login")
      .send({
        email: "admin@gmail.com",
        password: "password"
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(typeof res.body.token).toBe("string");
  });

  it("POST /login → should return 401 for invalid credentials", async () => {
    const res = await request(app)
      .post("/login")
      .send({
        email: "xo@gmail.com",
        password: "123456789"
      });

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
    
  });

});
