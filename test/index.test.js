// var assert = require("assert");
// const { saveUser, getUser } = require("../src/services/user.service");
// const User = require("../src/models/user.model")
// const sinon = require("sinon");
// const { expect } = require("chai");

// describe("User Service Unit Tests", function () {
//   this.afterEach(() => {
//     sinon.restore();
//   })
//   describe("Save User functionality", function () {
//     it("Inserted object should be added to db", async function () {
//       const profileId = 1;
//       const name = "Akshay";
//       const dob = "2020-12-12";
//       const experience = [{ years: 2, organizationName: "ABCD" }]
//       sinon.stub(User, 'countDocuments').returns(0)
//       sinon.stub(User.prototype, 'save').returns({ name, dob, experience })
//       const returnedUser = await saveUser({
//         profileId,
//         name,
//         dob,
//         experience,
//       });
//       expect(returnedUser.name).to.equal(name)
//       expect(returnedUser.dob).to.equal(dob)
//       expect(returnedUser.experience).to.eql(experience)
//     });

//     it("Inserting object with existing profileId will give an error", async function () {
//       const profileId = 1;
//       const name = "Akshay";
//       const dob = "2020-12-12";
//       const experience = [{ years: 2, organizationName: "ABCD" }]
//       sinon.stub(User, 'countDocuments').returns(1)
//       await saveUser({
//         profileId,
//         name,
//         dob,
//         experience,
//       }).catch((error) => {
//         expect(error.message).to.equal("User with profileId already exists")
//       });
//     });
//   });

//   describe("Get User functionality", function () {
//     it("Inserted object should be added to db", async function () {
//       const profileId = 1;
//       const fakeObject = {
//         _id: 1,
//         name: "Akshay",
//         dob: "2020-12-12",
//         experience: [{ years: 5, organizationName: "ABCD" }]
//       }
//       sinon.stub(User, 'findOne').returns(fakeObject)
//       const returnedUser = await getUser({
//         profileId
//       });
//       expect(returnedUser.name).to.equal(fakeObject.name)
//       expect(returnedUser.age).to.equal(1)
//       expect(returnedUser.totalExperience).to.eql(5)
//     });

//     it("Inserting object with existing profileId will give an error", async function () {
//       const profileId = 1;
//       sinon.stub(User, 'findOne').returns(null)
//       await getUser({
//         profileId,
//       }).catch((error) => {
//         expect(error.message).to.equal("No user not found with given profileId")
//       });
//     });
//   });
// });
