// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");


describe("polybius encode", () => {
  it("capital letters are ignored", () => {
    const expected = "11213141";
    const actual = polybius("Abcd");
    expect(actual).to.deep.equal(expected);
  });
  
  it("returns proper encoded message", () => { 
    const expected = "11213141";
    const actual = polybius("abcd");
    expect(actual).to.deep.equal(expected);
  });
});


describe("polybius decode", () => {
  it("if input is valid with an even number", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });
  
  it("returns proper decoded message", () => { 
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.deep.equal(expected);
  });
  
  it("make sure i/j share a space", () => { 
    const expected = "thi/jnkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.deep.equal(expected);
  });
})
