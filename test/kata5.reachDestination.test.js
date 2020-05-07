const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44,10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(100,50)).toBe("I should be there in 2 hours.");
    expect(reachDestination(74,41)).toBe("I should be there in 2 hours.");
  });
});
