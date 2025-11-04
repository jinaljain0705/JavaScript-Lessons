// how to create variable.

// let name = "Jinal";
// let age = 26;

// if(true){
//     let c = 90;
// }

// age = 24;
// console.log(c);

// console.log(name, age);

// const account = 12345;
// account = 123;

// console.log(account);


// old method 
// var a = 10;
// var a = 20;

// if(true){
//     var a = 20;
// }

// function fun(){
//     var c = 20;
// }

// var b = 30;
// console.log(c);

// data types

// primitive data types

// number, string, boolean, undefined, null, bigint, symbol

// number
let a = 10;
let b = 2.36;
console.log(a,b);

//string
let c = "strike is coming";
let d = "Jinal";
console.log(c,d);

//boolean
let login = true;
let f = false;
console.log(login,f);

//undefined
let user;
// const p; put down the value with const you can't left empty.
console.log(user);

// bigint
let num = 23216378261783213461n;
console.log(typeof num);
console.log(num);


// null
let weather = null;
console.log(typeof weather);

// let weather = current_weather("Dwarka")
25
null
undefined


// symbol

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(typeof id2);
console.log(id2==id1);

// Non Primitive Data type
// array, object, function

// let arr = [10,20,11,"Jinal",true];
console.log(typeof arr);

console.log(arr);

// Jinal 12312 18 gen

let users = {
    name:"Jinal",
    account:12312,
    age:26,
    category:'gen'
}

console.log(typeof users);

let s = function add(){
    console.log("Hello");
}

console.log(typeof s);


// Primitive data type is immutable

let ab = 10;
let bc = a;

bc = 20;
console.log(ab,bc);

let str = "Jinal";
str = "Jash";

console.log(str);


// Non primitive data type mutable

let arr = [10,20,30,40];

arr.push(90);
arr[0] = 70;
console.log(arr);

let obj ={
    name:"Jash",
    age:20
}

let obj2 = obj;

obj2.name = "Jinal";

console.log(obj);
