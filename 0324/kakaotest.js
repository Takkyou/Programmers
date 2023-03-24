function solution(new_id) {
  var answer = '';
  let reg = /[`~!@#$%^&*()|+=?;:'",<>\{\}\[\]\\\/ ]/gim;

  new_id = new_id.toLowerCase();
  new_id = new_id.replace(reg, '');
  new_id = sumDot(new_id);
  new_id = removeFirstAndLastDot(new_id);
  console.log(new_id);
  new_id = checkEmpty(new_id);
  console.log(new_id);
  new_id = checkLength(new_id);

  return new_id;
}

function sumDot(string) {
  let answer = [];
  string = string.split('');
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '.' && string[i + 1] === '.') {
    } else {
      answer.push(string[i]);
    }
  }
  return answer.join('');
}

function removeFirstAndLastDot(string) {
  if (string.charAt(0) === '.') {
    string = string.slice(1, string.length);
  }
  if (string.charAt(string.length - 1) === '.') {
    string = string.slice(0, string.length - 1);
  }
  return string;
}

function checkEmpty(string) {
  if (string === '') {
    string = 'a';
  }
  return string;
}

function checkLength(string) {
  const length1 = string.length;
  if (length1 >= 16) {
    string = string.slice(0, 15);
  }
  string = removeFirstAndLastDot(string);

  if (length1 <= 2) {
    string = string + string.charAt(length1 - 1).repeat(3 - length1);
  }
  return string;
}

console.log(solution('=.='));
