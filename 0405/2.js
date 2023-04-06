//기사단원의 무기

function solution(number, limit, power) {
  var answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;

    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}

// function countNum(num) {
//   let count = 0;
//   for (var i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }
//   return count;
// }

console.log(solution(10, 3, 2));
