"use strict";

const obj1 = {
  name: "pramod",
  age: 22,
  city: "Bangalore",
  state: "Karnataka",
  country: "India",
};

// for in loop
let keys = "";
let values = "";
for (let i in obj1) {
  keys += i + ",";
  values += obj1[i] + ",";
}
console.log(`keys : ${keys}`);
console.log(`values : ${values}`);

// for of works only on iterable
// In JavaScript, Objects are not iterable unless they implement the iterable protocol. Therefore, you cannot use for…of to iterate over the properties of an object. (source:  mdn docs)
// we can instead use for-of loop on arrays returned from Object.keys, Object.values, Object.entries methods.
for (let key of Object.keys(obj1)) {
  console.log(key);
}

for (let value of Object.values(obj1)) {
  console.log(value);
}

for (let [key, value] of Object.entries(obj1)) {
  console.log(key, value);
}

// we cannot use traditional for loop on objects as they don't have the length property to iterate over
// forEach also cant be used on objects. They are part of arrays.
// The perfect use case for these loops will be when we are iterating over an array of objects.
const objArr = [
  {
    name: "pramod",
    age: 22,
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  },
  {
    name: "pratap",
    age: 22,
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  },
];

for (let i = 0; i < objArr.length; i++) {
  console.log(objArr[i]); // do something with each object
}

objArr.forEach((obj) => {
  console.log(obj);
});
