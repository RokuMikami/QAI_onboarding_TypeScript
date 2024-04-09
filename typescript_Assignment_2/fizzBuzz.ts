const input = 30;

export const generateMessage = (n: number): string => {
  //number型以外の引数を受け取ることは想定していません

  if (n < 1 || n > input) {
    return "Invalid Number";
  }

  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n.toString();
  }
};

for (let i = 1; i <= input; i++) {
  console.log(generateMessage(i));
}
