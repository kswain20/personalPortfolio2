// variables = containers that store values

var name; // = declared, but not initialized variable and is in the golbal scope (BAD)

let foo; // = declared variable that can be changed

const bar = "Bar"; // = declared variable that can't be changed- short for "constant"

// "=" is he assigment operator, read it as "is assigned the value of..."

const ANSWER = 42;

// Strings = collection of characters

let string1 = "Hello World"; 

string1 = "Hello Utah";  // let allows me to change the value of the variable

let string3 = new String("Hellow New World!");

// Numbers

let myNum = 2384975964;

let floatNum = 75.25;

"1" == 1; // because of type coertion and loose equality checking, this is true

"1" === 1; // false, because this is strict equality checking


// Boolian

let myBool = false;

// check into truthy and falsy values

// Array

let myArray = []; // this is an empty array

// 0 indexed:   0     1      2       3       4
let myArray2 = [42, "Bob", myBool, ANSWER, true];

let lastItem = myArray2[myArray2,length-1]

// Objects

let minObject = {}; // this is the most minimal javascript object you can have

let myCar = { // js objects are comprised of key value pairs
    make: 'Jeep',
    model: 'Cherokee',
    year: '1998',
    vin: '234904352349',
}

let newVar = myCar.make //used dot notation (.) to acces an objects property value

myCar.numDoors = 6; // can also use dot notation to add a property to an object

const anotherObject = {
    wordz: ['foo', 'bar', 'baz'],
    car: {
        make: 'McLaren',
        model: '720S',
    },
    awesomeness: true
}

// Functions

function myFunction() {
    return "My greeting to you from this very fine, simple function!"
}

function sumTwoThings(thing1, thing2) {
    return thing1 + thing2;
}

// filter method example. Filter returns an array of all elements that 'pass the test'
const pilots = [
    {
        id:2,
        name: "Wedge Antilles"
        faction: "Rebels"
    },
    {
        id: 2,
        name: "Wedge Antilles"
        faction: "Rebels"
    },
    {
        id: 8,
        name: "Ciena Ree"
        faction: "Empire"
    },
    {
        id: 40,
        name: "Iden Versio"
        faction: "Empire"
    }    {
        id: 66,
        name: "Thane Kyrell"
        faction: "Rebels"
    },
]

const rebels = pilots.filter(pilot => pilot.faction === "Rebels")

const empire = pilots.filter(pilot) => {
     return pilot.faction === "Empire"
}

//Array helper metho 'map' example

let filmURLs = [
    "https:url",
    "https:url",
    "https:url",

]

const filmLengths = filmURLs.map(filmURL => filmURL.length)

const filmPlusMore = filmUrls.map((filmURL) => {
    let filmObj = {
        url: filmURL,
        createDate: Date.now()
    }
    return filmObj
})

const pilotNames = pilots.map(pilot.name)

// teranry (tres leches) operator syntax; condition ?  exprIfTrue : exprIfFalse