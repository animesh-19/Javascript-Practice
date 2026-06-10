//super keyword 

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    move(speed){
        console.log(`${this.name} can run at ${speed} km per hour`);
    }
}

class  Dog extends Animal{
    constructor(name,age,barks){
        super(name,age);
        this.barks=barks;
    }
    run(){
        super.move(this.barks);
        console.log(`${this.name} can bark at ${this.barks} km per hour`);
    }
}

class Cat extends Animal{
    constructor(name,age,meows){
        super(name,age);
        this.meows=meows;
    }
    run(){
        super.move(this.meows);
        console.log(`${this.name} can meow at ${this.meows} km per hr`);
    }
}

// const dog1=new Dog('Kitty',3,22);
// const cat1=new Cat('Bella',2,15);

// console.log(dog1.name);
// dog1.run();
// cat1.run();
// dog1.run();


// //Getter and setter methods in js 

// class Rectangle {
//     constructor(length, breadth) {
//         this.length = length;
//         this.breadth = breadth;
//     }

//     set length(newLength) {
//         if (newLength > 0) {
//             this._length = newLength;
//         }
//         else {
//             console.log('Length must be a positive number');
//         }
//     }

//     set breadth(newBreadth) {
//         if (newBreadth > 0) {
//             this._breadth = newBreadth;
//         }
//         else {
//             console.log('Breadth must be a positive number');
//         }
//     }

//     get length() {
//         return `${this._length.toFixed(1)} cm`;
//     }

//     get breadth() {
//         return `${this._breadth.toFixed(1)} cm`;
//     }

//     get area() {
//         return `${(this._length * this._breadth).toFixed(1)} cm^2`;
//     }
// }

// const rectangle = new Rectangle(15, 45);

// console.log(rectangle.length);
// console.log(rectangle.breadth);
// console.log(rectangle.area);


// Strings
class Person {
    constructor(id, firstName, lastName, age) {
        this.id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    set firstName(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._firstName = value;
        } else {
            console.error('First name must be a non-empty string');
        }
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._lastName = value;
        } else {
            console.error('Last name must be a non-empty string');
        }
    }

    get lastName() {
        return this._lastName;
    }

    set age(value) {
        if (typeof value === 'number' && value > 0) {
            this._age = value;
        } else {
            console.error('Age must be a positive number');
        }
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

const person = new Person('001', 'Animesh', 'Pyakurel', 25);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);


//Destructuring in js

// destruction in numbers 
let x=15;
let y =20;

[x,y]=[y,x];
console.log(x);
console.log(y);

//Destructuring in Arrays 

const numbers=[10,20,45,15,30];
const [a,b,c,d,e]=numbers;

console.log(a);
console.log(b);
console.log(c);


const colors=['purple','blue','green','appleRed'];
const [firstColor,secondColor,...otherColors]=colors;
console.log(firstColor);
console.log(secondColor);
console.log(otherColors);


const persons={
    name:"animesh",
    ages:25,
    city:'kathamndu',
    job:'webdeveloper'
}

const{name,ages,...otherDetails}=persons;
console.log(name,ages,otherDetails)

function displayDetails({name,age,city,job}){
    console.log(`name:${name},age:${age},city:${city},job:${job}`)
}


const personss={
    name:"animesh",
    ages:25,
    city:'kathamndu',
    job:'webdeveloper'
}

displayDetails(personss)


//nested bojects 

const student={
    name:'Animesh',
    age:25,
    address:{
        street:'Janaki path',
        city:'kathmandu',
        country:'Nepal'
    },
    sports:['Cricket','football','badminton']
}

console.log(student.name);
console.log(student.address.city);
console.log(student.sports[0])



class students{
      constructor (name,age,sports,...address){
        this.name=name;
        this.age=age;
        this.sports=sports;
        this.address=new Address(...address);
      }
}

class Address{
    constructor (Street,city,country){
        this.street=Street;
        this.city=city;
        this.country=country;
    }
}

const student1=new students('Animesh',25,['Cricket','football','badminton'],'Janaki path','kathmandu','Nepal');

console.log(student1.name)
console.log(student1.address.country);


//Array of objects 

const fruits=[{'name':'Apple','color':'Red','cal':88}, 
             {'name':'Banana','color':'Yellow','cal':105}, 
             {'name':'Orange','color':'Orange','cal':62}]



fruits[0].names
console.log(fruits[0].name);
// for each loop 
fruits.forEach(fruit=>console.log(fruit.name))

//map 
const fruitsNames=fruits.map(fruit=>fruit.name);
console.log(fruitsNames);




function employee(name){
    console.log(`hello its me ${name}`)
}
employee('Animesh')


let num=[15,15,45,78,90,15,24,45,78,90]
let newNum=[...num]
console.log(newNum)

let  maximum=Math.max(...num)
console.log(maximum)

function food(...foodItems){
    return foodItems;
}
const newFooods=food('pizza','burger','pasta','noodels')
console.log(newFooods)


let mark=[70,45,67,89,867,5657];

marks.forEach(square)

function square(element,index,array){
    array[index]=Math.pow(element,2);
    console.log(marks)

    class rectangle
}