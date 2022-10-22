let {expect, assert} = require("chai");
let {chooseYourCar} = require("./chooseYourCar");

describe("Tests …", function() {
    describe("test", function() {

        it("testYear", function() {
             assert.throw(()=>{chooseYourCar.choosingType("asd", "asd", 1899)},"Invalid Year!");
             assert.throw(()=>{chooseYourCar.choosingType("asd", "asd", 2023)},"Invalid Year!");
        });

        it("testSedan", function() {
            assert.throw(()=>{chooseYourCar.choosingType("asd", "asd", 2000)},"This type of car is not what you are looking for.");
            assert.throw(()=>{chooseYourCar.choosingType("Sedaneee", "asd", 2000)},"This type of car is not what you are looking for.");      
        });

        it("testWork", function() {
            let exp = "This red Sedan meets the requirements, that you have."
            assert.equal(chooseYourCar.choosingType("Sedan", "red", 2015), exp);
            assert.equal(chooseYourCar.choosingType("Sedan", "red", 2010), exp);
        })

        it("testOld", function() {
            let exp = "This Sedan is too old for you, especially with that red color."
            assert.equal(chooseYourCar.choosingType("Sedan", "red", 2000), exp)
        })
     });

    describe("test2", function() {
        it("testException", function() {
            assert.throw(()=>{chooseYourCar.brandName(["asd", "zxc", "qwe"], 5)},"Invalid Information!");
            assert.throw(()=>{chooseYourCar.brandName(["asd", "zxc", "qwe"], "asd")},"Invalid Information!");
            assert.throw(()=>{chooseYourCar.brandName(["asd", "zxc", "qwe"], 3)},"Invalid Information!");
            assert.throw(()=>{chooseYourCar.brandName(1, 5)},"Invalid Information!");
            assert.throw(()=>{chooseYourCar.brandName("asd", 5)},"Invalid Information!");
            assert.throw(()=>{chooseYourCar.brandName({}, 5)},"Invalid Information!");
        })

        it("testWork", function() {
            let exp = "1, 2";
            assert.equal(chooseYourCar.brandName(["1", "2", "3"],2),exp);
        })
    })
     
    describe("test3", function(){
        it("test", function() {
            expect(chooseYourCar.carFuelConsumption(100, 3)).to.equal("The car is efficient enough, it burns 3.00 liters/100 km.");
        });
        it("test", function() {
            expect(chooseYourCar.carFuelConsumption(100, 150)).to.equal("The car burns too much fuel - 150.00 liters!");
        });
        it("test", function() {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
        });
        it("test", function() {
            expect(() => chooseYourCar.carFuelConsumption(100, 'test')).to.throw("Invalid Information!");
        });
        it("test", function() {
            expect(() => chooseYourCar.carFuelConsumption('test', 120)).to.throw("Invalid Information!");
        });
    })

});
