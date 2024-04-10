"use strict";
/*
・input全てに対して網羅的にテストはしていません
・各同値クラスから3つの代表値を選出してテストしています
・number型以外の引数を受け取ることは想定していません
*/
Object.defineProperty(exports, "__esModule", { value: true });
var fizzBuzz_1 = require("./fizzBuzz");
describe("正常系", function () {
    describe.each([[3], [18], [27]])("3の倍数を渡したらFizzを返すこと", function (value) {
        test("return Fizz when ".concat(value), function () {
            var result = (0, fizzBuzz_1.generateMessage)(value);
            expect(result).toBe("Fizz");
        });
    });
    describe.each([[5], [10], [25]])("5の倍数を渡したらBuzzを返すこと", function (value) {
        test("return Buzz when ".concat(value), function () {
            var result = (0, fizzBuzz_1.generateMessage)(value);
            expect(result).toBe("Buzz");
        });
    });
    describe.each([[15], [30]])("3と5の倍数を渡したらFizzBuzzを返すこと", function (value) {
        test("return FizzBuzz when ".concat(value), function () {
            var result = (0, fizzBuzz_1.generateMessage)(value);
            expect(result).toBe("FizzBuzz");
        });
    });
    describe.each([
        [1, "1"],
        [14, "14"],
        [29, "29"],
    ])("3の倍数でも5の倍数でもなかったら渡した値そのままで返すこと", function (value) {
        test("return original value when ".concat(value), function () {
            var result = (0, fizzBuzz_1.generateMessage)(value);
            expect(result).toBe(value.toString());
        });
    });
});
describe("準正常系", function () {
    describe.each([[0], [-12], [-30]])("1未満の数字を渡した場合、エラーを返すこと", function (value) {
        test("return Error when ".concat(value), function () {
            var result = (0, fizzBuzz_1.generateMessage)(value);
            expect(result).toBe("Invalid Number");
        });
    });
    describe.each([[0], [-12], [-30]])("30より大きい数字を渡した場合、エラーを返すこと", function (value) {
        test("return Error when ".concat(value), function () {
            var result = (0, fizzBuzz_1.generateMessage)(value);
            expect(result).toBe("Invalid Number");
        });
    });
});
