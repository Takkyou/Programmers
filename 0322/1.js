function solution(s, n) {
  var answer = '';
  s = s.split('');

  for (let i of s) {
    let a = i.charCodeAt();
    let b = String.fromCharCode(a + n);
    console.log(b);
    let c = 0;

    if (i === ' ') {
      answer += ' ';
    } else if (a <= 90) {
      if (b.charCodeAt() > 90) {
        c = b.charCodeAt() - 26;
        answer += String.fromCharCode(c);
      } else {
        answer += b;
      }
    } else {
      if (b.charCodeAt() > 122) {
        c = b.charCodeAt() - 26;
        answer += String.fromCharCode(c);
      } else {
        answer += b;
      }
    }
  }

  return answer;
}

console.log(solution('a Z z', 2));
