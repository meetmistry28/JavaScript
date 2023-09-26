// let array1 = [15, 84, 65, 22, 45, 170, 54]

//1.

// const maxArr = (array1) => {
//     let max = array1[0]

//     for (let i=1; i<array1.length; i++) {
//         if (array1[i] > max) {
//             max = array1[i]
//         }
//     }
//     console.log(max);
// }
// maxArr(array1)



//2.

// const maxArr = (array1) => {
//     let max = array1[0]

//     for (let i=1; i<array1.length; i++) {
//         if (array1[i] < max) {
//             max = array1[i]
//         }
//     }
//     console.log(max);
// }
// maxArr(array1)

//3. Reversing an array.

// const ReversArr = (array1) => {
//    let = newArr =[]
//     for (let i=array1.length-1; i>=0; i--) {
//         newArr.push(array1[i]);
//     }
//     console.log(newArr);
// }

// ReversArr(array1)

//6. Finding the sum of all elements in an array.

// const SumArr = () => {
//     sum = 0
//     for (let i=0; i<array1.length; i++) {
//         sum = sum + array1[i]
//     }
//     console.log(sum);
// }

// SumArr()

//7. Finding the average of all elements in an array.

// const AvrgArr = () => {
//     sum = 0
//     for (let i=0; i<array1.length; i++) {
//         sum = sum + array1[i]
//     }
//     console.log(sum/array1.length);
// }

// AvrgArr()


//8. Checking if an array contains a specific element.

// const checkElem = (array1,elem) => {
//     let temp;
//     for (let i=0; i<array1.length; i++) {
//         if (array1[i] === elem) {
//             temp = elem
//             break;
//         }
//     }
//     if (temp) {
//         console.log(temp + " is available");
//     } else {
//         console.log(elem + " is not available");
//     }

// } 

// checkElem(array1,89)




//9. Removing duplicates from an array.

let arr = ["mistry", "meet", "surti","mistry"];

let arr1 = [56, 55, 3, "meet", 66, 45, 66, 55,"mistry", 66, 41];

let arr2 = ["mistry", "meet", "mistry", "surti", "mistry", "LALA"];

// const dupliArr = (arr1) => {
//     let newArr = []
//     for (let i=0; i<arr1.length; i++) {
//         if (newArr.indexOf(arr1[i]) === -1) {
//             newArr.push(arr1[i])
//         }
//     }
//     console.log(newArr);
// }
// dupliArr(arr1)

// const dupliArr = (arr) => {
//     let newArr = []
//     for (let i=0; i<arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr);
// }
// dupliArr(arr)





//10. Merging two arrays into a new array.

// const mergeArr = (arr) => {
//     let arr4 = [...arr,...arr1];
//     let Merge = [...new Set(arr4)]
//     console.log(Merge);
// }
// mergeArr(arr)




//11. Splitting an array into two arrays based on a condition.

// const splitArr = (arr,chunk) => {
//     let temp;
//     for (let i=0; i<arr.length; i++) {
//         if (i === "") {
//             temp = arr.slice(i)
//         }
//     }
//     console.log(temp);
// }
// splitArr(arr)