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

function cleanRoom(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Room is cleaned');
    },1500);
    })

}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Kitchen is cleaned');
        },2000);
    })
}
function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Trash is taken out')
        },1500)
    })
}

cleanRoom().then((result)=>{console.log(result);
    return cleanKitchen();
}).then((result)=>{console.log(result);
    return takeOutTrash();
}).then((result)=>{
    console.log(result);
});



function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const  dogWalked=true;
        
        if(dogWalked){
            resolve('Dog is walked');
        } 
        else {
            reject('Failed to walk dog');
        }
        },1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const cleanKitchen=true;
            if(cleanKitchen){
                resolve('kitchen is cleaned');
            }
            else {
                reject('Failed to clean kitchen');
            }
        },2000);
    });
}

function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const takeOutTrash=true;
            if(takeOutTrash){
                resolve('Trash is taken out ');
            }
            else {
                reject('Failed to take out trash');
            }
        },2000);
    });
}
walkDog().then((result)=>{
    console.log(result);
    return cleanKitchen().then((result)=>{
        console.log(result);
        return takeOutTrash();
    });
});