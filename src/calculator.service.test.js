import React from "react";
import ReactDOM from "react-dom";
import CalculatorService from "./calculator.service";

describe("CalculatorServiceTest", () => {
  const [calculate, concatNumbers, sum, sub, split, mult] = CalculatorService();

  it("Must ensure that 1 + 4 = 5.", () => {
    let sumTest = calculate(1, 4, sum);
    expect(sumTest).toEqual(5);
  });

  it("Must ensure that 1 - 4 = -3", () => {
    let subtest = calculate(1, 4, sub);
    expect(subtest).toEqual(-3);
  });

  it("Must ensure that 4 / 2 = 2", () => {
    let splitTest = calculate(4, 2, split);
    expect(splitTest).toEqual(2);
  });

  it("Must ensure that 2 * 4 = 8", () => {
    let multTest = calculate(2, 4, mult);
    expect(multTest).toEqual(8);
  });

  it("Must return 0 for invalid operation", () => {
    let invalidTest = calculate(1, 4, "%");
    expect(invalidTest).toEqual(0);
  });
});
