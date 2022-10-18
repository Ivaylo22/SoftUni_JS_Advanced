let {expect} = require("chai");
let {assert} = require("chai");

let{isOddOrEven} = require("../02. Even or Odd/02. evenOrOdd");

describe("test isOddOrEven functionality", ()=>{
    it("should be undefied wiht argument is Array", ()=>{
        expect(isOddOrEven([1,2,3])).to.be.undefined;
    });

    it("should be undefied wiht argument is Number", ()=>{
        expect(isOddOrEven(3)).to.be.undefined;
    });

    it("should return even", () =>{
        assert.equal(isOddOrEven("aaaa"), "even");
    });

    it("should return odd", () =>{
        assert.equal(isOddOrEven("aaa"), "odd");
    });
}); 