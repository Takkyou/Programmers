//핸드폰 번호 가리기

function solution(phone_number) {
  var answer1 = phone_number.slice(-4);
  console.log(answer1);
  var answer = '';
  phone_number = phone_number.split('');
  console.log(phone_number);

  for (var i = 0; i < phone_number.length - 4; i++) {
    answer += '*';
  }

  console.log(phone_number);
  return answer + answer1;
}

function hide_numbers(s) {
  var result = '*'.repeat(s.length - 4) + s.slice(-4);
  return result;
}
console.log(solution('01053225490'));
