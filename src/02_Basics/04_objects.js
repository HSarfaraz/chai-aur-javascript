// Object creation using constructor method

// const tinderUser = new Object();
const tinderUser = {};
tinderUser["id"] = "123abc";
tinderUser["name"] = "Siraj";
tinderUser["isLoggedIn"] = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Hitesh",
      lastname: "Chaudhary"
    }
  }
};

console.log(regularUser["fullname"]?.["userfullname"]?.["firstname1"]);
console.log(regularUser["fullname"]["userfullname"]["firstname"]);

//Combining 2 objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({},obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    name: "sarfaraz"
  },
  {
    id: 2,
    name: "Hussain"
  },
  {
    id: 3,
    name: "Kamran"
  }
];

// console.log(users[1]["name"]);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in hindi",
  price: 999,
  courseInstructor: "hitesh"
};

// course["courseInstructor"]

// const { courseInstructor } = course;
// console.log(courseInstructor);
const { courseInstructor: instructor } = course;
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// {
//     "results": [
//       {
//         "gender": "male",
//         "name": {
//           "title": "Mr",
//           "first": "Jake",
//           "last": "Johnson"
//         },
//         "location": {
//           "street": {
//             "number": 9340,
//             "name": "Atkinson Avenue"
//           },
//           "city": "New Plymouth",
//           "state": "Hawke'S Bay",
//           "country": "New Zealand",
//           "postcode": 40098,
//           "coordinates": {
//             "latitude": "54.3480",
//             "longitude": "-70.9738"
//           },
//           "timezone": {
//             "offset": "+7:00",
//             "description": "Bangkok, Hanoi, Jakarta"
//           }
//         },
//         "email": "jake.johnson@example.com",
//         "login": {
//           "uuid": "85de0945-43a8-419d-a5b2-d55559691be6",
//           "username": "silvercat834",
//           "password": "egghead",
//           "salt": "qmNHhK2y",
//           "md5": "43651c2e4929e67f8f3cc62dc60a6027",
//           "sha1": "5f5a0dd8daeed9a6feec88b06fcd3a3b8b08aa67",
//           "sha256": "d0b34e0ff818d92035103f9f628444b43542d99a5f683fae547620c14e5e8810"
//         },
//         "dob": {
//           "date": "1963-11-27T17:49:29.823Z",
//           "age": 59
//         },
//         "registered": {
//           "date": "2009-07-27T23:16:53.106Z",
//           "age": 14
//         },
//         "phone": "(354)-517-9346",
//         "cell": "(765)-420-8407",
//         "id": {
//           "name": "",
//           "value": null
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/36.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
//         },
//         "nat": "NZ"
//       }
//     ],
//     "info": {
//       "seed": "d9844274233862f9",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }
