const sumArray = (arr: number[]): number => {
  let sum: number = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
};

const result: number = sumArray([1, 2, 3, 4, 5]);
console.log(result);
