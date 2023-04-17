// Task 1
function camelCaseConverter(str) {
  const arr = str.split("-");
  const camelCase = arr
    .map((element, index) => {
      return index === 0
        ? element
        : element[0].toUpperCase() + element.slice(1);
    })
    .join("");
  return camelCase;
}

console.log(camelCaseConverter("background-color"));
console.log(camelCaseConverter("list-style-image"));
console.log(camelCaseConverter("-webkit-transition"));

// Task 2
function filterRange(arr, a, b) {
  const filterdArr = arr.filter((element) => {
    return element >= a && element <= b;
  });
  return filterdArr;
}

const arr1 = [5, 3, 8, 1];
console.log(filterRange(arr1, 1, 4));

// Task 3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);
console.log(arr2);

// Task 4
const arr4 = [1, 2, 3, 4, 5];
arr4.sort((a, b) => b - 1);
console.log(arr4);

// Task 5
function createArrayCopy(arr) {
  return arr.slice().sort();
}

const arr5 = [5, 4, 3, 2, 1];
const arr5Copy = createArrayCopy(arr5);
console.log(arr5Copy);

// Task 6
const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 28 };

const users = [john, pete, mary];

const names = users.map((user) => user.name);
console.log(names);
