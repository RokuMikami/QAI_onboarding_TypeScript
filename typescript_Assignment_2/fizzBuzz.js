"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMessage = void 0;
var input = 30;
var generateMessage = function (n) {
    if (typeof n !== "number") {
        return "Invalid Number";
    }
    if (n < 1 || n > input) {
        return "Invalid Number";
    }
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }
    else if (n % 3 === 0) {
        return "Fizz";
    }
    else if (n % 5 === 0) {
        return "Buzz";
    }
    else {
        return n.toString();
    }
};
exports.generateMessage = generateMessage;
for (var i = 1; i <= input; i++) {
    console.log((0, exports.generateMessage)(i));
}
