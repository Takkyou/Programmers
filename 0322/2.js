function solution(num) {
  var answer = 0;
  while (true) {
    if (answer > 500) {
      return -1;
    } else if (num === 1) {
      break;
    } else if (num % 2 === 0) {
      num = num / 2;
      answer++;
    } else {
      num = num * 3 + 1;
      answer++;
    }
  }
  return answer;
}

console.log(solution(6));
