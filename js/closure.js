// let age = 21;


// //Outer Function
// const persnolInfo = (name) => {
//     let edu = 'full Stack Devloper'  //Outer Function's Variable

//     //Inner Function
//     return allInfo = (salary) => {
//         console.log(age); //
//         console.log(name);
//         console.log(edu);

//         console.log(salary);
//     }
// }

// let res =  persnolInfo('Meet');

// console.log(res);

// res(20000);

// res(30000);

const incrimentCounter = () => {
    let count = 0;

    return () => {
        count = count + 1;
        console.log(count);
    }
}

let res = incrimentCounter()
console.log(res);

res();
res();
res();
res();
res();


let res1 = incrimentCounter()
console.log(res1);

res1();
res1();
res1();
res1();
res1();

