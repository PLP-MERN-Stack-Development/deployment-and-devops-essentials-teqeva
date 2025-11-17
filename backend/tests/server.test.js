const request = require("supertest");
const app = require("../server");

describe("Server Health Check", () => {
  test("GET /health should return 200", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("uptime");
    expect(response.body).toHaveProperty("message");
  });

  test("GET /api/status should return API status", async () => {
    const response = await request(app).get("/api/status");
    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
  });

  test("GET / should return welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
  });

  test("GET /non-existent-route should return 404", async () => {
    const response = await request(app).get("/non-existent-route");
    expect(response.statusCode).toBe(404);
    expect(response.body.success).toBe(false);
  });
});
