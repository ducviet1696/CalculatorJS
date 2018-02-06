const Calculate = require('./Operator');
function Calculator() {
    this.operator = {
        "+": new Calculate.Addition()
    };
    this.result = function (operator, num1, num2) {
        return this.operator[operator].run(num1, num2);
    }
}
let Cal = new Calculator();
console.log(Cal.result("+", 5, 7));