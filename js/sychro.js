// //Sychronize

// const firstFun = () => {
//     console.log("i Am fIrsT ProceSS");
// }

// const secondFun = () => {
//     console.log("i Am SecoNd ProceSS");
// }

// const thirdFun = () => {
//     console.log("i Am ThiRD ProceSs");
// }

// firstFun();
// secondFun();
// thirdFun();



// //Sychronize - problem

// const firstFun = () => {
//     console.log("i Am fIrsT ProceSS");
// }

// const secondFun = () => {
//     let d = new Date()

//     while (Date.now() - d - 5000) {

//     }

//     console.log("i Am SecoNd ProceSS");
// }

// const thirdFun = () => {
//     console.log("i Am ThiRD ProceSs");
// }

// firstFun();
// secondFun();
// thirdFun();


//callback function.

// const print = (data) => {
//     console.log(data);
// }


// const add = (a, b, callback) => {
//     let c = a + b;

//     callback(c);
// }

// add(10, 20, print);

// console.log("Program Star");

// const displayData = (data) => {
//     console.log(data);
// }

// const getData = () => {
//     setTimeout(function() {
//         console.log("After Wait 3 Second: Hello ");
//     },3000)
// }

// getData(displayData)

// console.log("I am In Program");


// console.log("Program Start");


// const myPromise = new Promise((resolve,reject) => {
//     resolve("Hello");
// })

// .then((Data) => console.log(Data))
// .catch((error) => console.log(error))

// console.log("I am In Program");




//Callback Hell


// const firstFun = (a, callback) => {
//     setTimeout(function () {
//         console.log("I Am First Function");
//         callback(a + 5)
//     }, 1000)
// }

// const secondFun = (a, callback) => {
//     setTimeout(function () {
//         console.log("I Am Second Function");
//         callback(a * 2)
//     }, 1000)
// }


// const thirdFun = (a, callback) => {
//     setTimeout(function () {
//         console.log("I Am third Function");
//         callback(a - 10)
//     }, 1000)
// }


// firstFun(10, function (r1) {
//     secondFun(r1, function (r2) {
//         thirdFun(r2, function (r3) {
//             console.log(r3);
//         })
//     })
// });



const firstFun = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("I Am First Function");
            resolve(a + 5)
        }, 1000)
    })
}

const secondFun = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("I Am Second Function");
            resolve(a * 2)
        }, 1000)
    })
}

const thirdFun = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("I Am third Function");
            resolve(a - 10)
        }, 1000)
    })
}


firstFun(10)
    .then((r1) => secondFun(r1))
    .then((r2) => thirdFun(r2))
    .then((r3) => console.log(r3))
    