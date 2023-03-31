//사과 바구니
function solution(k, m, score) {
  score = score.sort((a, b) => b - a);
  let count = 0;
  let p = 0;
  const arr = [];

  for (let i = 0; i < score.length; i += m) {
    arr.push(score.slice(i, i + m));
  }
  for (let i of arr) {
    if (i.length === m) {
      p = i[m - 1] * i.length;
      count += p;
    }
  }

  return count;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
