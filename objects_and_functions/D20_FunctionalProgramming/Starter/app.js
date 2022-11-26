/* 
  Functional programming
*/

const arr1 = [1, 2, 3];
const arr2 = arr1.map(el => el * 2);

function mapForEach(arr, fn) {

  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(fn(arr[i]))
  }

  return newArr;
}

console.log(mapForEach(arr1, (item) => {
  return item * 2
}));