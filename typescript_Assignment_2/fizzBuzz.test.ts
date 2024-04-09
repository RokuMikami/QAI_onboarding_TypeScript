/*
・input全てに対して網羅的にテストはしていません
・各同値クラスから3つの代表値を選出してテストしています
・number型以外の引数を受け取ることは想定していません
*/
const msg1 = "Fizz";
const msg2 = "Buzz";
const msg3 = "FizzBuzz";
const errMsg = "Invalid Number";

import { generateMessage } from "./fizzBuzz";

test.each([
  [3, msg1],
  [18, msg1],
  [27, msg1],
])("3の倍数を渡したらFizzを返すこと", (value, expected) => {
  const result = generateMessage(value);
  expect(result).toBe(expected);
});

test.each([
  [5, msg2],
  [10, msg2],
  [25, msg2],
])("5の倍数を渡したらBuzzを返すこと", (value, expected) => {
  const result = generateMessage(value);
  expect(result).toBe(expected);
});

test.each([
  [15, msg3],
  [30, msg3],
])("3と5の倍数を渡したらFizzBuzzを返すこと", (value, expected) => {
  const result = generateMessage(value);
  expect(result).toBe(expected);
});

test.each([
  [1, "1"],
  [14, "14"],
  [29, "29"],
])(
  "3の倍数でも5の倍数でもなかったら渡した値そのままで返すこと",
  (value, expected) => {
    const result = generateMessage(value);
    expect(result).toBe(expected);
  }
);

test.each([
  [0, errMsg],
  [-12, errMsg],
  [-30, errMsg],
])("1未満の数字を渡した場合、エラーを返すこと", (value, expected) => {
  const result = generateMessage(value);
  expect(result).toBe(expected);
});

test.each([
  [31, errMsg],
  [60, errMsg],
  [100, errMsg],
])("30より大きい数字を渡した場合、エラーを返すこと", (value, expected) => {
  const result = generateMessage(value);
  expect(result).toBe(expected);
});
