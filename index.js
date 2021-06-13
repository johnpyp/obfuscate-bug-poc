class BuggyClass {
  constructor(param1, param2) {
    (this.param1 = param1),
      (this.param2 = param2),
      (this.obj = {
        param1: this.param1,
        param2: this.param2,
      });
  }

  debug() {
    console.log("BUGGY CLASS");
    console.log({ obj: this.obj });
    console.log({ param1: this.param1, param2: this.param2 });
  }
}

class GoodClass {
  constructor(param1, param2) {
    (this.param1 = param1),
      (this.param2 = param2),
      (this.obj = {
        param1: this.param1,
        param2: param2,
      });
  }

  debug() {
    console.log("GOOD CLASS");
    console.log({ obj: this.obj });
    console.log({ param1: this.param1, param2: this.param2 });
  }
}

const buggyClass = new BuggyClass("param1", "param2");

buggyClass.debug();

const goodClass = new GoodClass("param1", "param2");

goodClass.debug();
