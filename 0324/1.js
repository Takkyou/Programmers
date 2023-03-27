function solution(arr) {
  let min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  arr = arr.filter((v) => v !== min);
  console.log(arr);
  return arr.length === 0 ? [-1] : arr;
}

console.log(solution([4, 3, 2, 1]));
