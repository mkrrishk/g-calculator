const buttonMap = new Map([
  ["operator", "btn-operator"],
  ["operand", "btn-operand"],
  ["result", "btn-result"],
]);

const fontsizeMap = new Map([
  ["13px", "text-gc-13"],
  ["14px", "text-gc-14"],
  ["18px", "text-gc-18"],
]);

const fontWeightMap = new Map([
  ["normal", "font-normal"],
  ["bold", "font-bold"],
]);

export const activeCalButtons = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "+",
  "=",
  "×",
  "ce",
];

export const format = (value) => {
  return value.replaceAll("+", " + ").replaceAll("×", " × ").trim();
};

export const calculatorButtons = [
  { label: "Rad", value: "rad", classes: [buttonMap.get("operator")] },
  { label: "Deg", value: "deg", classes: [buttonMap.get("operator")] },
  { label: "x!", value: "fact", classes: [buttonMap.get("operator")] },
  {
    label: "(",
    value: "(",
    classes: [buttonMap.get("operator"), fontsizeMap.get("14px")],
  },
  {
    label: ")",
    value: ")",
    classes: [buttonMap.get("operator"), fontsizeMap.get("14px")],
  },
  {
    label: "%",
    value: "mod",
    classes: [buttonMap.get("operator"), fontsizeMap.get("14px")],
  },
  { label: "CE", value: "ce", classes: [buttonMap.get("operator")] },
  { label: "Inv", value: "inv", classes: [buttonMap.get("operator")] },
  { label: "sin", value: "sin", classes: [buttonMap.get("operator")] },
  { label: "In", value: "in", classes: [buttonMap.get("operator")] },
  {
    label: "7",
    value: "7",
    classes: [buttonMap.get("operand"), fontsizeMap.get("14px")],
  },
  {
    label: "8",
    value: "8",
    classes: [buttonMap.get("operand"), fontsizeMap.get("14px")],
  },
  {
    label: "9",
    value: "9",
    classes: [buttonMap.get("operand"), fontsizeMap.get("14px")],
  },
  {
    label: "÷",
    value: "÷",
    classes: [buttonMap.get("operator"), fontsizeMap.get("18px")],
  },
  { label: "π", value: "π", classes: [buttonMap.get("operator")] },
  { label: "cos", value: "cos", classes: [buttonMap.get("operator")] },
  { label: "log", value: "log", classes: [buttonMap.get("operator")] },
  {
    label: "4",
    value: "4",
    classes: [buttonMap.get("operand"), fontsizeMap.get("14px")],
  },
  {
    label: "5",
    value: "5",
    classes: [buttonMap.get("operand"), fontsizeMap.get("14px")],
  },
  {
    label: "6",
    value: "6",
    classes: [buttonMap.get("operand"), fontsizeMap.get("14px")],
  },
  {
    label: "×",
    value: "×",
    classes: [buttonMap.get("operator"), fontsizeMap.get("18px")],
  },
  { label: "e", value: "e", classes: [buttonMap.get("operator")] },
  { label: "tan", value: "tan", classes: [buttonMap.get("operator")] },
  { label: "√ ", value: "sqrt", classes: [buttonMap.get("operator")] },
  {
    label: "1",
    value: "1",
    classes: [buttonMap.get("operand"), fontsizeMap.get("14px")],
  },
  {
    label: "2",
    value: "2",
    classes: [buttonMap.get("operand"), fontsizeMap.get("14px")],
  },
  {
    label: "3",
    value: "3",
    classes: [buttonMap.get("operand"), fontsizeMap.get("14px")],
  },
  {
    label: "−",
    value: "-",
    classes: [buttonMap.get("operator"), fontsizeMap.get("18px")],
  },
  { label: "Ans", value: "ans", classes: [buttonMap.get("operator")] },
  { label: "EXP", value: "exp", classes: [buttonMap.get("operator")] },
  { label: "xy", value: "pow", classes: [buttonMap.get("operator")] },
  {
    label: "0",
    value: "0",
    classes: [buttonMap.get("operand"), fontsizeMap.get("14px")],
  },
  {
    label: ".",
    value: ".",
    classes: [
      buttonMap.get("operand"),
      fontsizeMap.get("18px"),
      fontWeightMap.get("bold"),
    ],
  },
  {
    label: "=",
    value: "=",
    classes: [
      buttonMap.get("result"),
      fontsizeMap.get("18px"),
      fontWeightMap.get("bold"),
    ],
  },
  {
    label: "+",
    value: "+",
    classes: [buttonMap.get("operator"), fontsizeMap.get("18px")],
  },
];
