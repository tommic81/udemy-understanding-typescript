console.log("It works!");

//string
let myName = 'Max';
//myName = 28;

// number
let myAge = 27.5;

// boolean
let hasHobbies = false;
//hasHobbies = 1;

// assign types
//let myRealAge //any type 
let myRealAge : number;
myRealAge = 27;
//myRealAge = '27'

//arrays
//array of strings
let hobbies = ["Cooking", "Sports"];
//array of any type
//let hobbies : any[] = ["Cooking", "Sports"];

// tuples
let address: [string, number] = ["Superstreet", 99];

// enums

enum Color {
    Gray, //0
    Green = 100,
    Blue //101
}
let myColor:  Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car)
car = { brand: "BMW", series: 3};
console.log(car)