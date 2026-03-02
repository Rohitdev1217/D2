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
