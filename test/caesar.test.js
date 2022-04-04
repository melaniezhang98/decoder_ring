// Write your tests here!

const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");


describe("check if input is valid", () => {
  
  it("return false if shift input is less than -25", () => {
    const actual = caesar("message", -26);
    expect(actual).to.be.false;
    });

  it("return false if shift input is greater than 25", () => {
    const actual = caesar("message", 27);
    expect(actual).to.be.false;
  });

  it("return false if shift input not present", () => { 
    const actual = caesar("message");
    expect(actual).to.be.false;
  }); 
});


describe("check if caesar function works properly", () => {
  it("ignores capital letters", () => {
    const expected = "umaaiom";
    const actual = caesar("Message", 8);
    expect(actual).to.deep.equal(expected);
  });
  
  it("encoded message that handles shifts that go past the end of the alphabet", () => {
   const expected = "clqf";
   const actual = caesar("Zinc", 3);
   expect(actual).to.deep.equal(expected);
  });
  
  it("decoded message that maintains spaces and other nonalphabetic symbols", () => {
    const expected = "thin kful!";
    const actual = caesar("wklq nixo!", 3, false);
    expect(actual).to.deep.equal(expected);
  });
  
    it("encoded message that maintains spaces and other nonalphabetic symbols", () => {
    const expected = "wklq nixo!";
    const actual = caesar("thin kful!", 3);
    expect(actual).to.deep.equal(expected);
  });
  
});


