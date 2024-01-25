import dotenv from "dotenv";
dotenv.config();
import request from "supertest";
import app from "../src/app";
import mainConfig from "../src/config/main";

const LINK_ID = "QACq0CP";
//  describe("GET Endpoints", () => {
//   it("should return a 200 status code", async () => {
//     const res = await request(app).get(`/${LINK_ID}`);
//     expect(res.status).toBe(302);
//   });
// });

describe("Created Link Endpoints", () => {
  it("should create a link", async () => {
    const res = await request(app).post(mainConfig.routes.shorten).send({
      url: "https://google.com/09121msd/22",
    });
    expect(res.statusCode).toEqual(201);
  }, 100000);
});
