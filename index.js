const Calculate = require('./Operator');
function Calculator() {
    this.operator = {
        "+": new Calculate.Addition(),
        "-": new Calculate.Subtraction(),
        "*": new Calculate.Multiplication(),
        "/": new Calculate.Division()
    };
    this.result = function (operator, num1, num2) {
        return this.operator[operator].run(num1, num2);
    }
}
let Cal = new Calculator();
try {
    console.log(Cal.result("/", 5, 0))
} catch (err){
    console.log(err);
}
