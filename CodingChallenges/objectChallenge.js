const john = {
  firstName: "John",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = Math.floor(this.weight / this.height ** 2);
    return this.bmi;
  },
};

const mark = {
  firstName: "Mark",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = Math.floor(this.weight / this.height ** 2);
    return this.bmi;
  },
};

console.log(
  `John's BMI (${john.calcBMI()}) is ${
    john.calcBMI() > mark.calcBMI() ? "higher" : "lower"
  } than Mark's (${mark.calcBMI()}))`
);
