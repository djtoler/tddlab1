const { TestWatcher } = require("jest");
const translate = require("./index");

describe("translate", () => {
    test("apple -> appleway", () => {

     const actual = translate("apple")
    
    expect(actual).toEqual("appleway")

});


    test("else -> elseway", () => {

     const actual = translate("else")
    
    expect(actual).toEqual("elseway")

});

test("oreo -> oreoway", () => {

    const actual = translate("oreo")
   
   expect(actual).toEqual("oreoway")

});

test("orange -> orangeway", () => {

    const actual = translate("orange")
   
   expect(actual).toEqual("orangeway")

});


test("easy -> easyway", () => {

    const actual = translate("easy")
   
   expect(actual).toEqual("easyway")

});


test("ice -> iceway", () => {

    const actual = translate("ice")
   
   expect(actual).toEqual("iceway")

});


test("giraffe -> iraffegay", () => {

    const actual = translate("giraffe")
   
   expect(actual).toEqual("iraffegay")

});

test("tiger -> igertay", () => {

    const actual = translate("tiger")
   
   expect(actual).toEqual("igertay")

});

test("lion -> ionlay", () => {

    const actual = translate("lion")
   
   expect(actual).toEqual("ionlay")

});

test("black -> lackbay", () => {

    const actual = translate("black")
   
   expect(actual).toEqual("lackbay")

});


test("sprint -> printsay", () => {

    const actual = translate("sprint")
   
   expect(actual).toEqual("printsay")

});

test("Crying -> ryingcay", () => {

    const actual = translate("Crying")
   
   expect(actual).toEqual("ryingCay")

});

}
);

// Words starting with one consonant
// translate("giraffe") → "iraffegay"
