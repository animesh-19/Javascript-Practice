//Arrays-- type  of varibale that stores muultiple datas at a single varibale 

let sports=['cricket','football','volleyball','hockey','tennis'];

console.log(sports[0]);
sports[0] = 'Long teniss';
console.log(sports[0]);


// arrays methods
sports.push('badminton');
console.log( sports);

// remove last element
sports.pop();
console.log( sports);

// add to start
sports.unshift('gopal');
console.log( sports);

// remove first element
sports.shift();
console.log( sports);
sports.indexOf('hocckey');
console.log( sports);


console.log( sports.length);


//indexing the items of the array using loop

for(let i=0;i<sports.length;i++){
    console.log(sports[i])
}


for(sport of sports){
    console.log(sport);
}

//indexing the items from the last

for(sport of sports.reverse()){
    console.log(sport);
}

//spread operator 
let  marks=[70,45,67,89,867,5657];
let newMarks=[...marks];
console.log(newMarks);

let maximum=Math.max(...marks);
console.log(maximum);

let minimum=Math.min(...marks)
console.log(minimum);


let fruits=['apple','banana','orange'];
let newFruits=[...fruits];
console.log(newFruits);

let fruit= ['apple','banana','orange']
let vegs=['carrot','potato','onion'];

let grocery=[...fruit,...vegs];
console.log(grocery);



let username='anmesh pyakurel';
let newusername=[...username]

console.log(newusername.join('-'));



///rest parameter 
// ueed to combine the individual items and keep them in array or group together

function store(...foods){
    console.log(foods);
}

const f1='momo';
const f2='pizza';
const f3='burger';

store(f1,f2,f3);



function storeFood(...foods){
    return foods;
}
const fo1='chapatai';
const f02='pizza';
const fo3='burger';
const foods=storeFood(fo1,f02,fo3);
console.log(foods);



function sum(...numbers){
    let  result=0;
 for (let num of numbers){
     result += num;
 }
 return result;
}
const total=sum(10,41,58,78)
console.log(total);



function avg(...numbers){
    let result=0;
    for(let num of numbers){
        result +=num;
    }
    return result/numbers.length;
}
const average=avg(10,87,74)
console.log(average);

function  combineString(...strings){
    return strings.join('');
}
const fullName=combineString('my','name','is','animesh','pyakurel','.');
console.log(fullName);




function hello(callback){
    console.log('hello to the world of functions');
    callback();
}

function goodbye(){
    console.log('goodby to the worldof functions')
}

function mad(){
    console.log('I am mad!');
}
 function sad(){
    console.log('I am sad today ');
 }
hello(sad);



sumWithCallback(display,10,20);
function sumWithCallback(callback,a,b){
    let result =a+b;
    callback(result);

}
function display(result){
    console.log('sum is :' + result);
}

function displayPage(result){
    document.getElementById('Animesh').textContent='The sum is :' + result;

}