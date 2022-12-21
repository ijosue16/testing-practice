const Calculator = require("./calc");

describe("function 1 test", () => {
  const calculator = new Calculator();

  test("3 plus 3 is equal to 6", () => {
    result = calculator.add(3, 3)
    expect(result).toBe(6);
  });

  test("7 plus 3 is equal to 33", () => {
    result = calculator.add(7, 33)
    expect(result).toBe(40);
  });

  test("90 plus 230 is equal to 320", () => {
    result = calculator.add(90, 230)
    expect(result).toBe(320);
  });

  test("90 times 230 is equal to 20700", () => {
    result = calculator.multiply(90, 230)
    expect(result).toBe(20700);
  });

  test("7 times 230 is equal to 320", () => {
    result = calculator.multiply(7, 230)
    expect(result).toBe(1610);
  });

  test("94 times 520 is equal to 48880", () => {
    result = calculator.multiply(94, 520)
    expect(result).toBe(48880);
  });

  test("520 minus 94 is  not equal to 48880", () => {
    result = calculator.subtract(520,94)
    expect(result).not.toBe(48880);
  });

  test("33 minus 9 is  not equal to 0", () => {
    result = calculator.subtract(33,9)
    expect(result).not.toBe(0);
  });
  
  test("0 minus 0 is  equal to falsy", () => {
    result = calculator.subtract(0,0)
    expect(result).toBeFalsy();
  }); 

  test("0 divided 0 is  equal to falsy", () => {
    result = calculator.divide(0,0)
    expect(result).toBeFalsy();
  }); 

  test("15 divided 3 is  equal to 5", () => {
    result = calculator.divide(15,3)
    expect(result).toBe(5);
  }); 
});
