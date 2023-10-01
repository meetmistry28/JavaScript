

// "use strict"

// x = 10;

// console.log(x);


//1.

// console.log(x); // undefined  // Declaration Using Var Move to Top 
// var x;
// x = 10;


//2.

// console.log(x);               //Declaration Using let/const can not move to top
// let x ; //const x;
// x = 10;


//3.

// console.log(x);              //Not Accsess Declaration or initialization
// x = 10;


//4.

// x = 10;
// console.log(x); //10         //Declaration done automaticly at the top and Accsess 10 from memory


//5.

// x = 10;
// let x;
// console.log(x);              //Eorro


//6.

// console.log(x);              //undefined
// x = 10;
// var x;

//FUNCTION Hoisting

//1.

// function demo() {
//     var x;
//     x = 10;
//     console.log(x);
// }

// demo()

// console.log(x);



//2.

// function demo() {
//     if (true) {
//         var x;
//         x = 10;
//     }
//     console.log(x);
// }

// demo()



//3.

// function deno() {
//     if (true) {
//         let x;

//         x = 10;
//     }

//     console.log(x);
// }

// demo();

// console.log(x);



//4.

// function demo() {
//     let x;

//     if (true) {
//         x = 10;
//     }
//     console.log(x);
// }

// demo()
