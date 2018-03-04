const operation = require('./operation');
const Calculate = new operation();

const Calculator = function () {
    this.operator = {
        "+": new Calculate.Addition(),
        "-": new Calculate.Subtraction(),
        "*": new Calculate.Multiplication(),
        "/": new Calculate.Division()
    };
    this.result = function (operator, num1, num2) {
        return this.operator[operator].run(num1, num2);
    }
};
const Cal = new Calculator();
try {
    console.log(Cal.result("*", 5, 2))
} catch (err){
    console.log(err);
}
