import prettifyCode from "./prettifyCode";

const INPUT_DATA = [
  `// some comments 1
  // some comments 2`,
  `// some comments
    field1      {props1 props2        }`,
];

const EXPECTED_OUTPUT = [
  ``,
  `field1 {
  props1
  props2
}`,
];

describe("Prettify code function", () => {
  test("comments", () => {
    expect(prettifyCode(INPUT_DATA[0])).toBe(EXPECTED_OUTPUT[0]);
  });
  test("request", () => {
    expect(prettifyCode(INPUT_DATA[1])).toBe(EXPECTED_OUTPUT[1]);
  });
});
