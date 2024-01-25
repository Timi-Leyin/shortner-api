import dotenv from "dotenv";
dotenv.config();
import request from "supertest";
import app from "../src/app";
import mainConfig from "../src/config/main";

const LINK_ID = "3bad17";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzYmFkMTc0ZC0zNzc3LTQzMDYtODBhNC1hMWE2MGY2OWI1ZGUiLCJpYXQiOjE3MDM0NTQzNzgsImV4cCI6MTcwMzU0MDc3OH0.x5dpdhav6ft2FP8f_9NjhQCVaTK9QYOEKmkuQMtjp7Y";
describe("GET Endpoints", () => {
  it("should return a 200 status code", async () => {
    const res = await request(app).get(`/${LINK_ID}`);
    expect(res.status).toBe(200);
  });
});

describe("Created Link Endpoints", () => {
  it("should create a link", async () => {
    const res = await request(app).post(mainConfig.routes.shorten).send({
      url: "https://google.com/09121msd/22",
    });
    expect(res.statusCode).toEqual(201);
  });
});
