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
};

// Define a type alias 'UserName' which represents either a string or a number.
type UserName = string | number;

// Declare a variable 'ab' of type UserName and assign it the value 20.
let ab: UserName = 20;

// Define a type 'param' which represents a function that takes two numbers as parameters and returns a number.
type param = (x: number, y: number) => number;

// Declare a function 'func2' of type 'param' and implement it to return the result of dividing 'y' by 'x'.
const func2: param = (x, y) => {
  return y / x;
};

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
const obj: { height: number; weight: number; gender: boolean } = {
  height: 343,
  weight: 232,
  gender: true,
};

// Define an interface 'Obj' with properties 'id', 'username', and optional 'online'.
interface Obj {
  id: number;
  username: string;
  online?: boolean;
}

// Define objects 'obj1' and 'obj2' implementing 'Obj' interface.
const obj1: Obj = {
  id: 4,
  username: "yashaswi",
  online: true,
};

const obj2: Obj = {
  id: 3,
  username: "kshitij",
};

// Define an interface 'NewObj' extending 'Obj' with additional properties and a function.
interface NewObj extends Obj {
  address: string;
  func: (a: number, b: number) => void;
}

// Define objects 'obj3' and 'obj4' implementing 'NewObj' interface.
const obj3: NewObj = {
  id: 3,
  username: "drake",
  address: "Private jet",
  func: (q, r) => {
    console.log(q * r);
  },
};

const obj4: NewObj = {
  id: 3,
  username: "random",
  address: "random",
  func: (q, r) => {
    console.log(q * r);
  },
};

// Call function from 'obj4' object.
obj4.func(20, 40);

// Define a type alias 'FuncType' representing a function type with optional parameter.
type FuncType = (n: number, m: number, l?: number) => number;

// Define a function 'doSomething' of type 'FuncType' to perform arithmetic operation.
const doSomething: FuncType = (n, m, l) => {
  if (typeof l === "undefined") return n * m;
  return m * n * l;
};

// Call 'doSomething' function with different arguments.
doSomething(2, 3);

// Define a type alias 'FuncType2' representing a function type with default parameter.
type FuncType2 = (n: number, m: number, l: number) => number;
const doSomething2: FuncType = (n, m, l = 20) => {
  return m * n * l;
};

// Call 'doSomething2' function with different arguments.
doSomething2(2, 3);

// Define a type alias 'FuncType3' representing a function type with rest parameters.
type FuncType3 = (...m: number[]) => number[];
const doSomething3: FuncType3 = (...m) => {
  return m;
};

// Call 'doSomething3' function with multiple arguments.
doSomething3(343, 534, 545, 4334, 3434);

// Define a function 'random' that takes a number 'n' and returns the sum of 'n' with itself.
function random(n: number): number {
  return n + n;
}

// Define a function 'getData' that logs information about a product.
const getData = (product: {
  name: string;
  stock: number;
  price: number;
  photo: string;
}) => {
  console.log(product);
};

// Define an interface 'Product' representing the structure of a product.
interface Product {
  name: string;
  stock: number;
  price: number;
  photo: string;
  readonly id: string; // Define a readonly property 'id' in the 'Product' interface.
}

// Define a type 'GetDataType' representing a function type that accepts a 'Product' parameter and returns void.
type GetDataType = (product: Product) => void;

// Define a function 'getData2' of type 'GetDataType' to log information about a product.
const getData2: GetDataType = (product) => {
  /* product.id="id1" */
  console.log(product);
};

// Define an object 'productOne' of type 'Product'.
const productOne: Product = {
  name: "Canon Camera",
  stock: 54,
  price: 47487,
  photo: "string",
  id: "id", // Assign a value to the readonly property 'id'.
};

// Call 'getData2' function with 'productOne' object as argument.
getData2(productOne);

// Define a type 'themeMode' representing two possible theme modes.
type themeMode = "light" | "dark";
// Declare a variable 'theme' of type 'themeMode' and assign it the value "dark".
const theme: themeMode = "dark";

// Define a function 'errorHandler' that never returns, indicating an error.
const errorHandler = (): never => {
  throw new Error();
};

// Define a class 'Player' with private, public, and protected properties.
class Player {
    readonly id:string; // Define a readonly property 'id'.
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {
    this.id = String(Math.random()*100) // Initialize 'id' with a random string.
  } 
  myHeight = () => this.height; // Define a method 'myHeight' returning the 'height' property.
  get getMyWeight ():number{ // Define a getter for 'weight'.
    return this.weight
  }
  set changeHeight(val:number){  // Define a setter for 'changeHeight' to modify 'height'.
    this.height=val
  }
}

// Create an instance 'player1' of the 'Player' class.
const player1 = new Player(150, 76, 125);
console.log(player1.myHeight()); // Log the height of 'player1'.
console.log(player1.getMyWeight) // Log the weight of 'player1'.
player1.changeHeight=154 // Change the height of 'player1'.

// Define a subclass 'Boss' inheriting from 'Player' with an additional property.
class Boss extends Player {
    special:boolean; // Define a property 'special' specific to bosses.
  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special=special // Initialize 'special' property.
  }
  getPower = () =>this.power // Define a method 'getPower' to get the power of the boss.
}

// Create an instance 'boss1' of the 'Boss' class.
const boss1 = new Boss(123, 77, 87, true)

// Define an interface 'ProductType' representing the structure of a product.
interface ProductType{
    name:string,
    price:number,
    available:boolean,
    discount?:boolean // Define an optional property 'discount'.
}

// Define an interface 'giveId' with a method 'getId' returning a string.
interface giveId{
    getId:()=>string
}

// Define a class 'Pdt' implementing 'ProductType' and 'giveId' interfaces.
class Pdt implements ProductType, giveId{
    private id : string = String(Math.random()*100) // Initialize 'id' with a random string.
    constructor(public name:string,public price : number,public available : boolean){
    }
    getId=() => this.id // Implement the 'getId' method.
}

// Create an instance 'Laptop' of the 'Pdt' class representing a MacBook product.
const Laptop = new Pdt("MacBook", 989089, true)

//-----------------------------------------------------

/* const button = <HTMLElement>document.getElementById("btn")
const button = document.getElementById("btn") as HTMLElement */
const button = document.getElementById("btn")!
const img = document.getElementById("myImg") as HTMLImageElement
const img2= document.querySelector("img")!
button.onclick

const form = document.getElementById("myForm") as HTMLFormElement
const myInput = document.querySelector("form>input") as HTMLInputElement
form.onsubmit=(e)=>{
    e.preventDefault()
    const value = Number(myInput.value)
   const h2 = document.createElement("h2")
   h2.textContent=String(value)+" + 20 = "+String(value+20)
   const body=document.querySelector("body")!;
   body.append(h2)

}



const myobj = {


}