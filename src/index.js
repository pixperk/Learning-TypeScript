"use strict";
// Define a variable 'a' of type string and assign it the value "{25}".
let a = "{25}";
// Define a variable 'b' of type number and assign it the value 343.
let b = 343;
// Declare a variable 'check' of type boolean without initialization.
let check;
// Declare a variable 'num' of type number and use type assertion to assign it the value 54.
let num = 54;
// Declare a variable 'surname' which can hold either a string or a number (union type).
let surname;
// Define a function 'func' which takes two numbers as parameters and returns their product.
const func = (n, m) => {
    console.log(n, m);
    return n * m;
};
// Declare a variable 'ab' of type UserName and assign it the value 20.
let ab = 20;
// Declare a function 'func2' of type 'param' and implement it to return the result of dividing 'y' by 'x'.
const func2 = (x, y) => {
    return y / x;
};
// Define an empty array 'arr' which holds numbers.
const arr = [];
// Define an array 'arr2' which holds strings and initialize it with one element "abc".
const arr2 = ["abc"];
// Define an array 'arr3' which holds strings using a different syntax and initialize it with three strings.
const arr3 = ["Yashaswi", "Mishra", "gmail"];
// Define an array 'arr4' which holds strings or numbers and initialize it with two elements.
const arr4 = [78, "oil"];
// Define an array 'arr5' which holds exactly three numbers.
const arr5 = [234.3, 343, 34];
// Define an object 'obj' with properties 'height', 'weight', and 'gender'.
const obj = {
    height: 343,
    weight: 232,
    gender: true,
};
// Define objects 'obj1' and 'obj2' implementing 'Obj' interface.
const obj1 = {
    id: 4,
    username: "yashaswi",
    online: true,
};
const obj2 = {
    id: 3,
    username: "kshitij",
};
// Define objects 'obj3' and 'obj4' implementing 'NewObj' interface.
const obj3 = {
    id: 3,
    username: "drake",
    address: "Private jet",
    func: (q, r) => {
        console.log(q * r);
    },
};
const obj4 = {
    id: 3,
    username: "random",
    address: "random",
    func: (q, r) => {
        console.log(q * r);
    },
};
// Call function from 'obj4' object.
obj4.func(20, 40);
// Define a function 'doSomething' of type 'FuncType' to perform arithmetic operation.
const doSomething = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return m * n * l;
};
// Call 'doSomething' function with different arguments.
doSomething(2, 3);
const doSomething2 = (n, m, l = 20) => {
    return m * n * l;
};
// Call 'doSomething2' function with different arguments.
doSomething2(2, 3);
const doSomething3 = (...m) => {
    return m;
};
// Call 'doSomething3' function with multiple arguments.
doSomething3(343, 534, 545, 4334, 3434);
// Define a function 'random' that takes a number 'n' and returns the sum of 'n' with itself.
function random(n) {
    return n + n;
}
// Define a function 'getData' that logs information about a product.
const getData = (product) => {
    console.log(product);
};
// Define a function 'getData2' of type 'GetDataType' to log information about a product.
const getData2 = (product) => {
    /* product.id="id1" */
    console.log(product);
};
// Define an object 'productOne' of type 'Product'.
const productOne = {
    name: "Canon Camera",
    stock: 54,
    price: 47487,
    photo: "string",
    id: "id", // Assign a value to the readonly property 'id'.
};
// Call 'getData2' function with 'productOne' object as argument.
getData2(productOne);
// Declare a variable 'theme' of type 'themeMode' and assign it the value "dark".
const theme = "dark";
// Define a function 'errorHandler' that never returns, indicating an error.
const errorHandler = () => {
    throw new Error();
};
// Define a class 'Player' with private, public, and protected properties.
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.myHeight = () => this.height; // Define a method 'myHeight' returning the 'height' property.
        this.id = String(Math.random() * 100); // Initialize 'id' with a random string.
    }
    get getMyWeight() {
        // Define a getter for 'weight'.
        return this.weight;
    }
    set changeHeight(val) {
        // Define a setter for 'changeHeight' to modify 'height'.
        this.height = val;
    }
}
// Create an instance 'player1' of the 'Player' class.
const player1 = new Player(150, 76, 125);
console.log(player1.myHeight()); // Log the height of 'player1'.
console.log(player1.getMyWeight); // Log the weight of 'player1'.
player1.changeHeight = 154; // Change the height of 'player1'.
// Define a subclass 'Boss' inheriting from 'Player' with an additional property.
class Boss extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getPower = () => this.power; // Define a method 'getPower' to get the power of the boss.
        this.special = special; // Initialize 'special' property.
    }
}
// Create an instance 'boss1' of the 'Boss' class.
const boss1 = new Boss(123, 77, 87, true);
// Define a class 'Pdt' implementing 'ProductType' and 'giveId' interfaces.
class Pdt {
    constructor(name, price, available) {
        this.name = name;
        this.price = price;
        this.available = available;
        this.id = String(Math.random() * 100); // Initialize 'id' with a random string.
        this.getId = () => this.id; // Implement the 'getId' method.
    }
}
// Create an instance 'Laptop' of the 'Pdt' class representing a MacBook product.
const Laptop = new Pdt("MacBook", 989089, true);
//-----------------------------------------------------
/* const button = <HTMLElement>document.getElementById("btn")
const button = document.getElementById("btn") as HTMLElement */
const button = document.getElementById("btn");
const img = document.getElementById("myImg");
const img2 = document.querySelector("img");
button.onclick;
const form = document.getElementById("myForm");
const myInput = document.querySelector("form>input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myInput.value);
    const h2 = document.createElement("h2");
    h2.textContent = String(value) + " + 20 = " + String(value + 20);
    const body = document.querySelector("body");
    body.append(h2);
};
const myobj = {
    name: "Yash",
    email: "string",
};
let key = "name";
myobj[ /* key as keyof Person/ */key];
const getName = () => {
    return myobj.name;
};
const getEmail = () => {
    return myobj.email;
};
const getInfo = (key) => {
    return myobj[key];
};
console.log(getInfo("name"));
const users = {
    john: { age: 45 },
    andre: { age: 45 },
    elon: { age: 45 },
    jack: { age: 45 },
};
const myFunc = (a, b) => {
    console.log(a + b);
};
class Sample {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
const newFunc = (n) => {
    return n;
};
const ans = newFunc(20);
const Gen = (n) => {
    return n;
};
const someObj = {
    name: "Yash",
    age: 909,
};
const test = Gen(someObj);
const array = [];
const testFunc = (n, o) => {
    return { n, o };
};
const testRun = testFunc(4, "test");
const testFunc2 = (n, o) => {
    return { n, o };
};
const testRun2 = testFunc2(76.45, 54);
const example = {
    name: "some",
    age: 0,
};
const example2 = {
    name: "some",
    age: 0,
    email: "email",
};
const testRun3 = testFunc2(example, example2);
const Users = [
    {
        name: "some",
        age: 0,
    },
    {
        name: "something",
        age: 0,
    },
    {
        name: "igloo",
        age: 6565,
    },
    {
        name: "pluto",
        age: 8676,
    },
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter(item => item[property] === value);
};
const filteredPeopleByName = filterByPeoples(Users, "name", "pluto");
console.log(filteredPeopleByName);
const filteredPeopleByAge = filterByPeoples(Users, "age", 0);
console.log(filteredPeopleByAge);
