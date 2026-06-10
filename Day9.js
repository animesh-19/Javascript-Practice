// for each method of array 

let num=[10,40,50,70,620,777];

//  num.forEach(displayElements);

 num.forEach(cubeOF);

 
function displayElements(element){
    console.log(element);
}


function double(element,index,array){
    array[index]=element*2;
    console.log(num);
}

function square(element,index,array){
    array[index]=Math.pow(element,2);
    console.log(num);
}

function cubeOF(element,index,array){
    array[index]=Math.pow(element,3);
    console.log(num);
}

function triple(element,index,array){
    array[index]=element*3;
    console.log(num);
}


let fruits=['apple','banana','orange','grapes','mango'];

fruits.forEach(displayFruits);
fruits.forEach(upperCase);


function displayFruits(element,index,array){
    console.log(element);
}

function upperCase(element,index,array){
    array[index]=element.toUpperCase();
    console.log(fruits);
}

function capitalize(element,index,array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
    console.log(fruits);
}

function display(element){
    console.log(element);
}


let numbers=[85,45,78,15,25,14];

let squares=numbers.map(square);
let cubes=numbers.map(cube);


function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

console.log(squares);
console.log(cubes);




const names=['animesh','suresh','ram','shyam','gita'];

const uper=names.map(upperCase);
const lower=names.map(lowerCase);
const capitalized=names.map(capitalize);


function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

function capitalize(element){
    return element.charAt(0).toUpperCase()+element.slice(1);
}
console.log(uper);
console.log(lower);
console.log(capitalized);



const dates=['2023-01-01','2023-02-14','2023-03-17','2023-04-01','2023-05-01'];

const newFormats=dates.map(formatDate);
function formatDate(element){
    const newDate=element.split('-');
    return `${newDate[1]}/${newDate[2]}/${newDate[0]}`;
}

console.log(newFormats);

//filter
let nums =[10,45,14,22,11,7]

let evenNumbers=nums.filter(even);
let oddNumbers=evenNumbers.filter(odd);

function  even(element){
    return element%2===0;
}

function odd(element){
    return element%2 !==0;
}
console.log(evenNumbers);
console.log(oddNumbers);


const namess=['animesh','suresh','ram','shyam','gita'];

const smallnames=namess.filter(smalllength);

function smalllength(element){
    return element.length>4;
}


//reducemethod 

let number =[10,25,14,2,5,12];

let total=number.reduce(sum);

let maximmum=number.reduce(max);


function sum(total,element){
    return total+element;
}


function max(total,element){
    return Math.max(total,element);
}
console.log(total);
console.log(maximmum);




///Function eXPRESSIONS

const numers=[10,45,4,5877,74585,475458,477];
const squaress=numers.map(function (element){
    return element * Math.pow(element,2);
});

console.log(squaress);


const cubeic=numers.map(function (element){
    return element * Math.pow(element,3);
});
console.log(cubeic);



const evens=numers.filter(function(element){
    return element%2===0;
});
console.log(evens);


const totalss=numers.reduce(function(total,element){
    return total+element;
})
console.log(totalss);


///arroe functions

const hello=()=>{
    console.log('Hello to the word of the arrows functions');
}
hello();



const app=(name,age,city)=>{
    console.log('My names is ${name} and I am ${age} years old and i have been reading in ${kathmandu}')
}
app('animesh',5,'kathmandu');



