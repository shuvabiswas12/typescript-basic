
// variable's type and declaring

// variable without type
let myName;
myName = "Abc";
myName = 1;

var updated_salary = 12000;
var newDestination = "Ctg, Bd";

/**
 * Whenever you use var type, you can not use a variable in multiple types
 * like:
 * 
 * newDestination = 12000;  
 * 
 * this initialization throws an error.
 */


// variable with specific type
let salary: number;
let firstName: string;
let isActive: boolean;
let myObject: any;


// arrays

let myArray: any[] = [1, 'a', 'bd', '12.02', false]
let myArrayTwo: number[] = [1, 2, 3, 4, 5]


// constant

const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;


// enum

enum Color { Red = 0, Blue = 1, Green = 2 }; // by default number is sequentially added like so
let backGroundColor = Color.Red;

enum NewColor { Red = "#fg", Blue = "#dft", Green = "#esr" };

