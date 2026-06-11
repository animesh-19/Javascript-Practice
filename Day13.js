// Element Selectors
//Get elements by id 
const Join =document.getElementById('join');

Join.style.backgroundColor='red';
Join.style.color='green';
Join.style.padding='10px';
Join.style.textAlign='center';
Join.style.width='200px';
Join.style.margin='20px auto';
Join.style.borderRadius='5px';

console.log(Join);

// Get elements by class name
const Fruits=document.getElementsByClassName('fruits')
console.log('fruits')
for(let element of Fruits){
    element.style.backgroundColor='lightgreen';
}

Array.from(Fruits).forEach(element=>{
    element.style.backgroundColor='red';
})

if (Fruits[2]) {
    Fruits[2].style.backgroundColor='purple';
}

if (Fruits[1]) {
    Fruits[1].style.textAlign='center';
}

//Get elements by tag name s

const h4Elements=document.getElementsByTagName('h4');
console.log(h4Elements);

for(let ele of h4Elements){
    ele.style.color='blue';
}

if (h4Elements[2]) {
    h4Elements[2].style.color='red';
}

const liElements=document.getElementsByTagName('li');
console.log(liElements)

Array.from(liElements).forEach(element=>{
    element.style.fontSize='20px';
    element.style.color='orange';
})

//Query Selector 

const firstFruit=document.querySelector('.fruits');
firstFruit.style.fontWeight='bold';
firstFruit.style.fontSize='24px';


const allFruits=document.querySelectorAll('.fruits');
allFruits.forEach(ele=>{
    ele.style.fontWeight='bold';
    ele.style.fontSize='24px';
})

