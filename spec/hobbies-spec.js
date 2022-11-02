const hobbies = require("../src/hobbies");
describe("API unit test suite", () => {
  describe("getHobbies", () => {
    const list = hobbies.getHobbies();
    it("returns 5 hobbies", () => {
      expect(list.length).toEqual(5);
    });
    it("returns 'jogging' as first hobby", () => {
      expect(list[0]).toBe("jogging");
    });
  });
});

// var request = require("request");
// const base_url = process.env.BASE_URL || "http://localhost:3000";

// describe("Test calc API:", () => {
//   describe("/api/add/", () => {
//     it("should return 4", function (done) {
//       request.get(base_url + "/add/2/2", (error, response, body) => {
//         expect(body).toBe(`4`);
//         done();
//       });
//     });
//   });

//   describe("/api/mul/", () => {
//     it("should return 4", function (done) {
//       request.get(base_url + "/mul/2/2", (error, response, body) => {
//         expect(body).toBe(`4`);
//         done();
//       });
//     });
//   });

//   describe("/api/div/", () => {
//     it("should return 4", function (done) {
//       request.get(base_url + "/div/8/2", (error, response, body) => {
//         expect(body).toBe(`4`);
//         done();
//       });
//     });

//     it("should error: div by zero", function (done) {
//       request.get(base_url + "/div/2/0", (error, response, body) => {
//         expect(body).toBe(`Error: div by zero`);
//         done();
//       });
//     });
//   });
// });
