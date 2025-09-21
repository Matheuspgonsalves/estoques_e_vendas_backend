import request from "supertest";
import app from "../../../index";

describe("POST /register", () => {
  it("should create a new user", async () => {
    const response = await request(app)
      .post("/auth/register")
      .send({
        name: "Matheus", 
        email: `matheus_${Date.now()}@gmail.com`, 
        password: "123456"
      });

      expect(response.status).toBe(201);
      expect(response.body.message).toBe("User successfully created");
  });
});
