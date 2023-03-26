const btns = [
  {
    id: 1,
    name: "sin",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      return Math.sin(b);
    }
  },
  {
    id: 2,
    name: "cos",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      return Math.cos(b);
    }
  },
  {
    id: 3,
    name: "tan",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      return Math.tan(b);
    }
  },
  {
    id: 4,
    name: "rad",
    type: "action",
    classes: "calc-btn operations",
    handler() {
      console.log("rad");
    }
  },
  {
    id: 5,
    name: "deg",
    type: "action",
    classes: "calc-btn operations",
    handler() {
      console.log("deg");
    }
  },
  {
    id: 6,
    name: "log",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      return Math.log(b);
    }
  },
  {
    id: 7,
    name: "ln",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      return Math.log(b) * (1 / Math.log(Math.E));
    }
  },
  {
    id: 8,
    name: "(",
    type: "action",
    classes: "calc-btn operations",
    handler() {
      console.log("(");
    }
  },
  {
    id: 9,
    name: ")",
    type: "action",
    classes: "calc-btn operations",
    handler() {
      console.log(")");
    }
  },
  {
    id: 10,
    name: "inv",
    type: "action",
    classes: "calc-btn operations",
    handler() {
      console.log("inv");
    }
  },
  {
    id: 11,
    name: "!",
    type: "action",
    classes: "calc-btn operations",
    handler() {
      console.log("!");
    }
  },
  {
    id: 12,
    name: "C",
    type: "cleaner",
    classes: "calc-btn operations",
    handler() {
      console.log("cleaner");
    }
  },
  {
    id: 13,
    name: "%",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      return (a / 100) * b;
    }
  },
  {
    id: 14,
    name: "&larr;",
    type: "delete",
    classes: "calc-btn operations",
    handler() {
      console.log("delete");
    }
  },
  {
    id: 15,
    name: "/",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      return a / b;
    }
  },
  {
    id: 16,
    name: "^",
    type: "action",
    classes: "calc-btn operations",
    handler() {
      console.log("^");
    }
  },
  {
    id: 17,
    name: "7",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 18,
    name: "8",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 19,
    name: "9",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 20,
    name: "x",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      return a * b;
    }
  },
  {
    id: 21,
    name: "&#8730;",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      console.log("&#8730;");
    }
  },
  {
    id: 22,
    name: "4",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 23,
    name: "5",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 24,
    name: "6",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 25,
    name: "-",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      return a - b;
    }
  },
  {
    id: 26,
    name: "&pi;",
    type: "action",
    classes: "calc-btn operations",
    handler() {
      console.log("&pi;");
    }
  },
  {
    id: 27,
    name: "1",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 28,
    name: "2",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 29,
    name: "3",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 30,
    name: "+",
    type: "action",
    classes: "calc-btn operations",
    handler(a, b) {
      return +a + +b;
    }
  },
  {
    id: 31,
    name: "e",
    type: "action",
    classes: "calc-btn operations",
    handler() {
      console.log("e");
    }
  },
  {
    id: 32,
    name: "00",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 33,
    name: "0",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 34,
    name: ",",
    type: "digit",
    classes: "calc-btn"
  },
  {
    id: 35,
    name: "=",
    type: "action",
    classes: "calc-btn operations equal"
  }
];
