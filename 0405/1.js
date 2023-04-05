function solution(left, right) {
  var answer = 0;
  for (var i = left; i <= right; i++) {
    if (countNum(i) % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
function countNum(num) {
  let count = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      count += 1;
    }
  }
  console.log(count);
  return count;
}

console.log(solution(24, 27));
