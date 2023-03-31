function solution(id_list, report, k) {
  let result = removeDuplication(report);
  result = stopId(result, k);
  let answer = checkId(result, report, id_list);

  return answer;
}

//중복제거
function removeDuplication(array) {
  const set = new Set(array);
  return Array.from(set);
}

//정지된 유저계정
function stopId(array, k) {
  let resultArray = [];
  let totalResult = [];

  for (let i of array) {
    resultArray.push(i.split(' ')[1]);
  }

  const result = resultArray.reduce((map, value) => {
    map.set(value, (map.get(value) || 0) + 1);
    return map;
  }, new Map());

  for (let [key, value] of result) {
    if (value >= k) {
      totalResult.push(key);
    }
  }

  return totalResult;
}

//확인
function checkId(stopId, report, id_list) {
  let result = [];
  let answer = [];
  let a = [];
  let b = [];
  for (let i of report) {
    a.push(i.split(' ')[0]);
    b.push(i.split(' ')[1]);
  }

  for (var i = 0; i < report.length; i++) {
    for (var j of stopId) {
      if (b[i] === j) {
        result.push(a[i]);
      }
    }
  }

  const resultAnswer = id_list.reduce((map, value) => {
    map.set(value, map.get(value) || 0);
    return map;
  }, new Map());

  for (var i = 0; i < result.length; i++) {
    for (var [key, value] of resultAnswer) {
      if (result[i] === key) {
        resultAnswer.set(key, (resultAnswer.get(key) || 0) + 1);
      }
    }
  }

  for (var [key, value] of resultAnswer) {
    answer.push(value);
  }

  return answer;
}

console.log(
  solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
);
