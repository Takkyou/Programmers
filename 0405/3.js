function solution(k, score) {
  var answer = [];
  var result = [];

  for (let i of score) {
    answer.push(i);
    answer = answer.sort((a, b) => b - a);
    answer = answer.slice(0, k);
    result.push(answer[answer.length - 1]);
  }

  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
