# day03

link: https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit?usp=sharing

- For the given JSON iterate over all for loops (for, for in, for of, forEach)
- Create your own resume data in JSON format
- Read about the difference between window, screen and document in javascript
- Codekata practice



# for, for in, for of, forEach loops on json data

## object
```js
const obj1 = {
	name: 'pramod',
	age: 22,
	city: 'Bangalore',
	state: 'Karnataka',
	country: 'India'
};
```


## for-in (gives us indexes which are keys in json inside the loop)
```js
let keys = "";
let values = "";
for (let i in obj1) {
	keys += i + ","; 
	values += obj1[i] + ","; 
}
console.log(`keys : ${keys}`);
console.log(`values : ${values}`);
// output
// keys : name, age, city state, country,
// values: pramod,22,Bangalore,Karnataka,India,
```

## for-of loop
```js
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
```

## traditional for loop and forEach loop

```js
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

```

# json representation of resume data

### source : [jsonresume.org](https://jsonresume.org/schema/)
```js
{
  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "image": "image url",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "url": "https://johndoe.com",
    "summary": "A summary of John Doe…",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [{
      "network": "Twitter",
      "username": "john",
      "url": "https://twitter.com/john"
    }]
  },
	"education": [{
    "institution": "University",
    "url": "https://institution.com/",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "score": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "work": [{
    "name": "Company",
    "position": "President",
    "url": "https://company.com",
    "startDate": "2013-01-01",
    "endDate": "2014-01-01",
    "summary": "Description…",
    "highlights": [
      "Started the company"
    ]
  }],
  "awards": [{
    "title": "Award",
    "date": "2014-11-01",
    "awarder": "Company",
    "summary": "There is no spoon."
  }],
  "publications": [{
    "name": "Publication",
    "publisher": "Company",
    "releaseDate": "2014-10-01",
    "url": "https://publication.com",
    "summary": "Description…"
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "references": [{
    "name": "Jane Doe",
    "reference": "Reference…"
  }],
  "projects": [{
    "name": "Project",
    "description": "Description…",
    "highlights": [
      "Won award at AIHacks 2016"
    ],
    "keywords": [
      "HTML"
    ],
    "startDate": "2019-01-01",
    "endDate": "2021-01-01",
    "url": "https://project.com/",
    "roles": [
      "Team Lead"
    ],
    "entity": "Entity",
    "type": "application"
  }]
}
```