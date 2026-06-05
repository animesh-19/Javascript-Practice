// const num=[10,41,25,78,14,555,1,81,451,44,15,22,33,66,99,100,200,300,400,500,600,700,800,900,1000];

// const double=num.map(element=>element*2);
// const tripple=num.map(element=>element*3);
// const square = num.map(element => Math.pow(element, 2));

// const isEven = num.filter(element => element % 2 === 0);

// const total = num.reduce((total, element) => total + element, 0);

// console.log(double);
// console.log(tripple);
// console.log(square);
// console.log(isEven);
// console.log(total);

// javascript objects 

const person={
    name:'Animesh',
    age:50,
    city:'kathmandu',
    isEmployed:true, 
    isBath:function(){console.log("hey I am bathing")},
}
console.log(person.name);
console.log(person);
person.isBath();


const person2={
    name:'sita',
    age:30,
    city:'pokhara',
    isEmployed:false,
    eat:()=>{console.log('hey I am eating')},
}
console.log(person2.name);
person2.eat();

//this method

const personss={
    name:'Animesh',
    age:50,
    city:'kathmandu',
    eat:function(){console.log(`Hye i am ${this.name} and I am in ${this.city}`)},
    hello:function(){console.log(`I am ${this.name} and I am At ${this.city}`)}
}
personss.eat();
personss.hello();


//Constructor in java 

function Cars(name,modelNO,year,color,type){
    this.name=name;
    this.modelNO=modelNO;
    this.year=year;
    this.color=color;
    this.type=type;
    this.ride=function(){console.log(`I am animesh riding ${this.name} with the coolor of ${this.color}`)}
    
}

const Car1=new Cars('bmw','001',2020,'black','sedan')
const Car2=new Cars('audi','002',2021,'white','suv')

Car1.ride();
Car2.ride();


//class 
class fruits{
    constructor(name,color,price,type){
        this.name=name;
        this.color=color;
        this.price=price;
        this.type=type;
    }

    displayFruits(){
        console.log(`I am ${this.name} and I am ${this.color} and i am ${this.price} and I am ${this.type}`)
    }

    calculatetax(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax= 14
const f1= new fruits('apple','red',100,'sweet and sour');
const f2= new fruits('banana','yellow',50,'sweet');


const totalPrice=f1.calculatetax(salesTax);
console.log(totalPrice);
f1.displayFruits();


// Inheritance
class Animal {
    alive = true;

    eat() {
        console.log(`${this.name} is eating food`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class Dog extends Animal {
    name = "Puppy";

    bark() {
        console.log(`${this.name} is barking`);
    }
}

class Cat extends Animal {
    name = "kitty";

    meo() {
        console.log(`${this.name} is meowing`);
    }
}

const dog1 = new Dog();
const cat1 = new Cat();

console.log(dog1.alive);
dog1.bark();
console.log(cat1.alive);
cat1.meo();



