let obj = {
  name: "john",
  age: 30,
  city: "New York",
};

let jsonString = JSON.stringify(obj);
console.log(jsonString);

// how to convert json string back to object .JSON

let jsonString1 = jsonString;

let obj1 = JSON.parse(jsonString1);
console.log(obj);

let obj2 = {
  name: "heyehy",
  age: 21,
  email: "vishu@hey.com",
};

let jsonobj2 = JSON.stringify(obj2);
console.log(jsonobj2);

let convertJson = JSON.parse(jsonobj2);
console.log(convertJson);

let arr = [1, 2, 3, 4, 5];

let arr1 = [...arr];

arr1.pop();

if (12 > 13) console.log("12 is greater than 13");
else console.log("12 is not greather than 13");
