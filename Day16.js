// function task1(callback){
//     setTimeout(()=>{
//           console.log('Task 1 is completed');
//           callback();

//     },1500)
// }
// function task2(callback){
//     setTimeout(()=>{
//         console.log('Task 2 is completed');
//         callback();
//     },2000)
// }
// function task3(callback){
//     setTimeout(()=>{
//         console.log('Task 3 is completed');
//         callback();
//     },500)
// }
// function task4(callback){
//     setTimeout(()=>{
//         console.log('Task 4 is completed');
//         callback();
//     },2000)
// }
// function task5(callback){
//     setTimeout(()=>{
//         console.log('Task 5 is completed');
//         callback();
//     },1500)
// }
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 task5(()=>{
//                     console.log('All task are completd');
//                 })
//             })
//         })
//     })
// })
// task1();
// task2();
// task3();
// task4();
// task5();
// console.log('All task completed');


// Complete some chores 

// function walkDog(callback){
//     setTimeout(()=>{
//         console.log('Walk the dog completed');
//         callback();
//     },2000)
// }
// function cleanHouse(callback){
//     setTimeout(()=>{
//         console.log('Clean the house completed');
//         callback();
//     },2000)
// }
// function takeOutTrash(callback){
//     setTimeout(()=>{
//         console.log('Take out the trash completed');
//         callback();
//     },2000)
// }
// walkDog(()=>{
//     cleanHouse(()=>{
//         takeOutTrash(()=>{
//             console.log('All chores are completed');
//         })
//     })
// })

// function walkDog(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const isCompleted = true;
//             if(isCompleted){
//                 resolve('Walk the dog completed');
//             }
//             else{
//                 reject('Failed to walk the dog');
//             }
//         },2000)
//     })
// }
// function cleanHouse(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const isCompleted = true;
//             if(isCompleted){
//                 resolve('Clean the house completed');
//             }
//             else{
//                 reject('Failed to clean the house');
//             }
//         },2000)
//     })
// }
// function takeOutTrash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const isCompleted = true;
//             if(isCompleted){
//                 resolve('Take out the trash completed');
//             }
//             else{
//                 reject('Failed to take out trash');
//             }
//         },2000)
//     })
// }
// walkDog().then(value=>{console.log(value); return cleanHouse()}).then(value=>{console.log(value); return takeOutTrash()}).then(value=>{console.log(value); console.log('All chores are completed')}).catch(error=>{console.log('Error:', error); console.log('Some chores were not completed')})


//Async Await 

// function walkDog(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const isCompleted=true;
//             if(isCompleted){
//                 resolve('Walk the dog completed');
//             }
//             else{
//                 reject('Failed to walk the dog');
//             }
//         },1500)
//     })
// }

// function cleanKitchen(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const isCompleted=true;
//             if(isCompleted){
//                 resolve('Clean the kitchen completed');
//             }
//             else{
//                 reject('Failed to clean the kitchen');
//             }
//         },1500)
//     })
// }

// function takeOutTrash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const isCompleted=false;
//             if(isCompleted){
//                 resolve('Take out the trash completed');
//             }
//             else{
//                 reject('Failed to take out the trash');
//             }
//         },3000)
//     })
// }
// async function completedChores(){
//     try{
//     const walkDogResult=await walkDog();
//     console.log(walkDogResult);
//     const cleanKitchenResult=await cleanKitchen();
//     console.log(cleanKitchenResult);
//     const takeOutTrashResult=await takeOutTrash();
//     console.log(takeOutTrashResult);
//     console.log('All chores are completed');

//     }
//     catch(error){
//         console.log('Error:', error);
//         console.log('Some chores were not completed');
//     }
// }
// // invoke the async function to run the chores
// completedChores();


// Json file Handling 
// const names=["Animesh", "Smriti", "Rahul", "Shivam"];
// const namesJson=JSON.stringify(names);
// console.log(namesJson);

// const person={
//      name:"Animesh",
//     age:22,
//     isEmployed:true,
// }
// const personJson=JSON.stringify(person);
// console.log(personJson);

// const people=[{name:'Animesh',age:22,isEmployed:true},
// {name:'Smriti', age:21, isEmployed:false},
// {name:'Rahul',age:23,isEmployed:true},
// {name:'Shivam',age:24,isEmployed:false}];

//  const peopleJson=JSON.stringify(people);
//  console.log(peopleJson);

//  const jsonNames='["Animesh", "Smriti", "Rahul", "Shivam"]';
//  const jsonPerson={name:"Animesh",age:22,isEmployed:true, hobbies:["coding","gaming","traveling"]};
//  const jsonPeople=[{name:'Animesh',age:22,isEmployed:true},
// {name:'Smriti', age:21, isEmployed:false},
// {name:'Rahul',age:23,isEmployed:true},
// {name:'Shivam',age:24,isEmployed:false}];

// const data=JSON.parse(jsonNames);
// console.log(data);

// //How to fetch data from the json file 
// fetch('person.json')
// .then(response=>response.json())
// .then(value=> console.log(value))


// //Fetch data using the apis 
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(response=>console.log(response))
// .then(value=>console.log(value))
// .catch(error=> console.log('Error:',error))



// fetch('https://api.sampleapis.com/cartoons/cartoons2D')
// .then(response=>response.json())
// .then(value=>console.log(value))
// .catch(error=>console.log('Error:', error))


// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(response=>{
//     if(!response.ok){
//         throw new Error('No response from the server')
//     } return response.json();

// })
// .then(value=>console.log(value))
// .catch(error=> console.log('Error:',error))

// fetch('https://api.sampleapis.com/cartoons/cartoons2D')
// .then(response=>{
//     if(!response.ok){
//         throw new Error('No reponse from the server')
//     } return response.json();
// })
// .then(value=>console.log(value))
// .catch(error=>console.log('Error:', error))



async function fetchData(){
    try{
        const response= await fetch('https://pokeapi.co/api/v2/pokemon/ditto0');;
        if(!response.ok){
            throw new Error('no response found ')
        }
        const value=await response.json();
        console.log(value);

    }catch(error){
        console.error(error)
    }
}
fetchData();