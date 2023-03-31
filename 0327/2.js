function solution(numbers) {
  let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = [];
  let difference = a.filter((x) => !numbers.includes(x));
  let b = difference.reduce((x, sum) => (sum += x));

  return b;
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
