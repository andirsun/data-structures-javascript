/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/
function solution(A) {
  let res = 1;
  // write your code in JavaScript (Node.js 8.9.4)
  // Delete de negative numbers, and then sort the array in increasin order
  A = A.filter(x => x > 0).sort((a, b) => a - b);

  A.forEach((e) => {
    // check for the restant number and if is missing in the array then is the smallest
    // because the array is sorted
    if (res < e) {
      return res;
    }
    res = e + 1
  });
  return res;
}

console.log(solution([-1, -3]));