const obj = {
    name: "Karthik",
    age: "26",
    designation: 'Engineer'
}
for (const key in obj) {
    console.log(key + ': ' + obj[key]);
}