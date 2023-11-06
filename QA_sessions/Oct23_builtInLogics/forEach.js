let array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log(element);
});

//for of method
let array1 = [1, 2, 3, 4, 5];

for (let element of array1) {
  console.log(element);
}

//iterating through Object
let obj = { name: 'John', age: 30, city: 'New York' };

for (let key in obj) {
  console.log(key + ': ' + obj[key]);
} 

// using Obect.keys() along with  forEach loop
let obj1 = { name: 'John', age: 30, city: 'New York' };

Object.keys(obj1).forEach(function(key) {
  console.log(key);
});