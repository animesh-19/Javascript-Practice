// // //Callback hell 
// // //situation in js where callbacks are nested with multiple calbacks

// // function task1(){
// //     console.log('Task 1 completed');
// // }
// // function task2(){
// //     console.log('Task 2 completed');
// // }
// // function task3(){
// //     console.log('Task 3 completed');
// // }
// // function task4(){
// //     console.log('Task 4 completed');
// // }
// // function task5(){
// //     console.log('Task 5 completed');
// // }
// // task1();
// // task2();
// // task3();
// // task4();
// // task5();
// // console.log('All task completed');


// function task1(callback){
//     setTimeout(()=>{
// console.log('Task 1 completed');
//     callback();
//     },1500)
    
// }
// function task2(callback){
//     setTimeout(()=>{
//          console.log('Task 2 completed');
//     callback();

//     },1200)
 
// }
// function task3(callback){
//     setTimeout(()=>{
//          console.log('Task 3 completed');
//         callback();
//     },1200)

//     callback();
// }
// function task4(callback){
//     setTimeout(()=>{
//          console.log('Task 4 completed');
//     callback();

//     },2000)

// }
// function task5(callback){
//     setTimeout(()=>{
//          console.log('Task 5 completed');
//         callback();
//     },3000)
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 task5(()=> console.log('All task completed'));
//             })
//         })
//     })
// })


//do the folowing chore 
// 1.clean the room 
// 2.clean kitechen 
// 2.takeout trash 

function walkDog(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Dog is walked');
            resolve('Dog walked');
        },1500);
    });
}
function cleanRoom(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Kitchen is Cleaned');
            resolve('Kitchen cleaned');
        },3000);
    });
}
function takeOutTrash(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Trash is Taken out');
            resolve('Trash taken out');
        },1000);
    });
}

walkDog()
    .then(()=> cleanRoom())
    .then(()=> takeOutTrash())
    .then(()=> console.log('All task completed'))
    .catch(err => console.error(err));