// Define a variable 'a' of type string and assign it the value "{25}".
let a: string = "{25}";

// Define a variable 'b' of type number and assign it the value 343.
let b: number = 343;

// Declare a variable 'check' of type boolean without initialization.
let check: boolean;

// Declare a variable 'num' of type number and use type assertion to assign it the value 54.
let num: number = <number>54;

// Declare a variable 'surname' which can hold either a string or a number (union type).
let surname: string | number;

// Define a function 'func' which takes two numbers as parameters and returns their product.
const func = (n: number, m: number): number => {
    console.log(n, m);
    return n * m;
}

// Define a type alias 'UserName' which represents either a string or a number.
type UserName = string | number;

// Declare a variable 'ab' of type UserName and assign it the value 20.
let ab: UserName = 20;

// Define a type 'param' which represents a function that takes two numbers as parameters and returns a number.
type param = (x: number, y: number) => number;

// Declare a function 'func2' of type 'param' and implement it to return the result of dividing 'y' by 'x'.
const func2: param = (x, y) => {
    return y / x;
}

// Define an empty array 'arr' which holds numbers.
const arr: number[] = [];

// Define an array 'arr2' which holds strings and initialize it with one element "abc".
const arr2: string[] = ["abc"];

// Define an array 'arr3' which holds strings using a different syntax and initialize it with three strings.
const arr3: Array<string> = ["Yashaswi", "Mishra", "gmail"];

// Define an array 'arr4' which holds strings or numbers and initialize it with two elements.
const arr4: Array<string | number> = [78, "oil"];

// Define an array 'arr5' which holds exactly three numbers.
const arr5: [number, number, number] = [234.3, 343, 34];

// Define an object 'obj' with properties 'height', 'weight', and 'gender'.
const obj: { height: number, weight: number, gender: boolean } = {
    height: 343,
    weight: 232,
    gender: true
}

// Define an interface 'Obj' with properties 'id', 'username', and optional 'online'.
interface Obj {
    id: number,
    username: string,
    online?: boolean
}

// Define objects 'obj1' and 'obj2' implementing 'Obj' interface.
const obj1: Obj = {
    id: 4,
    username: "yashaswi",
    online: true
}

const obj2: Obj = {
    id: 3,
    username: "kshitij",
}

// Define an interface 'NewObj' extending 'Obj' with additional properties and a function.
interface NewObj extends Obj {
    address: string,
    func: (a: number, b: number) => void
}

// Define objects 'obj3' and 'obj4' implementing 'NewObj' interface.
const obj3: NewObj = {
    id: 3,
    username: "drake",
    address: "Private jet",
    func: (q, r) => {
        console.log(q * r)
    }
}

const obj4: NewObj = {
    id: 3,
    username: "random",
    address: "random",
    func: (q, r) => {
        console.log(q * r)
    }
}

// Call function from 'obj4' object.
obj4.func(20, 40)

// Define a type alias 'FuncType' representing a function type with optional parameter.
type FuncType = (n: number, m: number, l?: number) => number

// Define a function 'doSomething' of type 'FuncType' to perform arithmetic operation.
const doSomething: FuncType = (n, m, l) => {
    if (typeof l === "undefined") return n * m;
    return m * n * l;
}

// Call 'doSomething' function with different arguments.
doSomething(2, 3)

// Define a type alias 'FuncType2' representing a function type with default parameter.
type FuncType2 = (n: number, m: number, l: number) => number
const doSomething2: FuncType = (n, m, l = 20) => {
    return m * n * l;
}

// Call 'doSomething2' function with different arguments.
doSomething2(2, 3)

// Define a type alias 'FuncType3' representing a function type with rest parameters.
type FuncType3 = (...m: number[]) => number[]
const doSomething3: FuncType3 = (...m) => {
    return m
}

// Call 'doSomething3' function with multiple arguments.
doSomething3(343, 534, 545, 4334, 3434)
