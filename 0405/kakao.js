function solution(info, query) {
  var answer = [];
  var question = [];
  for (let i of info) {
    question.push(i.split(' '));
  }
  console.log(question);
  for (let i of query) {
    answer.push(i.replaceAll('and ', '').split(' '));
  }
  console.log(answer);

  for (var i = 0; i < question.length; i++) {
    for (var j = 0; j < answer.length; j++) {
        question[i].map((value,index)=> {
            if(value === array[index] || array[index] === '-'){
                
            }
        })
    }
  }
  return;
}

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ]
  )
);