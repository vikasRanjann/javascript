// // // //number
// // // var num = 10;
// // // console.log(`Value :${num}`);
// // // console.log(`typeOf:${typeof num}`);
// // // num = 100;
// // // console.log(`value :${num}`);

// // // //let
// // // //string
// // // console.log(`============== Let ==============`);
// // // let name = "vikash";
// // // console.log(`name :${name}`);
// // // console.log(`typeOf :${typeof name}`);

// // // console.log(`name :${name},typeOf:${typeof name}`);

// // //constant

// // const num1 = 100;
// // console.log(`num1: ${num1}`);
// // console.log(`value :${num1}`);

// //function
// //named function
// function add(num, num1) {
//   const result = num + num1;
//   console.log(`result :${result}`);
// }
// add(10, 20);
// //unnamed function

// const add1 = function (num, num1) {
//   const result = num + num1;
//   console.log(`value :${add1},typeof:${typeof add1}`);
// };
// add1(30, 40);

// // arrow function
// const arr = (num, num1) => {
//   const result = num + num1;
//   console.log(`result:${result}`);
// };
// arr(100, 100);

//object
// 1.refrence type
// 2.collection of key value
// 3. key must v string
// 4. value can be any thing
// 5. object can be created using json ,Object,construction function

//Create object using Json
const person = {
  name: "vikash",
  age: 25,
  address: "mumbai",
};
console.log(person);

//create object using Object
//Object : function provided by js for
//creating object
const mobile = new Object();
mobile.model = "XS";
mobile.price = 76766577;
console.log(mobile);

//create an object using constructor
function Car(model, price, location) {
  //add attribute
  this.model = model;
  this.price = price;
  this.location = location;
}
const car1 = new Car("vz", 878767, "pune");
console.log(car1);
