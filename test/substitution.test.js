// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

describe("input", () => {
  it("if alphabet > 26 letters", () => {
    const actual = substitution("abcdefghijklmnopqrstuvwxyz", "yhjuiklopawsdfghjnbvxuewhsz");
    expect(actual).to.be.false;
  });

  it("alphabet letters are unique", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });
  
  it("input includes spaces", () => {
    const expected = "thinkful";
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.deep.equal(expected);
  });
  
  it("input includes special characters", () => {
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.deep.equal(expected);
  });
  
  it("encode works properly", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.deep.equal(expected);
  });
  
  it("decode works properly", () => {
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.deep.equal(expected);
  });

});