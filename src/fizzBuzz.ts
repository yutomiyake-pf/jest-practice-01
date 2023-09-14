export default function fizzBuzz(int: number) {
  if (int % 15 === 0) return "FizzBuzz";
  if (int % 3 === 0) return "Fizz";
  if (int % 5 === 0) return "Buzz";

  return int;
}
