console.log ("hello internet");
console.log(2+2);
console.log ('hello world');
let b="indu";
b="cxvbnm";
console.log(b);

const x="harshini";
/*hy
x="Gfvgfh";*/
console.log(x);



let v;
console.log(v);


const loi=true;
console.log(loi);
console.log(typeof loi);

let number=3;
let numbera=5;
let multiplication=number*numbera;
console.log(`addition of ${number}and ${numbera} is ${number+numbera}`);
console.log("multiplication of" +number+ "and"+numbera+"is"+(number*numbera));
console.log("multiplication of" +number+ "and"+numbera+"is"+multiplication);

let variablea=3
let variableb=2
let remainder=variablea%variableb;
console.log("remainder is" +variablea+ "and"+variableb+"is"+(remainder))

let product=500;
let productquantity=2;
let discount=100;
console.log("product is " + (product *productquantity-discount));

let telugu=90;
let hindi=80;
let english=85;
let maths=70;
let science=85
let social=90;
let total=telugu+hindi+english+maths+science+social;
console.log(`addition of all subejects=${total}`);


let number1=10;
let number2=20;
console.log(`${number1 === number2}`);
console.log(`${number1 !== number2}`);
console.log(`${number1=="11"}`);
console.log(`${number1 != "11"}`);
console.log(`${number1 > number2}`);
console.log(`${number1 < number2}`);
console.log(`${number1 >= number2}`);
console.log(`${number1 <= number2 }`);

let hascomputer=true;
let hasinternet=true;
let iscompletedAssignment=false;
console.log(`${hascomputer && hasinternet}`);
console.log(`${hascomputer || hasinternet}`);
console.log(`${hascomputer && iscompletedAssignment}`);
console.log(`${hasinternet || iscompletedAssignment}`);
console.log(`${!iscompletedAssignment }`);
 
let age=20;
if (age >= 18) {
    console.log(`you are eligible to vote.`);
} else {
    console.log(`your not eligible to vote.`);
}

let yourMarks=50;
if (yourMarks >= 40) {
    console.log(`you have pass the examination`);
}

let jeeMainsScore=95;
let passingScore=90;
if(jeeMainsScore >= passingScore){
 console.log(`you have passed the jee mains exam.`);
}
let isBiryaniAvailable=false;
let isCurdRiceAvailable=true;
let isTomatoRiceAvailable=true;
if(isBiryaniAvailable) {
    console.log(`bryani is avaiable`);
}

    else if(isCurdRiceAvailable){
        console.log(`congrats curd rice is available."`);
}
    else if(isTomatoRiceAvailable){
        console.log(`none of the rice options are available.sorry!!`);
    }
else{
    console.log(`briyani is not available.sorry!!`);
}

let givenNumber=7;
  if(givenNumber % 2 ===0) {
    console.log(`the given number ${givenNumber} is an even number.`);
  }
else{
    console.log(`the given number ${givenNumber} is an odd number.`);
}
let isEven = (givenNumber % 2 ===0) ? true : false;
let isEvenNumber = (givenNumber % 2 === 0) ? console.log(`the given number ${givenNumber} is an even number.`): console.log(`the given number ${givenNumber} is an odd number`); 

for(let i=1; i<=5; i++){
    console.log(`Iteration number: ${i}`);
}

let count = 0;
while (count <= 5) {
    console.log(`count is ${count}`);
    count++;
}
for (let i=0; i<=10; i++){
    if (i === 6) {
      break;
    }
    console.log(i);
}
for (let i=1; i <= 10; i++){
    if (i % 2 === 0) {
        continue;
}
console.log(i);
}
function makeACoffee() {
    console.log("turn on the gas stove with lighter");
    console.log("put a pan on the stove");
    console.log("add some water to the pan");
    console.log("add coffee powder to the boiling water");
    console.log("add some sugar to the coffee");
    console.log("add milk to the coffee");
    console.log("wait for 2 to 3 minutes");
    console.log("turn off the stove and serve the coffee in a cup");
}

makeACoffee();
makeACoffee();

function makeACoffee(isSugarNeeded, isMilkNeeded) {
    console.log("turn on the gas stove with lighter");
    console.log("put a pan on the stove");
    console.log("add some water to the pan");
    console.log("add coffee powder to the boiling water");

    if(isSugarNeeded){
        console.log("add some sugar to coffee");
    }

    if(isMilkNeeded){
        console.log("add milk to the coffee");
    }
    
    console.log("add milk to the coffee");
    console.log("wait for 2 to 3 minutes");
    console.log("turn off the stove and serve the coffee in a cup");
}


makeACoffee(true);

function addTwoNumbers(number1, number2) {
    let sum = number1 + number2;
    return sum; 
}
let result = addTwoNumbers(5, 10);
console.log(`the sum of 5 and 10 is ${result}`);


function getMyName() {
    return "induvarshini"
}

let  myName = getMyName();
console.log(`my name is ${myName}`);

// function expression
const myNameFunction=function() {
    return "induvarshini";
}

console.log(`my name is: ${myNameFunction()}`);

//function double(n){
   // return n*2;
//}

//const double = function(n){
  //  return n*2;
//}

//const double = (n) => {
    //return n*2;
//}

const doubleTheNumber = (n) => n*2;
console.log(`double of 5 is: ${doubleTheNumber(5)}`);

const divide=() => 10/2;
console.log(`Divison of 10 by 2 is: ${divide()}`);

function caluculateBillOne(itemPrice, quantity) {
    return itemPrice * quantity;
}

  const caluculateBillTwo= (itemPrice, quantity) => itemPrice*quantity;
  console.log(`caluculate the item price and quantity: ${caluculateBillTwo(100,10)}`);

const totalBillValue= (itemPrice, quantity, tax, discount) =>{itemPrice*quantity*tax*discount};
console.log(`total bill price is :${caluculateBillOne(100,10)}`)

const greet = (name = "friend") => {
    return `Hello, ${name} ! welcome to our website.`;
}
console.log(greet("indu"));
console.log(greet());
console.log(greet(""));  
  
    
  





