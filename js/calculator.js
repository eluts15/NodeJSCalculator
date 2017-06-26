function Calculator () {

}

Calculator.prototype.add = function (number1, number2) {
  return number1 + number2;
};

exports.calculatorModule = Calculator;
