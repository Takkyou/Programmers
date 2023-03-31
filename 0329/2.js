function solution(n) {
  n = String(n);
  n = n.split('');
  console.log(n);
  n = n.map((value) => parseInt(value));
  let b = n.reduce((sum = 0, i) => (sum += i));
  console.log(b);
  return;
}

console.log(solution(123));
