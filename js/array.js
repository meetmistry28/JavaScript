// 1. Creating an Array

// const cars = ["alto", "funty", "van"];

// console.log(cars[1]);





// 2. Change Index

// const cars = ["alto", "funty", "van"];

// console.log(cars[1] = "BMW");
// console.log(cars);




// 3. Full Array

// const bikes = ["Splender","BMW","Shine"];

// console.log(bikes);



// 4. Converting an Array to a String

// const food = ["Pizza","Noodels","Idli","Coco"];

// console.log(food.toString());



// 5. Arrays are Objects

// const person = {firstName:"John", lastName:"Doe", age:46};

// console.log(person);


// // Initializing while declaring
// let arr1 = new Array(3)
// arr1[0] = 10
// arr1[1] = 20
// arr1[2] = 30
// console.log("Array 1: ", arr1)
 
// // Creates an array having elements 10, 20, 30, 40, 50
// let arr2 = new Array(10, 20, 30, 40, 50);
// console.log("Array 2: ", arr2)
 
// // Creates an array of 5 undefined elements
// let arr3 = new Array(5);
// console.log("Array 3: ", arr3)
 
// // Creates an array with one element
// let arr4 = new Array("1BHK");
// console.log("Array 4: ", arr4)



//cahnge

// const courses = ["HTML", "CSS", "Javascript"];
// console.log(courses[0])
// console.log(courses[1] = "React")
// console.log(courses[2])


//length array Increasing/Decreasing

// const courses = ["HTML", "CSS", "Javascript", "React"];


// courses.length = 8 
// console.log("Array after increased length: " ,courses)


// courses.length = 2 
// console.log("Array after decreased length: " ,courses)




//We can also update an array after initialization.

// const courses = ["HTML", "CSS", "Javascript"];
// courses.length = 5 // Increasing array length to 5
// console.log("Array after increased length: " ,courses)
 
// courses[3] = 'PhP'
// courses[4] = 'React'
// console.log("Array after initializing: ", courses)

// const courses = ["css", "html", "JavaScript","React"]
// courses.splice(1 , 1 )
// console.log(courses);



let data = [ 30, 5, 'MISTRY', 80, 60, 'Surti', 50 ];

let data1 = [88,188];

// console.log(typeof data);
// console.log(data[5]);

//intration 


//1.

// for (let i = 0; i<data.length; i++) {
//     console.log(data[i]);
// }


//2.

// data.forEach((value,index) => {
//     console.log(index + '--' + value);
// });


//3.

// data.map((value,index) => {
//     console.log(index + '--' + value);
// })


//4. 

// data.map((v,i) => console.log(i + '--' + v))








// --Update--

//1. 

// data[3] = 50
// console.log(data);






// --Add--

//1.

// data.push(100);
// console.log(data);


//2.

// data.unshift(100);
// console.log(data);


//3. 

// data.splice(5,0,87)
// console.log(data);




// --Remove--

//1. 

// data.pop()
// console.log(data);

//2.

// data.shift()
// console.log(data);

//3. 

// data.splice(2,3)
// console.log(data);


//-------------

// let data = [ 30, 5, 'MISTRY', 80, 60, 'Surti', 50 ];

// let data1 = [88,188];

//-------------

// --Array's Function's--


//1.

// let ans = Array.isArray(data);
// console.log(ans);


//2.

// let ans = data.concat(data1)
// console.log(ans);


//3.

// let ans = data.some((v) => v > 50);
// console.log(ans);


//4.

// let ans = data.find((v) => v > 20);
// console.log(ans);


//5.

// let fullname = "MEET NILESHBHAI MISTRY";
// let ans = fullname.split(" ");
// console.log(ans);


//6.

// let ans = data.slice(2,4 );
// console.log(ans);



// -------TASK-------
// ------------------

//1. filter()

// const Age = [25, 64, 16, 15, 34];

// const res = Age.filter(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }

// console.log(res);



//2. reduse()

// let arr = [200, 50, 25];
 
// function task(total, num) {
//     return total - num;
// }

// function callTask(item) {

//     console.log(arr.reduce(task));
// }
// callTask()                            //Ans: 125


                //or



// let arr1 = [ 10,20,30,40,90,100];

// function task(sum,num) {
//     return sum + num;
// }

// function callTask() {
//     console.log(arr1.reduce(task));
// }

// callTask()                              //Ans: 290







//3. indexOf()


// function task() {
 

//     let indexTask = 'Mistry Meet';
 

//     let index = indexTask.indexOf('y Meet');
//     console.log(index);
// }

// task();                           //Ans: 5






//4. lastindexOf

// function task() {
// 	let lindexOf = 'mistrymeetteem';
// 	let index = lindexOf.lastIndexOf('rymeet');
// 	console.log(index);
// }
// task();


