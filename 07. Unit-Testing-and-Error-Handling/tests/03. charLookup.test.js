let {expect} = require("chai");
let {assert} = require("chai");

let{lookupChar} = require("../03. Char Lookup/03. charLookup");

describe("test lookupChar functionality", ()=>{
    it("should return undefied on incorrenct args", ()=>{
        expect(lookupChar(1,5)).to.be.undefined;
        expect(lookupChar("asd",5.5)).to.be.undefined;
    })

    it("should return Incorect index", ()=>{
        assert.equal(lookupChar("asd",3), "Incorrect index");
        assert.equal(lookupChar("asd",-1), "Incorrect index");
    })

    it("should return the correct char", ()=>{
        assert.equal(lookupChar("asd",2), "d");

    })

})