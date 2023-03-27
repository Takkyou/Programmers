function solution(n) {
  console.log(n);
  n = String(n);
  n = n
    .split('')
    .sort((a, b) => a - b)
    .reverse()
    .join('');
  console.log(n);
}

console.log(solution(935739572397));
