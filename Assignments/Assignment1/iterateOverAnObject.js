// Using a `for...in` loop
// let obj = { name: 'John', age: 30, city: 'New York' };

// for (let key in obj) {
//   console.log(key + ': ' + obj[key]);
// }

//  Using the `Object.keys()` method
let obj = { name: 'John', age: 30, city: 'New York' };

Object.keys(obj).forEach(function(key) {
  console.log(key + ': ' + obj[key]);
});