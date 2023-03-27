// 하샤드의 수

function solution(x) {
  let count = 0;
  var a = x;
  x = String(x).split('');
  console.log(x);
  for (let i of x) {
    console.log('i' + i);
    count += parseInt(i);
  }
  console.log(count);

  return a % count === 0 ? true : false;
}

console.log(solution(13));
